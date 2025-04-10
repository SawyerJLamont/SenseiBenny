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

// Define types
type PracticeType = "all" | "specific" | "te-form" | "dictionary-recall"
type DisplayMode = "word" | "definition"
type AnswerMode = "type" | "reveal"
type ConjugationType = "Present Affirmative" | "Present Negative" | "Past Affirmative" | "Past Negative" | "Te Form" | "Dictionary Form"

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
  writingSystem: WritingSystem
  verbForm: VerbForm
  displayMode: DisplayMode
}

export default function FlashCardApp({ conjugationData, writingSystem, verbForm, displayMode }: FlashCardAppProps) {
  // State
  const [practiceType, setPracticeType] = useState<PracticeType>("all")
  const [currentWord, setCurrentWord] = useState<ConjugationItem | null>(null)
  const [currentConjugationType, setCurrentConjugationType] = useState<ConjugationType | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [selectedConjugationTypes, setSelectedConjugationTypes] = useState<ConjugationType[]>(["Present Affirmative"])
  const [open, setOpen] = useState(false)
  const [answerMode, setAnswerMode] = useState<AnswerMode>("type")
  const [showVerbTypes, setShowVerbTypes] = useState(true)
  const [showClassLevel, setShowClassLevel] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // All available conjugation types
  const conjugationTypes: ConjugationType[] = [
    "Present Affirmative",
    "Present Negative",
    "Past Affirmative",
    "Past Negative",
    "Te Form",
    "Dictionary Form"
  ]

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedShowVerbTypes = localStorage.getItem("showVerbTypes")
    const savedShowClassLevel = localStorage.getItem("showClassLevel")
    const savedPracticeType = localStorage.getItem("practiceType") as PracticeType

    if (savedShowVerbTypes !== null) {
      setShowVerbTypes(savedShowVerbTypes === "true")
    }
    if (savedShowClassLevel !== null) {
      setShowClassLevel(savedShowClassLevel === "true")
    }
    if (savedPracticeType && ["all", "specific", "te-form", "dictionary-recall"].includes(savedPracticeType)) {
      setPracticeType(savedPracticeType)
    }
  }, [])

  // Save practice type to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("practiceType", practiceType)
  }, [practiceType])

  useEffect(() => {
    localStorage.setItem("showClassLevel", showClassLevel.toString())
  }, [showClassLevel])

  // Effect to bind/unbind wanakana to the input field
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
      if (type === "Dictionary Form") {
        // Dictionary Form is always valid if the word has a dictionary form
        return Boolean(word.Word.dictionary) && 
               typeof word.Word.dictionary[writingSystem] === "string" && 
               word.Word.dictionary[writingSystem] !== "";
      }
      
      // For other conjugation types, check the specific form
      return (
        Boolean(word[type]) && typeof word[type]?.[writingSystem] === "string" && word[type]?.[writingSystem] !== ""
      )
    },
    [writingSystem],
  )

  // Get a random word for practice based on current practice type
  const getRandomWord = useCallback(() => {
    const filteredData = getFilteredConjugationData()

    // Filter words based on practice type
    const validWords = filteredData.filter((item) => {
      if (practiceType === "all") {
        // In all mode, make sure the word has at least one valid conjugation type
        return conjugationTypes.some((type) => isValidConjugationType(item, type))
      } else if (practiceType === "te-form") {
        // In te-form mode, only include words with valid Te Form conjugations
        return isValidConjugationType(item, "Te Form")
      } else if (practiceType === "dictionary-recall") {
        // In dictionary-recall mode, all words are valid as long as they have a dictionary form
        return Boolean(item.Word.dictionary) && 
               typeof item.Word.dictionary[writingSystem] === "string" && 
               item.Word.dictionary[writingSystem] !== ""
      } else {
        // In specific mode, make sure the word has at least one of the selected conjugation types
        return selectedConjugationTypes.some((type) => isValidConjugationType(item, type))
      }
    })

    if (validWords.length === 0) return null
    return validWords[Math.floor(Math.random() * validWords.length)]
  }, [practiceType, selectedConjugationTypes, getFilteredConjugationData, isValidConjugationType, conjugationTypes, writingSystem])

  // Get a random conjugation type for the current word based on practice type
  const getRandomConjugationType = useCallback(
    (word: ConjugationItem): ConjugationType | null => {
      // In te-form mode, always return Te Form as the conjugation type
      if (practiceType === "te-form") {
        return "Te Form"
      } else if (practiceType === "dictionary-recall") {
        return "Dictionary Form"
      } else if (practiceType === "specific") {
        // Filter to only include conjugation types that exist for this word
        const availableTypes = selectedConjugationTypes.filter((type) => isValidConjugationType(word, type))

        if (availableTypes.length === 0) return null
        return availableTypes[Math.floor(Math.random() * availableTypes.length)]
      } else {
        // In "all" mode, get all valid conjugation types for this word
        const availableTypes = conjugationTypes.filter((type) => isValidConjugationType(word, type))

        if (availableTypes.length === 0) return null
        return availableTypes[Math.floor(Math.random() * availableTypes.length)]
      }
    },
    [practiceType, selectedConjugationTypes, isValidConjugationType, conjugationTypes],
  )

  // Function to get the next card
  const nextCard = useCallback(() => {
    // First ensure showAnswer is set to false immediately
    setShowAnswer(false)
    
    const word = getRandomWord()
    if (!word) return
  
    let conjugationType: ConjugationType | null = null;
    
    // Set specific conjugation type based on practice mode
    if (practiceType === "te-form") {
      conjugationType = "Te Form";
    } else if (practiceType === "dictionary-recall") {
      conjugationType = "Dictionary Form";
    } else {
      conjugationType = getRandomConjugationType(word);
    }
    
    if (!conjugationType) return
  
    setCurrentWord(word)
    setCurrentConjugationType(conjugationType)
    setUserAnswer("")
    setIsCorrect(null)
    
    // Include practiceType in the dependencies to ensure it updates when practice mode changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [practiceType, getRandomWord, getRandomConjugationType])

  const checkAnswer = () => {
    if (!currentWord || !currentConjugationType) return;
    
    let userInputText = "";
    let correctAnswer = "";
    let hiraganaAnswer = "";

    // Get the user's input
    if (inputRef.current) {
      userInputText = wanakana.toHiragana(inputRef.current.value.trim());
    } else {
      userInputText = userAnswer.trim();
    }
    
    setUserAnswer(userInputText);
    
    // Get the correct answer based on conjugation type
    if (currentConjugationType === "Dictionary Form") {
      correctAnswer = currentWord.Word.dictionary[writingSystem];
      hiraganaAnswer = currentWord.Word.dictionary.hiragana;
    } else if (currentWord[currentConjugationType]) {
      correctAnswer = currentWord[currentConjugationType]?.[writingSystem] || "";
      hiraganaAnswer = currentWord[currentConjugationType]?.hiragana || "";
    } else {
      return; // No valid answer to check against
    }
    
    // Check if the answer is correct (accepting hiragana in kanji mode)
    let isAnswerCorrect = false;
    if (writingSystem === "kanji") {
      isAnswerCorrect = 
        userInputText === correctAnswer.trim() || 
        (hiraganaAnswer && userInputText === hiraganaAnswer.trim());
    } else {
      isAnswerCorrect = userInputText === correctAnswer.trim();
    }
    
    console.log({
      mode: practiceType,
      userInput: userInputText,
      correctAnswer: correctAnswer.trim(),
      hiraganaAnswer: hiraganaAnswer.trim(),
      isCorrect: isAnswerCorrect
    });
    
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
  };

  // Add global event listener for keydown events to move to next card when Enter is pressed and answer is shown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && showAnswer) {
        nextCard()
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [showAnswer, nextCard])

  // Call nextCard when practice settings change
  useEffect(() => {
    if (conjugationData.length > 0) {
      nextCard()
    }
    // Explicitly omit nextCard from dependencies to prevent infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conjugationData, practiceType, selectedConjugationTypes, writingSystem, displayMode])

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
      <div className="flex flex-wrap items-center space-x-2">
        <Button variant={practiceType === "all" ? "default" : "outline"} onClick={() => setPracticeType("all")}>
          Random Practice
        </Button>

        {/* Te Form Only button */}
        <Button
          variant={practiceType === "te-form" ? "default" : "outline"}
          onClick={() => setPracticeType("te-form")}
        >
          Te Form Only
        </Button>
        
        {/* Dictionary Recall button */}
        <Button
          variant={practiceType === "dictionary-recall" ? "default" : "outline"}
          onClick={() => setPracticeType("dictionary-recall")}
        >
          Dictionary Recall
        </Button>

        <Button
          variant={practiceType === "specific" ? "default" : "outline"}
          onClick={() => setPracticeType("specific")}
        >
          Specific Practice
        </Button>
      </div>

      {/* Specific practice type selector - only shown when in "specific" mode */}
      {practiceType === "specific" && (
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

      {/* Selected conjugation types display - only shown when in "specific" mode */}
      {practiceType === "specific" && (
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
                  {practiceType === "te-form" && (
        <div className="text-sm text-muted-foreground text-center">
          Practicing Te Form conjugations only
        </div>
      )}
      
      {/* In dictionary-recall mode, display a message explaining what's happening */}
      {practiceType === "dictionary-recall" && (
        <div className="text-sm text-muted-foreground text-center">
          Given the meaning, provide the dictionary form of the word
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

      {/* Card header - display appropriate content based on mode */}
      <Card className="w-full">
        <CardHeader>
          {practiceType === "dictionary-recall" ? (
            // In dictionary recall mode, always show the definition
            <>
              <CardTitle className="text-center text-2xl">
                {currentWord?.Word.definition}
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
              <p className="text-center text-muted-foreground">
                Enter the dictionary form
              </p>
            </>
          ) : displayMode === "definition" ? (
            // In definition mode, show the definition instead of the word
            <>
              <CardTitle className="text-center text-2xl">
                {currentWord?.Word.definition}
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
              <p className="text-center text-muted-foreground">
                Conjugate to: <span className="font-medium">{currentConjugationType}</span>
              </p>
            </>
          ) : (
            // In word mode, show the word
            <>
              <CardTitle className="text-center text-2xl">
                {getWordDisplay()}
                {writingSystem !== "kanji" && currentWord && (
                  <div className="text-sm text-muted-foreground mt-1">
                    ({verbForm === "dictionary"
                      ? currentWord.Word.dictionary.kanji
                      : currentWord["Present Affirmative"]?.kanji || currentWord.Word.dictionary.kanji})
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
            </>
          )}
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
              currentWord && currentConjugationType && (
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
                    <span className="font-bold">
                      {currentConjugationType === "Dictionary Form" 
                        ? currentWord.Word.dictionary[writingSystem]
                        : currentWord[currentConjugationType]?.[writingSystem] || ""}
                    </span>
                    {writingSystem !== "kanji" && (
                      <span className="text-muted-foreground ml-2">
                        ({currentConjugationType === "Dictionary Form"
                          ? currentWord.Word.dictionary.kanji
                          : currentWord[currentConjugationType]?.kanji || ""})
                      </span>
                    )}
                  </p>
                  {displayMode === "definition" && currentConjugationType !== "Dictionary Form" && (
                    <p className="mt-2">
                      Word: <span className="font-medium">{getWordDisplay()}</span>
                      {writingSystem !== "kanji" && currentWord && (
                        <span className="text-muted-foreground ml-2">
                          ({verbForm === "dictionary"
                            ? currentWord.Word.dictionary.kanji
                            : currentWord["Present Affirmative"]?.kanji || currentWord.Word.dictionary.kanji})
                        </span>
                      )}
                    </p>
                  )}
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