"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { WritingSystem, VerbForm, WordType, ClassLevel } from "@/lib/data"

interface ConjugationItem {
  Word: {
    dictionary: {
      kanji: string
      hiragana: string
    }
    definition: string
    type: WordType
    class: ClassLevel
  }
  "Present Affirmative": {
    kanji: string
    hiragana: string
  } | null
  "Present Negative": {
    kanji: string
    hiragana: string
  } | null
  "Past Affirmative": {
    kanji: string
    hiragana: string
  } | null
  "Past Negative": {
    kanji: string
    hiragana: string
  } | null
  "Te Form": {
    kanji: string
    hiragana: string
  } | null
}

interface VocabFlashCardProps {
  conjugationData: ConjugationItem[]
}

type FlashCardSide = "front" | "back"

export default function VocabFlashCard({ conjugationData }: VocabFlashCardProps) {
  const [currentWord, setCurrentWord] = useState<ConjugationItem | null>(null)
  const [cardSide, setCardSide] = useState<FlashCardSide>("front")
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("hiragana")
  const [verbForm, setVerbForm] = useState<VerbForm>("masu")
  const [showVerbTypes, setShowVerbTypes] = useState(true)
  const [showClassLevel, setShowClassLevel] = useState(true)
  const [startWithEnglish, setStartWithEnglish] = useState(false)

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    const savedVerbForm = localStorage.getItem("verbForm") as VerbForm
    const savedShowVerbTypes = localStorage.getItem("showVerbTypes")
    const savedShowClassLevel = localStorage.getItem("showClassLevel")
    const savedStartWithEnglish = localStorage.getItem("startWithEnglish")

    if (savedWritingSystem) {
      setWritingSystem(savedWritingSystem)
    }
    if (savedVerbForm) {
      setVerbForm(savedVerbForm)
    }
    if (savedShowVerbTypes !== null) {
      setShowVerbTypes(savedShowVerbTypes === "true")
    }
    if (savedShowClassLevel !== null) {
      setShowClassLevel(savedShowClassLevel === "true")
    }
    if (savedStartWithEnglish !== null) {
      setStartWithEnglish(savedStartWithEnglish === "true")
    }
  }, [])

  const getFilteredConjugationData = useCallback(() => {
    const selectedWords = new Set(JSON.parse(localStorage.getItem("selectedWords") || "[]"))
    if (selectedWords.size === 0) return conjugationData
    return conjugationData.filter((item) => selectedWords.has(item.Word.dictionary.kanji))
  }, [conjugationData])

  const getRandomWord = useCallback(() => {
    const filteredData = getFilteredConjugationData()
    if (filteredData.length === 0) return null
    return filteredData[Math.floor(Math.random() * filteredData.length)]
  }, [getFilteredConjugationData])

  const nextCard = useCallback(() => {
    const word = getRandomWord()
    if (!word) return
    setCurrentWord(word)
    // If startWithEnglish is true, then "front" should show English
    setCardSide("front")
  }, [getRandomWord])

  // Initialize with a random word
  useEffect(() => {
    if (conjugationData.length > 0) {
      nextCard()
    }
  }, [conjugationData, nextCard])

  // Get the appropriate word display based on writing system and verb form
  const getWordDisplay = () => {
    if (!currentWord) return ""

    if (verbForm === "dictionary") {
      return currentWord.Word.dictionary[writingSystem]
    } else {
      // For masu form, use the Present Affirmative form if it exists
      if (currentWord["Present Affirmative"]) {
        return currentWord["Present Affirmative"][writingSystem]
      }
      // Fall back to dictionary form if masu form doesn't exist
      return currentWord.Word.dictionary[writingSystem]
    }
  }

  // Function to format word type for display
  const formatWordType = (wordType: WordType) => {
    if (wordType === "verb-ru") return "Ru-verb"
    if (wordType === "verb-u") return "U-verb"
    if (wordType === "verb-irregular") return "Irregular verb"
    if (wordType === "adjective-i") return "i-adjective"
    if (wordType === "adjective-na") return "na-adjective"
    return wordType.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  // Function to format class level for display
  const formatClassLevel = (classLevel: ClassLevel) => {
    if (classLevel === "EX") return "Extra"
    return `JPN ${classLevel}`
  }

  // Toggle display between the front (Japanese) and back (English) of card
  const flipCard = () => {
    setCardSide(cardSide === "front" ? "back" : "front")
  }

  if (conjugationData.length === 0) {
    return <div className="text-center">Loading data...</div>
  }

  const toggleStartWithEnglish = (checked: boolean) => {
    setStartWithEnglish(checked)
    localStorage.setItem("startWithEnglish", checked.toString())
    // Reset the current card to apply the new setting
    setCardSide("front")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <Tabs 
          value={writingSystem} 
          onValueChange={(value) => {
            setWritingSystem(value as WritingSystem)
            localStorage.setItem("writingSystem", value)
          }}
        >
          <TabsList>
            <TabsTrigger value="hiragana">Hiragana</TabsTrigger>
            <TabsTrigger value="kanji">Kanji</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="english-first" 
            checked={startWithEnglish}
            onCheckedChange={toggleStartWithEnglish}
          />
          <Label htmlFor="english-first">English → Japanese</Label>
        </div>
      </div>

      <Card 
        className="w-full cursor-pointer transition-all duration-200 hover:shadow-md" 
        onClick={flipCard}
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            {(cardSide === "front" && !startWithEnglish) || (cardSide === "back" && startWithEnglish) ? (
              // Show Japanese word
              <>
                {getWordDisplay()}
                {writingSystem !== "kanji" && currentWord && (
                  <div className="text-sm text-muted-foreground mt-1">
                    (
                    {verbForm === "dictionary"
                      ? currentWord.Word.dictionary.kanji
                      : currentWord["Present Affirmative"]?.kanji || currentWord.Word.dictionary.kanji}
                    )
                  </div>
                )}
              </>
            ) : (
              // Show English definition
              currentWord && <span>{currentWord.Word.definition}</span>
            )}
          </CardTitle>

          {((cardSide === "front" && !startWithEnglish) || (cardSide === "back" && startWithEnglish)) && (
            <div className="flex justify-center gap-2 flex-wrap">
              {showVerbTypes && currentWord && (
                <Badge variant="outline" className="mt-1">
                  {formatWordType(currentWord.Word.type)}
                </Badge>
              )}
              {showClassLevel && currentWord && (
                <Badge variant="outline" className="mt-1">
                  {formatClassLevel(currentWord.Word.class)}
                </Badge>
              )}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            {startWithEnglish ? 
              (cardSide === "front" ? "Click to see Japanese word" : "Click to see English") :
              (cardSide === "front" ? "Click to see English" : "Click to see Japanese word")
            }
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={(e) => {
            e.stopPropagation(); // Prevent card flip
            nextCard();
          }} className="w-full">
            Next Card
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}