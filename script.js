let playerScore = 0;
let computerScore = 0;

//returns one of three options (Scissors,Paper,Rock) randomly
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNumber) {
        case 0:
            choice = 'Scissors';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Rock';
            break;
    }
    return choice;
};

//playing one round of game
function playRound(playerSelection,ComputerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = ComputerSelection.toLowerCase();

    let winner;
    if (player === computer) {
        return playRound(player,getComputerChoice());
    } else if (player === 'scissors' && computer === 'paper') {
        winner = 'player';
    } else if (player === 'scissors' && computer === 'rock') {
        winner = 'computer';
    } else if (player === 'paper' && computer === 'rock') {
        winner = 'player';
    } else if (player === 'paper' && computer === 'scissors') {
        winner = 'computer';
    } else if (player === 'rock' && computer === 'scissors') {
        winner = 'player';
    } else if (player === 'rock' && computer === 'paper') {
        winner = 'computer';
    }
    switch (winner) {
        case `player`:
            playerScore++;
            break;
        case `computer`:
            computerScore++;
            break;
    }

    const para = document.createElement("p");
    const node = document.createTextNode(player + ' ' + computer);
    const score = document.createTextNode(playerScore + ' ' + computerScore);
    let winnerGame;

    para.appendChild(node);
    para.appendChild(document.createElement("br"));
    para.appendChild(score);

    if ( (playerScore + computerScore) === 5){
        if (playerScore > computerScore) {
            winnerGame = document.createTextNode(`YOU WIN THE GAME`);
        } else {
            winnerGame = document.createTextNode(`YOU LOSE THE GAME`);
        }
        para.appendChild(document.createElement("br"));
        para.appendChild(document.createElement("br"));
        para.appendChild(winnerGame);
    }
    
    document.getElementById("results").appendChild(para);
}


document.getElementById("Scissors").addEventListener("click",function(){ playRound("Scissors",getComputerChoice()); });
document.getElementById("Paper").addEventListener("click",function(){ playRound("Paper",getComputerChoice()); });
document.getElementById("Rock").addEventListener("click",function(){ playRound("Rock",getComputerChoice()); });
