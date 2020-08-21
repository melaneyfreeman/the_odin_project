import {setUpNav} from './homepage.js';

function setUpMenu(){
    let contentWrapper = document.getElementById("content");

    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add("menuWrapper");
    menuWrapper.id = "menuWrapper";

    contentWrapper.appendChild(menuWrapper);

    let burgerA = document.createElement('img');
    burgerA.classList.add("box");
    burgerA.src = "../src/images/burger_menu_1.jpeg";

    let burgerB = document.createElement('img');
    burgerB.classList.add("box");
    burgerB.src = "../src/images/burger_menu_2.jpeg";

    let burgerC = document.createElement('img');
    burgerC.classList.add("box");
    burgerC.src = "../src/images/burger_menu_3.jpeg";


    let burgerD = document.createElement('img');
    burgerD.classList.add("box");
    burgerD.src = "../src/images/burger_menu_4.jpeg";


    let burgerE = document.createElement('img');
    burgerE.classList.add("box");

    let burgerF = document.createElement('img');
    burgerF.classList.add("box");

    let burgerG = document.createElement('img');
    burgerG.classList.add("box");

    menuWrapper.appendChild(burgerA);
    menuWrapper.appendChild(burgerB);
    menuWrapper.appendChild(burgerC);
    menuWrapper.appendChild(burgerD);
    menuWrapper.appendChild(burgerE);
    menuWrapper.appendChild(burgerF);
    menuWrapper.appendChild(burgerG);

}

export {setUpMenu}