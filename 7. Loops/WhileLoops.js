// A while loop continues to run as long as its test condition is true

let num = 0 ;
while (num < 10) {
   console.log(num);
   num++;
}

// while(some condition is true) {
//    run this code; in the loop, update or attempt to make that condition false
// }







for (let i = 0; i <= 5; i++) {
	console.log(i);
}

//Recreating the above for loop w/ a while loop:
let j = 0;
while (j <= 5) {
	console.log(j);
	j++;
} // in those cases for loop is better







// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10); // using floor will make it a whole number
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) { // while guess is not equal to target
	console.log(`Target: ${target} Guess: ${guess}`);  // using the template literal ${}
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`); // it returns Target: 1 ...
console.log(`CONGRATS YOU WIN!!`);




