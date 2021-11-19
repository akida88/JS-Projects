let x = 34;
x += 5
x // returns 39 

// using const to define a variable

const city = "Lisbon"
city = "London" // shows an error cuz'
// you can not reassign (change the reference) or give a new value to a const



const foods = ["milk"];
foods.push("chocolate") // 2
foods.unshift("tortillas") // 3
foods // tortillas, milk, chocolate
foods.pop() // chocolate
foods // [] - empty array
// but the reference of that arrow is unchanged
foods = [] // = a new array, we can't do that even if the array is empty
// the new empty array [] is like a new arrow, a new place in memory/ a new reference which is not allowed

// we need a variable for the array and the array might changed 
// if the values need to be changed we use let

// ---------------------------------------------------------
// primitive types: boolean string symbol number bigint null undefined
// ...... reference type
let x = 4;
let y = x;  //y = x  4  copy somewhere y = copy 4 
y= 10;
console.log(y);
console.log(x);
//-------------------- reference types
const xx = [2,3,4,5];
const yy = xx;
 yy.push(5);
 console.log(xx.join(",")); // 2,3,4,5,5
 console.log(yy.join(","));// 2,3,4,5,5

 const xy = [x,y];
 x1 =4
 x2=4
 const xy = [4,4,4,4,4,4];
 
console.log(xy.join(","));

 ///-----------------------------------
 const tina = {
     name :"Tina",
     age:"28",
     town:"Sofia"
 }
const name = "Tina";
const age ="28";
const town ="Sofia";

let town2 =town;
const teo = tina;
teo.name = "Teo"
town2="Plovdiv"

//var  let const
console.log(tina.name);
console.log(teo.name);
console.log(town);
console.log(town2);


tina.name; // Tina Teo
tina.town // Silitra
