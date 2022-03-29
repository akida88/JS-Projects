// Prev> DestructingParameters / JS Features


// add methods to objects
// use new object shorthand syntax
// use computer properties
// understand prototypes
// explain how it works


// SHORTHAND PROPERTIES

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const getStats = (arr) => {
// const max = Math.max(...arr);
// const min = Math.min(...arr);
// const sum = arr.reduce((sum, r) => sum + r);
// const avg = sum / arr.length;
// return { // return an object containing all the stats
//       max: max,
//       min: min,
//       sum: sum,
//       avg: avg
//    }
// }

// const stats = {min, max, sum, avg}



// creating object literals with variables


// using shorthand sintax
const getStats = (arr) => {
   const max = Math.max(...arr);
   const min = Math.min(...arr);
   const sum = arr.reduce((sum, r) => sum + r);
   const avg = sum / arr.length;
   return {
         max, // will create a key with a name of max and a value of the value of max
         min,
         sum,
         avg
      }
   }


const stats = getStats(reviews);
stats; // {min: 2.8, max: 5, sum:27.74, avg: 3.83}





// Next> Computed Properties