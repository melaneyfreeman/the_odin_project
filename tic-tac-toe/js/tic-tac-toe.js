let gameBoardTiles = document.getElementsByClassName("box");
let xBtn = document.getElementById("x-btn");
let oBtn = document.getElementById("o-btn");

let xWins = document.getElementById("xScore");
let oWins = document.getElementById("oScore");
let xScore = 0;
let oScore = 0;

//starts off with x going first
let isPlayer1Turn = true;

function Player (name, marker){
    return{
        name: name,
        marker: marker
    }
}

const game = (() => {
    
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
    xBtn.onclick = function(){
        let player = Player("name", "x");
        let AI = Player("Computer", "o");
        console.log(player.marker);
        addTileListener();

    }
    oBtn.onclick = function(){
        let player = Player("name", "o");
        let AI = Player("Computer", "x");
        console.log(player.marker);
        addTileListener();
    }

    //event listener for the tiles
    const addTileListener = function (){
        for(let i = 0; i < gameBoardTiles.length; i++){
            gameBoardTiles[i].addEventListener("click", function(){
                placeMarker(gameBoardTiles[i], i);
            })
        }
    }

    //game board as an array
    //uses "-" as placeholders so the regex works properly
    //instead of just ""
    let gameBoard = ["-", "-", "-",
                     "-", "-", "-",
                     "-", "-", "-"];

    const placeMarker = function (i, index){
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
                    
        winner();
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
            oScore.innerHTML + oScore;
            clearBoard();

        }
                    
        else{
            console.log("tie");
        }         
    }

    

    
    })()
