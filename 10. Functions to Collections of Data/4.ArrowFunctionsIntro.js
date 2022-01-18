// Prev > MapMethod / Functions to Collections of Data

// syntactically compact alternative
// to a regular function expression

// does not work with Internet Explorer

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}


// function expression without an arrow function
// const square = function(x){
//     return x * x;
// }

// difference in the way that it behaves with the keyword this


// const isEven = num => can be used when one parameter
const isEven = (num) => { // accepts only one parameter num
    return num % 2 === 0;
}

isEven(10); // true
isEven(11); // false



// with multiple parameters
const multiple = (x, y) => {
    return x * y;
}



// parens are optional if there's only one parameter:
const square1 = x => {
    return x * x;
}


// use empty parens for functions w/ no parameters:
const singASong = () => {
    return "LA LA LA LA LA";
}

const greet = () => {
    console.log("Hi");
}


// Next > Arrow Functions: Implicit Returns / Functions to Collections of Data