"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import * as wanakana from "wanakana"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { WritingSystem, VerbForm, WordType, ClassLevel } from "@/lib/data"

// Updated to include the new "te-form" mode
type PracticeMode = "all" | "specific" | "te-form"
type ConjugationType = "Present Affirmative" | "Present Negative" | "Past Affirmative" | "Past Negative" | "Te Form"
type AnswerMode = "type" | "reveal"

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

interface FlashCardAppProps {
  conjugationData: ConjugationItem[]
}

export default function FlashCardApp({ conjugationData }: FlashCardAppProps) {
  // Updated practiceMode state to include "te-form" option
  const [practiceMode, setPracticeMode] = useState<PracticeMode>("all") // Updated to include "te-form" as initial state
  const [currentWord, setCurrentWord] = useState<ConjugationItem | null>(null) // Updated to include null as initial state
  const [currentConjugationType, setCurrentConjugationType] = useState<ConjugationType | null>(null) // Updated to include null as initial state
  const [userAnswer, setUserAnswer] = useState("") // Updated to include empty string as initial state
  const [showAnswer, setShowAnswer] = useState(false) // Updated to include false as initial state
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null) // Updated to include null as initial state
  const [selectedConjugationTypes, setSelectedConjugationTypes] = useState<ConjugationType[]>(["Present Affirmative"]) // Updated to include Present Affirmative as default
  const [open, setOpen] = useState(false) // New state for conjugation type selector
  const [answerMode, setAnswerMode] = useState<AnswerMode>("type") // New state for answer mode
  const [writingSystem, setWritingSystem] = useState<WritingSystem>("hiragana") // New state for writing system
  const [verbForm, setVerbForm] = useState<VerbForm>("masu") // New state for verb form
  const [showVerbTypes, setShowVerbTypes] = useState(true) // New state for showing verb types
  const [showClassLevel, setShowClassLevel] = useState(true) // New state for showing class level
  const inputRef = useRef<HTMLInputElement>(null) // Ref for the answer input in Japanese

  // All available conjugation types
  const conjugationTypes: ConjugationType[] = [
    "Present Affirmative",
    "Present Negative",
    "Past Affirmative",
    "Past Negative",
    "Te Form",
  ]

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedWritingSystem = localStorage.getItem("writingSystem") as WritingSystem
    const savedVerbForm = localStorage.getItem("verbForm") as VerbForm
    const savedShowVerbTypes = localStorage.getItem("showVerbTypes")
    const savedShowClassLevel = localStorage.getItem("showClassLevel")
    // Load saved practice mode if available
    const savedPracticeMode = localStorage.getItem("practiceMode") as PracticeMode

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
    if (savedPracticeMode && ["all", "specific", "te-form"].includes(savedPracticeMode)) {
      setPracticeMode(savedPracticeMode)
    }
  }, [])

  // Save practice mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("practiceMode", practiceMode)
  }, [practiceMode])

  useEffect(() => {
    localStorage.setItem("showClassLevel", showClassLevel.toString())
  }, [showClassLevel])

  // New effect to bind/unbind wanakana to the input field
  useEffect(() => {
    if (inputRef.current) {
      wanakana.bind(inputRef.current, {
        IMEMode: true,
        useObsoleteKana: false,
      })
    }

    return () => {
      if (inputRef.current) {
        wanakana.unbind(inputRef.current)
      }
    }
  }, [])

  // Get filtered conjugation data based on user selection
  const getFilteredConjugationData = useCallback(() => {
    const selectedWords = new Set(JSON.parse(localStorage.getItem("selectedWords") || "[]"))
    if (selectedWords.size === 0) return conjugationData
    return conjugationData.filter((item) => selectedWords.has(item.Word.dictionary.kanji))
  }, [conjugationData])

  // Check if a conjugation type is valid for a word
  const isValidConjugationType = useCallback(
    (word: ConjugationItem, type: ConjugationType): boolean => {
      return (
        Boolean(word[type]) && typeof word[type]?.[writingSystem] === "string" && word[type]?.[writingSystem] !== ""
      )
    },
    [writingSystem],
  )

  // Get a random word for practice based on current practice mode
  const getRandomWord = useCallback(() => {
    const filteredData = getFilteredConjugationData()

    // Filter words based on practice mode
    const validWords = filteredData.filter((item) => {
      if (practiceMode === "all") {
        // In all mode, make sure the word has at least one valid conjugation type
        return conjugationTypes.some((type) => isValidConjugationType(item, type))
      } else if (practiceMode === "te-form") {
        // In te-form mode, only include words with valid Te Form conjugations
        return isValidConjugationType(item, "Te Form")
      } else {
        // In specific mode, make sure the word has at least one of the selected conjugation types
        return selectedConjugationTypes.some((type) => isValidConjugationType(item, type))
      }
    })

    if (validWords.length === 0) return null
    return validWords[Math.floor(Math.random() * validWords.length)]
  }, [practiceMode, selectedConjugationTypes, getFilteredConjugationData, isValidConjugationType, conjugationTypes])

  // Get a random conjugation type for the current word based on practice mode
  const getRandomConjugationType = useCallback(
    (word: ConjugationItem): ConjugationType | null => {
      if (practiceMode === "specific") {
        // Filter to only include conjugation types that exist for this word
        const availableTypes = selectedConjugationTypes.filter((type) => isValidConjugationType(word, type))

        if (availableTypes.length === 0) return null
        return availableTypes[Math.floor(Math.random() * availableTypes.length)]
      } else if (practiceMode === "te-form") {
        // In te-form mode, always return Te Form as the conjugation type
        return "Te Form"
      }

      // In "all" mode, get all valid conjugation types for this word
      const availableTypes = conjugationTypes.filter((type) => isValidConjugationType(word, type))

      if (availableTypes.length === 0) return null
      return availableTypes[Math.floor(Math.random() * availableTypes.length)]
    },
    [practiceMode, selectedConjugationTypes, isValidConjugationType, conjugationTypes],
  )

  // Move to the next card
  const nextCard = useCallback(() => {
    const word = getRandomWord()
    if (!word) return

    const conjugationType = getRandomConjugationType(word)
    if (!conjugationType) return

    setCurrentWord(word)
    setCurrentConjugationType(conjugationType)
    setUserAnswer("")
    setShowAnswer(false)
    setIsCorrect(null)
  }, [getRandomConjugationType, getRandomWord])

  // Check the user's answer
const checkAnswer = () => {
  // First ensure conversion is complete
  if (inputRef.current) {
    // Force a final conversion of the input value
    const finalJapaneseText = wanakana.toHiragana(inputRef.current.value);
    setUserAnswer(finalJapaneseText);
    
    // Small timeout to ensure state update has completed
    setTimeout(() => {
      if (!currentWord || !currentConjugationType || !currentWord[currentConjugationType]) return;
      
      const correctAnswer = currentWord[currentConjugationType]?.[writingSystem];
      if (!correctAnswer) return;
      
      const isAnswerCorrect = finalJapaneseText.trim() === correctAnswer.trim();
      
      setIsCorrect(isAnswerCorrect);
      setShowAnswer(true);
    }, 10);
  } else {
    // Fallback if ref is not available
    if (!currentWord || !currentConjugationType || !currentWord[currentConjugationType]) return;
      
    const correctAnswer = currentWord[currentConjugationType]?.[writingSystem];
    if (!correctAnswer) return;
    
    const isAnswerCorrect = userAnswer.trim() === correctAnswer.trim();
    
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
  }
};

  // Call nextCard when practice mode or conjugation types change
  useEffect(() => {
    if (conjugationData.length > 0) {
      nextCard()
    }
  }, [conjugationData, practiceMode, selectedConjugationTypes, writingSystem]) // Remove nextCard from dependencies

  if (conjugationData.length === 0) {
    return <div className="text-center">Loading data...</div>
  }

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
      // Fall back to dictionary form if masu form doesn't exist (e.g., for adjectives)
      return currentWord.Word.dictionary[writingSystem]
    }
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

  return (
    <div className="space-y-6">
      {/* Practice mode selection buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-wrap items-center space-x-2">
          <Button variant={practiceMode === "all" ? "default" : "outline"} onClick={() => setPracticeMode("all")}>
            Random Practice
          </Button>

          {/* New Te Form Only button */}
          <Button
            variant={practiceMode === "te-form" ? "default" : "outline"}
            onClick={() => setPracticeMode("te-form")}
          >
            Te Form Only
          </Button>

          <Button
            variant={practiceMode === "specific" ? "default" : "outline"}
            onClick={() => setPracticeMode("specific")}
          >
            Specific Practice
          </Button>
        </div>

        {/* Specific practice type selector - only shown when in "specific" mode */}
        {practiceMode === "specific" && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-[250px] justify-between">
                {selectedConjugationTypes.length > 0
                  ? `${selectedConjugationTypes.length} selected`
                  : "Select conjugations..."}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput placeholder="Search conjugations..." />
                <CommandList>
                  <CommandEmpty>No conjugation type found.</CommandEmpty>
                  <CommandGroup>
                    {conjugationTypes.map((type) => (
                      <CommandItem
                        key={type}
                        onSelect={() => {
                          setSelectedConjugationTypes((prev) => {
                            const newTypes = prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
                            return newTypes.length > 0 ? newTypes : [type] // Ensure at least one is selected
                          })
                        }}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${selectedConjugationTypes.includes(type) ? "opacity-100" : "opacity-0"
                            }`}
                        />
                        {type}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* Selected conjugation types display - only shown when in "specific" mode */}
      {practiceMode === "specific" && (
        <div className="flex flex-wrap gap-2">
          {selectedConjugationTypes.map((type) => (
            <Badge key={type} variant="secondary" className="flex items-center gap-1">
              {type}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() =>
                  setSelectedConjugationTypes((prev) => {
                    const newTypes = prev.filter((t) => t !== type)
                    return newTypes.length > 0 ? newTypes : [prev[0]] // Ensure at least one is selected
                  })
                }
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {type}</span>
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* In te-form mode, display a message explaining what's happening */}
      {practiceMode === "te-form" && (
        <div className="text-sm text-muted-foreground text-center">
          Practicing Te Form conjugations only
        </div>
      )}

      <div className="flex justify-center">
        <Tabs defaultValue="type" value={answerMode} onValueChange={(value) => setAnswerMode(value as AnswerMode)}>
          <TabsList>
            <TabsTrigger value="type">Type Answer</TabsTrigger>
            <TabsTrigger value="reveal">Reveal Answer</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
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
          </CardTitle>
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
          {currentWord && <p className="text-center text-sm text-muted-foreground">{currentWord.Word.definition}</p>}
          <p className="text-center text-muted-foreground">
            Conjugate to: <span className="font-medium">{currentConjugationType}</span>
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {answerMode === "type" ? (
              <div>
                <Label htmlFor="answer">Your Answer</Label>
                <Input
                  ref={inputRef}
                  id="answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type romaji to enter Japanese"
                  disabled={showAnswer}
                  className="text-lg"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !showAnswer) {
                      checkAnswer()
                    }
                  }}
                />
              </div>
            ) : null}

            {((answerMode === "type" && showAnswer) || (answerMode === "reveal" && showAnswer)) &&
              currentWord &&
              currentConjugationType &&
              currentWord[currentConjugationType] && (
                <div
                  className={`p-4 rounded-md ${answerMode === "reveal" || isCorrect
                      ? "bg-green-100 dark:bg-green-900/20"
                      : "bg-red-100 dark:bg-red-900/20"
                    }`}
                >
                  <p className="font-medium">
                    {answerMode === "reveal" ? "Answer:" : isCorrect ? "Correct!" : "Not quite right."}
                  </p>
                  <p>
                    {answerMode === "type" ? "The correct answer is: " : ""}
                    <span className="font-bold">{currentWord[currentConjugationType]?.[writingSystem] || ""}</span>
                    {writingSystem !== "kanji" &&
                      currentConjugationType &&
                      currentWord[currentConjugationType]?.kanji && (
                        <span className="text-muted-foreground ml-2">
                          ({currentWord[currentConjugationType]?.kanji})
                        </span>
                      )}
                  </p>
                </div>
              )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {answerMode === "type" ? (
            !showAnswer ? (
              <Button onClick={checkAnswer} className="w-full">
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextCard} className="w-full">
                Next Card
              </Button>
            )
          ) : !showAnswer ? (
            <Button onClick={() => setShowAnswer(true)} className="w-full">
              Reveal Answer
            </Button>
          ) : (
            <Button onClick={nextCard} className="w-full">
              Next Card
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
