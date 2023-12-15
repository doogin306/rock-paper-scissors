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


function game() {

    var computerScore = 0
    var playerScore = 0

    while (computerScore < 5 && playerScore < 5) {

        const input = prompt("Please enter 'Rock', 'Paper', or 'Scissors'").toLowerCase();

        var playerSelection = input.charAt(0).toUpperCase() + input.slice(1);

        //console.log(playerSelection);

        function rockPaperScissors() {
            var computerSelection = getComputerChoice();

            //console.log(computerSelection);
            //console.log(playerSelection);

            if (computerSelection === "Rock" && playerSelection === "Paper") {
                playerScore++
                return "You win, Paper beats Rock! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
                computerScore++
                return "You lose, Rock beats Scissors! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
                playerScore++
                return "You win, Scissors beats Paper! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === "Paper" && playerSelection === "Rock") {
                computerScore++
                return "You lose, Paper beats Rock! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
                playerScore++
                return "You win, Rock beats Scissors! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
                computerScore++
                return "You lose, Scissors beats Paper! Score: you - " + playerScore + ", computer - " +computerScore
            } else if (computerSelection === playerSelection) {
                return "It's a tie, please play again! Score: you - " + playerScore + ", computer - " +computerScore
            }
        }
        console.log(rockPaperScissors());
    }

    if(playerScore === 5) {
        console.log("You won the game! Congratulations!");
    } else {
        console.log("You did not win the game. Better luck next time!");
    }
}

game();
//console.log(rockPaperScissors());