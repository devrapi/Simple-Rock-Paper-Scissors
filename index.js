//ROCK PAPERS SCISSORS

const choices = ['rock', 'paper', 'Scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computer');
const resultDisplay = document.getElementById('result');
const playerscoreDisplay = document.getElementById('playerScore');
const comptuerscoreDisplay = document.getElementById('computerScore');
let playerScore = 0;
let computerScore = 0;


function PlayGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "It's a tie";
    }else
     switch(playerChoice){

         case'rock':
         result =(computerChoice === 'Scissors') ?  "You win" :  "You lose";
          break;
          case'paper':
          result =(computerChoice === 'rock') ?   "You win" :  "You lose";
          break; 
          case'Scissors':
          result =(computerChoice === 'paper') ?   "You win" :  "You lose";
          break;
     }
    
    playerDisplay.textContent =`Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove('greentext', 'redtext');

    switch(result){
        case "You win":
            resultDisplay.classList.add('greentext');
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
        case "You lose":
            resultDisplay.classList.add('redtext');
            computerScore++;
            comptuerscoreDisplay.textContent = computerScore;
            break;
    }

   
        
    }


