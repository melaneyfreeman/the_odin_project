import {setUpMenu} from './menu.js';


//this sets up the basic navigation for all pages
function setUpNav(){
    let contentWrapper = document.getElementById("content");

//side bar
let sideBar = document.createElement('div');
sideBar.classList.add("sideBar");
contentWrapper.appendChild(sideBar);

//location
let location = document.createElement('h2');
location.classList.add("location");
sideBar.appendChild(location);
location.innerHTML = "SHIBUYA, TOKYO"
    //logo
    let logo = document.createElement('img');
    logo.classList.add("logo");
    logo.src = "../src/images/bigbangburger_logo.png";
    sideBar.appendChild(logo);

    //logo details
    let description = document.createElement('p');
    description.classList.add("description");
    description.innerHTML = "A quality eating house based in Shibuya, we serve our burgers BIG with a BANG!!!";
    sideBar.appendChild(description);

    //nav bar
    let navBar = document.createElement('div');
    navBar.classList.add("nav-bar");
    contentWrapper.appendChild(navBar);

    //nav bar links
    let homeLink = document.createElement('a');
    homeLink.classList.add("listItem")
    homeLink.classList.add("home");
    navBar.appendChild(homeLink);
    homeLink.innerHTML = "HOME";

    let menuLink = document.createElement('a');
    menuLink.classList.add("listItem"); 
    menuLink.classList.add("menu");
    navBar.appendChild(menuLink);
    menuLink.innerHTML = "MENU";


    let contactLink = document.createElement('a');
    contactLink.classList.add("listItem");
    contactLink.classList.add("contact");
    navBar.appendChild(contactLink);
    contactLink.innerHTML = "CONTACT"

    //star image
    let bigStar = document.createElement('img');
    bigStar.classList.add("star");
    bigStar.src = "../src/images/star_1.png";

    //slogan
    let slogan = document.createElement('p');
    slogan.classList.add("slogan");
    slogan.innerHTML = "Do you have the guts? Take our challenge!";



    let sloganWrapper = document.createElement('div');
    sloganWrapper.classList.add("sloganWrapper");

    description.appendChild(sloganWrapper);
    slogan.appendChild(bigStar);
    sloganWrapper.appendChild(slogan);

    sideBar.appendChild(description);
  

    



    
}

export {setUpNav};

