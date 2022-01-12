// Prev > FunctionExpressions / Functions

// Functions as Objects
// We can store function in a variable and arrays

function add(x, y){ // Function statement
   return x + y;
}

//Function expression
const subtract = function(x, y){
   return x-y;
}

const multiply(x, y){
   return x*y;
}

const divide = function(x, y){
   return x/y;
}

//Put them in array
const operations = [add, subtract, multiply, divide];
operations[1]; // it gives the function, doesnt call it
operations[1](100, 4); // returns 96
operations[2](100, 4); // returns 400

for(let func of operations){
   // func; // not calling the function, to execute it we use:
   let result = func(30, 5); // func will store the value of add
   console.log(result);
}


const thing = { // obj called thing
   doSomething: multyply // doSomething is the propertie: multiply is the value
   // storing a function as a value in the object
}

thing // returns the property(kay) and the value which is a function
thing.doSomething; // this does not execute it
thing.doSomething() // running but missing arguments
thing.doSomething(50, 2) // returns 100

// Object.Property(arguments)

// adding function to an object we are creating a method
[1,2,3].indexOf(2) // indexOf(2) is a function, stored in the array [1,2,3]



// Next > FunctionsAsArguments / Functions