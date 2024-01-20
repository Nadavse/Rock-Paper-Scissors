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
console.log(getComputerChoice());