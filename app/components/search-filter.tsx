"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { categories } from "../data/books"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"

interface SearchFilterProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onSortChange: (sort: string) => void
}

export function SearchFilter({ onSearch, onCategoryChange, onPriceRangeChange, onSortChange }: SearchFilterProps) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 50])

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Input placeholder="Search books..." onChange={(e) => onSearch(e.target.value)} className="pl-10" />
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        </div>
        <Button variant="outline" onClick={() => setIsFiltersVisible(!isFiltersVisible)}>
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <AnimatePresence>
        {isFiltersVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select onValueChange={onCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  min={0}
                  max={50}
                  step={1}
                  value={priceRange}
                  onValueChange={(value: number[]) => {
                    setPriceRange(value as [number, number])
                    onPriceRangeChange(value as [number, number])
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Sort By</label>
                <Select onValueChange={onSortChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating-desc">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

