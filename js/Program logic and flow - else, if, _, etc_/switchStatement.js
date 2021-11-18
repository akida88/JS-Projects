let day = 5;

// if (day ===1){
//    console.log("MONDAY");
// }
// else if (day === 2){
//    console.log("TUESDAY");
// }
// else if (day === 3){
//    console.log("WEDNSDAY");
// }
// else if (day === 4){
//    console.log("THURSDAY");
// }
// else if (day === 5){
//    console.log("FRIDAY");
// }
// else if (day === 6){
//    console.log("SATURDAY");
// }
// else if (day === 7){
//    console.log("SUNDAY");
// }
// else {
//    console.log("Not a week day!");
// }


// We use Switch Statement for taking one value that we check it
// against multiple potential values.

switch(day){
   case 1:
      console.log("MONDAY");
      break;
   case 2:
      console.log("TUESDAY");
      break;
   case 3:
      console.log("WEDNSDAY");
      break;
   case 4:
      console.log("THURSDAY");
      break;
   case 5:
      console.log("FRIDAY");
      break;
   case 6:
      console.log("SATURDAY");
      break;
   case 7:
      console.log("SUNDAY");
      break;
   default: // we use this instead of ELSE
      console.log("Not a week day!");
}

// Switch pass the cases until it finds a matching one, then
// it stops checking the rest of the cases, so if we dont use
// break; it will show the rest of the days as well.


let emoji = "happy face";

switch (emoji) {
   case "happy face":
      console.log("yellow");
      break;
   case "sad face":
      console.log("yellow");
      break;
   case "eggplant":
      console.log("purple");
      break;
   case "heart":
      console.log("red");
      break;
   case "lips":
      console.log("red");
      break;
}

// Because of same statemets we can use:

switch (emoji) {
   case "sad face":
   case "happy face":
      console.log("yellow");
      break;
   case "eggplant":
      console.log("purple");
      break;
   case "heart":
   case "lips":
      console.log("red");
      break;
}