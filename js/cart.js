let formsBuy = document.querySelectorAll('form[data-buy]');

let cartDisplay = document.querySelector('.cart-display');
let cartIcon = document.getElementById('cart-icon');

// let filterNav = document.querySelector('.filter-nav');

class Products {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

}

let watch = new Products('Montre Run\'Zik S Plus', '250');
let headphone = new Products('Casque', '199');
let brassard = new Products('Brassard', '19');

let cartCount = {
  watches: 0,
  headphones: 0,
  armbands: 0
};

let nbProductCartHtml = document.getElementById('nb-products-cart');

formsBuy.forEach(form => {
  form.addEventListener('submit', (event) => {
    datasetForm = form.dataset.buy;

    nbOfProducts = Number(form.elements[0].value);
 
    event.preventDefault();
    
    switch (datasetForm) {
      case 'watch':
        cartCount.watches += nbOfProducts === 0 ? 1 : nbOfProducts;
        break;
      case 'headphone':
        cartCount.headphomes += nbOfProducts === 0 ? 1 : nbOfProducts;
        break;
      case 'armband':
        cartCount.armbands += nbOfProducts === 0 ? 1 : nbOfProducts;
        break;
    }
  
    let countCart = function (cart) {
      let nb = 0;
      let valueCart = Object.values(cart);
      for (let i = 0; i < valueCart.length; i++) {
        nb += valueCart[i];
      }
      return nb;
    }
  
    if (countCart(cartCount) > 0) {
      nbProductCartHtml.textContent = countCart(cartCount);
    }
  });
});

let createAndDisplayProductInCart = function (product, quantity) {

  let title = document.createElement('div');
  title.innerHTML = `<div id="cart-title-product">${ product.name }</div> `;

  let quantityHtml = document.createElement('div');
  quantityHtml.innerHTML = `Qté: <span id="cart-nb-products">${ quantity }</span>`

  let price = document.createElement('div');
  price.innerHTML = `Prix : <span id="cart-price"> ${ product.price  } € </span>`;

  let hr = document.createElement('hr');

  cartDisplay.appendChild(title);
  cartDisplay.appendChild(quantityHtml);
  cartDisplay.appendChild(price);
  cartDisplay.appendChild(hr);
}

// createAndDisplayProductInCart(watch, 7);

let calculateTotalPriceAndDisplayInCart = function (nbOfProductByProduct) {

  let totalPrice = 0;

  for (let i = 0; i < nbOfProductByProduct.length; i++) {
    let element = nbOfProductByProduct[i];

    switch (element) {
      case 'watch': 
        totalPrice +=  watch.price * nbOfProductByProduct.watches;
        break;
      case 'headphone':
        totalPrice +=  headphome.price * nbOfProductByProduct.headphomes;
        break;
      case 'armband':
        totalPrice +=  armbands.price * nbOfProductByProduct.armbands;
        break;
    }
  }

  let totalPriceHtml = document.createElement('div');
  totalPriceHtml.innerHTML = `Prix total : <span id="cart-price-total"> ${ totalPrice } € </span>`;

  cartDisplay.appendChild(totalPriceHtml);
}

// calculateTotalPriceAndDisplayInCart(cartCount);

cartIcon.addEventListener('click', function () {

  createAndDisplayProductInCart(product, quantity);
  calculateTotalPriceAndDisplayInCart(nbOfProductByProduct);

  if (cartDisplay.style.display == 'none') {
    cartDisplay.style.display = 'block';
  } else {
    cartDisplay.style.display = 'none';
  }
});