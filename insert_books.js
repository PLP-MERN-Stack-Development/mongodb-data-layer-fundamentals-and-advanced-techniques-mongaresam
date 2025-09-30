// insert_books.js

db.books.insertMany([
  {
    title: "The Silent River",
    author: "John Maxwell",
    genre: "Fiction",
    published_year: 2015,
    price: 1200,
    in_stock: true,
    pages: 320,
    publisher: "HarperCollins"
  },
  {
    title: "Modern JavaScript",
    author: "Ethan Brown",
    genre: "Programming",
    published_year: 2020,
    price: 2500,
    in_stock: true,
    pages: 500,
    publisher: "O'Reilly Media"
  },
  {
    title: "The Lost Kingdom",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    published_year: 2018,
    price: 1800,
    in_stock: false,
    pages: 400,
    publisher: "Bloomsbury"
  },
  {
    title: "Data Science for All",
    author: "Jake VanderPlas",
    genre: "Technology",
    published_year: 2021,
    price: 3000,
    in_stock: true,
    pages: 600,
    publisher: "O'Reilly Media"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-help",
    published_year: 2016,
    price: 1500,
    in_stock: true,
    pages: 250,
    publisher: "Grand Central Publishing"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Philosophy",
    published_year: -500,
    price: 800,
    in_stock: true,
    pages: 150,
    publisher: "Penguin Classics"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 1000,
    in_stock: false,
    pages: 200,
    publisher: "Scribner"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 2700,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 2200,
    in_stock: true,
    pages: 320,
    publisher: "Penguin Random House"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 2000,
    in_stock: false,
    pages: 480,
    publisher: "Farrar, Straus and Giroux"
  }
]);
