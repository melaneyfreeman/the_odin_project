//set up text
let text = document.querySelector("#inputText");
let calculation  = document.querySelector("#calculationText")
let nums = document.querySelector("#numBtn");
let operators = document.querySelector("#opBtn");

//clears text
text.textContent= "";
calculation.textContent= "";
let regex = /([./*+-])\1+/;

let btnLog = [];

//for each button, add an event listener for click
let buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () =>{
        enterNumber(btn.value);
    });
});

function enterNumber(btn){
    //pushes new btn to log each button press
    btnLog.push(btn);
    console.log(btnLog);

    //clears input and calculation if there is
    //already a calculation there
    if(calculation.textContent != ""){
        text.textContent = "";
        calculation.textContent = "";
    }

    //0-9
    if(btn < 10){ 
            text.textContent+= btn; 
            //use regex to remove repeated operators like *** or ...
            text.textContent = text.textContent.replace(regex, '$1');
            console.log(text.textContent);
    }

    // /,*,-,+,.
    if(btn === "/" || btn === "*" || btn === "-" || btn === "+" || btn === "."){
        text.textContent+= btn;
        if(btnLog.indexOf(btnLog.length-1) === "/"){
            text.textContent = text.textContent.indexOf(text.textContent.length-1).replace(btn);
        }

    }

    //clears input/calculation
    if(btn === "clear"){
        text.textContent = "";
        calculation.textContent = "";
        btnLog = [];
    }

    //calculates
    if(btn === "enter"){
    
        
        text.textContent = text.textContent.replace(regex, '$1');
        calculate(text.textContent);
    }
}



function calculate(calcLog){
    //convert to string
    let str = calcLog.toString();
    text.textContent = text.textContent.replace(regex, '$1');


        
    //convert str to an equation
    let result = eval(calcLog);
    calculation.textContent = result;
}

