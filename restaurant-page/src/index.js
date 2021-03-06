import {setUpNav} from './homepage.js';
import {createSlideShow} from './slideshow.js';
import {setUpMenu} from './menu.js';
import {setUpContact} from './contact.js';

//initially loads homepage and loads/starts slideshow
setUpNav();
createSlideShow();

let contentWrapper = document.getElementById("content");
let ssWrapper = document.getElementById("slideshowContainer");
let menuWrapper = document.getElementById("menuWrapper");
let contactWrapper = document.getElementById("contactWrapper");

let homeLink = document.getElementsByClassName("home")[0];
let menuLink = document.getElementsByClassName("menu")[0];
let contactLink = document.getElementsByClassName("contact")[0];
let big = document.getElementsByClassName("big")[0];

homeLink.style.backgroundColor = "#e62d2e";
homeLink.style.borderRadius = "50px 50px 0px 0px";

//home link click
homeLink.addEventListener("click", loadHome);
function loadHome(){

    //need to use this so when you click on home agiank, while on home page
    //it doesnt create another "big" div
    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("big")[0])){
        //if switching from contact to menu, check if element exists
        let big = document.getElementsByClassName("big")[0];
        //use big div to remove slideshow container
        big.innerHTML = "";
        big.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("menuWrapper")[0])){
        //if switching from contact to menu, check if element exists
        let menuWrapper = document.getElementsByClassName("menuWrapper")[0];
        //use big div to remove slideshow container
        menuWrapper.innerHTML = "";
        menuWrapper.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("contactWrapper")[0])){
        //if switching from home to contact, check if element exists
        let contactWrapper = document.getElementsByClassName("contactWrapper")[0];
        //use big div to remove slideshow container
        contactWrapper.innerHTML = "";
        contactWrapper.remove();
    }

    createSlideShow();

    console.log("home");

    homeLink.style.backgroundColor = "#e62d2e";
    homeLink.style.borderRadius = "50px 50px 0px 0px";

    menuLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";

    contactLink.addEventListener("click", loadContact);
    menuLink.addEventListener("click", loadMenu);
}

//menu link click
menuLink.addEventListener("click", loadMenu);
function loadMenu(){

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("big")[0])){
        //if switching from contact to menu, check if element exists
        let big = document.getElementsByClassName("big")[0];
        //use big div to remove slideshow container
        big.innerHTML = "";
        big.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("menuWrapper")[0])){
        //if switching from contact to menu, check if element exists
        let menuWrapper = document.getElementsByClassName("menuWrapper")[0];
        //use big div to remove slideshow container
        menuWrapper.innerHTML = "";
        menuWrapper.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("contactWrapper")[0])){
        //if switching from home to contact, check if element exists
        let contactWrapper = document.getElementsByClassName("contactWrapper")[0];
        //use big div to remove slideshow container
        contactWrapper.innerHTML = "";
        contactWrapper.remove();
    }

    setUpMenu();

    console.log("menu");

    menuLink.style.backgroundColor = "#e62d2e";
    menuLink.style.borderRadius = "50px 50px 0px 0px";

    homeLink.style.backgroundColor = "black";
    contactLink.style.backgroundColor = "black";

    contactLink.addEventListener("click", loadContact);
    homeLink.addEventListener("click", loadHome);

}

//contact link click
contactLink.addEventListener("click", loadContact);
function loadContact(){

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("big")[0])){
        //if switching from menu to contact, check if element exists
        let big = document.getElementsByClassName("big")[0];
        //use big div to remove slideshow container
        big.innerHTML = "";
        big.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("menuWrapper")[0])){
        //if switching from contact to menu, check if element exists
        let menuWrapper = document.getElementsByClassName("menuWrapper")[0];
        //use big div to remove slideshow container
        menuWrapper.innerHTML = "";
        menuWrapper.remove();
    }

    //check if element exists, before trying to remove
    if(document.body.contains(document.getElementsByClassName("contactWrapper")[0])){
        //if switching from home to contact, check if element exists
        let contactWrapper = document.getElementsByClassName("contactWrapper")[0];
        //use big div to remove slideshow container
        contactWrapper.innerHTML = "";
        contactWrapper.remove();
    }

    setUpContact();

    console.log("contact");

    contactLink.style.backgroundColor = "#e62d2e";
    contactLink.style.borderRadius = "50px 50px 0px 0px";

    homeLink.style.backgroundColor = "black";
    menuLink.style.backgroundColor = "black";

    menuLink.addEventListener("click", loadMenu);
    homeLink.addEventListener("click", loadHome);
}



