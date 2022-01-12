// Previous > diceRollFunction


// Arguments are input to a function

// function greet() {
// 	console.log('Hi');
// }

// greet now expects a single argument
function greet(nickname) { // nickname is the argument in this case
	console.log(`Hi, ${nickname}!`);
}
greet('Sansa');
greet('Ramsay');



// EXAMPLE 2
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(2);
throwDice(6);


// Next > Functions with multiple arguments