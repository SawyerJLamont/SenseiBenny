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
          <DialogTitle>Welcome to Japanese Conjugation Practice!</DialogTitle>
          <DialogDescription>
            This tool helps you practice Japanese verb conjugations with customizable settings.
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

