// Prev> MoreReduce / Functions to Collections of Data


// Default function parameters

// The old way 
// function multiply(a, b) {
//     b = typeof b !== 'undefined' ? b : 1;
//     return a * b;
// }

// multiply(7); // 7
// multiply(7, 3); // 21


// function multiply(x, y) {
//     // adding a default value to y if not passed
//     if (typeof y = 'undefined') {
//         y = 1;
//     }
//     return x * y;
// }


// shorter way
// function multiply(x, y) {
//     // using turnary operator
//     y = typeof y === "undefined" ? 1 : y
//     return x * y;
// }



// the new parameter syntax
// function multiply(a, b = 1) {
//     return a * b;
// }

// multiply(4); // 4
// multiply(4, 5); // 20


// const greet = (person, greeting = "Hi") => {
//     console.log(`${greeting}, ${person}!`)
// }


// const blah = (x, y = [1, 2, 3]) => {
//     console.log(x, y);
// }


// Order matters
const greet = (person, greeting = "Hi", punctuation = '!') => { // not possible
    console.log(`${greeting}, ${person} ${punctuation}`)
}

greet('Anya') // Hi, Anya !
greet('Anya', '?') // ?, Anya !

// The default parameters should be in the end of the parameter list!



// Next> SpreadFunctionCalls / JS Features