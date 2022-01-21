// Prev > Filter / Functions to Collections of Data



// EVERY
// accepts a boolean callback
// tests whether ALL elements in the array pass the provided function.
// It returns a Boolean value.

// if its true for every element, then the whole function/method returns true

const words = ["dog", 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => {
    return word.length === 3;
}); // true

const startWithD = words.every(word => word[0] === 'd'); // false

const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
}); // true



// SOME
// Similar to every, but returns true if ANY of the array
// elements pass the test function

const someWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
const longChar = someWords.some(word => {
    return word.length > 4;
}); // true

// Do any words start with 'Z'?
const startWithZ = someWords.some(word => word[0] === 'Z'); // false
// if it gets only one element true => it will return true

const someStartWithD = someWords.some(word => word[0] === 'd'); // true       // needs one to be true
const everyStartWithD = someWords.every(word => word[0] === 'd'); // false    // needs all to be true

// Do any words contain 'cake'?
const cakeWords = someWords.some(w => w.includes('cake')); // true





const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Galman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
 },
 {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
 },
 {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
 },
 {
    title: 'American Gods',
    authors: ['Nail Galman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
 },
 {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
 },
 {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
 },
 {
    title: 'The Overstory',
    authors: ['Rickard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
 },
 {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
 },
 {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
 }
 ]

// if all ratings are bigger than 3.5
 const allGoodBooks = books.every(book => book.rating > 3.5); // true
 // if its > 4.5 will be false

// if the books have two authors
const any2Authors = books.some(book => book.authors.length === 2);




// Next > Revisiting Sort / Functions to Collections of Data