let str = "LOL";
for (let c = 0; c <=4; c++){
   console.log("Outer:", c);
   for (let d = 0; d < str.length; d++) {
      console.log("  Inner:", str[d]);
   }
}



for(let a = 1; a <= 10; a++){
   console.log("Outer loop:", a);
   for(let b = 5; b >= 0; b -= 2){
      console.log("    Inner loop/nested", b)
   }
}


// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i]; // creating a new variable called row
	//inner loop iterates over each cell in a given row
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}