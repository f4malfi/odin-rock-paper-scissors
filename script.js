//Game plays rock, paper, scissors.

//Global Variables
const rockBtn = document.querySelector(`#rockBtn`);
const paperBtn = document.querySelector(`#paperBtn`);
const scissorsBtn = document.querySelector(`#scissorsBtn`);
let div1 = document.querySelector(`#div1`);
let div2 = document.querySelector(`#div2`);
let div3 = document.querySelector(`#div3`);
let humanScore = 0;
let computerScore = 0;


rockBtn.addEventListener(`click`, function (event){
    humanChoice = `rock`;
    playGame();
});

paperBtn.addEventListener(`click`, function (event){
    humanChoice = `paper`;
    playGame();
});

scissorsBtn.addEventListener(`click`, function (event){
    humanChoice = `scissors`;
    playGame();
});

function playGame(){

    function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        return ("Draw! Nobody wins... or you both win?")
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        return ("You lose! Rock beats Scissors")
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        return ("You win! Paper beats Rock")
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        return ("You win! Rock beats Scissors")
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors"){
        return ("Draw! Nobody wins... or you both win?")
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        return ("You lose! Scissors beats Paper")
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        return ("You lose! Paper beats Rock")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        return ("You win! Scissors beats Paper")
    }
    else if (humanChoice === "paper" && computerChoice === "paper"){
        return ("Draw! Nobody wins... or you both win?")
    }
}





    //while (humanScore < 100 && computerScore < 100){
       const humanSelection = humanChoice;
       const computerSelection = getComputerChoice();
       const playRoundResult = playRound(humanSelection, computerSelection);

        div1.textContent = playRoundResult;

      if (playRoundResult.includes("You win")) {
        humanScore++;
        } else if (playRoundResult.includes("You lose")) {
       computerScore++;
   }

   div2.textContent = `Score: You ${humanScore} - ${computerScore}`;
//}



    if (humanScore === 5 && computerScore <= 4)
       div3.textContent = "You defeated the computer!"
    else if (computerScore === 5 && humanScore <= 4)
        div3.textContent = "You have been defeated by the computer!"
   else {}

}


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


//Function to prompt the users choice with no buttons

//function getHumanChoice(){
     //return prompt("rock, paper or scissors?");
 //}

//console.log(playRound ());

