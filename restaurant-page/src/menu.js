import {setUpNav} from './homepage.js';

function setUpMenu(){
    let contentWrapper = document.getElementById("content");
contentWrapper.innerHTML = "";
    setUpNav();

}

export {setUpMenu}