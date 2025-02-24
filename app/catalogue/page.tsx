"use client"

import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import AddToCartButton from "../components/AddToCartButton"
import { books } from "../data/books"
import { SearchFilter } from "../components/search-filter"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Catalogue() {
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    let result = [...books]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter((book) => book.category.map((c) => c.toLowerCase()).includes(selectedCategory))
    }

    // Apply price filter
    result = result.filter((book) => book.price >= priceRange[0] && book.price <= priceRange[1])

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        break
    }

    setFilteredBooks(result)
  }, [searchQuery, selectedCategory, priceRange, sortBy])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Book Catalogue</h1>

          <SearchFilter
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onPriceRangeChange={setPriceRange}
            onSortChange={setSortBy}
          />

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/books/${book.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-[400px]">
                        <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{book.title}</CardTitle>
                        <CardDescription>{book.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2">{book.description}</p>
                        <p className="mt-2 font-bold">${book.price.toFixed(2)}</p>
                        <div className="flex gap-2 mt-2">
                          {book.category.slice(0, 2).map((cat) => (
                            <span key={cat} className="text-xs bg-secondary px-2 py-1 rounded-full">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <AddToCartButton book={book} />
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

