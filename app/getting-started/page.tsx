import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Getting Started</h1>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to Sensei Benny!</CardTitle>
            <CardDescription>
              Learn how to use this tool effectively to master Japanese verb conjugations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">1. Choose Your Words</h3>
              <p className="text-muted-foreground">
                Start by selecting which words you want to practice. Click the settings icon and choose from our list of
                verbs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">2. Select Your Writing System</h3>
              <p className="text-muted-foreground">
                Choose between kanji or hiragana based on your comfort level. You can change this at any time
                directly on the main practice page.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">3. Practice Types</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Random Practice: Test all conjugation types</li>
                <li>Specific Practice: Focus on particular conjugation patterns</li>
                <li>Te Form Practice: Focus specifically on Te Form conjugations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">4. Display Modes</h3>
              <p className="text-muted-foreground">
                Choose how flashcards are presented to you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Word → Conjugation</strong>: See the word and conjugate it to the requested form</li>
                <li><strong>Definition → Conjugation</strong>: See only the English definition and conjugate to the requested form</li>
              </ul>
              <p className="text-muted-foreground">
                Definition mode is more challenging as you need to recall the word before conjugating it!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">5. Answer Methods</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Type Answer: Write your answers to test recall</li>
                <li>Reveal Answer: Study the patterns without testing</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">6. Check the Hints</h3>
              <p className="text-muted-foreground">
                Visit the hints page to see conjugation charts and helpful tips for mastering Japanese verb forms.
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Link href="/hints">
                <Button variant="outline">View Hints</Button>
              </Link>
              <Link href="/">
                <Button>
                  Start Practicing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}