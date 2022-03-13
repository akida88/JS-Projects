// Prev> SpreadArrayLiterals / JS Features

// REST
// Looks like Spread but it's not
// it uses the same syntax ... but it behaves differently 
// instead of spreading data out into arguments, new obj or arr
// it collects things down into a single array

// function sym(x, y){

// }



// The Arguments Object
// Available inside every function.
// It's an array-like object:
// - Has a length property
// - Does not have array methods like push/pop
// Contains all the arguments passed to the function
// Not available inside of arrow functions, does not work with them



// function sumAll() {
//     let total = 0;
//     for (let i = 0, i < arguments.length; i++)
//     {   total += arguments[i];
//     }
//     return total;
// }
// sumAll(8, 4, 3, 2); // 17
// sumAll(2, 3); // 5



// function sum() { // this function does not have any parameters listed
//     // console.log(arguments);
//     return arguments.reduce((total, currVal) => {
//         return total + currVal // returns: not a function
//     })
// } // arguments is not an array, it's an array like object 




// turn the arguments into array by using spread
function sum() {
    const argsArr = [...arguments]
    return argsArr.reduce((total, currVal) => {
        return total + currVal
    })
}
// sum(1, 2, 3) // returns 6




function fullName(first, last) {
    console.log(arguments); // returns the all arguments
}
// fullName(Tina, K, The Boss) // Tina K The Boss




// Arg Obj, does not work with arrow functions
const multiply = () => {
    console.log(arguments);
}
multiply(1,2,3,4) // arguments is not defined



// Next> RestParameters / JS Features
