//Pseudocode

// getComputerChoice function returns "Rock", "Paper", or "Scissors"
// user inputs their choice "Rock", "Paper", or "Scissors"
// if user choice === computer choice, it's a tie
// else if user chooses "Rock" && getComputerChoice === "Paper", user loses
// else if user chooses "Rock" && getComputerChoice === "Scissors", user wins
// else if user chooses "Paper" && getComputerChoice === "Scissors", user loses
// else if user chooses "Paper" && getComputerChoice === "Rock", user wins
// else if user chooses "Scissors" && getComputerChoice === "Rock", user loses
// else if user chooses "Scissors" && getComputerChoice === "Paper", user wins
// else replay the round



//This is an alternate way to do this using a variable and an if/else statement instead of a function

// var getComputerChoice = Math.random();

// console.log(getComputerChoice);

// if (getComputerChoice <= 0.33) {
//     computerChoice = "Rock"
// } else if (getComputerChoice >= 0.34 && getComputerChoice <= 0.66) {
//     computerChoice = "Paper"
// } else {
//     computerChoice = "Scissors"
// }

// console.log(computerChoice);
// console.log(getComputerChoice);



function getComputerChoice() {
    a = Math.random();
    if (a <= 0.33) {
        return "Rock"
    } else if (a >= 0.34 && a <= 0.67) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

//console.log(getComputerChoice());

var game = "on"

while (game === "on") {
    const input = prompt("Please enter 'Rock', 'Paper', or 'Scissors'").toLowerCase();

    var playerSelection = input.charAt(0).toUpperCase() + input.slice(1);

    //console.log(playerSelection);

    function rockPaperScissors() {
        var computerSelection = getComputerChoice();

        //console.log(computerSelection);
        //console.log(playerSelection);

        if (computerSelection === "Rock" && playerSelection === "Paper") {
            game = "over"
            return "You win, Paper beats Rock!"
        } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            game = "over"
            return "You lose, Rock beats Scissors!"
        } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
            game = "over"
            return "You win, Scissors beats Paper!"
        } else if (computerSelection === "Paper" && playerSelection === "Rock") {
            game = "over"
            return "You lose, Paper beats Rock!"
        } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
            game = "over"
            return "You win, Rock beats Scissors!"
        } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            game = "over"
            return "You lose, Scissors beats Paper!"
        } else if (computerSelection === playerSelection) {
            game = "on"
            return "It's a tie, please play again!"
        }
    }
    console.log(rockPaperScissors());
}
//console.log(rockPaperScissors());