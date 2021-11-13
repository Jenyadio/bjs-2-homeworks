class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      return this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
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
      this.type = "book";
      this.author = author;
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
  

  // Задача 2


  class Library {
  
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book)
      }
    }
  
    findBookBy(type, value) {
      let findBook = this.books.find(item => item[type] === value);
          if (findBook) {
              return findBook;
          } else {
              return null;
          };
    }
  
    giveBookByName(bookName) {
      let index = this.books.findIndex(item => item.name == bookName);
      if (index > -1){
        return this.books.splice(index, 1)[0]; 
      } else {
        return null;
      }
    }  
  }

  // Задача 3*

  class Student {

    constructor(name) {
      this.name = name,
      this.subjects = {}
    }
  
    addMark(mark, subject) {
      if (mark < 6 && mark > 0) {
        if (this.subjects[subject] === undefined) {
          this.subjects[subject] = [mark];
        } else {
          this.subjects[subject].push(mark);
        }
      } else {
        return 'Ошибка, оценка должна быть числом от 1 до 5';
      }
    } 
  
    getAverageBySubject(subject) {
      if (this.subjects[subject] !== undefined) {
        return this.subjects[subject].reduce((a, b) => (a + b)) / this.subjects[subject].length;
      } else if (this.subjects[subject] === undefined) {
        return 'Несуществующий предмет';
      }
    }
  
    getAverage() {
      let subjectsKeys = Object.keys(this.subjects)
      let sumMarks = 0;
      subjectsKeys.forEach((subject) => sumMarks += this.getAverageBySubject(subject));
      return sumMarks / subjectsKeys.length;
    }
  
    exclude(reason) {
      this.exclude = reason;
    }
  }
  