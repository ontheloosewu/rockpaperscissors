function computerPlay() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            return "You Lose! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors.";
        }
        else {
            return "It's a tie!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You Win! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper.";
        }
        else {
            return "It's a tie!";
        }
    }
    else {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You Win! Scissors beats Paper.";
        }
        else if (computerSelection === "Rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors.";
        }
        else {
            return "It's a tie!";
        }
    }
}

function updateText(resultText) {
    runningScore.textContent = resultText + " Your score: " + playerScore +
        " Computer score: " + computerScore;

    if (playerScore === 5) {
        winnerText.textContent = "You got 5 points first, you win the game!"
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
    else if (computerScore === 5) {
        winnerText.textContent = "The computer got 5 points first, you lose the game!"
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const runningScore = document.createElement('div');
const winnerText = document.createElement('div');
container.appendChild(runningScore);
container.appendChild(winnerText);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.className, computerPlay());
        updateText(result);
    });
});
