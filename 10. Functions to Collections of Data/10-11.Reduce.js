// Prev > RevisitingSort / Functions to Collections of Data


// REDUCE
// Executes a reducer function on each element of the array,
// resulting in a single value.

// it takes an array of values and reduces them down to a single value
// a.k.a summing every element in an array
// multiplying, summing, accumulating data, finding the maximum value in entire array  


// Basics
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // 3+5=8 /8+7=15 /15+9=24 /24+11=35
});



const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
});
// total is inicialized to the first element
// total                    currentVal             returns
// 3                            4                    12
// 12                           5                    60
// 60                           6                    360
// 360                          7                    2520




// ********************************************************************
// ADVANCE use cases for Reduce

// finding the maximum value in an array
// updating max if we find a current larger value
let grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const topScore = grades.reduce((max, currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// });
// topScore; // 99

// max         currVal         return
// 87             64              87
// 87             96              96
// 96             92              96, etc.


// A shorter option w/ Math.max & implicit return
const topScore = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
});


const minScore = grades.reduce((min, currVal) => ( // using implicid return for a single expression 
    Math.min(min, currVal)
));


[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
    return accumulator + currentValue; 
});
// Returns: 30


// you can pass in an additional starting value after the callback
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);
// Returns: 130


// arr.reduce(callback, initialValue)
// the callback is usually inline anonymous function but after the function} we put , and then the initial value


const sum = [10, 20, 30, 40, 50].reduce((sum, currVal)=>{
    return sum+currVal;
}, 0); // can be used other numbers like 588, 1000, etc.
// if we dont specify an initial value it will use the first element
// but it can be a custom value and sets the sum to it, like the 0 after the function



// Next > MoreReduce / Functions to Collections of Data