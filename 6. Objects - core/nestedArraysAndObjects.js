const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ], // strengths property which is set to an array [ 'Music', 'Art' ]
	exams     : { // exams (key), the value is another object
		midterm : 92,
		final   : 88
	}
};

const avg = (student.exams.midterm + student.exams.final) / 2; // we chain them with dot notation

// to access Art:
student.strengths[1] // cuz it on index 1




// an array and each element in it is an object:
const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];




// variable = 
const game = {
	player1 : {
		username  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		username  : 'Muffins',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};
