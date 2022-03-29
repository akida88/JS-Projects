// METHODS

// We can add functions as properties in objects which are called methods
// key value pair, the function is the value

// We call them methods!
// grouping functions together

const math1 = {
   multiply : function(x, y) {
      return x * y;
   },
   divide   : function(x, y) {
      return x / y;
   },
   square   : function(x) {
      return x * x;
   }
}


// we call these methods when we add a function into an object

// const add = function (x, y) {
//    return x + y
// }

// const math = {
//    add // the key
// } // the value is the function stored in add

// to call it> use . notation
math.add(2,3) // 5
add(2,5) // 7

// normally will be used like this:
const math = {
   add: function(x,y){ // method 1
      return x + y;
   },
   multiply: function(x,y){ // method 2   // if we want another property which is again a function
      return x * y;
   }
}

math.numbers // to access the array
math.add     // to access the function but not executing it until adding the ()
math.add(5,6) // 11
math.multiply(6,7) // 42

