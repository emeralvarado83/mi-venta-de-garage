const myEmailUser = document.querySelector('.email-user');
const menuSmallDesktop = document.querySelector('.menu-small-desktop');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const cartIcon = document.querySelector('.shopping-cart');
const cartDetails = document.querySelector('.shopping-cart-details');

myEmailUser.addEventListener('click', toggleMenuUsuario);

function toggleMenuUsuario(){
    const cartDetailsClosed = cartDetails.classList.contains('inactive');

    if(!cartDetailsClosed){
        cartDetails.classList.add('inactive');
    }

    menuSmallDesktop.classList.toggle('inactive');
}

menuHamIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    const cartDetailsClosed = cartDetails.classList.contains('inactive');

    if(!cartDetailsClosed){
        cartDetails.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}

cartIcon.addEventListener('click', toggleCartDetails);

function toggleCartDetails(){
    const menuMobileClosed = menuMobile.classList.contains('inactive');

    if(!menuMobileClosed){
        menuMobile.classList.add('inactive');
    }

    cartDetails.classList.toggle('inactive');
}