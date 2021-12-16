// Loop over the keys in an object
// for of is used to iterate over the actual values
for (variable in object) {
   statement
}



const jeopardyWinnings = {
   regularPlay           : 2522700,
   watsonChallange       : 300000,
   tournamentOfChampions : 500000,
   battleOfTheDecades    : 100000
};

for(let prop in jeopardyWinnings){
   console.log(prop); // will show the keys - regularPlac, etc
   console.log(jeopardyWinnings[prop]); // will show the values - 2522700, etc
}


// to sum them all together
// first making a variable to store the total:
let total = 0;
for(let prop in jeopardyWinnings){
   total += jeopardyWinnings[prop];
}

console.log('Ken Jennings Total Earings: ${total}');


// arrays are object which means we cant use for in loop
for(let k in [88,99,77,66]){
   console.log(k);
} // returns 0 1 2 3
// we are not looping over the actual elements and the values dont matter
// we are looping over the properties like:
jeopardyWinnings['regularPlay'] // returns the property 2522700


// arrays are special objects where the keys are in ordered
// set of indices, numbers starting from zero, so we are looping over the keys

