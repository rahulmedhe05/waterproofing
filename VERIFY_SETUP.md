# Google Indexing API Setup Verification

The "Failed to get multipart boundary" error typically occurs when the **Indexing API is not enabled** in the Google Cloud project.

## Verification Steps

### 1. Check if Indexing API is Enabled
Go to: https://console.cloud.google.com/apis/api/indexing.googleapis.com/overview?project=locate-a-centre

You should see a blue "ENABLE" button if it's not enabled, or "MANAGE" if it is.

### 2. Verify Service Account Has Correct Role
The service account `waterproofing-vadodara@locate-a-centre.iam.gserviceaccount.com` needs:
- **Indexing API Service Agent** role in the project

OR at minimum:
- **Editor** or **Compute Admin** role

To check/grant:
1. Go to IAM & Admin → Service Accounts
2. Click the service account email
3. Go to the "Roles" tab
4. Verify it has the necessary role assigned

### 3. Required Setup in Google Cloud Console

```
Project: locate-a-centre
Service Account: waterproofing-vadodara@locate-a-centre.iam.gserviceaccount.com

Checklist:
☐ Indexing API is ENABLED (not disabled)
☐ Service account has "Indexing API Service Agent" or "Editor" role
☐ Service account JSON key is downloaded and placed at ./service-account.json
☐ Wait 1-2 minutes after enabling API before testing
```

### 4. Test After Setup
Once both are verified, run:
```bash
npx tsx scripts/submit-urls-to-google.ts
```

If still getting "multipart boundary" error after enabling Indexing API, it's likely a role/permissions issue.
