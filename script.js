function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${numPages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);