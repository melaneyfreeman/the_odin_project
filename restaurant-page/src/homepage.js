function setUpHome(){
    let contentWrapper = document.getElementById("content");

    let navBar = document.createElement('div');
    navBar.classList.add("nav-bar");
    contentWrapper.appendChild(navBar);

    let homeLink = document.createElement('a');
    homeLink.classList.add("listItem")
    homeLink.classList.add("selectedItem");
    navBar.appendChild(homeLink);
    homeLink.innerHTML = "HOME";

    let menuLink = document.createElement('a');
    menuLink.classList.add("listItem"); 
    navBar.appendChild(menuLink);
    menuLink.innerHTML = "MENU";

    let aboutLink = document.createElement('a');
    aboutLink.classList.add("listItem");
    navBar.appendChild(aboutLink);
    aboutLink.innerHTML = "ABOUT";

    let reviewLink = document.createElement('a');
    reviewLink.classList.add("listItem");
    navBar.appendChild(reviewLink);
    reviewLink.innerHTML = "REVIEWS";

    let contactLink = document.createElement('a');
    contactLink.classList.add("listItem");
    navBar.appendChild(contactLink);
    contactLink.innerHTML = "CONTACT"

    let slogan = document.createElement('p');
    slogan.classList.add("slogan");
    slogan.innerHTML = "DO YOU HAVE THE GUTS?";
    contentWrapper.appendChild(slogan);

    
}

export {setUpHome};

