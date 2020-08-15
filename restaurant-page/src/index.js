import {setUpNav} from './homepage.js';
import {createSlideShow, removeSlideShow} from './slideshow.js';
import {setUpMenu} from './menu.js';

//setting up basic functions
//loads homepage and loads/starts slideshow

    setUpNav();

let contentWrapper = document.getElementById("content");
let ssWrapper = document.getElementById("slideshowContainer");

createSlideShow();

if(document.body.contains(document.getElementById("slideshowContainer"))){
    //container exists

}

let homeLink = document.getElementsByClassName("home")[0];
let menuLink = document.getElementsByClassName("menu")[0];
let contactLink = document.getElementsByClassName("contact")[0];

homeLink.style.backgroundColor = "#e62d2e";
    homeLink.style.borderRadius = "50px 50px 0px 0px";

homeLink.onclick = function(){
    contentWrapper.innerHTML = "";
    setUpNav();
    createSlideShow();

    console.log("home");
    homeLink.style.backgroundColor = "#e62d2e";
    homeLink.style.borderRadius = "50px 50px 0px 0px";

    menuLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";
}

menuLink.onclick = function(){
    removeSlideShow();
    contentWrapper.innerHTML = "";
    console.log("menu");

    menuLink.style.backgroundColor = "#e62d2e";
    menuLink.style.borderRadius = "50px 50px 0px 0px";

    homeLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";

    //setUpMenu();
}

contactLink.onclick = function(){
    console.log("contact");
}


