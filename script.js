const h2 = document.querySelector("h2");
const buttons = document.querySelectorAll("button");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const finalResultText = document.getElementById("finalResult");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.textContent);
    checkResult(result);
    resultText.textContent = result;
    resultText.style.fontWeight = "bold";
    playerScoreText.textContent = "Player Score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "ROCK";
  } else if (randomNumber == 2) {
    return "PAPER";
  } else if (randomNumber == 3) {
    return "SCISSORS";
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  playerText.innerHTML = `Player Choice: <b>${playerSelection}</b>`;
  computerText.innerHTML = `Computer Choice: <b>${computerSelection}</b>`;

  if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
    playerScore++;
    result = "YOU WIN!";

    if (playerScore == 5) {
      disableButtons();
      finalResultText.textContent = "You WON the game! Please reload the page to play again";
      reloadPage.style.display = "block";
      h2.style.textDecoration = "line-through";
    }
  } else if (playerSelection == computerSelection) {
    result = "DRAW!";
  } else {
    computerScore++;
    result = "YOU LOSE!";

    if (computerScore == 5) {
      disableButtons();
      finalResultText.textContent = "You LOST the game! Please reload the page to play again";
      reloadPage.style.display = "block";
      h2.style.textDecoration = "line-through";
    }
  }
  return result;
}

function checkResult(result) {
  if (result == "YOU WIN!") {
    resultText.style.color = "green";
  } else if (result == "YOU LOSE!") {
    resultText.style.color = "red";
  }
  if (result == "DRAW!") {
    resultText.style.color = "orange";
  }
}

function disableButtons() {
  for (let i = 0; i < buttons.length - 1; i++) {
    buttons[i].disabled = true;
  }
}

const reloadPage = document.getElementById("reload");
reloadPage.addEventListener("click", () => {
  location.reload();
});
