//----------------------------toggle menu for mobile version------------------------------

const menu = document.querySelector('#mobile_menu')
const menu_links = document.querySelector('.navbar_menu')

//change the status of the menu bar, active or not when clicked on the buttom
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
}
)


//----------------------------------reactive slider button and dots ---------------------------------

//initialize the number to 1
var slideNo = 1;
//call the function at the start
Carousel(slideNo);

function Carousel(n){
    var slides = document.getElementsByClassName("image_container");
    var dots = document.getElementsByClassName("dot");
    //when the slide number exceed the total slides, reset it back to one (clicked right at the last slide)
    if (n > slides.length) {
        slideNo = 1;
    }

    //when the slide number less than 1, reset it to last slide (clicked left at the first slide)
    if (n < 1) {
        slideNo = slides.length;
    }

    //set all slides to the status "none"
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //if the dot is clicked, active the clicked number and deactivated the previous one
    slides[slideNo - 1].style.display = "block";
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideNo - 1].className += " active";
}

//increase slide number by one
function next_slide(n){
    Carousel(slideNo += n);
}

//get the current slide number
function current_slide(n){
    Carousel(slideNo = n);
}