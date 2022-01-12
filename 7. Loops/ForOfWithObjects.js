const movieReviews = { // object - not iterable
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

Object.keys(movieReviews) // it becomes iterable; gives the list of the keys - Arrival, Alien, Amelie, etc
Object.values(movieReviews) // gives a list of values - 9.5, 9, 8, 9, etc.


// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
// total /= ratings.length // can be used as well
console.log('Average Rating: ', avg);
