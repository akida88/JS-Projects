// a nice and easy way to iterating over arrays or other iterable objects

// for (variable of iterable) {    // iterable = array, string, other items
//    statement
// }
// the variable will store each individual element of the array or the string


let tina = [ "tattoo", "clay", "pole"];
for (let t of tina) {
   console.log(t);
}





let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]); // we use [i] to access every element in the variable subreddits
}

//Much cleaner  with a for...of loop!
for (let sub of subreddits) { // iterating over each element in an array
	console.log(sub);
}

//Works with other iterables, like strings!
for (let char of 'cockadoodledoo') { // each character in a string
	console.log(char.toUpperCase());
}


