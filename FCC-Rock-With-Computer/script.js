let options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
    return options[Math.floor(Math.random() * options.length)];
}




// console.log(getRandomComputerResult(options));

function hasPlayerWonTheRound(player, computer) {
    if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
        return true;
    } else {
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

let playerScoreSpanElement = document.getElementById('player-score');
let computerScoreSpanElement = document.getElementById('computer-score');
let roundResultsMsg = document.getElementById('results-msg');


let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener('click',()=>showResults("Rock"));
paperBtn.addEventListener('click',()=>showResults("Paper"));
scissorsBtn.addEventListener('click',()=>showResults("Scissors"));

let winnerMsgElement = document.getElementById('winner-msg');
let optionsContainer = document.querySelector('.options-container');
let resetGameBtn = document.getElementById('reset-game-btn');

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    if (playerScore === 3) {
        winnerMsgElement.innerText = "Player has won the game!";
        resetGameBtn.style.display = 'block';
        optionsContainer.style.display = 'none';
    }else if (computerScore === 3) {
        winnerMsgElement.innerText = "Computer has won the game!";
        resetGameBtn.style.display = 'block';
        optionsContainer.style.display = 'none';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = 'none';
    optionsContainer.style.display = 'block';
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
    
}

resetGameBtn.addEventListener('click', ()=>resetGame());
