// Prev > Arrow Functions: Implicit Returns / Functions to Collections of Data

// Using build in methods

// FIND
// returns the value of the first element in the array
// that statisfies the provided testing function
// that value needs to return true or false and each time .find will call that function with one of the elements
// and if the function returns true then its done and will return the value of that element
// it returns only the 1 value that was true

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

// in () should be a boolean function - true/false
let movie = movies.find(movie => {
    return movie.includes('Mrs.') // shows the first value in which it includes Mrs.
}) // "Mr. and Mrs. Smith"


// movies that starts with Mrs
let movie2 = movies.find(m =>
    m.indexOf('Mrs') === 0
); // "Mrs. Doubtfire"




const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Galman'],
    rating: 4.25
 },
 {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
 },
 {
    title: 'American Gods',
    authors: ['Neil Galman'],
    rating: 4.11
 },
 {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
 }
]


// find a book that has rating grater than 4.3
// b as the parameter; saved in a variable const
const goodBook = books.find(b => b.rating >= 4.3) // returns the first march

const neilBook = books.find(b => b.authors.includes(("Neil Galman")))


// can be used in cases when:
// - find something based on id
// - deleting a commend with an id
// deletePost(2) // function deletePost; id in the ()
// postMessage.find(p => p.id === 2)




// Next > Filter / Functions to Collections of Data