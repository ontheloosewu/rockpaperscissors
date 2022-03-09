function computerPlay() {
    // 3 choices
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
    //take any case sensitive input
    playerSelection = playerSelection.toLowerCase();
    
    //to see what selections are
    //console.log("Player chose: " + playerSelection);
    //console.log("Computer chose: " + computerSelection);

    // if player selected "choice", go through computer choices
    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        }
    }
    // player selected scissors
    else {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //simulate 5 rounds, display result each round
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerPlay());
        console.log(result);

        //keeping score
        if (result.includes("Win")) {
            playerScore++;
        }
        else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore > playerScore) {
        console.log("The computer wins the game!");
    }
    else {
        console.log("Nobody won the game!");
    }
}

//assumes user inputs a valid choice..
const playerSelection = window.prompt("Input your choice:");
game();