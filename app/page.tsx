"use client"

import Link from "next/link"
import FlashCardApp from "@/components/flash-card-app"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { conjugationData } from "@/lib/data"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Japanese Conjugation Flash Cards</h1>
          <Link href="/select">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <FlashCardApp conjugationData={conjugationData} />
      </div>
    </main>
  )
}

