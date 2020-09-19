var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener ("load", function () {
    showSlides(slideIndex);
    myTimer = this.setInterval(function () {
        plusSlides(1)
    }, 2000);

    slideshowContainer = document.getElementsByClassName("wrapper")[0];

    slideshowContainer.addEventListener("mouseenter", pause);
    slideshowContainer.addEventListener("mouseleave", resume);
})

//  slide controls
function plusSlides (n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    if (n === -1 ){
        myTimer = setInterval(function () { plusSlides(n + 2)}, 2000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1)}, 2000);
    }
}
 
//  curent slide controls
function currentSlide (n) {
    clearInterval(myTimer);
    //resets the timer 
    myTimer = setInterval(function () { plusSlides(n + 1)}, 2000);
    showSlides(slideIndex = n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //  reset slideIndex when it gets to the end of the slideshow
    //  so it starts back at the beginning
    if (n > slides.length) {
        slideIndex = 1;
    }

    //  if user is on first slide and hits back button
    //  will go back to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex)}, 2000);
}