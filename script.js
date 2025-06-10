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
    const newBook = new Book(title, author, pages, finished);
    myLibrary.push(newBook);
}

// Add some books to the array
addBookToLibrary("Atomic Habits", "James Clear", 320, "yes");
addBookToLibrary("Digital Drift", "Lena Harrow", 278, "no");
addBookToLibrary("The Silence Protocol", "Jordan Myles", 412, "yes");
addBookToLibrary("Mind Garden", "Elena Liu", 301, "no");
addBookToLibrary("Crimson Ledger", "Marcus Flint", 495, "yes");
addBookToLibrary("Echoes of Ivory", "S.A. Winters", 389, "no");
addBookToLibrary("Break the Cycle", "Dana Thorne", 233, "yes");
addBookToLibrary("Second Moon", "Iris Marlowe", 367, "no");
addBookToLibrary("Neon Monastery", "Khalid Rami", 412, "yes");
addBookToLibrary("Chasing Horizons", "Ava DeWitt", 284, "no");
addBookToLibrary("The Regret Machine", "Tobias Krell", 442, "yes");
addBookToLibrary("Quiet the Signal", "Marin Ochoa", 360, "no");
addBookToLibrary("Glassworlds", "Noah Penn", 501, "yes");
addBookToLibrary("Letters from Solace", "Viola Kent", 318, "no");
addBookToLibrary("Edge of the Archive", "Colin Graye", 277, "yes");

function addRowToTable(book) {
    const myLibraryTable = document.querySelector("#add-books-with-js");
    
    const newRow = document.createElement("tr");
    newRow.setAttribute("book-id", book.id);
    newRow.setAttribute("class", "my-library-table-row");

    const titleCell = document.createElement("td");
    titleCell.setAttribute("class", "bookTableCell");
    titleCell.setAttribute("id", "titleCell");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.setAttribute("class", "bookTableCell");
    authorCell.setAttribute("id", "authorCell");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.setAttribute("class", "bookTableCell");
    pagesCell.setAttribute("id", "pagesCell");
    pagesCell.textContent = book.pages;

    const finishedCell = document.createElement("td");
    finishedCell.setAttribute("class", "bookTableCell");
    finishedCell.setAttribute("id", "finishedCell");
    finishedCell.textContent = book.finished;

    const changeStatusCell = document.createElement("td");
    const changeStatusCellButton = document.createElement("button");
    changeStatusCellButton.textContent = ("Change status");

    const deleteBookCell = document.createElement("td");
    const deleteBookCellButton = document.createElement("button");
    deleteBookCellButton.setAttribute("id", "deleteBook");
    deleteBookCellButton.setAttribute("book-id", book.id);
    deleteBookCellButton.textContent = ("Delete");

    // append buttons
    changeStatusCell.appendChild(changeStatusCellButton);
    deleteBookCell.appendChild(deleteBookCellButton);

    // append the cells to the newRow
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(finishedCell);
    newRow.appendChild(changeStatusCell);
    newRow.appendChild(deleteBookCell);

    // append newRow
    myLibraryTable.appendChild(newRow);
}

// Loop through myLibrary and add them to the table in the html file
myLibrary.forEach(addRowToTable);

/**
 * 
 * Dialog functions after this box
 * 
 */

const showDialogButton = document.querySelector("#btnAddBookDialog");
const addBookDialog = document.querySelector("#addBookDialog");
const outputBox = document.querySelector("output");
const btnAddBook = document.querySelector("#btnAddBook");
const addBookTitle = document.querySelector("#addBookTitle");
const addBookAuthor = document.querySelector("#addBookAuthor");
const addBookPages = document.querySelector("#addBookPages");
const addBookFinished = document.querySelector("#addBookFinished");

// When button is clicked open dialog
showDialogButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// What to do when dialog is closed
addBookDialog.addEventListener("close", (e) => {
    /* TODO: Add a row to the table! */
});

// add book when form is submitted
btnAddBook.addEventListener("click", (event) => {
    event.preventDefault(); // no form should be submitted
    addBookToLibrary(addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookFinished.value);
    addBookDialog.close();
});

/**
 * 
 *  Make delete button work
 */

const deleteBookButton = document.querySelectorAll('#deleteBook');
deleteBookButton.forEach((deleteBookButton) => {
    deleteBookButton.addEventListener("click", () => {
        const bookID = deleteBookButton.getAttribute("book-id");
        deleteBook(bookID);
    });
});

function deleteBook(bookID) {
    // Select corresponding row and delete the row
    const bookToDelete = document.querySelector(`[book-id="${bookID}"]`);
    bookToDelete.remove();

    // Delete book from myLibraryArray
    const index = myLibrary.findIndex(book => book.id === bookID);
    myLibrary.splice(index, 1);

    // Refresh the table
    refreshMyLibraryTable();
}

/**
 * 
 * Refresh the entire table to make sure no deleted books are printer
 * 
 */

function refreshMyLibraryTable() {
    // Select all TR elements
    const myLibraryTableTr = document.querySelectorAll('.my-library-table-row');
    myLibraryTableTr.forEach((myLibraryTableTr) => {
        myLibraryTableTr.remove()
    });

    // rebuild the table
    myLibrary.forEach(addRowToTable);
}
