class Book {

    constructor(bookID, title, author) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.isBorrowed = false; 
    }

    toString() {
        return `Book ID: ${this.bookID}, Title: ${this.title}, Author: ${this.author}, Borrowed: ${this.isBorrowed}`;
    }
}

class Member {

    constructor(memberID, memberName) {
        this.memberID = memberID;
        this.memberName = memberName;
        this.borrowedBooks = [];
        this.loanDays = 14;
    }

    borrowBook(book) {
        book.isBorrowed = true;
        this.borrowedBooks.push(book);
    }

    toString() {
        let borrowedBookTitles = this.borrowedBooks.map(book => book.bookID).join(", ");
        const currentLoanDays = this.borrowedBooks.length > 0 ? this.loanDays : 0;
        return `Member ID: ${this.memberID}, Name: ${this.memberName}, Borrowed Book: ${borrowedBookTitles || "None"}, Loan Days: ${currentLoanDays}`;
    }
}

class LibraryService {
    
    constructor() {
        this.allBooks = [];
        this.allMembers = [];
    }

    addBook(bookID, title, author) {
        const newBook = new Book(bookID, title, author);
        this.allBooks.push(newBook);
    }   

    addMember(memberID, memberName) {
        const newMember = new Member(memberID, memberName);
        this.allMembers.push(newMember);
    }

    findMember(memberID) {
        return this.allMembers.find(member => member.memberID === memberID);
    }

    findBook(bookID) {
        return this.allBooks.find(book => book.bookID === bookID);
    }

    borrowBook(memberID, bookID) {
        const member = this.findMember(memberID);
        const book = this.findBook(bookID);

        if (member && book && !book.isBorrowed) {
            member.borrowBook(book);
        } else {
            console.log("Book is already borrowed.");
        }
    }

    getAllLoans() {
        let loans = [];
        this.allMembers.forEach(member => {
            member.borrowedBooks.forEach(book => {
                loans.push(`Member: ${member.memberName} (ID: ${member.memberID}) has borrowed Book: ${book.title} (ID: ${book.bookID})`);
            });
        });
        let memberDetails = this.allMembers.map(member => member.toString()).join("\n");
        return `${memberDetails}`;
    }

    toString() {
        let memberDetails = this.allMembers.map(member => member.toString()).join("\n");
        let bookDetails = this.allBooks.map(book => book.toString()).join("\n");
        return `Library Members:\n${memberDetails}\n\nLibrary Books:\n${bookDetails}`;
    }

}

const libraryService = new LibraryService();
 	

libraryService.addBook(1, "Clean Code", "Robert C. Martin");

const book = libraryService.findBook(1);
console.log(book.toString());
libraryService.addMember(101, "John Doe");

const member = libraryService.findMember(101);
console.log(member.toString());
libraryService.borrowBook(101, 1, 14);

console.log(libraryService.findMember(101).toString());
console.log(libraryService.findBook(1).toString());
libraryService.addMember(102, "Jane Smith");
libraryService.borrowBook(102, 1, 7);

console.log(libraryService.getAllLoans());