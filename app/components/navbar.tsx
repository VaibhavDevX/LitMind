import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-200">LitMind</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

