const humanScore = 0;
const computerScore = 0;
function getComputerChoice() {
    let num = Math.random("Rock", "Paper", "Scissor");
    if (num > 0 && num <= 0.3) {
       return "rock"
    } else if (num >= 0.4 && num < 0.8) {
        return "Paper"
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Enter either rock, paper or scissors").toLowerCase();
}
console.log(getHumanChoice())