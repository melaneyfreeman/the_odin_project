import {checkIfHomePage} from './showSlideShow.js';

function createSlideShow(){
    let wrapper = document.getElementById("content");
    let slideShowContainer = document.createElement('div');
    slideShowContainer.classList.add("slideshow-container");
    slideShowContainer.id = "slideshowContainer";

    let intro = document.createElement('p');
    intro.innerHTML = "''Welcome to BIG BANG BURGER! Owned by Okumura Foods. Witness the power of Big Bang Burgers! Our employees are the foundation upon which our victory is built. Every problem can be solved with more burgers... that is the strength of Big Bang!'' <br> -Kunikazu Okumura, CEO of Okumura Foods"

    slideShowContainer.appendChild(intro);

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

    //dots
    let dotDiv = document.createElement('div');
    dotDiv.style.textAlign = "center";

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

    slideShowContainer.appendChild(dotDiv);

    let bigWrapper = document.createElement('div');
    wrapper.appendChild(bigWrapper);
    bigWrapper.appendChild(slideShowContainer);
    bigWrapper.classList.add("big");

    start();
}

function start(){
    var index = 0;
    showSlides();
 
    function showSlides(){
        if(document.body.contains(document.getElementById("slideshowContainer"))){
            //container exists
            var dots = document.getElementsByClassName('dot');
            var i;
            var slides = document.getElementsByClassName("mySlides");

            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }

            index++;
            if(index > slides.length){
                index = 1;
            }

            for (i = 0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[index-1].style.display = "block";
            dots[index-1].className += " active";
            setTimeout(showSlides, 3000); //change image every 2 seconds
        }
        
        else{ 
            return;
        }
    }
}

export {createSlideShow, start};