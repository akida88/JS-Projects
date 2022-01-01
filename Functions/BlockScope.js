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
let i = 10; // this one and the next let exists in a different scope and they are not conflicting
for(let i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}
console.log(i)
//// 0 "grizzly bear"
// 1 "panda bear"
// 2 "spectacled bear"
// 10 // is missing if the second line is commented


// [1,3,5]
// [2,6,10]
function doubleArr(arr){
    const result = []; // start as an empty array
    // we use const because we are not going to change the reference
    
    for(let num of arr){ // existing let in the block
        let double = num * 2;
        result.push(double);
    }
    // console.log(double); // does not work because its scoped in the prev block
    return result;
}

function doubleArr(arr){
    const result = [];
    // If we want to access double in the end, we can define it here
    let double;
    for(let num of arr){
        double = num * 2; // and we can still access it here
        result.push(double);
    }
    console.log(double); // this will work because double was declared in the function scope
    // and we are changing it in the block scope
    return result;
}

// const cannot be re-assigned, its a constant variable

// both const and let cannot be re-declared:
// let x = 1;
// let x = 2;
// we can change it, but cannot be re-declared in the same scope

// var is not block scoped
// let and const are clock scoped

