function setUpHome(){
    let contentWrapper = document.getElementById("content");

    //logo wrapper
    let logoWrapper = document.createElement('div');
    logoWrapper.classList.add("logoWrapper");
    contentWrapper.appendChild(logoWrapper);

    //logo
    let logo = document.createElement('img');
    logo.classList.add("logo");
    logo.src = "../src/images/bigbangburger_logo.png";
    logoWrapper.appendChild(logo);

    //logo details
    let description = document.createElement('p');
    description.classList.add("description");
    description.innerHTML = "A quality eating house based in Shibuya, we serve our burgers BIG with a BANG!";
    logoWrapper.appendChild(description);

    //nav bar
    let navBar = document.createElement('div');
    navBar.classList.add("nav-bar");
    contentWrapper.appendChild(navBar);

    //nav bar links
    let homeLink = document.createElement('a');
    homeLink.classList.add("listItem")
    homeLink.classList.add("selectedItem");
    navBar.appendChild(homeLink);
    homeLink.innerHTML = "HOME";

    let menuLink = document.createElement('a');
    menuLink.classList.add("listItem"); 
    navBar.appendChild(menuLink);
    menuLink.innerHTML = "MENU";


    let contactLink = document.createElement('a');
    contactLink.classList.add("listItem");
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

    //slogan link
    let sloganLink = document.createElement('p');
    sloganLink.classList.add("sloganLink");
    sloganLink.innerHTML = "CLICK HERE TO LEARN MORE";


    let sloganWrapper = document.createElement('div');
    sloganWrapper.classList.add("sloganWrapper");
    contentWrapper.appendChild(sloganWrapper);
    slogan.appendChild(bigStar);
    sloganWrapper.appendChild(slogan);
    slogan.appendChild(sloganLink);
  
    
}

export {setUpHome};

