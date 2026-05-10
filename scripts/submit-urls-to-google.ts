import { GoogleIndexingAPI } from "@/lib/google-indexing-api"
import { getAllExpansionPages } from "@/lib/page-data-expansion"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"
import * as path from "path"

const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || path.join(process.cwd(), "service-account.json")

async function submitExpansionPageUrls() {
  try {
    console.log("🚀 Starting Google Indexing API URL submission...")
    console.log(`📂 Service Account: ${SERVICE_ACCOUNT_PATH}`)

    const api = new GoogleIndexingAPI(SERVICE_ACCOUNT_PATH)
    const pages = getAllExpansionPages()

    // Build URLs from page slugs
    const urls = pages.map((page) => `${BUSINESS_INFO.domain}/${page.slug}`)

    console.log(`\n📊 URL Submission Summary:`)
    console.log(`   Total Pages: ${pages.length}`)
    console.log(`   Domain: ${BUSINESS_INFO.domain}`)
    console.log(`   Sample URL: ${urls[0]}`)

    // Submit in batches of 100
    const result = await api.submitUrls(urls, "URL_UPDATED", 100)

    console.log(`\n✨ Submission Complete!`)
    console.log(`   ✅ Success: ${result.success}`)
    console.log(`   ❌ Failed: ${result.failed}`)
    console.log(`   📊 Success Rate: ${Math.round((result.success / urls.length) * 100)}%`)
  } catch (error) {
    console.error("❌ Error submitting URLs to Google Indexing API:", error)
    process.exit(1)
  }
}

submitExpansionPageUrls()
