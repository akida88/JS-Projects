// Using break; inside of a loops to break out of that loop


for(let i = 0; i< 10; i++){
   console.log(i);
   if( i = 5 ) {
      break;
   }
}

// if you break one of the nested loops, it does not stop all loops from executing
// it will only stop the inner loop or the current loop that the break is located
// not so common in a For loop


const target = Math.floor(Math.random() * 10);
let guess;
//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME' form WhileLoops.js
while (true) { // the (true) means loop forever
	if (target === guess) break; //Break stops the loop in its tracks
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);




// copied from the WhileLoops.js to see the changes when using break;
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);