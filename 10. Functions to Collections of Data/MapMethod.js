// Prev > forEachMethod / Functions to Collections of Data


// map Method creates a new array from an existing array, with the results of calling a
// callback on every element in the array

// - duplicate an array
// - extract portions of an array
// - transform an array into new array


const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) { // t is each one of the strings in text
    return t.toUpperCase();
})

texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // ["ROFL", "LOL", "OMG", "TTYL"]
// the map generates a new array which is stored in the caps variable
// but it does not update texts


const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

// capture it in a variable
const doubles = numbers.map(function(num){
    return num * 2; // if the return is missing, it returns undefined
})


// capture it in array with an object for each element
// [
//     {num: 20,
//     isEven: false}
// ]

const numDetail = numbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0 // this will return true
    }
})


// we can use:
const doubles2 = [];
for(let num of numbers){
    doubles2.push(num * 2)
}



const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.');
})
// the originals are unchanged 





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

// to combine all the titles in one array we can use map
const titles = books.map(function(b){
    return b.title;
})



// Next > Arrow Functions Intro / Functions to Collections of Data



const thisYear = 2022;
let ageYear = 1993; // can be changed later

const age = () => {
    return thisYear - ageYear;
}