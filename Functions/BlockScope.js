// Prev > FunctionScope / Functions

let radius = 8;

if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}

console.log(radius); // 8
console.log(PI); // Not defined
console.log(circ); // Not defined



// writing a conditional
if(true){ // block
    let animal = "eel"; // animal is scoped inside the conditional
    // using const is the same like let
    console.log(animal); // eel
}
console.log(animal); // not defined

// Blocks in JS are denoted by {} and seen in conditional, for loop, while loop, for of

// { // object
//     a: 1,
//     b: 2
// }



if(true){
    var animal = "eel";
    console.log(animal);
}
console.log(animal);
// with var it works in both cases
// var is scoped to functions


// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for(var i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }
// console.log(i)
// 0 "grizzly bear"
// 1 "panda bear"
// 2 "spectacled bear"
// 3


let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10; // same if we use let
for(let i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}
console.log(i)
//// 0 "grizzly bear"
// 1 "panda bear"
// 2 "spectacled bear"
// 10 // is missing if the second line is commented


