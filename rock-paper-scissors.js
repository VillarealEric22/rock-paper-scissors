let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let question = "Better player wins. What's your weapon?";
let question2 = "Not a valid weapon... What's your weapon?";

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
    }

}

function game(){

    let flag = true;
    for (let i = 0; i < 5; i++) {
        
        playerSelection = prompt("Round " + (i+1) + ". " + question).toLowerCase();
        computerSelection = getComputerChoice();

        while (flag = true){
            if(!choices.includes(playerSelection)){
                playerSelection = prompt(question2).toLowerCase();
            }
            else{
                break;
            }
        }
        playRound(playerSelection, computerSelection);
     }

     if(playerScore == computerScore){
        alert("Tie Game! "  + "Score: " + playerScore + " - " + computerScore);
     }
     else if(playerScore > computerScore){
        alert("Player wins! " + "Score: " + playerScore + " - " + computerScore);
     }
     else{
        alert("Computer wins! "  + "Score: " + playerScore + " - " + computerScore);
     }
}

game();
