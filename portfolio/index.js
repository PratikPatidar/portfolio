let Hamburg = document.querySelector('.hamburg');
let navbar = document.querySelector('#nav');
let rightnav = document.querySelector('.rightnav');
let navlist = document.querySelector('.nav-list');


Hamburg.addEventListener('click', () => {
    rightnav.classList.toggle('visibality-class');
    navlist.classList.toggle('visibality-class');
    navbar.classList.toggle('h-nav');

})