const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const result = document.createElement("div");
document.body.appendChild(result);


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (Math.random() < 0.33) {
     return "rock"; 
    } else if (Math.random() < 0.66) { return "paper"; 

    }else {
       return "scissors"; 
      }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice + ".";
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice + ".";
  }
}

function playGame(humanChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);

  result.textContent = `${roundResult}
     Your score: ${humanScore}
     Computer score: ${computerScore}`;

  if (humanScore === 5) {
     result.textContent += " YOU WON THE GAME!";
   } else if (computerScore === 5) {
    result.textContent += " COMPUTER WON THE GAME!";
  }
}

