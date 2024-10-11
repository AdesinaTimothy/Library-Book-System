// Library System that manages a collection of books

// List of books

// const books = [
//     {
//       name: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       publishDate: "1960-07-11",
//       shelfNumber: "A1"
//     },
//     {
//       name: "1984",
//       author: "George Orwell",
//       publishDate: "1949-06-08",
//       shelfNumber: "B2"
//     },
//     {
//       name: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       publishDate: "1925-04-10",
//       shelfNumber: "C3"
//     },
//     {
//       name: "Pride and Prejudice",
//       author: "Jane Austen",
//       publishDate: "1813-01-28",
//       shelfNumber: "D4"
//     },
//     {
//       name: "The Catcher in the Rye",
//       author: "J.D. Salinger",
//       publishDate: "1951-07-16",
//       shelfNumber: "E5"
//     },
//   ];

//   const newBook = {
//     name: "Brave New World",
//     author: "Aldous Huxley",
//     publishDate: "1932-08-30",
//     shelfNumber: "K11"
//   };

// let books = [];


// // Function to add book to the library system
// function addBook (name, author, publishDate, shelfNumber) {
//     const newBook = {
//         name: name,
//         author: author,
//         publishDate: publishDate,
//         shelfNumber: shelfNumber,
//     };

//     books.push(newBook);
//     console.log(`Book ${name} added succesfully` );
// };


// // Function to remove book from the library system
// function removeBook (name) {
//     const index = books.findIndex((book) => book.name === name)
//     console.log(index);

//     if (index !== -1) {
//         books.splice(index, 1);
//         console.log(`Book ${name} removed successfully`);
//     } else {
//         console.log(`Book ${name} not found`);
//     }
// };

// // Function to find book from the library system
// function findBook (name) {
//     const bookfound = books.find((book) => book.name === name)
//     console.log(`The book with title: ${bookfound.name} written by
//         ${bookfound.author} has been found on the bookshelf ${bookfound.shelfNumber}`);
// }

// // Function to filter books by Author

// function filterBookByAuthor (authorName) {

//     const bookWrittenByAuthor = books.filter ((book) => book.author === authorName);
//     console.log(`These sets of book written by ${bookWrittenByAuthor.author} 
//         has been by found`);
//     console.log(bookWrittenByAuthor);
// }

import { addBook, removeBook, findBook, filterBookByAuthor } from './mod.js'

//Add book to the books
addBook("1984", "George Orwell", "1949-06-08", "B2");
addBook("Animal Farm", "George Orwell", "1945-08-17", "B3");
addBook("To kill a MockingBird", "Harper Lee", "1960-07-11", "A1");
addBook("The Hobbit", "J.R.R. Tolkien", "1937-09-21", "C3");
addBook("The Great Gatsby", "F. Scott Fitzgerald", "1925-04-10", "C3");



// Remove book from books
removeBook("To kill a MockingBird");


// Find book
findBook("1984")

// Filter books by the name of the author
filterBookByAuthor("George Orwell");





  