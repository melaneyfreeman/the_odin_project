import {setUpNav} from './homepage.js';

function setUpContact(){
    let contentWrapper = document.getElementById("content");

    let contactWrapper = document.createElement('div');
    contactWrapper.classList.add("contactWrapper");
    contactWrapper.id = "contactWrapper";

    contentWrapper.appendChild(contactWrapper);

    let contactInfo = document.createElement('div');
    contactInfo.classList.add("contactInfoWrapper");
    let locationInfo = document.createElement('div');
    locationInfo.classList.add("locationInfoWrapper");
    let hoursInfo = document.createElement('div');
    hoursInfo.classList.add("hoursInfoWrapper");

   
    let phone = document.createElement('p');
    phone.innerHTML = "+81-705-5510-491";
    let email = document.createElement('p');
    email.innerHTML = "bigbangburger.shibuya@okumurafoods.com";

    let locationHeader = document.createElement("h3");
    locationHeader.innerHTML = "LOCATION";
    let address = document.createElement('p');
    address.innerHTML = "1-chōme Dōgenzaka, Shibuya City, Tōkyō-to 150-0043, Japan <br> セントラルストリート渋谷日本"
    let map = document.createElement('img');
    map.src = "../src/images/map.png";

    let hoursHeader = document.createElement('h3');
    hoursHeader.innerHTML = "HOURS";
    let hours = document.createElement('p');
    hours.innerHTML = "MONDAY - SATURDAY <br> (月曜日-土曜日) <br> 11AM - 10PM "
    let options = document.createElement('p');
    options.innerHTML = "Dine and carry-out <br> (食事と持ち帰り) <br> 11:30AM - 9PM";

    let merchImg = document.createElement('img');
    merchImg.src = "../src/images/merch.png";
    merchImg.classList.add("merchImg");

    phone.classList.add("pInfo");
    email.classList.add("pInfo");
    address.classList.add("pInfo");
    hours.classList.add("pInfo");
    options.classList.add("pInfo");
    
    contactInfo.appendChild(merchImg);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    locationInfo.appendChild(locationHeader);
    locationInfo.appendChild(address);
    locationInfo.appendChild(map);

    hoursInfo.appendChild(hoursHeader);
    hoursInfo.appendChild(hours);
    hoursInfo.appendChild(options);

    contactWrapper.appendChild(contactInfo);
    contactWrapper.appendChild(locationInfo);
    contactWrapper.appendChild(hoursInfo);

}

export {setUpContact}