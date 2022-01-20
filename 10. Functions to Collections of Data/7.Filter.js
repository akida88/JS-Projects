// Prev > Array.find / Functions to Collections of Data



// Filter
// Creates a new array with all elements that pass the test implemented by the provided function

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter(n => {
//    return n % 2 === 1; // our callback returns true or false
//    // if it returns true, n it added to the filtered array
// })
// // [9, 7, 5, 3, 1]

// const smallNums = nums.filter(n => n < 5);
// // [4, 3, 2, 1]


const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// single line arrow function
const odds = nums.filter(n => n % 2 === 1);
// [35, 67, 109, 9]

const evens = nums.filter(n => n % 2 === 0);
// [34, 54, 102, 32]

const bigNums = nums.filter(n => n > 50);
// [67, 54, 109, 102]




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


// select the books with high ratings while not changing the books
const goodBooks = books.filter(b => b.rating > 4.3);

// filter fantasy books
const fantasyBooks = books.filter(book => (// book is the name of the parameter
   book.genres.includes('fantasy')
   ))

// filter books by short stories or essays
const shortForm = books.filter(book => (
   book.genres.includes('short stories') ||
   book.genres.includes('essays')
))

// search for books with "The" in the title
const theTitle = books.filter(book => (
   book.title.includes("The")
))


// the user searches for movie with The
const query = 'The';
const result = books.filter(book => {
   const title = book.title.toLowerCase();
   return title.includes(query.toLowerCase())
})





// Next > Some & Every / Functions to Collections of Data