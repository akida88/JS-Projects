// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// *****************************************************************************************************
let shoppingList = [ 'cereal', 'cheese', 'ice'];

// an empty array
let empty = [];

// number array
let num = [1, 2, 4, 6, 7];

// string array
let color = ['red', 'blue'];

//mixed array
let mix = ['red', 1, null, true, NaN];







// *****************************************************************************************************
// Arrays are indexed
let colors = ['red', 'orange', 'yellow', 'green'];

colors.length //4

colors[0] // 'red'
colors[1] // 'orange'
colors[2] // 'yellow'
colors[3] // 'green'
colors[4] // 'undefined'







// ****************************************************************************************************
// Modifying arrays
colors[0] = 'red';

colors[2] = 'yellow'
colors[3] = 'orange'

colors[4]; // 'undefined'
colors[4] = 'blue'
//["red, "orange", "yellow", "green", "blue"]




let shoppingList1 = ['Chedar Cheese', '2% Milk'];

shoppingList1[1] = 'Whole Milk'; //update a value
shoppingList1[2] = 'Ice Cream';  // add a value/item

shoppingList1[shoppingList1.length] = 'Tomatoes'; //if we dont know the last index
// this will always add to the end







// ****************************************************************************************************
// Array Methods:
// Push - add to end
// Pop - remove from end
// Shift - remove from start
// Unshift - add to start

let topSongs = [
   'First Time Ever I Saw Your Face',
   'Nirvana',
   'A Day In The Life',
   'Life On Mars'
];

topSongs.push('Fortunate Sun');
topSongs.pop(); // to remove the last item from the array



// in the chrome console
let dishesToDo = ['big platter'] // returns undefined

dishesToDo.unshift('large plate') // returns 2
dishesToDo.unshift('small plate') // returns 3
dishesToDo // small plate, large plate, big platter

// adding multiple items with unshift:
dishesToDo.unshift('fork', 'knife') // it returns them in order fork, knife
dishesToDo.push('cutting board', 'cookie sheet')

// shift removes the first element from an array and returns that removed element. This method changes the length of the array.
dishesToDo.shift() // returns small plate









// More MeETHODS

// Concat - merge arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'mushrooms'];
let meats = ['chicken'];

console.log(fruits.concat(veggies)); // returns apple, banana, asparagus, mushrooms
console.log(veggies.concat(fruits)); // returns asparagus, mushrooms, apple, banana
// still fruits and veggies are unchanged

let allFood = fruits.concat(veggies, meats);







// includes and indexOf Methods

// includes returns true or false - boolean method
let ingredients = [
   'water',
   'flour',
   'eggs',
   'butter'
];

ingredients.includes('fish'); // returns false
ingredients.includes('eggs'); // returns true

// fromIndex - to specify where to start searching from
ingredients.includes('water', 3) // if it includes water after index of 3 // returns false


if(ingredients.includes('flour')) {
   console.log('I am gluten free, I cannot eat that!');
}



// indexOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// if it's not present it returns -1; can be used with index ('fish'), 3
// check it in the console:
ingredients.indexOf('eggs'); // returns 3
ingredients.indexOf('fish'); // returns -1

// to know where is included:
ingredients.indexOf('flour') !== -1


// Reverse and Join
// reverse - reverses an array and change it
let letters = ['A', 'B', 'C'];
// in the console:
letters.reverse() // returns C,B,A if we recall letters is again C,B,A

// join - takes an array and joins the values inside and returns them into a one string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

letters.join() // in the console; returns the letters with ,








// Slice - it takes a portion of an array and it makes a new array with it
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 2); // returns shark, salmon: the second number is not included so it should be 3
let mammals = animals.slice(2, 4); // returns whale, bear
let reptiles = animals.slice(4, 6); // or use only 4 to go until the end

// if we pass a negative number it will count backwards from the end of the array
let quadruped = animals.slice(-3); // returns bear, lizard, tortoise
animals.slice(-3, -1); // returns bear, lizard
animals.slice(); // makes a copy of the array






// Splice - removes/replace elements or adds in new elements in an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Sintax - splice(start, deleteCount, item1, item2, itemN)

animals.splice(1, 0, 'octopus') // for adding; now animals returns shark, octopus, salmon, etc.
animals.splice(3, 2) // returns whale, bear that were deleted and now animals does not contain them





// Sort - updates a array in place
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let people = ['Robinson', 'Angie', 'Jolene', 'Maggie', 'Roxanne'];
people.sort() // returns Angie, Jolene, Maggie, Robinson, Roxanne

let nums = [34,10,1000,99];
nums.sort() // returns 10, 1000, 34, 99
// it convers every single value to a string and then it compares their character code
// check compare function
