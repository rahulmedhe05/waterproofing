"use client"

import { AdminPanel } from "@/components/admin-panel"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <AdminPanel />
        </div>
      </div>
    </main>
  )
}
