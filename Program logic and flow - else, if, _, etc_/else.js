let rating = 2;

if (rating === 3){ // checking for a single condition
   console.log("You are a SUPERSTAR!");
}

else if (rating === 2) {
   console.log("Meets expectations!");
}

else if (rating === 1) {
   console.log("Needs improvement");
}

else {
   console.log("INVALID RATING!");
}


// Example 2

let highScore = 1430;
let userScore = 1600;

if(userScore >= highScore) {
   console.log(`Congrats, you have the new high score of ${userScore}`);
   highScore = userScore;
}

else {
   console.log(
      `Good Game. Your score of ${userScore}
      did not beat the high score of ${highScore}`
   );
}