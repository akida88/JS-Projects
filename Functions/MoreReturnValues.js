// previous > Return Statement

// The return statements ends function execution AND specifies the
// value to be returned by that function

// so if we have a return function in a middle of a function the code afterwords is not going to execute 

function square(x) {
    return x * x; // if we have If statement around the Return, then the next code will be executed 
    console.log('ALL DONE!'); // it never returns it because is after the Return statement
}


// Variant 1
// function isPurple(color) {
//     if(color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// Variant 2 
// function isPurple(color) {
//     if(color.toLowerCase() === 'purple') {
//         return true;
//     }
//     return false;
// }


// Variant 3
// function isPurple(color) {
//     return color.toLowerCase() === 'purple'; // boolean expression
// }


function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    } // if non of the above returns true
    return false; // will return false
}

['blue', 'pink', 'magenta']


// next > passwordValidator / Practice
