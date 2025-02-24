"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "./components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { fetchBooks } from "./lib/books-data"
import { getRecommendations } from "./lib/recommendation-system"
import type { Book } from "./types/book"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [query, setQuery] = useState("")
  const [chat, setChat] = useState<{ type: "user" | "ai"; content: string }[]>([])
  const [recommendations, setRecommendations] = useState<Book[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function loadBooks() {
      const fetchedBooks = await fetchBooks()
      setBooks(fetchedBooks)
    }
    loadBooks()
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const newChat = [...chat, { type: "user", content: query }]
    setChat(newChat)
    setQuery("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = `Here are some book recommendations based on "${query}"`
      setChat([...newChat, { type: "ai", content: aiResponse }])
      setRecommendations(getRecommendations(books, [query]))
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 md:p-8 h-[calc(100vh-8rem)] flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
            AI Book Recommendations
          </h1>

          <div className="flex-grow overflow-auto mb-4 space-y-4">
            <AnimatePresence>
              {chat.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {recommendations.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recommended Books:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendations.map((book) => (
                    <Link href={`/books/${book.id}`} key={book.id}>
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="relative h-48 mb-4">
                            <Image
                              src={book.thumbnailUrl || "/placeholder.svg"}
                              alt={book.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{book.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                            {book.shortDescription}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter a book category or topic..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

