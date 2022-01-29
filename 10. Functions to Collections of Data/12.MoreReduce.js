// Prev > Reduce / Functions to Collections of Data


// grouping different values in an array using an {object}

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const results = votes.reduce(func, {})
// const results = votes.reduce((tally, val) => {
//     if(tally[val]) { // if tally of val
//         tally[val]++;
//     } else {
//         tally[val] = 1;
//     }
//     return tally
// }, {});



const tally = votes.reduce((tally, vote) => { // (tally, vote) is the callback
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {}); // Initial value: {}

tally; // {y: 7, n: 6}






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
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
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

 // Group the books by rating in a new object
//  {
//      2:[

//      ],
//      3:[

//      ]
//  }

const groupedByRatings = books.reduce((groupedBooks, book) => {
   const key = Math.floor(book.rating);
   if (!groupedBooks[key]) groupedBooks[key] = []; // check if exists, if not make it an empty []
   groupedBooks[key].push(book)
   return groupedBooks;
}, {})

// {4: [{sjdadagd}, {dsadasfa}]}




// Next> DefaultParameters / 11. JS Features