var selections = ["rock", "paper", "scissors"];
let wins = 0;
let loses = 0; 
let ties = 0;
let rounds = 1;

let rockSelection = document.querySelector("#rock");
let paperSelection = document.querySelector("#paper");
let scissorSelection = document.querySelector("#scissors");

let winsLabel = document.querySelector("#wins");
let losesLabel = document.querySelector("#loses");
let tiesLabel = document.querySelector("#ties");

let roundsLabel = document.querySelector("#rounds");

let pcRock = document.querySelector("#pcRock");
let pcPaper = document.querySelector("#pcPaper");
let pcScissors = document.querySelector("#pcScissors");
let pcBlank = document.querySelector("#pcBlank");

//set computer selection images to not be visible
//but leave  the ? selection visible
pcRock.style.display = "none";
pcPaper.style.display = "none";
pcScissors.style.display = "none";
pcBlank.style.display = "block";

//add event listeners for selections
rockSelection.addEventListener("click", () => {
    game("rock");
});

paperSelection.addEventListener("click", () => {
    game("paper");
});

scissorSelection.addEventListener("click", () => {
    game("scissors");
});



function playRound(playerSelection, computerSelection){
    rounds++;
    //update computer selection text
    let computerMove = document.querySelector("#computerMove");
    computerMove.textContent = computerSelection;
    pcBlank.style.display = "none";

    let result = document.querySelector("#result");
    roundsLabel.textContent = "Rounds: " + rounds;

    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            pcPaper.style.display = "block";
            loses++;
            losesLabel.textContent = "Loses: " + loses;
            result.textContent = "LOSE";
            console.log("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You lose! Paper beats rock!");

        }
        if(computerSelection === "scissors"){
            pcScissors.style.display = "block";
            wins++;
            winsLabel.textContent = "Wins: " + wins;
            result.textContent = "WIN";
            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You win! Rock beats scissors!");
        }
        if(computerSelection === playerSelection){
            pcRock.style.display = "block";
            ties++;
            tiesLabel.textContent = "Ties: " + ties;
            result.textContent = "TIE";
            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". Tie! Play again.");
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            pcScissors.style.display = "block";
            loses++;
            result.textContent = "LOSE";
            losesLabel.textContent = "Loses: " + loses;
            console.log("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You lose! Scissors beats paper!");
        }
        if(computerSelection === "rock"){
            pcRock.style.display = "block";
            wins++;
            result.textContent = "WIN";
            winsLabel.textContent = "Wins: " + wins;
            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You win! Paper beats rock!");
        }
        if(computerSelection === playerSelection){
            pcPaper.style.display = "block";
            ties++;
            tiesLabel.textContent = "Ties: " + ties;
            result.textContent = "TIE";
            console.log("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". Tie! Play again.");
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            pcRock.style.display = "block";
            loses++;
            result.textContent = "LOSE";
            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You lose! Rock beats scissors!");
        }
        if(computerSelection === "paper"){
            pcPaper.style.display = "block";
            wins++;
            result.textContent = "WIN";
            winsLabel.textContent = "Wins: " + wins;
            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". You win! Scissors beats paper!");
        }
        if(computerSelection === playerSelection){
            pcScissors.style.display = "block";
            ties++;
            result.textContent = "TIE";
            tiesLabel.textContent = "Ties: " + ties;

            console.log ("You picked: " + playerSelection +  ". Computer picked: " + computerSelection + ". Tie! Play again!");
        }
    }

    if(rounds === 6){
        if(wins > loses){
            //win
            roundsLabel.textContent = "YOU WIN!";
            let timer = setTimeout(newGame(), 3000);
          
        }
    
        else if(loses > wins){
            //lose
            roundsLabel.textContent = "YOU LOSE!";
            let timer = setTimeout(newGame(), 3000);

        }
    
        else if(ties > wins && ties > loses || wins === loses){
            //tie
            roundsLabel.textContent = "YOU TIE!";
            let timer = setTimeout(newGame(), 3000);

        }

       
    
    }
    console.log("Current Wins: " + wins + " Current Loses: " + loses + " Current Ties: " + ties);
    return;
}

//choses selection for computer
function computerPlay(){
    computerSelection = selections[Math.floor(Math.random() * selections.length)];
    return computerSelection;
}

//starts another round
function game(playerSelection){
    //reset visibilty when you play another round
    pcRock.style.display = "none";
    pcPaper.style.display = "none";
    pcScissors.style.display = "none";
    pcBlank.style.display = "block";

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function newGame(){
    alert("New game starting...");
    rounds = 1;
    wins = 0;
    loses = 0;
    ties = 0;
    losesLabel.textContent = "Loses: " + loses;
    winsLabel.textContent = "Wins: " + wins;
    tiesLabel.textContent = "Loses: " + ties;
    roundsLabel.textContent = "Round: " + rounds;

}

