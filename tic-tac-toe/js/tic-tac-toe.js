let gameBoardTiles = document.getElementsByClassName("box");
//starts off with x going first
let isPlayer1Turn = true;

console.log(gameBoardTiles);

//all the different combinations you can win with in relation to the gameBoard array
const winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//event listener for the tiles
for(let i = 0; i < gameBoardTiles.length; i++){
    gameBoardTiles[i].addEventListener("click", function(){
        play(gameBoardTiles[i], i);
    });
}

//game board as an array
let gameBoard = ["", "", "",
                 "", "", "",
                 "", "", ""];


function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

function play(i, index){
    console.log("you clicked " + i);
    if(isPlayer1Turn && gameBoard[index] === ""){
        gameBoard[index] = "X";
        console.log(gameBoard);
        i.innerHTML = "x";
        isPlayer1Turn = false;
    
    }
    else if (!isPlayer1Turn && gameBoard[index] === ""){
        gameBoard[index] = "O";
        console.log(gameBoard);
        i.innerHTML = "o";
        isPlayer1Turn = true;
    }

}