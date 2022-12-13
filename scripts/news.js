//----------------------------toggle menu for mobile version------------------------------

const menu = document.querySelector('#mobile_menu')
const menu_links = document.querySelector('.navbar_menu')

//change the status of the menu bar, active or not when clicked on the buttom
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
}
)



