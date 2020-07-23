let gameBoardTiles = document.getElementsByClassName("box");
//starts off with x going first
let isPlayer1Turn = true;

console.log(gameBoardTiles);

//event listener for the tiles
function addTileEventListener(){
    for(let i = 0; i < gameBoardTiles.length; i++){
        gameBoardTiles[i].addEventListener("click", function(){
            play(gameBoardTiles[i], i);
        });
    }
}

addTileEventListener();

//game board as an array
//uses "-" as placeholders so the regex works properly
//instead of just ""
let gameBoard = ["-", "-", "-",
                 "-", "-", "-",
                 "-", "-", "-"];


function Player(name, marker, wins, loses){
    this.name = name;
    this.marker = marker;
    this.wins  = wins;
    this.loses = loses;
}

function play(i, index){
    console.log("you clicked " + i);
    if(isPlayer1Turn && gameBoard[index] === "-"){
        gameBoard[index] = "x";
        console.log(gameBoard);
        i.innerHTML = "x";
        isPlayer1Turn = false;
    
    }
    else if (!isPlayer1Turn && gameBoard[index] === "-"){
        gameBoard[index] = "o";
        console.log(gameBoard);
        i.innerHTML = "o";
        isPlayer1Turn = true;
    }

    checkWin();
}

function checkWin(){
    //turn gameboard to string
    let str = gameBoard.join("");
    console.log(str);

    //regex, checking for all possible combinations to win
    if(/x..x..x|...xxx...|xxx......|......xxx|x...x...x|..x.x.x../gi.test(str)){
        console.log("x win");
        
    }

    else if(/o..o..o|...ooo...|ooo......|......ooo|o...o...o|..o.o.o../gi.test(str)){
        console.log("o win");
    }

    else{
        console.log("tie");
    }


}


