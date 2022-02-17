// Prev> DefaultParameters / JS Features


// SPREAD
// Not supported in IE
// MDN definition: Spread syntax allows an iterable such as an array to be expanded in places
// where zero or more arguments (for function calls) or elements (for array literals)
// are expected, or an object expression to be expanded in places where zero or
// more key-value pairs (for object literals) are expected.



// SPREAD in a Function Calls
// Expands an iterable (array, string, etc.) into a list of arguments

const nums = [ 9, 3, 2, 8 ]; // a list of numbers 
Math.max(nums); // NaN
// Expects each argument to be a number, so it does not work
// Use spread
Math.max(...nums); // 67
// Same as calling:
// Math.max(9,3,2,8)
// Spread breaks the num in 4 separate arguments

// NB - Math.max> returns the higher number; Math.min> returns the smallest number

// Spread syntax is always the same -> ... (three dots)
// but it means different things depending where you use it


function giveMeFour(a, b, c, d) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
}

const colors = ['red', 'orange', 'yellow', 'green']

giveMeFour(colors)
// a ('red', 'orange', 'yellow', 'green')
// b (undefined)
// c (undefined)
// d (undefined)

giveMeFour(...colors) // spreading the array into separate arguments
// a red
// b orange
// c yellow
// d green

// later will learn how to use n arguments 

const str = "GOAT"; // it iterates one character of a time
giveMeFour(...str)
// a G
// b O
// c A
// d T



// Next> SpreadArrayLiterals / JS Features