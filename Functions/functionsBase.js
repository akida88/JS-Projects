// Function is a reusable procedures
// They allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point

// 2 step process - 1. we define the function; 2. execute the function, run it
// methods = functions = chunks of code
"hello".toUpperCase() // toUpperCase is a build in method/function; build in set of instructions

// SYNTAX for a function declaration/statement
function funcName(parameters) {
   // do something
}

// 1. Define a function
function grumpus() {
   console/log('ugh... you again...');
   console.log('for the last time...');
}

// 2. Run it
grumpus // only shows that the function was registered, it just referencing it
grumpus(); // runs the code

// executing a function in a loop:
for(let i = 0; i < 50; i++) {
   grumpus();
}



const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);



// Next > diceRollFunction