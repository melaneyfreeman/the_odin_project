import {setUpNav} from './homepage.js';

function setUpMenu(){
    let contentWrapper = document.getElementById("content");

    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add("menuWrapper");
    menuWrapper.id = "menuWrapper";

    contentWrapper.appendChild(menuWrapper);

    let burgerHeading = document.createElement('h2');
    menuWrapper.append(burgerHeading);
    burgerHeading.innerHTML = "BURGERS";

    let burgerWrapper = document.createElement('div');
    burgerWrapper.classList.add("burgerWrapper");
    burgerWrapper.id = "burgerWrapper";
    menuWrapper.appendChild(burgerWrapper);
    


//burger options
    let burgerA = document.createElement('img');
    burgerA.classList.add("box");
    burgerA.src = "../src/images/burger_menu_1.jpeg";
    let burgerAText = document.createElement('div');
    let burgerATitle = document.createElement('h4');
    let burgerADescription = document.createElement('p');
    burgerAText.appendChild(burgerATitle);
    burgerAText.appendChild(burgerADescription);
    burgerATitle.innerHTML = "burger 1";
    burgerADescription.innerHTML = "burger 1 description";
    burgerA.appendChild(burgerAText);

    let burgerB = document.createElement('img');
    burgerB.classList.add("box");
    burgerB.src = "../src/images/burger_menu_5.jpeg";

    let burgerC = document.createElement('img');
    burgerC.classList.add("box");
    burgerC.src = "../src/images/burger_menu_3.jpeg";


    let burgerD = document.createElement('img');
    burgerD.classList.add("box");
    burgerD.src = "../src/images/burger_menu_4.jpeg";

    let burgerE = document.createElement('img');
    burgerE.classList.add("box");
    burgerE.src = "../src/images/burger2.jpg";


    let burgerF = document.createElement('img');
    burgerF.classList.add("box");
    burgerF.src = "../src/images/burger4.jpg";


    let burgerG = document.createElement('img');
    burgerG.classList.add("box");
    burgerG.src = "../src/images/burger_2.jpg";


    burgerWrapper.appendChild(burgerA);
    burgerWrapper.appendChild(burgerB);
    burgerWrapper.appendChild(burgerC);
    burgerWrapper.appendChild(burgerD);
    burgerWrapper.appendChild(burgerE);
    burgerWrapper.appendChild(burgerF);
    burgerWrapper.appendChild(burgerG);

}

export {setUpMenu}