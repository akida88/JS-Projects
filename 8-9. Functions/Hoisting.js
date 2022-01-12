// Prev > Callbacks / Functions

// var animal = 'Tapir';
// console.log(animal);

// switching the order is called Hoisting
// console.log(animal);
// var animal = 'Tapir'; // returns undefined

// when we declare variables without initializing them:
// var x; // x is set to undefined

// it runs the code like this:
// var animal;
// console.log(animal);
//  = 'Tapir';


// Using let and const in Hoisting

// console.log(shrimp); // returns an error
let shrimp = 'Harlequin Shrimp';
console.log(shrimp);
// variable declarations made with let are not hoisted
// the behavior with const is the same



// function declarations/ statements are hoisted
howl(); // returns AWWOOO

function howl(){
   console.log("AWWOOOO");
}




// using function expression // they are not hoisted
hoot(); // does not work but:
console.log(hoot); // it exists but its not a function // returns undefined

var hoot = function() {
   console.log("HOOO HOOOOO")
}



// Next > ArrayCallbackMethods / Apply Functions to Collections of Data