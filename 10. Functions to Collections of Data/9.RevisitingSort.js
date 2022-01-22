// Prev > Some&Every / Functions to Collections of Data


// SORT
// arr.sort(compareFunc(a, b))

// If compareFunc(a, b) returns less than 0     // Sort a before b
// If compareFunc(a, b) returns 0      // Leave a and b unchanged with respect to each other
// If compareFunc(a, b) returns greater than 0      // Sort b before a

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort(); // sorts them by the first character, not by their value
// [12, 3000, 35.99, 400.5, 9500, 99.99]

const ascendingSort = prices.sort((a, b) => a - b); // standard sort
// [12, 35.99, 99.99, 400.5, 3000, 9500]
// a will be 400.5, b = 3000 // returns -

const descendingSort = prices.sort((a, b) => b - a);
// [9500, 3000, 400.5, 99.99, 35.99, 12]
// if a = 1000, and b = 4000 => gives + number

// prices will be updated, but if we use .slice the original array wont be changed


// const ascendingSort = prices.slice().sort((a, b) => a - b);
// .slice makes a copy of that array




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


 // passing a callback to our sort in the ()
 // sorting the books by lowest to highest rating
books.sort((a, b) => a.rating - b.rating);

// reverse rating
books.sort((a, b) => b.rating - a.rating);




// Next > ReduceIntro / Functions to Collections of Data