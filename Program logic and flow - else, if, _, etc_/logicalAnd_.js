let password = "tacotuesday"; // gives invalid
// let password = "tacotuesday"; // will give Valid

if(password.length >= 6 && password.indexOf(' ') === -1) {
   console.log("Valid Password!");
}
else {
   console.log("Invalid Password!");
}



let num = 3;

if (num >= 1 && num <= 10) {
   console.log("Number is between 1 and 10");
}
else {
   console.log("Please guess a number between 1 and 10!");
}
