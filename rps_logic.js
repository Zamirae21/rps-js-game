let wins = 0;
let ties = 0;
let losses = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
    } else {
        losses++;
    }
    updateScores();
}

function updateScores() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('ties').textContent = ties;
    document.getElementById('losses').textContent = losses;
}

document.getElementById('rock').addEventListener('click', function() {
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
});

document.getElementById('paper').addEventListener('click', function() {
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
});

document.getElementById('scissors').addEventListener('click', function() {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
});


