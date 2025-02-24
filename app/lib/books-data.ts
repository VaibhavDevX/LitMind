import type { Book } from "../types/book"

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/ozlerhakan/mongodb-json-files/master/datasets/books.json",
  )
  const text = await response.text()
  const books = text
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))

  return books.map((book: any) => ({
    id: book._id,
    title: book.title,
    isbn: book.isbn,
    pageCount: book.pageCount,
    publishedDate: book.publishedDate?.$date,
    thumbnailUrl: book.thumbnailUrl,
    shortDescription: book.shortDescription,
    longDescription: book.longDescription,
    status: book.status,
    authors: book.authors,
    categories: book.categories,
  }))
}

export function getAllCategories(books: Book[]): string[] {
  const categoriesSet = new Set<string>()
  books.forEach((book) => {
    book.categories.forEach((category) => categoriesSet.add(category))
  })
  return Array.from(categoriesSet)
}

