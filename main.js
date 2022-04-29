// Task 1
// hard code player and pc moves
/*
A set of if statements for each possible combination

ties (===) - player move is the same as pc move

rock wins (else pc wins)
paper wins (else pc wins)
scissors wins (else pc wins)
*/

let playerMove;
let computerMove;

// if (playerMove === computerMove) {
//   console.log("it's a draw");
// } else {
//   if (playerMove === "rock" && computerMove === "scissors") {
//     console.log("You win");
//   } else if (playerMove === "paper" && computerMove === "rock") {
//     console.log("You win");
//   } else if (playerMove === "scissors" && computerMove === "paper") {
//     console.log("You win");
//   } else {
//     console.log("You lose");
//   }
// }
// Task 2
// Put if statements into a function with the variables now as Parameters.
// Return 1, 0 and -1

/* function getWinner(playerMove, computerMove) {
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

let result = getWinner("rock", "paper"); */

// Task 3

/*
Assign the value of prompt to the playerMove variable
Call the function with said value
Using alert - display the result
*/

playerMove = prompt("What is your move?");
console.log(playerMove);

function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return alert("0");
  } else {
    if (playerMove === "rock" && computerMove === "scissors") {
      return alert("1");
    } else if (playerMove === "paper" && computerMove === "rock") {
      return alert("1");
    } else if (playerMove === "scissors" && computerMove === "paper") {
      return alert("1");
    } else {
      return alert("-1");
    }
  }
}

// We're testing the result values
// let result = getWinner(playerMove, computerMove);

// Task 4
// Create a function that gives a random computer Selection.

function randomArray() {
  let arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * arr.length)];
}

computerMove = randomArray();

let result = getWinner(playerMove, computerMove);
