"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "../../components/navbar"
import { fetchBooks } from "../../lib/books-data"
import type { Book } from "../../types/book"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Calendar, BookIcon, Users } from "lucide-react"

export default function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    async function loadBook() {
      const books = await fetchBooks()
      const foundBook = books.find((b) => b.id === Number(id))
      setBook(foundBook || null)
    }
    loadBook()
  }, [id])

  if (!book) return <div>Loading...</div>

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative h-96 w-full mb-4">
                <Image
                  src={book.thumbnailUrl || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">{book.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{book.authors.join(", ")}</p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-lg font-semibold">4.5</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-1" />
                  <span>{new Date(book.publishedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <BookIcon className="w-5 h-5 text-gray-400 mr-1" />
                  <span>{book.pageCount} pages</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">{book.longDescription}</p>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {book.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Authors</h2>
                <div className="flex flex-wrap gap-4">
                  {book.authors.map((author, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">{author}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

