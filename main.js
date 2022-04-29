// Task 1
// hard code player and pc moves
/*
A set of if statements for each possible combination

ties (===) - player move is the same as pc move

rock wins (else pc wins)
paper wins (else pc wins)
scissors wins (else pc wins)
*/

let playerMove = "scissors";
let computerMove = "scissors";

if (playerMove === computerMove) {
  console.log("it's a draw");
} else {
  if (playerMove === "rock" && computerMove === "scissors") {
    console.log("You win");
  } else if (playerMove === "paper" && computerMove === "rock") {
    console.log("You win");
  } else if (playerMove === "scissors" && computerMove === "paper") {
    console.log("You win");
  } else {
    console.log("You lose");
  }
}
// Task 2
// Put if statements into a function with the variables now as Parameters. 
// Return 1, 0 and -1


function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
  return 0;
} else {
  if (playerMove === "rock" && computerMove === "scissors") {
    return 1;
  } else if (playerMove === "paper" && computerMove === "rock") {
    return 1;
  } else if (playerMove === "scissors" && computerMove === "paper") {
    return 1;
  } else {
    return -1;
  }
}
}

let result = getWinner("rock", "paper");
