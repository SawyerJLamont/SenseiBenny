"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import FlashCardApp from "@/components/flash-card-app"
import VocabFlashCard from "@/components/vocab-flash-card"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { conjugationData } from "@/lib/data"

export default function Home() {
  const [mode, setMode] = useState<"conjugation" | "vocabulary">("conjugation")
  
  // Load previous mode selection from localStorage, if available
  useEffect(() => {
    const savedMode = localStorage.getItem("studyMode");
    if (savedMode === "vocabulary" || savedMode === "conjugation") {
      setMode(savedMode);
    }
  }, []);
  
  // Save mode selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("studyMode", mode);
  }, [mode]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Japanese Study</h1>
          <Link href="/select">
            <Button variant="outline">
              <Settings size={24} />
              <span className="ml-2">Conjugation Settings</span>
            </Button>
          </Link>
        </div>
        
        <Tabs value={mode} onValueChange={(value) => setMode(value as "conjugation" | "vocabulary")} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="conjugation">Conjugation Practice</TabsTrigger>
            <TabsTrigger value="vocabulary">Vocabulary Study</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {mode === "conjugation" ? (
          <FlashCardApp conjugationData={conjugationData} />
        ) : (
          <VocabFlashCard conjugationData={conjugationData} />
        )}
      </div>
    </main>
  )
}