
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


function playGame(){
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    return "You win! " + humanChoice + " beats " + computerChoice + ".";
} else {
  computerScore++
  return "You lose! " + computerChoice + " beats " + humanChoice + ".";
}
}
for (i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log("Your score: " + humanScore + " Computer score: " + computerScore);
}
}
playGame();