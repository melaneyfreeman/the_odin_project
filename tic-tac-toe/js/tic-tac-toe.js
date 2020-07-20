let gameBoardTiles = document.getElementsByClassName("box");
let isPlayer1Turn;

for(let i = 0; i < gameBoardTiles.length; i++){
    gameBoardTiles[i].addEventListener("click", function(){
        play(gameBoardTiles[i]);
    });
}
    
let gameBoard = ["", "", "",
                 "", "", "",
                 "", "", ""];

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

function play(i){
    console.log("you clicked " + i);
    if(isPlayer1Turn){
        i.innerHTML = "x";
        isPlayer1Turn = false;
    }
    else{
        i.innerHTML = "o";
        isPlayer1Turn = true;
    }

}