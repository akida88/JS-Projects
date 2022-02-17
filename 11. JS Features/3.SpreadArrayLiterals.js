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


