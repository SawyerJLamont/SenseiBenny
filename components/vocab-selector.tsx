"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import type { WritingSystem } from "@/lib/data"

interface VocabSelectorProps {
  conjugationData: Array<{
    Word: {
      kanji: string
      hiragana: string
      romaji: string
    }
    [key: string]: any
  }>
}

export default function VocabSelector({ conjugationData }: VocabSelectorProps) {
  const router = useRouter()
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("kanji")

  // Load saved selection from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedWords")
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    if (saved) {
      setSelectedWords(new Set(JSON.parse(saved)))
    }
    if (savedWritingSystem) {
      setWritingSystem(savedWritingSystem)
    }
  }, [])

  // Save selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedWords", JSON.stringify(Array.from(selectedWords)))
  }, [selectedWords])

  // Save writing system preference
  useEffect(() => {
    localStorage.setItem("writingSystem", writingSystem)
  }, [writingSystem])

  const toggleWord = (word: string) => {
    const newSelection = new Set(selectedWords)
    if (newSelection.has(word)) {
      newSelection.delete(word)
    } else {
      newSelection.add(word)
    }
    setSelectedWords(newSelection)
    setIsAllSelected(newSelection.size === conjugationData.length)
  }

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedWords(new Set())
    } else {
      setSelectedWords(new Set(conjugationData.map((item) => item.Word.kanji)))
    }
    setIsAllSelected(!isAllSelected)
  }

  const handleStartPractice = () => {
    if (selectedWords.size === 0) {
      alert("Please select at least one word to practice")
      return
    }
    router.push("/")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Practice Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Writing System</h3>
          <RadioGroup value={writingSystem} onValueChange={(value) => setWritingSystem(value as WritingSystem)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kanji" id="kanji" />
              <Label htmlFor="kanji">Kanji (漢字)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hiragana" id="hiragana" />
              <Label htmlFor="hiragana">Hiragana (ひらがな)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="romaji" id="romaji" />
              <Label htmlFor="romaji">Romaji (Romanized)</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Word Selection</h3>
          <div className="flex items-center space-x-2 pb-4">
            <Checkbox id="selectAll" checked={isAllSelected} onCheckedChange={toggleAll} />
            <Label
              htmlFor="selectAll"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Select All Words
            </Label>
          </div>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {conjugationData.map((item) => (
                <div key={item.Word.kanji} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.Word.kanji}
                    checked={selectedWords.has(item.Word.kanji)}
                    onCheckedChange={() => toggleWord(item.Word.kanji)}
                  />
                  <Label
                    htmlFor={item.Word.kanji}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.Word[writingSystem]}
                    {writingSystem !== "kanji" && (
                      <span className="text-muted-foreground ml-2">({item.Word.kanji})</span>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">{selectedWords.size} words selected</div>
        <Button onClick={handleStartPractice}>Start Practice</Button>
      </CardFooter>
    </Card>
  )
}

