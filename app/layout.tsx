import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings, HelpCircle, BookOpen } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sensei Benny",
  description: "Practice Japanese word conjugation tailored to OSU Japanese courses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
              <Link href="/" className="font-semibold text-lg">
                Japanese Conjugation
              </Link>
              <div className="flex items-center gap-2">
                <Link href="/getting-started">
                  <Button variant="ghost" size="icon">
                    <BookOpen className="h-5 w-5" />
                    <span className="sr-only">Getting Started</span>
                  </Button>
                </Link>
                <Link href="/hints">
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-5 w-5" />
                    <span className="sr-only">Hints</span>
                  </Button>
                </Link>
                <Link href="/select">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'