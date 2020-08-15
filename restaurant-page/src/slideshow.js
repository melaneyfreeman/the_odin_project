import {checkIfHomePage} from './showSlideShow.js';


function createSlideShow(){
let wrapper = document.getElementById("content");
let slideShowContainer = document.createElement('div');
slideShowContainer.classList.add("slideshow-container");
slideShowContainer.id = "slideshowContainer";

/* //logo img(0th)
let mySlides0 = document.createElement('div');
mySlides0.classList.add("mySlides");
mySlides0.classList.add("fade");

let image0 = document.createElement('img');
image0.style.widows = "100%";
image0.src = "../src/images/logo_2.png";

slideShowContainer.appendChild(mySlides0);
mySlides0.appendChild(image0); */

//1st img
let mySlides1 = document.createElement('div');
mySlides1.classList.add("mySlides");
mySlides1.classList.add("fade");

let image1 = document.createElement('img');
image1.style.widows = "100%";
image1.src = "../src/images/burger_7.jpeg";

slideShowContainer.appendChild(mySlides1);
mySlides1.appendChild(image1);

//2nd img
let mySlides2 = document.createElement('div');
mySlides2.classList.add("mySlides");
mySlides2.classList.add("fade");

let image2 = document.createElement('img');
image2.style.widows = "100%";
image2.src = "../src/images/burger_6.jpeg";

slideShowContainer.appendChild(mySlides2);
mySlides2.appendChild(image2);

//3rd img
let mySlides3 = document.createElement('div');
mySlides3.classList.add("mySlides");
mySlides3.classList.add("fade");

let image3 = document.createElement('img');
image3.style.widows = "100%";
image3.src = "../src/images/burger_7.jpeg";

slideShowContainer.appendChild(mySlides3);
mySlides3.appendChild(image3);

//4th img
let mySlides4 = document.createElement('div');
mySlides4.classList.add("mySlides");
mySlides4.classList.add("fade");

let image4 = document.createElement('img');
image4.style.widows = "100%";
image4.src = "../src/images/burger_4.jpg";

slideShowContainer.appendChild(mySlides4);
mySlides4.appendChild(image4);

//5th img
let mySlides5 = document.createElement('div');
mySlides5.classList.add("mySlides");
mySlides5.classList.add("fade");

let image5 = document.createElement('img');
image5.style.widows = "100%";
image5.src = "../src/images/burger_5.jpeg";

slideShowContainer.appendChild(mySlides5);
mySlides5.appendChild(image5);

///
let prev = document.createElement('a');
prev.classList.add("prev");
slideShowContainer.appendChild(prev);
///onlick

let next = document.createElement('a');
next.classList.add("next");
slideShowContainer.appendChild(next);
//onclick

let dotDiv = document.createElement('div');
dotDiv.style.textAlign = "center";

/* let span0 = document.createElement('span');
span0.classList.add("dot");
dotDiv.appendChild(span0); */

let span1 = document.createElement('span');
span1.classList.add("dot");
dotDiv.appendChild(span1);

let span2 = document.createElement('span');
span2.classList.add("dot");
dotDiv.appendChild(span2);

let span3 = document.createElement('span');
span3.classList.add("dot");
dotDiv.appendChild(span3);

let span4 = document.createElement('span');
span4.classList.add("dot");
dotDiv.appendChild(span4);

let span5 = document.createElement('span');
span5.classList.add("dot");
dotDiv.appendChild(span5);

wrapper.appendChild(slideShowContainer);
slideShowContainer.appendChild(dotDiv);

}

function removeSlideShow(){
    let slideShowContainer = document.getElementById("slideshowContainer");
    let wrapper = document.getElementById("content");
    wrapper.removeChild(slideShowContainer);
}

export {createSlideShow, removeSlideShow};