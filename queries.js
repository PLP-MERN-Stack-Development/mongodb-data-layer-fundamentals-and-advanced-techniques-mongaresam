// TASK 1

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


//TASK 2

// Query to find all books in the "Programming" genre
db.books.find({ genre: "Programming" });

// Query to find all books published after the year 2015
db.books.find({ published_year: { $gt: 2015 } });

// Query to find all book titles and their authors
db.books.find({ author: "Cal Newport" });

// Query to update the price 

db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 3000 } }
);

// Query to delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" });

//TASK 3

//query to find all books that are in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } }
)

//query to find all books that are in stock and published after 2010, displaying only title, author, and price
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
)


//query to find all books that are in stock and published after 2010, displaying only title, author, and price, sorted by price in ascending order and descending order
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1 })

db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 })

//query to find all books that are in stock and published after 2010, displaying only title, author, and price, sorted by title in ascending order, skipping the first 5 results, and limiting the output to 5 results
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .sort({ title: 1 })
  .skip(5)
  .limit(5)


//TASK 4

//query to find the average price of books in each genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre", 
      averagePrice: { $avg: "$price" }
    }
  }
])

//query to find the total number of books published by each publisher
db.books.aggregate([
  {
    $group: {
      _id: "$author", 
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

//query to find the total number of books published in each decade
db.books.aggregate([
  {
    $project: {
      decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] }
    }
  },
  {
    $group: {
      _id: "$decade",
      booksInDecade: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])


// TASK 5

// Create an index on the title field to optimize search queries by book title
db.books.createIndex({ title: 1 })
// Create a compound index on author and published_year to optimize queries filtering by author and sorting by published year
db.books.find({ author: "George Orwell" }).sort({ published_year: -1 })

// Explain the query plan to see if the index is being used
db.books.find({ author: "George Orwell" }).sort({ published_year: -1 }).explain("executionStats")







