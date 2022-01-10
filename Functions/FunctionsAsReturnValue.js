// Prev > FunctionsAsArguments / Functions

// returning a function within a function

function makeBetweenFunc(min, max) {
   return function(val){
      return val >= min && val <= max;
   }
}

const inAgeRange = makeBetweenFunc(18, 100);

inAgeRange(17); // false
inAgeRange(68); // false




const triple = multiplyBy(3);
triple(5); // 15;

const double = multiplyBy(2);
// the multiplyBy function returns other function
double(8); // 16;


function multiplyBy(num){ // num is defined here
   return function(x){
      return x * num; // num is not defined, but we have access to it
   }
}

multiplyBy(3);

// function(x){
//    return x + 3;
// }

// triple(6) // will return 18

// but if
// multiplyBy(5)
// //will return but with 5
// function(x){
//    return x + 5;
// }


// mystery // returns the function
// mystery() // runs the function

const triple = multiplyBy(3);
triple(2) // returns 6

const double = multiplyBy(2);
double(5) // 10

const halve = multiplyBy(0.5);
halve(9) // 4.5


// Next > FunctionsAsReturnValue2 / Functions