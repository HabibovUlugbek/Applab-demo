var menu = document.querySelector(".menu") ;
var menuButton = document.querySelector(".menu-btn") ;

menuButton.onclick = function(event) {
    event.preventDefault();
    menuButton.classList.toggle("menu-btn-active");
    menu.classList.toggle("menu_active");
}

var toggle = document.querySelectorAll(".toggle");
var paragraph = document.createElement("p");
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dignissimos sapiente quibusdam earum vel nesciunt ipsum distinctio dolor blanditiis soluta.';

toggle.forEach(x => { x.onclick = function(event) {
    event.preventDefault();
    x.classList.toggle("rotate");} 
});
