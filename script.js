//This is the computer logic which randomizes it's choice

let max = 3;
let humanScore = 0;
let computerScore = 0;

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

//Function to prompt the users choice

function getHumanChoice(response){
    response = prompt("Rock, Paper or Scissors?");
}

// console.log(getHumanChoice());

// function playRound()