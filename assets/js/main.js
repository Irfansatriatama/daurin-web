
// navbar
const menuToggle = document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function(){
    ul.classList.toggle('slide');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('noshadow');
});


// guides
const ItemHeaders = document.querySelectorAll(".header-guides");

ItemHeaders.forEach(ItemHeader =>{
    ItemHeader.addEventListener("click", event =>{
        ItemHeader.classList.toggle("active");
        
        const ItemBody = ItemHeader.nextElementSibling;

        if(ItemHeader.classList.contains("active")){
            ItemBody.style.maxHeight = ItemBody.scrollHeight + "px"
        } else{
            ItemBody.style.maxHeight = 0;
        }
    })
})