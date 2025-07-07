// Step 1 2
var library = [
    {
        title: "Your Next Five Moves: Master the Art of Business Strategy",
        author: "Patrick Bet-David and Greg Dinkin",
        about: "A book on how to plan ahead",
        pages: 320
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        about: "A practical book about discarding bad habits and building good ones",
        pages: 320
    }
]; 

// Step 4
function displayBooks(books) {
    var newTitle = books.map(book => `${book.title}`).join();
    var newAuthor = books.map(book => `${book.author}`).join();
    var newPage = books.map(book => `${book.pages}`).join();

    var newString =  newTitle + newAuthor + newPage;
    return newString;
}

console.log(displayBooks(library));






