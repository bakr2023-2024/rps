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
let getPlayerChoice = () => {
  let playerChoice;
  do {
    playerChoice = prompt("Choose rock, paper or scissors");
  } while (["rock", "paper", "scissors"].includes(playerChoice) === false);
  return playerChoice.toLowerCase();
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
let playRound = () => {
  let userChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let result = determineWinner(userChoice, computerChoice);
  if (result === 0) {
    return "It's a tie!";
  } else if (result === 1) {
    return `You won! ${userChoice} beats ${computerChoice}`;
  } else {
    return `You lost! ${computerChoice} beats ${userChoice}`;
  }
};
let playGame = () => {
  let playerScore = 0,
    computerScore = 0,
    rounds = 5;
  for (let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}`);
    let result = playRound();
    if (result.includes("won")) {
      playerScore++;
    } else if (result.includes("lost")) {
      computerScore++;
    }
    console.log(result);
  }
  if (playerScore > computerScore) {
    return `You won the game! ${playerScore} to ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `You lost the game! ${computerScore} to ${playerScore}`;
  } else {
    return `It's a tie! ${playerScore} to ${computerScore}`;
  }
};
console.log(playGame());
