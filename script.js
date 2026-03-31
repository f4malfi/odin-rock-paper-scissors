//

let max = 3;

function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * max);
    if (computerNumber === 0){
        return("Rock")
    }
    else if (computerNumber === 1){
        return ("Scissors")
    }
    else if (computerNumber === 2){
        return ("Paper")
    }
};

console.log(getComputerChoice ());