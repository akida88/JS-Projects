// Prev > FunctionsAsReturnValue / Functions


const isChild = makeBetweenFunc(0,18); // should return a function that when we call it:
isChild(5) // returns true because is between 0 and 18
isChild(68) // false

// function makeBetweenFunc(x, y){
//    return function(num){
//       if(num >= x && num <= y){
//          return true;
//       }
//       return false;
//    }
// }

// or use:
function makeBetweenFunc(x, y){
   return function(num){
      return num >= x && num <= y;
   }
}


//makeBetweenFunc(0, 18)

// const isChild = function (num) {
//       return num >= 0 && num <= 18;
//    }
// isChild(17) //true


const isChild = makeBetweenFunc(0,18);
isChild(17) // true
isChild(99) // false


const isInNineties = makeBetweenFunc(1990,2000);
isInNineties(1989) // false
isInNineties(1993) // true


const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(45) // false
isNiceWeather(76) // true

// they have the same pattern of behavior but with a different values

// make less than, grater than and not equal to functions



// Next > Callbacks / Functions