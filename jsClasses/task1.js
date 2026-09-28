import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book(
  "Shantaram",
  "Gregory David Ro",
  2003
);

const book2 = new Book(
  "Catch-22",
  "Joseph Heller",
  1961
);

const ebook1 = new EBook(
  "The Book of Joe",
  "Jonathan Tropper",
  2003,
  "PDF"
);

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.title = "Shantaram";
book1.year = 1111;

ebook1.fileFormat = "EPUB";

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

console.log(ebook1.fileFormat);

const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Oldest book:");
oldestBook.printInfo();

const ebook2 = EBook.fromBook(book2, "EPUB");

console.log("EBook created from Book:");
ebook2.printInfo();