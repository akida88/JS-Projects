// Prev > LexicalScope / Functions

// Previously we used function statements:
// function add(add){
//     return
// } 



// Another syntax to define functions is the Function Expression:
const square = function (num) { // function are objects so we can store them in a variable
    return num * num;
}
square(7); // 49



function add(x,y) {
    return x+y;
}

// function (x, y) { // we cant call the function and we cant refer to this function because it has no name
//     return x + y; 
// } // this type of functions are called anonymous function

const sum = function (x, y) { 
    return x + y; 
}
// add and sum works exactly the same way but we declared them in 2 different formats/syntaxes

console.dir(sum) // will print out the object form which shows the keys and the values


// you can add a name of a function when stored in a variable:
const product = function multiply(x, y) {
    return x * y;
}
// but we call it by product(3, 5), does not work if we try to call multiply


// Next > HigherOrderFunctions / Functions

