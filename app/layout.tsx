import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings, HelpCircle, BookOpen } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import FirstTimeModal from "@/components/first-time-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Japanese Conjugation Practice",
  description: "Practice Japanese verb conjugations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          {/* Left background */}
          <div className="fixed left-0 top-0 bottom-0 w-1/6 -z-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benny.jpg-xn47BmvSl9AWzdaHAOBnKozeC2DEXf.jpeg"
              alt=""
              className="h-full w-full object-cover opacity-15"
            />
          </div>

          {/* Right background */}
          <div className="fixed right-0 top-0 bottom-0 w-1/6 -z-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benny.jpg-xn47BmvSl9AWzdaHAOBnKozeC2DEXf.jpeg"
              alt=""
              className="h-full w-full object-cover opacity-15"
            />
          </div>

          <div className="min-h-screen flex flex-col w-full">
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
              <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
                <Link href="/" className="font-semibold text-lg">
                  Japanese Conjugation
                </Link>
                <TooltipProvider>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="/getting-started">
                          <Button variant="ghost" size="icon">
                            <BookOpen className="h-5 w-5" />
                            <span className="sr-only">Getting Started</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Getting Started</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="/hints">
                          <Button variant="ghost" size="icon">
                            <HelpCircle className="h-5 w-5" />
                            <span className="sr-only">Hints</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Conjugation Hints</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="/select">
                          <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </nav>
            </header>
            <main className="flex-1 relative max-w-5xl w-full mx-auto">{children}</main>
          </div>
        </div>
        <FirstTimeModal />
      </body>
    </html>
  )
}



import './globals.css'