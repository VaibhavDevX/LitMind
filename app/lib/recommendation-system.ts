import type { Book } from "../types/book"

function calculateRelevance(book: Book, query: string): number {
  const queryWords = query.toLowerCase().split(" ")
  let relevance = 0

  // Check title
  if (book.title.toLowerCase().includes(query.toLowerCase())) {
    relevance += 10
  }

  // Check categories
  book.categories.forEach((category) => {
    if (queryWords.some((word) => category.toLowerCase().includes(word))) {
      relevance += 5
    }
  })

  // Check authors
  book.authors.forEach((author) => {
    if (queryWords.some((word) => author.toLowerCase().includes(word))) {
      relevance += 3
    }
  })

  // Check description
  if (book.shortDescription) {
    queryWords.forEach((word) => {
      if (book.shortDescription.toLowerCase().includes(word)) {
        relevance += 1
      }
    })
  }

  return relevance
}

export function getRecommendations(books: Book[], query: string[], limit = 5): Book[] {
  const combinedQuery = query.join(" ")

  const scoredBooks = books.map((book) => ({
    book,
    score: calculateRelevance(book, combinedQuery),
  }))

  scoredBooks.sort((a, b) => b.score - a.score)
  return scoredBooks.slice(0, limit).map((scoredBook) => scoredBook.book)
}

