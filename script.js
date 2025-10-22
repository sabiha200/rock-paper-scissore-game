// script.js

// DOM Elements
const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.querySelector('#user-choice span');
const computerChoiceDisplay = document.querySelector('#computer-choice span');
const winnerDisplay = document.querySelector('#winner span');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

// Variables
let userScore = 0;
let computerScore = 0;

// Event Listeners for Buttons
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    // Update the UI
    updateUI(userChoice, computerChoice, winner);
  });
});

// Function to get the computer's random choice
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

// Function to determine the winner
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return 'Draw';

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    return 'User';
  } else {
    computerScore++;
    return 'Computer';
  }
}

// Function to update the UI
function updateUI(userChoice, computerChoice, winner) {
  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;
  winnerDisplay.textContent = winner;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}


    
