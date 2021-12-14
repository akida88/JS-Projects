for (
   [initialExpression];
   [condition];
   [incrementExpression]
)

// similar in the conditional, but not how it's working
// if(){ // the code inside the {} will only run if the condition in the () is true

// }



// we define a variable with the for loop
// initial value
// when to run the loop
// how to change value each time


  //variable; condition; operation that is performed on the i
  //start at 1; stop at 10; add 1 each time
for(let i = 1; i <= 10; i++){
   console.log("Hello:", i);
}

for(let i = 1; i <= 10; i+=3){ // 1 > 4 > 7 > 10 > 13
   console.log("Hello:", i);
}



// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through



// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');
