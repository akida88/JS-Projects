// Prev > HigherOrderFunctions / Functions

// Functions that operate on/with other functions. They:
// - Accept other functions as arguments
// - Return a function

// functions as arg
function callTwice(func){
   func(); // executing the argument
   func();
}

function laugh(){
   console.log("HAHAHAHAHA");
}
callTwice(laugh) // press a function as an arg!
// returns "HAHAHAHHA" 2 times




function callThreeTimes(f){
   f();
   f();
   f();
}

function cry(){
   console.log("BOO HOO IM SO SAD!");
}
callThreeTimes(cry) // will return the cry function 3 times


function rage(){
   console.log("I hate everything!");
}
callThreeTimes(rage) // will return rage 3 times


function repeatNTimes(action, num){
   for(let i = 0; i < num; i++) {
      action();
   }
}
repeatNTimes(rage, 13);
// returns rage 13 times


function pickOne(f1,f2) {
   let rand = Math.random();
   if(rand < 0.5){
      f1();
   } else {
      f2();
   }
}
pickOne(cry, rage) // returns 0,983.. number which returns rage



// Next > FunctionsAsReturnValue / Functions