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
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { WritingSystem, VerbForm, WordType } from "@/lib/data"

interface VocabSelectorProps {
  conjugationData: Array<{
    Word: {
      dictionary: {
        kanji: string
        hiragana: string
      }
      definition: string
      type: WordType
    }
    [key: string]: any
  }>
}

export default function VocabSelector({ conjugationData }: VocabSelectorProps) {
  const router = useRouter()
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("hiragana")
  const [verbForm, setVerbForm] = useState<VerbForm>("masu")
  const [showVerbTypes, setShowVerbTypes] = useState(true)

  // Load saved selection from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedWords")
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    const savedVerbForm = localStorage.getItem("verbForm") as VerbForm
    const savedShowVerbTypes = localStorage.getItem("showVerbTypes")

    if (saved) {
      setSelectedWords(new Set(JSON.parse(saved)))
    }
    if (savedWritingSystem) {
      setWritingSystem(savedWritingSystem)
    }
    if (savedVerbForm) {
      setVerbForm(savedVerbForm)
    }
    if (savedShowVerbTypes !== null) {
      setShowVerbTypes(savedShowVerbTypes === "true")
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

  // Save verb form preference
  useEffect(() => {
    localStorage.setItem("verbForm", verbForm)
  }, [verbForm])

  // Save show verb types preference
  useEffect(() => {
    localStorage.setItem("showVerbTypes", showVerbTypes.toString())
  }, [showVerbTypes])

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
      setSelectedWords(new Set(conjugationData.map((item) => item.Word.dictionary.kanji)))
    }
    setIsAllSelected(!isAllSelected)
  }

  const selectByType = (type: string) => {
    const wordsOfType = conjugationData
      .filter((item) => item.Word.type === type)
      .map((item) => item.Word.dictionary.kanji)

    const newSelection = new Set(selectedWords)
    wordsOfType.forEach((word) => newSelection.add(word))

    setSelectedWords(newSelection)
    setIsAllSelected(newSelection.size === conjugationData.length)
  }

  const handleStartPractice = () => {
    if (selectedWords.size === 0) {
      alert("Please select at least one word to practice")
      return
    }
    router.push("/")
  }

  // Function to format word type for display
  const formatWordType = (wordType: WordType) => {
    // Format verb types
    if (wordType === "verb-ru") return "Ru-verb"
    if (wordType === "verb-u") return "U-verb"
    if (wordType === "verb-irregular") return "Irregular verb"
    if (wordType === "adjective-i") return "i-adjective"
    if (wordType === "adjective-na") return "na-adjective"

    // Format other types (for future use)
    return wordType.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
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
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Verb Form</h3>
          <RadioGroup value={verbForm} onValueChange={(value) => setVerbForm(value as VerbForm)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dictionary" id="dictionary" />
              <Label htmlFor="dictionary">Dictionary Form (見る, 食べる)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="masu" id="masu" />
              <Label htmlFor="masu">Masu Form (見ます, 食べます)</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Display Options</h3>
          <div className="flex items-center space-x-2">
            <Switch id="show-verb-types" checked={showVerbTypes} onCheckedChange={setShowVerbTypes} />
            <Label htmlFor="show-verb-types">Show word types (Ru-verb, U-verb, etc.)</Label>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Word Selection</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={toggleAll}>
                {isAllSelected ? "Deselect All" : "Select All"}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Select by Type <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => selectByType("verb-ru")}>All Ru-verbs</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByType("verb-u")}>All U-verbs</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByType("verb-irregular")}>
                    All Irregular verbs
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByType("adjective-i")}>All i-adjectives</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByType("adjective-na")}>All na-adjectives</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {conjugationData.map((item) => (
                <div key={item.Word.dictionary.kanji} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.Word.dictionary.kanji}
                    checked={selectedWords.has(item.Word.dictionary.kanji)}
                    onCheckedChange={() => toggleWord(item.Word.dictionary.kanji)}
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Label
                        htmlFor={item.Word.dictionary.kanji}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {verbForm === "dictionary"
                          ? item.Word.dictionary[writingSystem]
                          : item["Present Affirmative"][writingSystem]}
                        {writingSystem !== "kanji" && (
                          <span className="text-muted-foreground ml-2">
                            (
                            {verbForm === "dictionary" ? item.Word.dictionary.kanji : item["Present Affirmative"].kanji}
                            )
                          </span>
                        )}
                      </Label>
                      {showVerbTypes && (
                        <Badge variant="outline" className="text-xs">
                          {formatWordType(item.Word.type)}
                        </Badge>
                      )}
                    </div>
                    {item.Word.definition && (
                      <span className="text-xs text-muted-foreground mt-1">{item.Word.definition}</span>
                    )}
                  </div>
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

