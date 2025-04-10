"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { WritingSystem, VerbForm, WordType, ClassLevel } from "@/lib/data"

interface VocabSelectorProps {
  conjugationData: Array<{
    Word: {
      dictionary: {
        kanji: string
        hiragana: string
      }
      definition: string
      type: WordType
      class: ClassLevel
    }
    "Present Affirmative"?: {
      kanji: string
      hiragana: string
    } | null
    [key: string]: any
  }>
}

export default function VocabSelector({ conjugationData }: VocabSelectorProps) {
  const router = useRouter()
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [showVerbTypes, setShowVerbTypes] = useState(true)
  const [showClassLevel, setShowClassLevel] = useState(true)
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("hiragana")
  const [verbForm, setVerbForm] = useState<VerbForm>("masu")

  // Load saved selection from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedWords")
    const savedShowVerbTypes = localStorage.getItem("showVerbTypes")
    const savedShowClassLevel = localStorage.getItem("showClassLevel")
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    const savedVerbForm = localStorage.getItem("verbForm") as VerbForm

    if (saved) {
      setSelectedWords(new Set(JSON.parse(saved)))
    }
    if (savedShowVerbTypes !== null) {
      setShowVerbTypes(savedShowVerbTypes === "true")
    }
    if (savedShowClassLevel !== null) {
      setShowClassLevel(savedShowClassLevel === "true")
    }
    if (savedWritingSystem) {
      setWritingSystem(savedWritingSystem)
    }
    if (savedVerbForm) {
      setVerbForm(savedVerbForm)
    }
  }, [])

  // Save selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedWords", JSON.stringify(Array.from(selectedWords)))
  }, [selectedWords])

  // Save show verb types preference
  useEffect(() => {
    localStorage.setItem("showVerbTypes", showVerbTypes.toString())
  }, [showVerbTypes])

  // Save show class level preference
  useEffect(() => {
    localStorage.setItem("showClassLevel", showClassLevel.toString())
  }, [showClassLevel])

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

  const selectByClass = (classLevel: ClassLevel) => {
    const wordsOfClass = conjugationData
      .filter((item) => item.Word.class === classLevel)
      .map((item) => item.Word.dictionary.kanji)

    const newSelection = new Set(selectedWords)
    wordsOfClass.forEach((word) => newSelection.add(word))

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

  // Function to format class level for display
  const formatClassLevel = (classLevel: ClassLevel) => {
    if (classLevel === "EX") return "Extra"
    return `JPN ${classLevel}`
  }

  // Get the appropriate word display based on writing system and verb form
  const getWordDisplay = (item: any) => {
    if (verbForm === "dictionary") {
      return item.Word.dictionary[writingSystem]
    } else {
      // For masu form, use the Present Affirmative form if it exists
      if (item["Present Affirmative"]) {
        return item["Present Affirmative"][writingSystem]
      }
      // Fall back to dictionary form if masu form doesn't exist (e.g., for adjectives)
      return item.Word.dictionary[writingSystem]
    }
  }

  // Get the appropriate kanji display
  const getKanjiDisplay = (item: any) => {
    if (verbForm === "dictionary") {
      return item.Word.dictionary.kanji
    } else {
      // For masu form, use the Present Affirmative form if it exists
      if (item["Present Affirmative"]) {
        return item["Present Affirmative"].kanji
      }
      // Fall back to dictionary form if masu form doesn't exist
      return item.Word.dictionary.kanji
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Word Selection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Display Options</h3>
          <div className="flex items-center space-x-2">
            <Switch id="show-verb-types" checked={showVerbTypes} onCheckedChange={setShowVerbTypes} />
            <Label htmlFor="show-verb-types">Show word types (Ru-verb, U-verb, etc.)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-class-level" checked={showClassLevel} onCheckedChange={setShowClassLevel} />
            <Label htmlFor="show-class-level">Show class level (JPN 111, JPN 112, etc.)</Label>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Word Selection</h3>
            <div className="flex gap-2 flex-wrap">
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Select by Class <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => selectByClass("111")}>JPN 111</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByClass("112")}>JPN 112</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => selectByClass("EX")}>Extra Words</DropdownMenuItem>
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
                    <div className="flex items-center gap-2 flex-wrap">
                      <Label
                        htmlFor={item.Word.dictionary.kanji}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {getWordDisplay(item)}
                        {writingSystem !== "kanji" && (
                          <span className="text-muted-foreground ml-2">({getKanjiDisplay(item)})</span>
                        )}
                      </Label>
                      {showVerbTypes && (
                        <Badge variant="outline" className="text-xs">
                          {formatWordType(item.Word.type)}
                        </Badge>
                      )}
                      {showClassLevel && (
                        <Badge variant="outline" className="text-xs">
                          {formatClassLevel(item.Word.class)}
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