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
//    console.log(choice);
    return choice;
};

function playRound(playerSelection,ComputerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = ComputerSelection.toLowerCase();
    let winner;
    if (player === computer) {
        winner = 'tie';
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
        case tie:
            return `it's a tie! you both chose ${player}`;
            break;
        case player:
            return `You Win! ${player} beats ${computer}`;
            break;
        case computer:
            return `You Lose! ${computer} beats ${player}`;
            break;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
