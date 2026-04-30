let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  if (Math.random() < 0.33) {
    return "rock";
  } else if (Math.random() < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  return prompt("Please enter rock, paper, or scissors.").toLocaleLowerCase();
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    return "You win! " + humanChoice + " beats " + computerChoice + ".";
} else {
  return "You lose! " + computerChoice + " beats " + humanChoice + ".";
}
}
console.log(playRound(getHumanChoice(), getComputerChoice()));