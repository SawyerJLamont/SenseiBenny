"use client"

import VocabSelector from "@/components/vocab-selector"
import { conjugationData } from "@/lib/data"

export default function SelectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Select Vocabulary Words</h1>
        <VocabSelector conjugationData={conjugationData} />
      </div>
    </main>
  )
}

