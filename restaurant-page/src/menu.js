import {setUpNav} from './homepage.js';

function setUpMenu(){
    let contentWrapper = document.getElementById("content");

    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add("menuWrapper");

    contentWrapper.appendChild(menuWrapper);
}

export {setUpMenu}