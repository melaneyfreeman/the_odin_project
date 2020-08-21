import {setUpNav} from './homepage.js';

function setUpContact(){
    let contentWrapper = document.getElementById("content");

    let contactWrapper = document.createElement('div');
    contactWrapper.classList.add("contactWrapper");
    contactWrapper.id = "contactWrapper";

    contentWrapper.appendChild(contactWrapper);
}

export {setUpContact}