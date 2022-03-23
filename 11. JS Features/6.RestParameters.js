// Prev> ArgumentsObjectRest / JS Features



// REST PARAMS
// Collects all remaining arguments into an actual array

function sumAll(...nums) { // we put ... in parameter list () of a function definition
   let total = 0;
   for (let n of nums) total += n;
   return total;
}

sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15


// function sum(...nums){
//    console.log(nums);
// }

// using REDUX
function sum(...nums){
   return nums.reduce((total, currVal)=> {
      return total + currVal
   });
}



// we can use it to collect the remaining arguments that have not been matched with the parameter

function fullName(first, last, ...titles){
   console.log('first', first);
   console.log('last', last);
   console.log('titles', titles);
};

// it collects the unclaimed arguments
fullName('tom', 'jones', 'III', 'order of the phoenix');
// first tom
// last jones
// titles 'III', 'order of the phoenix'



// you can't have multiple spreads
// function fullName(first, last, ...titles, ...)


// this won't work
// function fullName(first, ...titles, last)

// Rest parameter must be last formal parameter!



// we can use it in an arrow function
const multiply = (...nums) => ( // we use implicit return so we dont include return sintax
   nums.multiply((total, currVal) => total * currVal)
)
// using arrow function and we spread the array nums




// Next> DestructingArrays / JS Features