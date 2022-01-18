// Prev >  Arrow Functions Intro / Functions to Collections of Data


// Implicit return

// Adding an implicit return to an arrow function means we dont need the
// return keyword itself 


// All these functions do the same thing:

// const isEven = function (name) { // regular function expression
//     return num % 2 === 0;
// }


// optional () around the param
// const isEven = (num) => { // arrow function with parens around param
//     return num % 2 === 0;
// }


// const isEven = num => { // no parens around param
//     return num % 2 === 0;
// }

// const isEven = num => ( // implicit return
//     num % 2 === 0
// );

// const isEven = num => num % 2 === 0; // one-liner implicit return





// const square = (n) => {   // const square = n => also works without the ()
//     return n * n; // returns a single expression
// }

// const square = n => (     // using () not {}
//     n * n
// ) 

// for simple arrow functions we can use:
//const square = n => n * n;



// const arr = l => ( // for longer code we use () just to make it easy to read
//     [dasdad,fsafa,sfafa,fasfafa,safasfsf,gsdg]
// )



// if we have an additional logic:
// const square = n => ( // this is invalid arrow function
//     if (n < 0) {
//         return false;
//     }
//     n * n
// )




const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// double every num and map it into a new array
// without an arrow function
const doubles1 = nums.map(function(n) {
    return n * 2;
})


// using a regular arrow function
const doubles2 = nums.map(n => {
    return n * 2;
})

// using implicit function
const doubles3 = nums.map(n => n * 2);


// const parityList = nums.map(function(n){
//     if(n % 2 === 0) return 'even';
//     return 'odd';
// })


// using arrow function with multiple expressions 
// const parityList = nums.map((n) => {
//     if(n % 2 === 0) return 'even'; // if
//     return 'odd'; // else condition
// });


// using ternary operator for writing an implicit function
// const parityList = nums.map((n) => (
//     n % 2 === 0 ? 'even' : 'odd' // if this return even otherwise odd
// ));


// on one line
const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');



// Next > Array.find / Functions to Collections of Data