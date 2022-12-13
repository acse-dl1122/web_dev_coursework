//----------------------------toggle menu for mobile version------------------------------

const menu = document.querySelector('#mobile_menu')
const menu_links = document.querySelector('.navbar_menu')

//change the status of the menu bar, active or not when clicked on the buttom
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
}
)


//----------------------------changes font size buttons------------------------------

//changes the font sizes when clicked on the small A, medium A or the large A
document.getElementById("small_a").onclick = function(){
    change_size("small")
}
document.getElementById("medium_a").onclick = function(){
    change_size("medium")
}
document.getElementById("large_a").onclick = function(){
    change_size("large")
}

function change_size(c){
    document.getElementsByTagName("body")[0].className=c;
}
