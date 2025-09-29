import Media from "./media.js";
import Book from "./book.js";
import CD from "./cd.js";
import Movie from "./movie.js";

const book1 = new Book("Atomic Habits", "James Clear", 320);

console.log(book1.title);    // "Atomic Habits"
console.log(book1.author);   // "James Clear"
console.log(book1.pages);    // 320

book1.toggleCheckOutStatus();
console.log(book1.isCheckedOut); // true

book1.addRating(5);
book1.addRating(4);
book1.addRating(5);
console.log(book1.ratings);        // [5, 4, 5]
console.log(book1.getAverageRating()); // 4.67

const cd1 = new CD("Greatest Hits", "Coldplay", ["Yellow", "Fix You", "Clocks"]);

console.log(cd1.title);    // "Greatest Hits"
console.log(cd1.artist);   // "Coldplay"
console.log(cd1.songs);    // ["Yellow", "Fix You", "Clocks"]

cd1.toggleCheckOutStatus();
console.log(cd1.isCheckedOut); // true

cd1.addRating(5);
cd1.addRating(4);
console.log(cd1.ratings);        // [5, 4]
console.log(cd1.getAverageRating()); // 4.5

const movie1 = new Movie("Inception", "Christopher Nolan", 148);

console.log(movie1.title);     // "Inception"
console.log(movie1.director);  // "Christopher Nolan"
console.log(movie1.runtime);   // 148

movie1.toggleCheckOutStatus();
console.log(movie1.isCheckedOut); // true

movie1.addRating(5);
movie1.addRating(4);
movie1.addRating(3);
console.log(movie1.ratings);        // [5, 4, 3]
console.log(movie1.getAverageRating()); // 4