"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { books } from "../data/books"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"

export function FeaturedBooks() {
  const { addToCart } = useCart()

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Featured Books
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-card rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-[400px]">
              <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-muted-foreground mb-2">{book.author}</p>
              <p className="text-sm mb-4">{book.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${book.price}</span>
                <Button onClick={() => addToCart({ ...book, quantity: 1 })} size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

