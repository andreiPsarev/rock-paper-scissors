let humanScore = 0;
let computerScore = 0;

function numberDefinition(number) {
    switch (number) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    console.log(`Computer Entered : ${numberDefinition(choice)}`)
    return numberDefinition(choice);
}

function getHumanChoice () {
    const choice = prompt("Enter value: rock, paper or scissors");
    console.log(`You Entered : ${choice}`);
    return choice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return 0;
    }

    let humanWins = false;

    switch (humanChoice) {
        case "rock":
            humanWins = (computerChoice === "scissors");
            break;
        case "paper":
            humanWins = (computerChoice === "rock");
            break;
        case "scissors":
            humanWins = (computerChoice === "paper");
            break;
    }

    if (humanWins) {
        humanScore++;
        console.log("You win this round!");
        return "HUMAN_WINS";
    } else {
        computerScore++;
        console.log("Computer wins this round!");
        return "COMPUTER_WINS";
    }
}

function game() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}

// Запуск игры
game();