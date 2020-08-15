import {setUpNav} from './homepage.js';
import {createSlideShow, removeSlideShow} from './slideshow.js';
import {setUpMenu} from './menu.js';

//initially loads homepage and loads/starts slideshow
    setUpNav();
    createSlideShow();

let contentWrapper = document.getElementById("content");
let ssWrapper = document.getElementById("slideshowContainer");


let homeLink = document.getElementsByClassName("home")[0];
let menuLink = document.getElementsByClassName("menu")[0];
let contactLink = document.getElementsByClassName("contact")[0];
let big = document.getElementsByClassName("big")[0];

homeLink.style.backgroundColor = "#e62d2e";
homeLink.style.borderRadius = "50px 50px 0px 0px";


//home link click
homeLink.addEventListener("click", loadHome);
function loadHome(){
    big.innerHTML = "";
    createSlideShow();

    console.log("home");

    homeLink.style.backgroundColor = "#e62d2e";
    homeLink.style.borderRadius = "50px 50px 0px 0px";

    menuLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";
}

//menu link click
menuLink.addEventListener("click", loadMenu);
function loadMenu(){
    //use big div to remove slideshow container
    big.innerHTML = "";

    setUpMenu();

    console.log("menu");

    menuLink.style.backgroundColor = "#e62d2e";
    menuLink.style.borderRadius = "50px 50px 0px 0px";

    homeLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";
}

//contact link click
contactLink.onclick = function(){
    console.log("contact");
}


