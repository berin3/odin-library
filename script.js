const myLibrary = [];

class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    info() {
        return `${title} by ${author}, ${numPages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, numPages, read) {
    myLibrary.push(new Book(title, author, numPages, read));
}

function displayLibrary() {
    const display = document.querySelector("#display");
    display.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const numPages = document.createElement("p");
        const readLabel = document.createElement("label");
        const read = document.createElement("input");
        const deleteButton = document.createElement("button");

        title.textContent = "Title: " + book.title;
        author.textContent = "Author: " + book.author;
        numPages.textContent = "Pages: " + book.numPages;
        readLabel.textContent = "Read: ";
        read.type = "checkbox";
        read.checked = book.read;
        read.addEventListener("click", () => {
            myLibrary[index].read = !myLibrary[index].read;
            displayLibrary();
        });
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayLibrary();
        });
        deleteButton.style.display = "block";
        deleteButton.style.margin = "0 auto";
        deleteButton.style.marginTop = '15px';

        card.append(title, author, numPages, readLabel, read, deleteButton);
        card.style.border = "5px solid #FA812F";
        card.style.backgroundColor = "#FAB12F";
        card.style.padding = "5px";
        card.style.width = "250px";
        card.style.textAlign = "center";
        card.style.fontSize = "1.2rem";
        card.style.fontWeight = "bold";
        display.appendChild(card);
    })
}

let dialog = document.querySelector("dialog");

function addBook() {   
    dialog.show();
}

function closeDialogue() {
    dialog.close();
}

function handleForm(event) {
    event.preventDefault();
    let title = event.target[0].value;
    let author = event.target[1].value;
    let numPages = event.target[2].value;
    let read = event.target[3].value;
    addBookToLibrary(title, author, numPages, read);
    displayLibrary();
    closeDialogue();
}

addBookToLibrary("Ten", "SomeAuthor", 120, false);
addBookToLibrary("Eleven", "SomeAuthor", 999, true);
addBookToLibrary("Twenty", "AnotherAuthor", 220, false);

displayLibrary();
