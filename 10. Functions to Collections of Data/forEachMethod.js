// Prev > ArrayCallbackMethods / Functions to Collections of Data


// forEach method
// Accepts a callback function.
// Calls the function once per element in the array.

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (n) {
//    console.log(n * n)
//    // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
// });

// nums.forEach(function (el) {
//    if (el % 2 === 0) {
//       console.log(el)
//       //prints: 8, 6, 4, 2
//    }
// })



const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function(num){
//    console.log(num);
//    // passes each element one at a time
// })


// function printTriple(n) {
//    console.log(n * 3);
// }

// numbers.forEach(printTriple);
// // printTriple(20)
// // printTriple(21)
// // printTriple(22)



// with forEach we can add a second parameter to the callback
// if we want to use the index
numbers.forEach(function(num, index){
   console.log(index, num);
});






// a complex array[] which every element is an object{}
const books = [{
      title: 'Good Omens',
      authors: ['Terry Pratchett', 'Neil Galman'],
      rating: 4.25
   },
   {
      title: 'Bone: The Complete Edition',
      authors: ['Jeff Smith'],
      rating: 4.42
   },
   {
      title: 'American Gods',
      authors: ['Neil Galman'],
      rating: 4.11
   },
   {
      title: 'A Gentleman in Moscow',
      authors: ['Amor Towles'],
      rating: 4.36
   }
]


// print each title:
books.forEach(function (book) {
   console.log(book.title.toUpperCase());
})

// regular for loop
// for(let i = 0; i < books.length; i ++) {
//    console.log(book[i].title.toUpperCase())
// }

// for of loop
// for(let book of books) {
//    console.log(book.title.toUpperCase());
// }





// Next > MapMethod / Functions to Collections of Data