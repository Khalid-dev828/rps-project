// function click() {
//     var rock = document.querySelector('.rock');
//     alert ('rock')    
// }
// /const rock = document.querySelector('.rock');
 function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() *3);
    if(computerChoice === 0){return "rock";}
    else if (computerChoice === 1){return "scissors";}
    else if (computerChoice === 2){return "paper";}
    else { return "Input not valid"}
   }
const btnRock = document.getElementById('rock');
const notice = document.getElementById('notice')
const btnPaper = document.getElementById('paper');
const btnScissor = document.getElementById('scissor');
const possibleChoices = document.querySelectorAll('.choice');
const plScore = document.querySelector('#plScore')
const cpScore = document.querySelector('#cpScore');
// const h1 = document.createElement('h1')
let computer = document.querySelector('.scores')
const results = document.createElement('hl');
const winner = document.createElement('hl');
const div = document.createElement('div')
const button = document.createElement('button')
button.className = 'btn  btn-primary'
computer.appendChild(results)
computer.append(winner)
computer.append(div)
div.className = 'p-3 text-center'




let playerChoice ;
let userChoice;


    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e) => {
       playerChoice = e.target.id;
       computerChoice = getComputerChoice();
        playGame(playerChoice,computerChoice)
        cpScore.innerText = computerScore;
        plScore.innerText = playerScore;
        checkWinner(playerScore,computerScore);
      }))
      
let playerScore = 0;
let computerScore = 0;

function checkWinner(playerScore,computerScore){
    if (playerScore === 5){
        btnRock.style.display = 'none'
        btnPaper.style.display = 'none'
        btnScissor.style.display = 'none'
        notice.style.display='none'
        winner.innerText = " You are the Winner !!!!"
        div.append(button)
        button.innerText = " Play again"
        button.addEventListener('click', ()=>{
            location.reload()
        })

       
    }
    else if(computerScore === 5){
        btnRock.style.display = 'none'
        btnPaper.style.display = 'none'
        btnScissor.style.display = 'none'
        notice.style.display='none'
        winner.innerText = " You Lost "
        div.append(button)
        button.innerText = " Play again"
        button.addEventListener('click', ()=>{
            location.reload()
        })
    }
}


let computerChoice = '';




function playGame(playerChoice,computerChoice){
   
   
    

    //  do {
    //   while(playerScore < 5 && computerScore < 5)  {
        
        
        if (playerChoice === computerChoice) {
            
            results.innerText =  " Its a tie!!";


            }
       
        if (playerChoice === 'rock' && computerChoice === "paper") {
            computerScore++;
       results.innerText = "You lose paper beats rock " ;
        }
         if(playerChoice === 'paper' && computerChoice === "rock" ){
            playerScore++;
        results.innerText =  "You win paper beats rock  " ;
        }
         if(playerChoice === 'scissor' && computerChoice === "rock" ){
        computerScore++
        results.innerText =  "You lose rock beats scissors " ;
        }
         if(playerChoice === 'rock' && computerChoice === "scissors" ){
        playerScore++;
        results.innerText =  "You win rock beats scissors   " ;
        }
        if(playerChoice === 'paper' && computerChoice === "scissors" ){
        computerScore++;
        results.innerText =  "You lose scissors beats paper  " ;
        }
        if(playerChoice === 'scissor' && computerChoice === "paper" ){
        playerScore++;
        results.innerText =  "You win scissors beats paper " ;
        }

       
    
        // {
        // alert("wax khalad ah ayaad galisay");
        // }

    
    // }
    // while(playerScore < 5 && computerScore < 5)
    // if (computerScore === 5 && playerScore === 5){
    //     window.location.reload()
    // } 
   
}


