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

var computerScore = 0;
var playerScore = 0;

function rockPaperScissors(input) {
    var computerSelection = getComputerChoice();
    var playerSelection = input;

    const message = document.querySelector('.message')

    if (computerSelection === playerSelection) {
        //console.log("It's a tie, please play again! Score: you - " + playerScore + ", computer - " +computerScore)
        message.textContent = "It's a tie, please play again!"
    } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') || 
        (computerSelection === 'Paper' && playerSelection === 'Scissors') || 
        (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
        playerScore++
        //console.log("You win, " + playerSelection + " beats " + computerSelection + "! Score: you - " + playerScore + ", computer - " +computerScore)
        message.textContent = "You win, " + playerSelection + " beats " + computerSelection + "!"
    } else {
        computerScore++
        //console.log("You lose, " + computerSelection + " beats " + playerSelection + "! Score: you - " + playerScore + ", computer - " +computerScore)
        message.textContent = "You lose, " + computerSelection + " beats " + playerSelection + "!"
    }
}

const results = document.querySelector('.results')
const score = document.querySelector('.score')

function playRound(input) {

        rockPaperScissors(input);
        score.textContent = "Score: you - " + playerScore + ", computer - " +computerScore;
        results.appendChild(score);

    if (computerScore == 5) {
        score.textContent = "The computer won the game. Score: you - " + playerScore + ", computer - " +computerScore; + " Please play again!"
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore == 5) {
        score.textContent = "You won the game! Score: you - " + playerScore + ", computer - " +computerScore; + " Please play again!"
        computerScore = 0;
        playerScore = 0;
    }
}

document.getElementById("btnRock").addEventListener("click", function(){playRound('Rock'); });
document.getElementById("btnPaper").addEventListener("click", function(){playRound('Paper'); });
document.getElementById("btnScissors").addEventListener("click", function(){playRound('Scissors'); });

// below is the original rock paper scissors game that I made before feedback and before revisiting this project to add buttons and event listeners

// function game() {

//     var computerScore = 0
//     var playerScore = 0

//     while (computerScore < 5 && playerScore < 5) {

//         const input = prompt("Please enter 'Rock', 'Paper', or 'Scissors'").toLowerCase();

//         var playerSelection = input.charAt(0).toUpperCase() + input.slice(1);

//         function rockPaperScissors() {
//             var computerSelection = getComputerChoice();

//             if (computerSelection === "Rock" && playerSelection === "Paper") {
//                 playerScore++
//                 return "You win, Paper beats Rock! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
//                 computerScore++
//                 return "You lose, Rock beats Scissors! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
//                 playerScore++
//                 return "You win, Scissors beats Paper! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//                 computerScore++
//                 return "You lose, Paper beats Rock! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
//                 playerScore++
//                 return "You win, Rock beats Scissors! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
//                 computerScore++
//                 return "You lose, Scissors beats Paper! Score: you - " + playerScore + ", computer - " +computerScore
//             } else if (computerSelection === playerSelection) {
//                 return "It's a tie, please play again! Score: you - " + playerScore + ", computer - " +computerScore
//             }
//         }
//         console.log(rockPaperScissors());
//     }

//     if(playerScore === 5) {
//         console.log("You won the game! Congratulations!");
//     } else {
//         console.log("You did not win the game. Better luck next time!");
//     }
// }

// game();