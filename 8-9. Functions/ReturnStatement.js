// Previous > Functions with multiple arguments

// Return - Build-in methods return values from functions when we call them. We can store those values:
const yell = "I won".toUpperCase();
yell; // "I WON"

// we create a variable idx with a value stored in it
const idx = ['a', 'b', 'c'].indexOf('c');
idx; // 2

// we use Return values to capture them in a variable
// to pass them to another function

// Our functions print values out, but do NOT return anything
function add(x, y) {
    console.log(x + y);
} // it prints the value, but if we try to store it in a variable:

const sum = add(10, 16);
sum; // undefined 
// there is no value returned from the function



// To capture a return value in a variable we need to use the keyword return
function addAnother(x, y) {
    return x + y;
}
// if we call the function it will show the return value but it wont be printed out
// but wen we save it in a variable, then it stores the value
const result = addAnother(10, 16);
result; // 26

const answer = addAnother(100, 200);
answer; // 300

// you can only return 1 thing from a function
// it can have multiple returns but when we actually return sth it has to be one value


// Next > More Return Values