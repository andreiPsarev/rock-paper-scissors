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
        updateResult(`It's a tie! You both chose ${humanChoice}.`);
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
        updateResult(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "HUMAN_WINS";
    } else {
        computerScore++;
        updateResult(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
        return "COMPUTER_WINS";
    }
}

function updateResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    updateScore();
}


function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winnerDiv = document.getElementById('winner');
        const winnerMessage = humanScore === 5 ? "Congratulations! You won the game!" : "Computer wins the game! Better luck next time.";
        winnerDiv.textContent = winnerMessage;

        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));


function playGame (humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}