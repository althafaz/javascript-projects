// Define your Book class here:
class Book{
    constructor(title,author,copyrightDate,theIsbn,numOfPages,checkedOutNumber,isDiscarded){
            this.title = title
            this.author = author
            this.copyrightDate = copyrightDate
            this.theIsbn = theIsbn
            this.numOfPages = numOfPages
            this.checkedOutNumber = checkedOutNumber
            this.isDiscarded = isDiscarded     
    }

    checkout(uses=1) {
        this.checkedOutNumber += uses;
     }

    
} 

// Define your Manual and Novel classes here:
class Novel extends Book{

    constructor(title,author,copyrightDate,theIsbn,numOfPages,checkedOutNumber,isDiscarded){
        super(title,author,copyrightDate,theIsbn,numOfPages,checkedOutNumber,isDiscarded);
        this.age = 10
    }
    
    dispose(){
        if (this.checkedOutNumber > 100) {
        this.discarded = true;
            }
        }

}

class Manual extends Book {
    constructor(title,author,copyrightDate,theIsbn,numOfPages,checkedOutNumber,isDiscarded){
       super(title,author,copyrightDate,theIsbn,numOfPages,checkedOutNumber,isDiscarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = true;
       }
    }
 }

// Declare the objects for exercises 2 and 3 here:
let prideAndPre = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, false);
let shuttleBuliding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false);
console.log(shuttleBuliding.isDiscarded)

// Code exercises 4 & 5 here: