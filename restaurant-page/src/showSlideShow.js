function start(){

    var index = 0;
    showSlides();

    function showSlides(){
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
        setTimeout(showSlides, 1000); //change image every 2 seconds
    }

}

export {start};