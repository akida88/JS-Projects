//    THIS

// In JavaScript, the THIS keyword refers to an object.

// Which object depends on how THIS is being invoked (used or called).

// The THIS keyword refers to different objects depending on how it is used:

// In an object method, THIS refers to the object.
// Alone, THIS refers to the global object.
// In a function, THIS refers to the global object.
// In a function, in strict mode, THIS is undefined.
// In an event, THIS refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer THIS to any object.


// NOTE!! THIS is not a variable. It is a keyword. You cannot change the value of THIS.

// Check https://www.w3schools.com/js/js_this.asp for more!



// this as reference to the current execution scope, it's gonna give object back

// reference to the global scope:
function sayHi(){
   console.log("Hi");
   console.log(this);
}
// when sayHi is defined like this it is added as a property, it is a method on the windows object
// the window is the global scope of the browser
// so THIS inside of a function normally refers to the window in the browser

sayHi() // returns 1. Hi and 2. Window object containing methods



// when declaring a variable with var
var color = "teal" // that variable color is added to the window/global scope
window.color // teal
// but this does not apply for let and const

let num = 400; // it is not added to the window object while var is
window.num // undefined


// function expression
const greet = function() {
   console.log(this);
}

// THIS is a reference to an object and that object represents the current
// execution scope