const myEmailUser = document.querySelector('.email-user');
const menuSmallDesktop = document.querySelector('.menu-small-desktop');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');

myEmailUser.addEventListener('click', toggleMenuUsuario);

function toggleMenuUsuario(){
    menuSmallDesktop.classList.toggle('inactive');
}

menuHamIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive');
}