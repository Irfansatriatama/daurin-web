const menuToggle = document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function(){
    ul.classList.toggle('slide');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('noshadow');
});