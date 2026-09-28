export class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }

    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }

    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(value) ||
      value <= 0 ||
      value > currentYear
    ) {
      throw new Error(`Year must be between 1 and ${currentYear}`);
    }

    this.#year = value;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    );
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Books must be a non-empty array");
    }

    if (!books.every((book) => book instanceof Book)) {
      throw new Error("Every item must be an instance of Book");
    }

    return books.reduce((oldestBook, currentBook) =>
      currentBook.year < oldestBook.year ? currentBook : oldestBook
    );
  }
}