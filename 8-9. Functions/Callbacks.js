// Prev > FunctionsAsReturnValue2 / Functions


// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function.
// function(callbackFunction)

function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("HAHAHA");
}
callTwice(laugh) // in this case laugh is a callback function, the function that we pass in


// using the setTimeout method
// setTimeout(func, 5000) // runs the code after some time

// alert method: alert("adadfa")


// function grumpus() {
//     alert("GAHH GO AWAY!")
// }

// setTimeout(grumpus, 5000);



// Using an anonymous function
// setTimeout(function () {
//     alert("WELCOME!");
// }, 5000);



// the code will run when we click a button on the page
// first we add the button in the html code

// the pattern of passing a callback

// const btn = document.querySelector("button"); // selecting the button from the html file
// btn.addEventListener("click", grumpus); // run the code with addEventListener
                            // a function to run when the button is clicked


// can be used with anonymous function as well
const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    alert("Why did you click me?!")
});



// Next > Hoisting / Functions