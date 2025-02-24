"use client"

import { Navbar } from "../components/navbar"
import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Cart() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
              <Button className="mt-4" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

