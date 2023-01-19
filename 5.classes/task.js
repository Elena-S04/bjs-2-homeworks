class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state = this.state * 1.5);
  }

  set state(fixState) {
    if (fixState < 0) {
      this._state = 0;
    } else if (fixState > 100) {
      this._state = 100;
    } else {
      this._state = fixState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } else {
      return;
    }
  }

  findBookBy(type, value) {
    let searchBook = this.books.find((item) => item[type] == value);
    return searchBook ? searchBook : null;
  }

  giveBookByName(bookName) {
    if (this.books.find((item) => item.name === bookName)) {
      let bookAvailable = this.books.find((item) => item.name === bookName);
      return this.books.splice(this.books.indexOf(bookAvailable), 1)[0];
    } else {
      return null;
    }
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark >= 2 && mark <= 5) {
      if (subjectName in this.marks) {
        this.marks[subjectName].push(mark);
      } else {
        this.marks[subjectName] = [];
        this.marks[subjectName].push(mark);
      }
    }
  }

  getAverageBySubject(subject) {
    let keys = Object.keys(this.marks);

    if (!keys.find((key) => key === subject)) {
      return;
    } else {
      return (
        this.marks[subject].reduce((acc, item) => acc + item, 0) /
        this.marks[subject].length
      );
    }
  }

  getAverage() {
    let values = Object.values(this.marks);
    let valuesArr = [];

    values.forEach(value => {
      valuesArr.push(value.reduce((acc, item) => acc + item, 0)/value.length);
    });

    return valuesArr.reduce((acc, item) => acc + item, 0)/valuesArr.length
  }
}
