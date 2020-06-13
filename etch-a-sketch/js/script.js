//create container object
const container = document.getElementById("container")

//set up event listeners for all buttons
document.getElementById("clearBtn").addEventListener("click", clear);
document.getElementById("sizeBtn").addEventListener("click", changeSize);
document.getElementById("blackPenBtn").addEventListener("click", blackPen);
document.getElementById("rainbowPenBtn").addEventListener("click", rainbowPen);

//create defualt grid when page loads
createGrid(32);

//clear when start so that it pays attention to the pen color
clear();

//takes size from input
function createGrid(size){
    //removes the current grid, instead of adding onto it
    container.innerHTML = "";

    //create columns/rows based on the given size
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    
    for(let i = 0; i < size * size; i++){
        const frame = document.createElement('div');
        frame.classList.add("frame-box");
        container.appendChild(frame);
    }
}

function blackPen(){
    document.addEventListener('mouseover', function (e){
        if(e.target.className === "frame-box grid-box" || e.target.className === "frame-box grid-box colored"){
            var target = e.target;
            target.style.backgroundColor = "black";
            target.classList.add("colored");
        }
    });
    resetBtns();
    this.style.backgroundColor = "#f76a8c";
    this.style.color = "white";
}

function rainbowPen(){
    document.addEventListener('mouseover', function (e){
        if(e.target.className === "frame-box grid-box" || e.target.className === "frame-box grid-box colored"){
            var target = e.target;
            target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            target.classList.add("colored");
        }
    });
    resetBtns();
    this.style.backgroundColor = "#f76a8c";
    this.style.color = "white";
}

//reset button styles so only active button remains highlighted
function resetBtns(){
    btnArray = document.getElementsByTagName("button");
    for(let i = 0; i < btnArray.length; i++){
        btnArray[i].style.backgroundColor = "#ccf0e1";
        btnArray[i].style.color = "black";
    }
}

//create random color for rainbow pen
function randomColor(){
    return Math.floor(Math.random() * 256);
}

//clears grid by removing classes that tell it has been hovered over/colored
function clear(){
    const cells = document.querySelectorAll(".frame-box, .grid-box");
    Array.from(cells).forEach((element) => {
        element.style.removeProperty("background-color");
        element.classList.remove("colored");
        element.classList.add("grid-box");
    });
}

//prompt to get custom grid size from user and clears the grid
function changeSize(){
    var size = prompt("Enter new grid size!");
    createGrid(size);
    clear();
}