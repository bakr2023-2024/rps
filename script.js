let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return -1;
    } else {
      return 1;
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return -1;
    } else {
      return 1;
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return -1;
    } else {
      return 1;
    }
  }
};
let playRound = (userChoice, computerChoice) => {
  let result = determineWinner(userChoice, computerChoice);
  if (result === 0) {
    score.textContent = `User: ${userScore} Computer: ${computerScore}`;
    actions.innerHTML += `<p>Round ${currRound}: It's a tie! ${userChoice} ties ${computerChoice}</p>`;
  } else if (result === 1) {
    score.textContent = `User: ${++userScore} Computer: ${computerScore}`;
    actions.innerHTML += `<p>Round ${currRound}: You won! ${userChoice} beats ${computerChoice}</p>`;
  } else {
    score.textContent = `User: ${userScore} Computer: ${++computerScore}`;
    actions.innerHTML += `<p>Round ${currRound}: You lost! ${computerChoice} beats ${userChoice}</p>`;
  }
  if (currRound === 5) {
    if (userScore > computerScore) {
      actions.innerHTML += "<p>You won the game!</p>";
    } else if (userScore < computerScore) {
      actions.innerHTML += "<p>You lost the game!</p>";
    } else {
      actions.innerHTML += "<p>It's a tie!</p>";
    }
    btns.forEach((btn) => {
      btn.disabled = true;
    });
    return 1;
  }
  return 0;
};
let currRound = 1;
let userScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playRound(`${btn.id}`, getComputerChoice()) == 1) {
      round.textContent = `Game Over!`;
    } else {
      round.textContent = `Round ${++currRound}`;
    }
  });
});
const round = document.querySelector(".round");
const score = document.querySelector(".score");
const actions = document.querySelector(".actions");
