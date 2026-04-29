// function for getting computer choice
function getComputerChoice() {
  let num = Math.random();
  if (num <= 0.33) {
    return "rock";
  } else if (num <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function for getting human choice
function getHumanChoice() {
  return prompt("Enter either rock, paper or scissors").toLowerCase();
}

// function that plays 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      return "You win! Rock beats scissors.";
      humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      return "You win! Paper beats rock.";
      humanScore = humanChoice + 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      return "You win! Scissors beats paper.";
      humanScore = humanChoice + 1;
    } else {
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore = computerChoice + 1;
    }
  }
  }
}
 console.log(playGame());
