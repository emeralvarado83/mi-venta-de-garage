const myEmailUser = document.querySelector('.email-user');
const menuSmallDesktop = document.querySelector('.menu-small-desktop');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const cartIcon = document.querySelector('.shopping-cart');
const cartDetails = document.querySelector('.shopping-cart-details');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    price: 45,
    name: 'Gameboy', 
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 35,
    name: 'Controller', 
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 45,
    name: 'Gameboy', 
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 35,
    name: 'Controller', 
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 45,
    name: 'Gameboy', 
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 35,
    name: 'Controller', 
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 45,
    name: 'Gameboy', 
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    price: 35,
    name: 'Controller', 
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600'
});


for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const productFigure = document.createElement('figure');
    productFigure.classList.add('product-image');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPriceName = document.createElement('div');
    productPriceName.classList.add('product-price-name');

    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.innerText = product.price;

    const productName = document.createElement('p');
    productName.classList.add('article');
    productName.innerText = product.name;
 
    const productAddCart = document.createElement('div');
    productAddCart.classList.add('add-to-cart');

    const iconAddCart = document.createElement('i');
    iconAddCart.classList.add('fas');
    iconAddCart.classList.add('fa-cart-plus');
    iconAddCart.classList.add('my-cart-icon');

    cardsContainer.appendChild(productCard);

    productCard.appendChild(productFigure);
    productCard.appendChild(productInfo);

    productFigure.appendChild(productImage);

    productInfo.appendChild(productPriceName);
    productInfo.appendChild(productAddCart);

    productPriceName.appendChild(productPrice);
    productPriceName.appendChild(productName);

    productAddCart.appendChild(iconAddCart);
}