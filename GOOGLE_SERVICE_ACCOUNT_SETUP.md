# Google Service Account Setup (2 minutes)

## Quick Setup Guide

1. **Go to Google Cloud Console**
   ```
   https://console.cloud.google.com
   ```

2. **Create Project or Select Existing**
   - Click "Select a Project" → "New Project"
   - Name: "Waterproofing Indexing"
   - Click "Create"

3. **Enable Indexing API**
   - Search: "Indexing API" in the search bar
   - Click "Indexing API"
   - Click "Enable"

4. **Create Service Account**
   - Go to "Credentials" (left sidebar)
   - Click "Create Credentials" → "Service Account"
   - Name: "waterproofing-indexing"
   - Click "Create and Continue"
   - Skip optional steps, click "Done"

5. **Generate JSON Key**
   - In Credentials, find the service account you just created
   - Click on the email address
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON"
   - Click "Create" - file downloads automatically

6. **Save Key File**
   - Rename the downloaded file to: `service-account.json`
   - Move to project root: `/Applications/Waterproofing/.claude/worktrees/modest-chatterjee-95f220/`

7. **Verify Setup**
   ```bash
   ls -la service-account.json
   cat service-account.json | head -5
   ```

## After Setup
Run first indexing batch:
```bash
npx tsx scripts/submit-urls-to-google.ts
```

This will submit the first 100+ expansion pages to Google for indexing.

**Note:** Daily automation is already configured to run at 1 AM every day.
