let gameBoardTiles = document.getElementsByClassName("box");

let xWins = document.getElementById("xScore");
let oWins = document.getElementById("oScore");
let xScore = 0;
let oScore = 0;

let turnText = document.getElementById("turn");
let turn = "";

let clearBtn = document.getElementById("clearBtn");

let startBtn = document.getElementById("startBtn");
let computerStartBtn = document.getElementById("computerStartBtn");

let xNameWins = document.getElementById("xNameWins");
let oNameWins = document.getElementById("oNameWins");

//starts off with x going first
let isPlayer1Turn = true;

const Player = function (name, marker){
    this.name = name;
    this.marker = marker;
}

function preGame(choice){
    //if player vs player
    if(choice === "players"){
        let player1 = document.getElementById("player1").value;
        let player2 = document.getElementById("player2").value;   

        let p1 = new Player(player1, "x");
        let p2 = new Player(player2, "o");

        xNameWins.innerHTML = p1.name;
        oNameWins.innerHTML = p2.name;
    }

    //player vs computer
    else{
        let player1 = document.getElementById("player1").value;

        let p1 = new Player(player1, "x");
        let computer = new Player("computer", "o");

        xNameWins.innerHTML = p1.name;
        oNameWins.innerHTML = computer.name;
    }

    let newgame = game(choice);
}

var game = (choice) => {
    turnText.innerHTML = "X's turn";

    //start off clearing the board
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

    clearBtn.onclick = function(){
        clearBoard();
        isPlayer1Turn = true;
        xScore = 0; 
        oScore = 0;
        turnText.innerHTML = "X's turn";
    }

    //event listener for the tiles
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
        if(choice === "players"){
        //check that the square isn't already marked

            if(isPlayer1Turn && gameBoard[index] === "-"){
                turnText.innerHTML = "O's turn";
                gameBoard[index] = "x";
                console.log(gameBoard);
                i.innerHTML = "x";
                isPlayer1Turn = false;       
            }
    
            if (!isPlayer1Turn && gameBoard[index] === "-"){
                gameBoard[index] = "o";
                turnText.innerHTML = "X's turn";
                console.log(gameBoard);
                i.innerHTML = "o";
                isPlayer1Turn = true;
            }
        }

        //computer
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
                }
                
            }

               //player turn
                if(isPlayer1Turn && gameBoard[index] === "-"){
                console.log("is player's turn");
                turnText.innerHT
                turnText.innerHTML = "O's turn";
                gameBoard[index] = "x";
                console.log(gameBoard);
                i.innerHTML = "x";
                isPlayer1Turn = false;
            }

            winner();
        }

    }
                    
    const winner = function (){
        //turn gameboard to string
        let str = gameBoard.join("");
        console.log(str);
                    
        //regex, checking for all possible combinations to win
        if(/x..x..x|...xxx...|xxx......|......xxx|x...x...x|..x.x.x../gi.test(str)){
            alert("x win");
            xScore++;
            xWins.innerHTML = xScore;
            clearBoard();
                            
        }
                    
        else if(/o..o..o|...ooo...|ooo......|......ooo|o...o...o|..o.o.o../gi.test(str)){
            alert("o win");
            oScore++;
            oWins.innerHTML = oScore;
            clearBoard();

        }
              
        //if there aren't anymore "-" empty spaces
        //aka all spaces have been played but there is no winner
        else if(!gameBoard.includes("-")){
            alert("tie");
            clearBoard();
        }      
    }

    

    
    };
