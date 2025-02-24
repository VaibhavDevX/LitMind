export interface Review {
  id: number
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
}

export interface Book {
  id: number
  title: string
  author: string
  description: string
  price: number
  image: string
  category: string[]
  isbn: string
  publishDate: string
  publisher: string
  pages: number
  language: string
  format: string
  stock: number
  reviews: Review[]
  rating: number
  tags: string[]
}

export const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "An Easy & Proven Way to Build Good Habits & Break Bad Ones. The #1 New York Times bestseller that has transformed millions of lives with its insights into the science of habit formation.",
    price: 16.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K3LpCCRD1HGbhWyx8GLJQr9hd0uiQc.png",
    category: ["Self Help", "Personal Development", "Psychology"],
    isbn: "978-0735211292",
    publishDate: "2018-10-16",
    publisher: "Penguin Random House",
    pages: 320,
    language: "English",
    format: "Hardcover",
    stock: 50,
    reviews: [
      {
        id: 1,
        userId: "user1",
        userName: "John Doe",
        rating: 5,
        comment: "Life-changing book! The concepts are easy to understand and implement.",
        date: "2024-01-15",
      },
    ],
    rating: 4.8,
    tags: ["habits", "self-improvement", "psychology", "bestseller"],
  },
  {
    id: 2,
    title: "Too Good to be True",
    author: "Prajakta Koli",
    description:
      "A captivating story that will keep you guessing until the very end. This debut novel explores themes of truth, deception, and the complexities of human relationships.",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ta49qjRFhzhj8swCL9muKpyco3Oems.png",
    category: ["Fiction", "Contemporary", "Mystery"],
    isbn: "978-1234567890",
    publishDate: "2023-06-20",
    publisher: "Random House India",
    pages: 280,
    language: "English",
    format: "Paperback",
    stock: 35,
    reviews: [],
    rating: 4.5,
    tags: ["fiction", "mystery", "debut-novel"],
  },
  {
    id: 3,
    title: "Squished",
    author: "Megan Wagner Lloyd",
    description:
      "A heartwarming story about family and finding your place. Perfect for young readers who love stories about siblings and self-discovery.",
    price: 9.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oXnAnSXquJm5MA9eEtJXYofNfg3vDF.png",
    category: ["Children", "Graphic Novel", "Family"],
    isbn: "978-0987654321",
    publishDate: "2023-09-05",
    publisher: "Scholastic",
    pages: 240,
    language: "English",
    format: "Paperback",
    stock: 45,
    reviews: [],
    rating: 4.7,
    tags: ["children", "family", "graphic-novel", "siblings"],
  },
  {
    id: 4,
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    description:
      "A dystopian satirical black comedy centered on Alex, a charismatic and psychopathic delinquent whose pleasures are classical music, rape, and ultra-violence.",
    price: 14.99,
    image: "https://covers.openlibrary.org/b/lccn/93005405-S.jpg",
    category: ["Fiction", "Dystopian", "Classics"],
    isbn: "978-0393312836",
    publishDate: "1962-05-01",
    publisher: "W. W. Norton & Company",
    pages: 192,
    language: "English",
    format: "Paperback",
    stock: 30,
    reviews: [],
    rating: 4.2,
    tags: ["dystopia", "satire", "violence", "classics"],
  },
  {
    id: 5,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    description:
      "The Pulitzer Prize-winning epic of the Great Depression, a book that galvanized—and sometimes outraged—millions of readers.",
    price: 15.99,
    image: "https://covers.openlibrary.org/b/oclc/28419896-S.jpg",
    category: ["Fiction", "Classics", "Historical Fiction"],
    isbn: "978-0143039433",
    publishDate: "1939-04-14",
    publisher: "Penguin Classics",
    pages: 464,
    language: "English",
    format: "Paperback",
    stock: 40,
    reviews: [],
    rating: 4.5,
    tags: ["great depression", "american literature", "social commentary"],
  },
  {
    id: 6,
    title: "American Psycho",
    author: "Bret Easton Ellis",
    description:
      "A cult classic of transgressive fiction, American Psycho is a brilliant satire of the excesses of capitalism and consumer culture.",
    price: 16.99,
    image: "https://covers.openlibrary.org/b/olid/OL20392534M-S.jpg",
    category: ["Fiction", "Horror", "Contemporary"],
    isbn: "978-0679735779",
    publishDate: "1991-03-06",
    publisher: "Vintage",
    pages: 399,
    language: "English",
    format: "Paperback",
    stock: 25,
    reviews: [],
    rating: 3.8,
    tags: ["satire", "psychological thriller", "controversial"],
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A dystopian novel set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy.",
    price: 13.99,
    image: "https://covers.openlibrary.org/b/id/12882222-S.jpg",
    category: ["Fiction", "Science Fiction", "Classics"],
    isbn: "978-0060850524",
    publishDate: "1932-01-01",
    publisher: "Harper Perennial",
    pages: 288,
    language: "English",
    format: "Paperback",
    stock: 35,
    reviews: [],
    rating: 4.3,
    tags: ["dystopia", "futuristic", "social criticism"],
  },
  {
    id: 8,
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "The classic Gothic horror novel of a creation gone horribly wrong and one man's obsession to create life, regardless of the consequences.",
    price: 11.99,
    image: "https://covers.openlibrary.org/b/olid/OL7268323M-S.jpg",
    category: ["Fiction", "Horror", "Classics"],
    isbn: "978-0141439471",
    publishDate: "1818-01-01",
    publisher: "Penguin Classics",
    pages: 280,
    language: "English",
    format: "Paperback",
    stock: 30,
    reviews: [],
    rating: 4.1,
    tags: ["gothic", "science fiction", "romanticism"],
  },
  {
    id: 9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A vivid and witty novel about the illusion of the American Dream in the Jazz Age of the 1920s.",
    price: 12.99,
    image: "https://covers.openlibrary.org/b/id/8431111-S.jpg",
    category: ["Fiction", "Classics", "Literary Fiction"],
    isbn: "978-0743273565",
    publishDate: "1925-04-10",
    publisher: "Scribner",
    pages: 180,
    language: "English",
    format: "Paperback",
    stock: 50,
    reviews: [],
    rating: 4.4,
    tags: ["jazz age", "american dream", "social criticism"],
  },
  {
    id: 10,
    title: "Jurassic Park",
    author: "Michael Crichton",
    description:
      "A thrilling science fiction adventure about the dangers of genetic engineering and the hubris of scientists playing God.",
    price: 14.99,
    image: "https://covers.openlibrary.org/b/olid/OL7353612M-S.jpg",
    category: ["Fiction", "Science Fiction", "Thriller"],
    isbn: "978-0345538987",
    publishDate: "1990-11-20",
    publisher: "Ballantine Books",
    pages: 448,
    language: "English",
    format: "Mass Market Paperback",
    stock: 40,
    reviews: [],
    rating: 4.6,
    tags: ["dinosaurs", "genetic engineering", "adventure"],
  },
  {
    id: 11,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    description:
      "Set in a near-future New England, in a totalitarian state resembling a theonomy that has overthrown the United States government.",
    price: 15.99,
    image: "https://covers.openlibrary.org/b/olid/OL33674W-S.jpg",
    category: ["Fiction", "Dystopian", "Feminist Literature"],
    isbn: "978-0385490818",
    publishDate: "1985-02-17",
    publisher: "Anchor",
    pages: 311,
    language: "English",
    format: "Paperback",
    stock: 35,
    reviews: [],
    rating: 4.3,
    tags: ["dystopia", "feminism", "speculative fiction"],
  },
  {
    id: 12,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description:
      "The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday.",
    price: 17.99,
    image: "https://covers.openlibrary.org/b/olid/OL82581W-S.jpg",
    category: ["Fiction", "Fantasy", "Young Adult"],
    isbn: "978-1408855652",
    publishDate: "1997-06-26",
    publisher: "Bloomsbury",
    pages: 332,
    language: "English",
    format: "Paperback",
    stock: 100,
    reviews: [],
    rating: 4.8,
    tags: ["magic", "wizards", "coming of age"],
  },
]

export const categories = [
  "All",
  "Self Help",
  "Fiction",
  "Children",
  "Mystery",
  "Graphic Novel",
  "Psychology",
  "Contemporary",
  "Dystopian",
  "Classics",
  "Historical Fiction",
  "Horror",
  "Science Fiction",
  "Literary Fiction",
  "Thriller",
  "Feminist Literature",
  "Fantasy",
  "Young Adult",
]

