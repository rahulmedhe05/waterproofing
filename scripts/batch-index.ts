// ============================================================================
// Batch Google Indexing Script
// Run: npx tsx scripts/batch-index.ts
// Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, REINDEX_API_KEY
//
// Features:
//  - Scans all page routes from app/ directory
//  - Submits URLs to Google Indexing API in batches
//  - Pings Google & Bing with sitemap.xml
//  - Progress tracking with success/fail counts
// ============================================================================

import fs from "fs";
import path from "path";

const SITE_URL = "https://waterproofingvadodara.com";
const API_URL = `${SITE_URL}/api/reindex`;

function getAllRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) return ["/"];
  
  const routes: string[] = ["/"];
  const ignoreDirs = new Set(["api", "_components", "_lib", "admin", "node_modules", "leads"]);

  function scanDir(dir: string, basePath: string) {
    let entries: fs.Dirent[];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    
    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name) || entry.name.startsWith("[")) continue;
        const dirPath = path.join(dir, entry.name);
        const routePath = `${basePath}/${entry.name}`;
        const hasPage = fs.existsSync(path.join(dirPath, "page.tsx")) || fs.existsSync(path.join(dirPath, "page.js"));
        if (hasPage) routes.push(routePath);
        scanDir(dirPath, routePath);
      }
    }
  }

  scanDir(appDir, "");
  return [...new Set(routes)].sort();
}

async function pingSitemap(apiKey: string) {
  console.log("\n📡 Pinging sitemap to Google & Bing...");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ action: "ping-sitemap" }),
    });
    const data = await response.json();
    console.log(`  Google: ${data.google ? "✅" : "❌"}, Bing: ${data.bing ? "✅" : "❌"}`);
  } catch (err) {
    console.error(`  Sitemap ping failed: ${err}`);
  }
}

async function main() {
  const routes = getAllRoutes();
  const urls = routes.map(r => `${SITE_URL}${r}`);
  
  console.log(`\n🔍 Found ${urls.length} URLs to index`);
  console.log("📤 Submitting to Google Indexing API...\n");
  
  const apiKey = process.env.REINDEX_API_KEY;
  if (!apiKey) {
    console.error("❌ Missing REINDEX_API_KEY environment variable");
    process.exit(1);
  }

  // Process in batches
  const batchSize = 50;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNum = Math.floor(i/batchSize) + 1;
    const totalBatches = Math.ceil(urls.length / batchSize);
    console.log(`Batch ${batchNum}/${totalBatches}: Submitting ${batch.length} URLs...`);
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ urls: batch }),
      });
      
      const data = await response.json();
      if (data.successful) successCount += data.successful;
      if (data.failed) failCount += data.failed;
      console.log(`  ✅ ${data.successful || 0} success, ❌ ${data.failed || 0} failed`);
    } catch (err) {
      console.error(`  Batch failed: ${err}`);
      failCount += batch.length;
    }
    
    // Rate limit delay
    if (i + batchSize < urls.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  // Ping sitemap after indexing
  await pingSitemap(apiKey);

  console.log(`\n${"=".repeat(50)}`);
  console.log(`✅ Done! Success: ${successCount}, Failed: ${failCount}, Total: ${urls.length}`);
  console.log(`${"=".repeat(50)}`);
}

main().catch(console.error);
