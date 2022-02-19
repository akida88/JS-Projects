// Prev> SpreadFunctionCalls / JS Features


// SPREAD in Array Literals
// Create a new array using an existing array.
// Spread the elements from one array into a new array
// Using to combine arrays, make copy of arrays, etc.

const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6 ];

[ ...nums1, ...nums2 ];
// [1, 2, 3, 4, 5, 6]

[ 'a', 'b', ...nums2 ];
// ["a", "b", 4, 5, 6]

[ ...nums1, ...nums2, 7, 8, 9 ];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

// easy to see, easy to add elements:
const mollusca = [...cephalopods, ...gastropods]; 
// will return an array combining the two arrays, while they stay unchanged

// adding more elements:
// ["garden slug", ...cephalopods, ...gastropods]

cephalopods.concat(gastropods);
// returns the same result


// Most common uses of Spread is to make a copy of an array
const cephCopy = [...cephalopods]; // they are now === to each other
// cephCopy === cephalopods // false


// referencing the same reference
const copy = cephalopods;
// copy === cephalopods // true

"abcdefg".split(''); // gives us an array "a", "b", "c", etc.
[..."abcdefg"]; // will return the same as split

[..."abc", ..."def", "HELLO!"]; 
// ['a', 'b', 'c', 'd', 'e', 'f', 'HELLO!']





// Next>  / JS Features