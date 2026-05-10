# Waterproofing Website Infrastructure Setup

This guide covers the infrastructure components created for expanding the website from 212 pages to 500+ pages with automatic Google indexing.

## Components Created

### 1. HeroForm Component (`/components/hero-form.tsx`)
Compact contact form designed for embedding in hero sections of all expansion pages.

**Features:**
- Collects: Name, Phone, City, Message, Service Type
- Submits via WhatsApp
- Auto-resets after 3 seconds
- Customizable headline and subheading
- Optional service type parameter

**Usage:**
```tsx
import { HeroForm } from "@/components/hero-form"

<HeroForm 
  serviceType="Terrace Waterproofing" 
  headline="Get Your Free Inspection"
/>
```

### 2. Page Generation Script (`/scripts/generate-expansion-pages.ts`)
Automatically generates Next.js page.tsx files for all expansion pages.

**What it does:**
- Reads all pages from `lib/page-data-expansion.ts`
- Generates page.tsx for each page slug in `/app/[slug]/`
- Skips existing pages
- Creates proper SEO metadata and schema markup

**Running:**
```bash
npx ts-node scripts/generate-expansion-pages.ts
```

**Output:**
- Creates folders and page.tsx files for ~61 expansion pages
- Each page includes: metadata, SEO schemas, breadcrumbs, internal links

### 3. Google Indexing API Service (`/lib/google-indexing-api.ts`)
Integrates with Google's Indexing API to submit URLs for crawling.

**Features:**
- Authenticates using service account credentials
- Submits URLs in batches
- Rate limiting (100 URLs per 100 seconds)
- Handles URL_UPDATED and URL_DELETED operations

**Setup Required:**
1. Download Google service account JSON from:
   - [Google Cloud Console](https://console.cloud.google.com)
   - Create service account for Indexing API
   - Enable "Indexing API" in your project

2. Place JSON file at: `./service-account.json` (or set `GOOGLE_SERVICE_ACCOUNT_PATH`)

3. Install dependencies:
```bash
npm install google-auth-library node-fetch
```

### 4. URL Submission Script (`/scripts/submit-urls-to-google.ts`)
Submits all expansion page URLs to Google Indexing API.

**What it does:**
- Loads service account credentials
- Collects all expansion page URLs
- Submits in batches with rate limiting
- Reports success/failure rates

**Running:**
```bash
npx ts-node scripts/submit-urls-to-google.ts
```

**Expected Output:**
- Submits ~61 URLs initially, scaling to 300+
- Each batch waits 1 second between requests
- Detailed logs of submission status

### 5. Sitemap Generator (`/scripts/generate-sitemap.ts`)
Creates XML sitemaps for all pages (existing + expansion).

**Features:**
- Generates main sitemap.xml
- Auto-splits into multiple sitemaps if >50,000 URLs
- Creates sitemap index for large sites
- Includes proper change frequency and priority

**Running:**
```bash
npx ts-node scripts/generate-sitemap.ts
```

**Output:**
- `public/sitemap.xml` - All URLs
- `public/sitemap-index.xml` (optional, for >50k URLs)
- Properly formatted with priorities

## Setup Steps

### Step 1: Install Google Auth Dependencies
```bash
npm install google-auth-library node-fetch
```

### Step 2: Configure Google Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable "Indexing API"
4. Create a Service Account
5. Create and download JSON key file
6. Save to `./service-account.json`

### Step 3: Create Static Pages
```bash
npx ts-node scripts/generate-expansion-pages.ts
```

Verify pages are created:
```bash
ls -la app/ | grep -E "^d" | head -20
```

### Step 4: Generate Sitemap
```bash
npx ts-node scripts/generate-sitemap.ts
```

Verify:
```bash
cat public/sitemap.xml | head -20
```

### Step 5: Submit URLs to Google
```bash
npx ts-node scripts/submit-urls-to-google.ts
```

Monitor submission progress in logs.

### Step 6: Update robots.txt
Add to `public/robots.txt`:
```
Sitemap: https://waterproofingvadodara.com/sitemap.xml
```

### Step 7: Submit in Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add/verify your domain
3. Go to Sitemaps section
4. Submit: `https://waterproofingvadodara.com/sitemap.xml`

## Automation (Optional)

### Daily Batch Submission
Create a cron job or scheduled task:

```bash
# Every day at 1 AM
0 1 * * * cd /path/to/project && npx ts-node scripts/submit-urls-to-google.ts >> logs/indexing.log 2>&1
```

### Pre-build Hook
Add to package.json scripts:
```json
"scripts": {
  "prebuild": "ts-node scripts/generate-expansion-pages.ts && ts-node scripts/generate-sitemap.ts",
  "build": "next build",
}
```

Then just: `npm run build`

## Verification Checklist

- [ ] 60+ expansion pages created in `/app/`
- [ ] Sitemap generated at `/public/sitemap.xml`
- [ ] robots.txt references sitemap
- [ ] Service account JSON configured
- [ ] First batch of URLs submitted to Google
- [ ] Google Search Console shows sitemaps
- [ ] HeroForm embedded in hero sections of pages
- [ ] Pages are indexable (check with `site:waterproofingvadodara.com`)

## Monitoring

Monitor indexing progress:
1. Google Search Console → Coverage report
2. Check "Sitemaps" section for submission status
3. View "URL Inspection" tool for individual pages
4. Logs in `scripts/` output show submission details

## Scaling to 300+ Pages

As you add more expansion pages:

1. Run page generation: `npx ts-node scripts/generate-expansion-pages.ts`
2. Regenerate sitemap: `npx ts-node scripts/generate-sitemap.ts`
3. Resubmit URLs: `npx ts-node scripts/submit-urls-to-google.ts`

Google will prioritize recent/updated URLs automatically.

## Troubleshooting

**Service account auth fails:**
- Verify JSON file exists at correct path
- Check private_key format (should include `\n` line breaks)
- Ensure Indexing API is enabled in Google Cloud

**Sitemap not generating:**
- Check `public/` directory exists
- Ensure expansion pages are defined in page-data-expansion.ts
- Verify BUSINESS_INFO.domain is correct

**URLs not indexing:**
- Check Search Console for URL Inspection errors
- Verify robots.txt allows crawling
- Ensure site is publicly accessible
- Wait 24-48 hours for initial crawl

## Files Overview

| File | Purpose |
|------|---------|
| `/components/hero-form.tsx` | Reusable form for hero sections |
| `/lib/google-indexing-api.ts` | Google Indexing API client |
| `/scripts/generate-expansion-pages.ts` | Auto-generate page files |
| `/scripts/submit-urls-to-google.ts` | Submit URLs for indexing |
| `/scripts/generate-sitemap.ts` | Generate XML sitemaps |
| `/public/sitemap.xml` | Generated sitemap (auto) |
| `/service-account.json` | Google credentials (manual) |

Next: Integrate HeroForm into page templates and test full workflow.
