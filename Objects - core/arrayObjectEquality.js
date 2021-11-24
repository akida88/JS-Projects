1 === 1 // strict equality
1 == 1  // equality


// ===  checks for equality of reference, not equality of contents

let nums = [ 1, 2, 3 ]; // the value of that variable(nums) is not storing the array, it's storing a reference to this array
let mystery = [ 1, 2, 3 ]; 
let moreNums = nums; // referring to the same array in memory

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}


// check if an array looks like other array that is not empty
[1,2,3] === [] // wont work


// same means for objects

{} === {} // returns false - they are not the same
{a:1} === {a:1} // is not equal to the other obj unless they are referring to the same place in memory

// but if
let data1 = {a:1};
let data2 = data1;
data1 === data2; // true cuz they refer to the same thing in memory