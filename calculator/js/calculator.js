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
    

    //clears input and calculation if there is
    //already a calculation there
    if(calculation.textContent != ""){
        text.textContent = "";
        calculation.textContent = "";
    }

    //0-9
    if(btn < 10){ 
        btnLog.push(btn);
        console.log(btnLog);
            text.textContent+= btn; 
            //use regex to remove repeated operators like *** or ...
            text.textContent = text.textContent.replace(regex, '$1');
            console.log(text.textContent);
    }

    // /,*,-,+,.
    if(btn === "/" || btn === "*" || btn === "-" || btn === "+" || btn === "."){
        console.log(btnLog);
        //checks if the last input in the btnLog
        //is an operator and skip if it is
        if(btnLog[btnLog.length-1] === "/" ||
            btnLog[btnLog.length-1] === "*" ||
            btnLog[btnLog.length-1] === "+" ||
            btnLog[btnLog.length-1] === "-" ||
            btnLog[btnLog.length-1] === "." ||
            text.textContent === ""){
            return;
        }
        else{
            btnLog.push(btn);
            text.textContent+= btn; 
        }

    }

    //removes last character for backspace
    if(btn === "backspace"){
        text.textContent = text.textContent.slice(0,-1);
    }

    //clears input/calculation
    if(btn === "clear"){
        text.textContent = "";
        calculation.textContent = "";
        btnLog = [];
    }

    //calculates
    if(btn === "enter"){
        console.log("last: " + text.textContent.charAt(text.textContent.length-1));
        //check if there is an operator at the end of the string
        if(text.textContent.charAt(text.textContent.length-1) === "/" ||
            text.textContent.charAt(text.textContent.length-1) === "*" ||
            text.textContent.charAt(text.textContent.length-1) === "+" ||
            text.textContent.charAt(text.textContent.length-1) === "-" ||
            text.textContent.charAt(text.textContent.length-1) === "."){
            
            text.textContent = text.textContent.slice(0,-1);
            text.textContent = text.textContent.replace(regex, '$1');

            calculate(text.textContent);

        }
        else{
            text.textContent = text.textContent.replace(regex, '$1');
            calculate(text.textContent);
        }
       
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

