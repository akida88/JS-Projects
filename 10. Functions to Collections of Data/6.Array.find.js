// Prev > Arrow Functions: Implicit Returns / Functions to Collections of Data

// Using build in methods

// FIND
// returns the value of the first element in the array
// that statisfies the provided testing function

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie => {
    return movie.includes('Mrs.')
}) // "Mr. and Mrs. Smith"

let movie2 = movies.find(m => m.indexOf('Mrs') === 0);
// "Mrs. Doubtfire"