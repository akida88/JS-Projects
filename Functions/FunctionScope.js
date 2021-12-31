// Prev > 4FunctionPlayingCards / Practice

// Writing higher order functions and passing functions as callbacks

// Scope - Variable "visibility" - the location when variable is defined
// dictates where we have access to that variable

// function helpMe() {
//     let msg = "I'm on fire!";
//     msg; // "I'm on fire!"; // the variable msg is scoped to the helpMe function
// }

// msg; // Not defined


function lol(){
    let person  = "Tom";
    const age = 45;
    var color = "blue";
    console.log(age);
} // we are defining the function but the code is not executed
// we can have multiple functions with similar or same name variables

function changeColor(){
    let color = "red";
    const age = 19;
    console.log(age);
}

lol();
changeColor();
// console.log(person); // not defined




let bird = "mandarin duck";
function birdWatch() {
    let bird = "golden pheasant";
    console.log(bird);
    bird;
}

birdWatch();
console.log(bird);


// Next > BlockScope / Functions