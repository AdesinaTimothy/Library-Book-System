let books = [];


// Function to add book to the library system
function addBook (name, author, publishDate, shelfNumber) {
    const newBook = {
        name: name,
        author: author,
        publishDate: publishDate,
        shelfNumber: shelfNumber,
    };

    books.push(newBook);
    console.log(`Book titled ${name} added succesfully` );
};


// Function to remove book from the library system
// Function to remove book from the library system
function removeBook (name) {
    const index = books.findIndex((book) => book.name === name)

    if (index !== -1) {
        books.splice(index, 1);
        console.log(`Book titled ${name} removed successfully`);
    } else {
        console.log(`Book titled ${name} not found`);
    }
};

// Function to find book from the library system
function findBook (name) {
    const bookfound = books.find((book) => book.name === name)
    console.log(`The book with title: ${bookfound.name} written by
        ${bookfound.author} has been found on the bookshelf ${bookfound.shelfNumber}`);
}

// Function to filter books by Author

function filterBookByAuthor (authorName) {

    const bookWrittenByAuthor = books.filter ((book) => book.author === authorName);
    console.log(`These sets of book written by ${bookWrittenByAuthor.author} 
        has been by found`);
    console.log(bookWrittenByAuthor);
}

export { addBook, removeBook, findBook, filterBookByAuthor };