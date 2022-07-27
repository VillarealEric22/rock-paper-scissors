window.onload = function(){

    let playerScore = 0;
    let computerScore = 0;
    let roundWin = '';

    const rockBtn = document.getElementById('rockBtn')
    const paperBtn = document.getElementById('paperBtn')
    const scissorsBtn = document.getElementById('scissorsBtn')
    const pScore = document.getElementById('p-score')
    const cScore = document.getElementById('c-score')

    const choices = ["rock", "paper", "scissors"];

    rockBtn.addEventListener('click', () => getPlayerChoice('rock'))
    paperBtn.addEventListener('click', () => getPlayerChoice('paper'))
    scissorsBtn.addEventListener('click', () =>getPlayerChoice('scissors'))

    function getComputerChoice(){
        const computerChoice = Math.floor(Math.random() * choices.length);
        return choices[computerChoice];
    }

    function getPlayerChoice(playerSelection){

        const computerSelection = getComputerChoice();
        updateChoice(playerSelection, computerSelection)
        playRound(playerSelection, computerSelection)

    }
    function updateChoice(playerSelection, computerSelection){
        switch(playerSelection){
            case 'rock':
                document.getElementById('p-choice').innerHTML = '<i class="fa fa-4x fa-hand-rock-o" aria-hidden="true"></i>';
                break;
            case 'paper':
                document.getElementById('p-choice').innerHTML = '<i class="fa fa-4x fa-hand-paper-o" aria-hidden="true"></i>';
                break;
            case 'scissors':
                document.getElementById('p-choice').innerHTML = '<i class="fa fa-4x fa-hand-scissors-o" aria-hidden="true"></i>';
                break;
        }

        switch(computerSelection){
            case 'rock':
                document.getElementById('c-choice').innerHTML = '<i class="fa fa-4x fa-hand-rock-o" aria-hidden="true"></i>';
                break; 
            case 'paper':
                document.getElementById('c-choice').innerHTML = '<i class="fa fa-4x fa-hand-paper-o" aria-hidden="true"></i>';
                break;
            case 'scissors':
                document.getElementById('c-choice').innerHTML = '<i class="fa fa-4x fa-hand-scissors-o" aria-hidden="true"></i>';
                break;
        }
        gameScore()
    }

    function gameScore(){
        
          pScore.textContent = `Player: ${playerScore}`
          cScore.textContent = `Computer: ${computerScore}`

    }
    function playRound(playerSelection, computerSelection) {

        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')){

            playerScore++

        }
        if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
            (computerSelection === 'scissors' && playerSelection === 'paper') ||
            (computerSelection === 'paper' && playerSelection === 'rock')){

            computerScore++

        }

    }
    function game(){
        
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

}


