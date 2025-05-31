class Lib {
    books:string[]
    availableBooks: string[]

    constructor(books:string[]){
        this.books = books
        this.availableBooks = [...books] // shallow copy
    }

    borrow(name:string){
        if(this.availableBooks.includes(name)){
            const idx = this.availableBooks.indexOf(name);
            this.availableBooks.splice(idx, 1)
            return name;
        }

        console.log("Sorry not available")
        return "";
    }
}

const books = ['A', 'B','C']
const library = new Lib(books)
console.log(library)

class Book {
    name:string;
    isAvailable: boolean

    constructor(name:string, isAvailable:boolean){
        this.name = name;
        this.isAvailable = isAvailable;
    }
}

class Libz {
    books:Book[];

    constructor(books:Book[]){
        this.books = books
    }

        borrow(name:string) :string {

            this.books.forEach((book:Book) => {
                if(book.name === name && book.isAvailable){
                    book.isAvailable = false;
                    return name;
                }
            })

            console.log("Sorry not available")

        // if(this.availableBooks.includes(name)){
        //     const idx = this.availableBooks.indexOf(name);
        //     this.availableBooks.splice(idx, 1)
        //     return name;
        // }

        // console.log("Sorry not available")
        return "";
    }
}

