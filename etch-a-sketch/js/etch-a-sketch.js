const container = document.getElementById("container")
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

defaultGrid();

document.getElementById("clearBtn").addEventListener("click", clear);
document.getElementById("sizeBtn").addEventListener("click", changeSize);

document.addEventListener('mouseover', function (e){
    if(e.target.className === "cell"){
    console.log(e.target.className);
    var target = e.target;
    target.style.backgroundColor = "#f76a8c";
}
});

function defaultGrid(){
    makeRows(12);
    makeColumns(12);
}

function makeRows(rowsNum){
    for(i = 0; i < rowsNum; i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        
    }
}

function makeColumns(cellsNum){
    for(k = 0; k < rows.length; k++){
        for(j = 0; j < cellsNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            ;
        }
    }
}

function clear(){
    console.log("here");
    for(var i = 0; i < cells.length; i++){
        var thisCell = cells[i];
        thisCell.style.backgroundColor = "#ccf0e1";
        
    }
}

function changeSize(){
    var size = prompt("Enter new grid size!");
    newGrid(size,size);
}

function newGrid(size){
    var par = document.getElementById("container");
    while(par.firstChild){
        par.removeChild(par.firstChild);
    }
    makeRows(size);
    makeColumns(size);
    

}