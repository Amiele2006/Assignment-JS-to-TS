"use strict";
class Lib {
    constructor(books) {
        this.books = books;
        this.availableBooks = [...books]; // shallow copy
    }
    borrow(name) {
        if (this.availableBooks.includes(name)) {
            const idx = this.availableBooks.indexOf(name);
            this.availableBooks.splice(idx, 1);
            return name;
        }
        console.log("Sorry not available");
        return "";
    }
}
const books = ['A', 'B', 'C'];
const library = new Lib(books);
console.log(library);
class Book {
    constructor(name, isAvailable) {
        this.name = name;
        this.isAvailable = isAvailable;
    }
}
class Libz {
    constructor(books) {
        this.books = books;
    }
    borrow(name) {
        this.books.forEach((book) => {
            if (book.name === name && book.isAvailable) {
                book.isAvailable = false;
                return name;
            }
        });
        console.log("Sorry not available");
        // if(this.availableBooks.includes(name)){
        //     const idx = this.availableBooks.indexOf(name);
        //     this.availableBooks.splice(idx, 1)
        //     return name;
        // }
        // console.log("Sorry not available")
        return "";
    }
}
