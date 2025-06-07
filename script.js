// Library variable
const myLibrary = [];

// Book constructor
function Book(title, author, pages, finished) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}

// Function to add a book
function addBookToLibrary(title, author, pages, finished) {

}