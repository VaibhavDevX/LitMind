"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "../contexts/CartContext"
import { motion } from "framer-motion"

interface Book {
  id: number
  title: string
  price: number
}

export default function AddToCartButton({ book }: { book: Book }) {
  const { addToCart } = useCart()

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button onClick={() => addToCart({ ...book, quantity: 1 })}>Add to Cart</Button>
    </motion.div>
  )
}

