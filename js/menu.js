
const ham = document.querySelector('.navbar-span');
const enlaces = document.querySelector('.navbar-nav');

ham.addEventListener('click', () => {
    
    enlaces.classList.toggle('activado');

});