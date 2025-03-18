"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    if (!hasVisited) {
      setIsOpen(true)
      localStorage.setItem("hasVisitedBefore", "true")
    }
  }, [])

  const handleGetStarted = () => {
    setIsOpen(false)
    router.push("/getting-started")
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Sensei Benny</DialogTitle>
          <DialogDescription>
            If you are a Oregon State Student, this is a tool to help you practive the conjugations
            of Japanese verbs we have learned in class. I have also added a few extra words that I think are
            useful to know. If you are not from Oregon State, you can still use this tool to practice
            Japanese verb conjugations. Please look at the quick guide before jumping in so that you can 
            get the most out of this tool. If you find any errors in conjugation or experince any bugs, 
            please let me know by emailing me at <a href="mailto: lamontsa@oregonstate.edu "></a>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p>Would you like to see a quick guide on how to use this application?</p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
          <Button variant="outline" onClick={handleClose}>
            Skip
          </Button>
          <Button onClick={handleGetStarted}>Show Getting Started Guide</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

