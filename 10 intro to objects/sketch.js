// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook", "Mr.Scott")
}

function draw() {
  background(220);
}

class Book{
  constructor(title,author,coverType,pages,isbn){
    this.title=title
    this.author=author
    this.coverType=coverType
    this.pages=pages
    this.isbn=isbn
  }

  printSummary(){
    print(this.title+",by"+this.author)
    print("length:"+this.pages+"pages.")
    print("Covertype:"+this.coverType)
    print("ISBN:"+this.isbn)
  }
}
