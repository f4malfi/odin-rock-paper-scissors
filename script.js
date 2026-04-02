//Global Variables

let humanScore = 0;
let computerScore = 0;

//This is the computer logic which randomizes it's choice

function getComputerChoice(){
    let max = 3;
    let computerNumber = Math.floor(Math.random() * max);

    if (computerNumber === 0){
        return("rock")
    }
    else if (computerNumber === 1){
        return ("scissors")
    }
    else if (computerNumber === 2){
        return ("paper")
    }
};


//Function to prompt the users choice

function getHumanChoice(){
     return prompt("rock, paper or scissors?");
 }


function playGame(){

    function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock"){
        return ("Draw! Nobody wins... or you both win?")
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock"){
        return ("You lose! Rock beats Scissors")
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock"){
        return ("You win! Paper beats Rock")
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors"){
        return ("You win! Rock beats Scissors")
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors"){
        return ("Draw! Nobody wins... or you both win?")
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors"){
        return ("You lose! Scissors beats Paper")
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper"){
        return ("You lose! Paper beats Rock")
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper"){
        return ("You win! Scissors beats Paper")
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper"){
        return ("Draw! Nobody wins... or you both win?")
    }
}

    while (humanScore < 3 && computerScore < 3){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const playRoundResult = playRound(humanSelection, computerSelection);

        console.log(playRoundResult);

        if (playRoundResult.includes("You win")) {
            humanScore++;
        } else if (playRoundResult.includes("You lose")) {
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - ${computerScore}`);
    }



        if (humanScore > computerScore)
            return ("You defeated the computer!")
        else if (computerScore > humanScore)
            return ("You have been defeated by the computer!")
        else {}

}

console.log(playGame ());