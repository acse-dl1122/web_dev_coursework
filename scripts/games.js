//----------------------------toggle menu for mobile version------------------------------

const menu = document.querySelector('#mobile_menu')
const menu_links = document.querySelector('.navbar_menu')

//change the status of the menu bar, active or not when clicked on the buttom
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
}
)


//---------------------------------- gallery filter  ---------------------------------

const filter_container = document.querySelector(".gallery_filter"),
gallery_items = document.querySelectorAll(".gallery_item");

filter_container.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter_item")){
        //deactive existing active "filter_item"
        filter_container.querySelector(".active").classList.remove("active");
        //active new "filter_item"
        event.target.classList.add("active");

        //when the list contains the filter value, or the filter value is all, changes the hide status into show, and vice versa
        const filter_value = event.target.getAttribute("data-filter");
        gallery_items.forEach((item) =>{
            if(item.classList.contains(filter_value) || filter_value === "all"){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide")
            }
        })
    }
})