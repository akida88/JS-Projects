// Prev> RestParameters / JS Features



// DESTRUCTURING [ARRAY]
// A short, clean syntax to 'unpack';
// - Values from arrays
// - Properties from objects
// Into distinct variables.

// unpack values from data structures, from arrays/objects


// ARRAY DESTRUCTING
// we unpack based on a position

const raceResults = [ 'Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Jared Ward' ];

// using standard array
// const gold = raceResults[0] // using specific index saved to a variable
// const silver = raceResults[1]
// const bronze = raceResults[2]

const [ gold, silver, bronze ] = raceResults;
gold; // 'Eliud Kipchoge'
silver; // 'Feyisa Lelisa'
bronze; // 'Galen Rupp'


// we can use spread ... in the destructuring
const [ fastest, ...everyoneElse ] = raceResults;
fastest; // 'Eliud Kipchoge'
everyoneElse; // 'Feyisa Lelisa', 'Galen Rupp'

// this does not change raceResults in any way


//const [first, fourth] = raceResults;
// firts Eluid Kipchoge
// fourth Feyisa Lelisa


// skip an idex:
// const [first, , fourth] = raceResults;
// first Eluid Kipchoge
// fourth Galen Rupp

const [first, , , fourth] = raceResults;
// fourth Ghirmay Ghebreslassie

const [ winner, , ...others] = raceResults;
// other 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Jared Ward'




// Next> DestructingObjects / JS Features