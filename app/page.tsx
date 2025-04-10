"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import FlashCardApp from "@/components/flash-card-app"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { conjugationData } from "@/lib/data"
import type { WritingSystem, VerbForm } from "@/lib/data"

export default function Home() {
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("hiragana")
  const [verbForm, setVerbForm] = useState<VerbForm>("masu")
  const [displayMode, setDisplayMode] = useState<"word" | "definition">("word")
  
  // Load previous preferences from localStorage, if available
  useEffect(() => {
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    const savedVerbForm = localStorage.getItem("verbForm") as VerbForm
    const savedDisplayMode = localStorage.getItem("displayMode")
    
    if (savedWritingSystem) {
      setWritingSystem(savedWritingSystem)
    }
    if (savedVerbForm) {
      setVerbForm(savedVerbForm)
    }
    if (savedDisplayMode === "word" || savedDisplayMode === "definition") {
      setDisplayMode(savedDisplayMode)
    }
  }, [])
  
  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("writingSystem", writingSystem)
  }, [writingSystem])
  
  useEffect(() => {
    localStorage.setItem("verbForm", verbForm)
  }, [verbForm])
  
  useEffect(() => {
    localStorage.setItem("displayMode", displayMode)
  }, [displayMode])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Japanese Study</h1>
          <Link href="/select">
            <Button variant="outline">
              <Settings size={24} />
              <span className="ml-2">Word Selection</span>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Tabs value={writingSystem} onValueChange={(value) => setWritingSystem(value as WritingSystem)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="hiragana">Hiragana</TabsTrigger>
              <TabsTrigger value="kanji">Kanji</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Tabs value={verbForm} onValueChange={(value) => setVerbForm(value as VerbForm)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dictionary">Dictionary</TabsTrigger>
              <TabsTrigger value="masu">Masu</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Tabs value={displayMode} onValueChange={(value) => {
            // Need to explicitly cast to handle the string type
            if (value === "word" || value === "definition") {
              setDisplayMode(value);
            }
          }}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="word">Word</TabsTrigger>
              <TabsTrigger value="definition">Definition</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <FlashCardApp 
          conjugationData={conjugationData} 
          writingSystem={writingSystem}
          verbForm={verbForm}
          displayMode={displayMode}
        />
      </div>
    </main>
  )
}