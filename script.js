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

// Loop through myLibrary and add them to the table in the html file
const myLibraryTable = document.querySelector("#add-books-with-js");
const newRow = document.createElement("tr");

const nrCell = document.createElement("td");
nrCell.setAttribute("class", "bookTableCell");
nrCell.setAttribute("id", "numberCell");
nrCell.textContent = "1";

const titleCell = document.createElement("td");
titleCell.setAttribute("class", "bookTableCell");
titleCell.setAttribute("id", "titleCell");
titleCell.textContent = "test";

const authorCell = document.createElement("td");
authorCell.setAttribute("class", "bookTableCell");
authorCell.setAttribute("id", "authorCell");
authorCell.textContent = "test";

const pagesCell = document.createElement("td");
pagesCell.setAttribute("class", "bookTableCell");
pagesCell.setAttribute("id", "pagesCell");
pagesCell.textContent = 100;

const finishedCell = document.createElement("td");
finishedCell.setAttribute("class", "bookTableCell");
finishedCell.setAttribute("id", "finishedCell");
finishedCell.textContent ="no";

// append the cells to the newRow
newRow.appendChild(nrCell);
newRow.appendChild(titleCell);
newRow.appendChild(authorCell);
newRow.appendChild(pagesCell);
newRow.appendChild(finishedCell);

// append newRow
myLibraryTable.appendChild(newRow);