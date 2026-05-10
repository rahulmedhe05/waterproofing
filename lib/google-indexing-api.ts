import { JWT } from "google-auth-library"
import { GaxiosResponse } from "gaxios"

interface ServiceAccountKey {
  type: string
  project_id: string
  private_key_id: string
  private_key: string
  client_email: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
  universe_domain: string
}

interface IndexRequest {
  url: string
  type: "URL_UPDATED" | "URL_DELETED"
}

class GoogleIndexingAPI {
  private client: JWT | null = null
  private serviceAccountKey: ServiceAccountKey | null = null

  constructor(serviceAccountKeyPath?: string) {
    if (serviceAccountKeyPath) {
      this.loadServiceAccountKey(serviceAccountKeyPath)
    }
  }

  private loadServiceAccountKey(path: string): void {
    try {
      const fs = require("fs")
      const keyContent = fs.readFileSync(path, "utf-8")
      this.serviceAccountKey = JSON.parse(keyContent)
    } catch (error) {
      console.error("Failed to load service account key:", error)
      throw error
    }
  }

  private async getAuthenticatedClient(): Promise<JWT> {
    if (!this.serviceAccountKey) {
      throw new Error("Service account key not loaded")
    }

    this.client = new JWT({
      email: this.serviceAccountKey.client_email,
      key: this.serviceAccountKey.private_key,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    })

    return this.client
  }

  async submitUrl(url: string, type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"): Promise<boolean> {
    try {
      const client = await this.getAuthenticatedClient()

      const response: GaxiosResponse = await client.request({
        url: "https://indexing.googleapis.com/batch",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          requests: [
            {
              indexingRequestUrl: url,
              requestMetadata: {
                notifyTime: new Date().toISOString(),
              },
              type: type,
            },
          ],
        },
      })

      if (response.status !== 200) {
        console.error(`Failed to index ${url}:`, response.data)
        return false
      }

      console.log(`✅ Indexed: ${url}`)
      return true
    } catch (error: any) {
      if (error.response?.data?.error) {
        console.error(`Error submitting ${url}:`, JSON.stringify(error.response.data.error, null, 2))
      } else {
        console.error(`Error submitting ${url}:`, error.message)
      }
      return false
    }
  }

  async submitUrls(urls: string[], type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED", batchSize = 100): Promise<{ success: number; failed: number }> {
    let success = 0
    let failed = 0

    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize)
      console.log(`\n📤 Submitting batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs)...`)

      for (const url of batch) {
        const result = await this.submitUrl(url, type)
        if (result) {
          success++
        } else {
          failed++
        }

        if ((success + failed) % 100 === 0) {
          console.log(`⏳ Rate limiting: waiting 1 second before next batch...`)
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      }
    }

    return { success, failed }
  }
}

export { GoogleIndexingAPI, ServiceAccountKey, IndexRequest }
