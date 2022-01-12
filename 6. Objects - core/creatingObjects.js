// defining an object (creating)
// we use [] for an array
// we use {} for objects, a.k.a. object literal

// When you store an Obj in a variable it is a reference to that object

const fitBitData = {
   totalSteps       : 308727, // key : value
   totalMiles       : 211.7,  // the value can be strings, numbers, booleans, even arrays and other objects
   avgCalorieBurn   : 5755,
   workoutsThisWeek : '5 of 7',
   avgGoodSleep     : '2:13'
   45               : 'forty five'  // 45- property
};

// we dont use Obj to encode order, we would use an array

let comment = {
   username    : 'Akida',       // strings
   netScore    : 195,           // numbers
   commentText : "Sounds great",
   tags        : ['#funny', '#great'], // array and objects
   isGilded    : false          // boolean
}

// how to access an information using the dot syntax:
"asd".length // . + executing a method

fitBitData.totalMiles // 211.7
fitBitData.avgCalorieBurn // 5755

// All keys are converted to strings *Except for Symbols
// so adding 45 as a key wont work if we try to recall it by:
fitBitData.45 // uncaught syntax error
// it store it but it turns it as a string




// Using comas
// define an object with a property in it
let data = {a:1}; // a:1 - the property, if it's only one we dont need ,
// if we have a multiple properties the , is a must:
let secondData = {a:1, b:2, c:3}; // we can set them on different lines as well
