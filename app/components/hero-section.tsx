"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { books } from "../data/books"

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Floating books background */}
      {books.map((book, index) => (
        <motion.div
          key={book.id}
          className="absolute opacity-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            delay: index * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${25 * (index + 1)}%`,
            top: `${20 * (index + 1)}%`,
          }}
        >
          <Image
            src={book.image || "/placeholder.svg"}
            alt={book.title}
            width={150}
            height={200}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Immerse yourself in a world of stories, knowledge, and imagination
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/catalogue">Explore Books</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/login">Join Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

