const humanScore = 0;
const computerScore = 0;
// function for getting computer choice
function getComputerChoice() {
    let num = Math.random();
    if (num > 0 && num <= 0.3) {
       return "rock"
    } else if (num >= 0.4 && num < 0.8) {
        return "paper"
    } else {
        return "scissors"
    }
}

// function for getting human choice
function getHumanChoice(){
    return prompt("Enter either rock, paper or scissors").toLowerCase();
}

// function for playing a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        return "You win! Rock beats scissors."
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock."
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper."
        humanScore++
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore++
    }
}
// console.log(playRound(getHumanChoice(), getComputerChoice()));
// // function for playing a game of 5 rounds
// function playGame() 
