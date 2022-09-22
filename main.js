const myEmailUser = document.querySelector('.email-user');
const menuSmallDesktop = document.querySelector('.menu-small-desktop');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const cartIcon = document.querySelector('.shopping-cart');
const cartDetails = document.querySelector('.shopping-cart-details');

myEmailUser.addEventListener('click', toggleMenuUsuario);

function toggleMenuUsuario(){
    menuSmallDesktop.classList.toggle('inactive');
}

menuHamIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive');
}

cartIcon.addEventListener('click', toggleCartDetails);

function toggleCartDetails(){
    cartDetails.classList.toggle('inactive');
}