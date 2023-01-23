
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let playerTurn = "s";
let computerMove;


if (playerTurn == "r" || playerTurn == "rock"){
    playerTurn = rock;
    console.log("You choose Rock");
}else if(playerTurn == "p" || playerTurn == "paper"){
    playerTurn = paper;
    console.log("You choose Paper");
}else if(playerTurn == "s" || playerTurn == "scissors"){
    playerTurn = scissors;
    console.log("You choose Scissors");
}else{
    console.log("Invalid Input. Try Again...");
}

let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

switch(computerRandomNumber){
    case 1:
        computerMove = rock; break;
    case 2:
        computerMove = paper; break;   
    case 3:
        computerMove = scissors; break;
    default: break;         
}
console.log(`The computer chose ${computerMove}.`);

if((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) || (playerTurn === scissors && computerMove === paper)){
 console.log("You Win!");
}else if((playerTurn === rock && computerMove === paper) || (playerTurn === paper && computerMove === scissors) || (playerTurn === scissors && computerMove === rock)){
    console.log("You lose!");
}else{
    console.log("This game was a draw!");
}

