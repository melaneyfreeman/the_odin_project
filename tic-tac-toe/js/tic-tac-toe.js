let gameBoardTiles = document.getElementsByClassName("box");

//scores
let xWins = document.getElementById("xScore");
let oWins = document.getElementById("oScore");
let xScore = 0;
let oScore = 0;
let xNameWins = document.getElementById("xNameWins");
let oNameWins = document.getElementById("oNameWins");

//turns
let turnText = document.getElementById("turn");
let turn = "";
let turnCount = 0;

//buttons
let clearBtn = document.getElementById("clearBtn");
let startBtn = document.getElementById("startBtn");
let computerStartBtn = document.getElementById("computerStartBtn");
let methodText = document.getElementById("methodText");
let playAgainBtn = document.getElementById("playAgainBtn");
let resetBtn = document.getElementById("resetBtn");

//result pop up
let resultWindow = document.getElementById("resultWindow");
//make sure it is not visable when page loads, 
//only when there is a winning/tie condition
resultWindow.style.display = "none";
//name of winning player
let whoWon = document.getElementById("whoWon");
//win or tie?
let result = document.getElementById("result");

//wrappers
let wrapper = document.getElementById("wrapper");
let nameWrapper = document.getElementById("names");

//hide certain elements before starting game
wrapper.style.display = "none";
clearBtn.style.display = "none";
xNameWins.style.display = "none";
xWins.style.display = "none";
oNameWins.style.display = "none";
oWins.style.display = "none";

//starts off with x going first
let isPlayer1Turn = true;

const Player = function (name, marker){
    this.name = name;
    this.marker = marker;
}

function preGame(choice){
    //if player vs player
    if(choice === "players"){
        //grab values entered into the text boxes for x and o
        let player1 = document.getElementById("player1").value;
        let player2 = document.getElementById("player2").value;   

        //create 2 new player objects for each player
        let p1 = new Player(player1, "x");
        let p2 = new Player(player2, "o");

        //if there is not a name entered, use default
        if(p1.name === ""){
            p1.name = "player 1";
        }

        if(p2.name === ""){
            p2.name = "player 2";
        }

        //update html element with chosen names
        xNameWins.innerHTML = p1.name;
        oNameWins.innerHTML = p2.name;

        startBtn.style.display = "none";
        computerStartBtn.style.display = "none";
        
        //create a new game with the chosen names and play method
        let newgame = game(choice, p1.name, p2.name);
    }

    //player vs computer
    else{
        //only need 1 player for playing against the computer
        let player1 = document.getElementById("player1").value;

        //create 2 new player objects for each player
        let p1 = new Player(player1, "x");
        let p2 = new Player("computer", "o");

        //if there is not a name entered, use default
        //but only for p1, p2 will automatically be "computer"
        if(p1.name === ""){
            p1.name = "player 1";
        }
        
        //update html element with chosen names        
        xNameWins.innerHTML = p1.name;
        oNameWins.innerHTML = p2.name;

        //create a new game with the chosen names and play method
        let newgame = game(choice, p1.name, p2.name);
    }

    //once player has selected a method
    //show relevant elements
    wrapper.style.display = "grid";
    clearBtn.style.display = "block";
    xNameWins.style.display = "flex";
    xWins.style.display = "flex";
    oNameWins.style.display = "flex";
    oWins.style.display = "flex";
    nameWrapper.style.display = "none";
}

var game = (choice, p1, p2) => {
    turnText.innerHTML = "X's turn";

    //start off by clearing the board
    //and resetting scores
    const clearBoard = function(){
        for(let i = 0; i < gameBoardTiles.length; i++){
            gameBoardTiles[i].innerHTML = "";
        }

        gameBoard = ["-", "-", "-",
                     "-", "-", "-",
                     "-", "-", "-"];

        console.log(gameBoard)
        return;
    }

    //clear button functionality
    clearBtn.onclick = function(){
        clearBoard();
        window.location.reload();
    }

    //add event listeners for each of tiles
    const addTileListener = function (){
        for(let i = 0; i < gameBoardTiles.length; i++){
            gameBoardTiles[i].addEventListener("click", function(){
                placeMarker(gameBoardTiles[i], i);
            })
        }
    }

    addTileListener();

    //game board as an array
    //uses "-" as placeholders so the regex works properly
    //instead of just "" or " "
    let gameBoard = ["-", "-", "-",
                     "-", "-", "-",
                     "-", "-", "-"];

    const placeMarker = function (i, index){
        //if playing against another player
        if(choice === "players"){
            //check that the square isn't already marked
            if(isPlayer1Turn && gameBoard[index] === "-"){
                turnText.innerHTML = "O's turn";
                gameBoard[index] = "x";
                console.log(gameBoard);
                i.innerHTML = "x";
                isPlayer1Turn = false;     
                winner();  
            }
    
            //if player 2's turn and space is free
            if (!isPlayer1Turn && gameBoard[index] === "-"){
                gameBoard[index] = "o";
                turnText.innerHTML = "X's turn";
                console.log(gameBoard);
                i.innerHTML = "o";
                isPlayer1Turn = true;
                winner();
            }
        }

        // if playing against computer
        if(choice === "computer"){
             //computer turn
             if(!isPlayer1Turn){
                //gen rand num
                function rand(){
                    console.log("generating random num...");
                    let randomSpace = Math.floor(Math.random() * gameBoard.length);
                    return randomSpace;
                }

                //create rand num
                let num = rand();
                console.log(num);

                //while the space is not free, reset rand num until it is
                while(gameBoard[num] !== "-"){
                    num = rand();
                }
                
                //if space is free
                if(gameBoard[num] === "-"){
                    console.log("is computer's turn");
                    gameBoard[num] = "o";
                    turnText.innerHTML = "X's turn";
                    gameBoardTiles[num].innerHTML = "o";
                    isPlayer1Turn = true;

                    //check winner needed to make sure it doesn't keep
                    //generating random number
                    winner();
                }
            }

            //player turn, and checking if space is free
            else if(isPlayer1Turn && gameBoard[index] === "-"){
                console.log("is player's turn");
                gameBoard[index] = "x";
                turnText.innerHTML = "O's turn";
                i.innerHTML = "x";
                isPlayer1Turn = false;
                
                //check winner needed to make sure it doesn't keep
                //generating random number
                winner();

                //call placeMarker so it instantly places O marker as the computer
                //otherwise it needs another click to trigger the computer's turn
                placeMarker();
            }

            winner();
        }
    }
                    
    const winner = function (){
        //turn gameboard to string in order to use regex to find winner
        let str = gameBoard.join("");
        console.log(str);
              
        //check for X win
        //regex, checking for all possible combinations to win
        if(/x..x..x|...xxx...|xxx......|......xxx|x...x...x|..x.x.x../gi.test(str)){
            resultWindow.classList.add("animate__animated");
            resultWindow.classList.add("animate__zoomIn");
            resultWindow.style.display = "block";
            whoWon.innerHTML = p1 + " wins! (x)";
            xScore++;
            xWins.innerHTML = xScore;
            clearBoard();         
        }
                 
        //check for O win
        else if(/o..o..o|...ooo...|ooo......|......ooo|o...o...o|..o.o.o../gi.test(str)){
            resultWindow.classList.add("animate__animated");
            resultWindow.classList.add("animate__zoomIn");
            resultWindow.style.display = "block";
            whoWon.innerHTML = p2 + " wins! (o)";
            oScore++;
            oWins.innerHTML = oScore;
            clearBoard();
        }
           
        //check for TIE
        //if there aren't anymore "-" empty spaces
        //aka all spaces have been played but there is no winner
        else if(!gameBoard.includes("-")){
            resultWindow.style.display = "block";
            result.innerHTML = "Tie";
            whoWon.innerHTML = "no winner, play again!";
            clearBoard();
        }
    
        //play again btn functionality
        playAgainBtn.onclick = function(){
            playAgain();
        }

        const playAgain = function(){
            resultWindow.style.display = "none";
            clearBoard();
        }

        //reset btn functionality - reload page to reset
        resetBtn.onclick = function(){           
            resultWindow.style.display = "none";
            window.location.reload();
        }
    }  
};
