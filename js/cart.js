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
let armband = new Products('Brassard', '19');

let cartCount = {
  watches: 0,
  headphones: 0,
  armbands: 0
};



let createAndDisplayProductInCart = function (product, quantity, id) {

  let title = document.createElement('div');
  title.innerHTML = `<div id="cart-title-product">${ product.name }</div> `;

  let quantityHtml = document.createElement('div');
  quantityHtml.innerHTML = `Qté: <span id="cart-nb-products">${ quantity }</span>`

  let price = document.createElement('div');
  price.innerHTML = `Prix : <span id="cart-price"> ${ product.price  } € </span>`;

  let hr = document.createElement('hr');

  let container = document.createElement('div');
  container.id = id; //id à partir du produit
  container.appendChild(title);
  container.appendChild(quantityHtml);
  container.appendChild(price);
  container.appendChild(hr);

  let parentRef = document.getElementById('total-price');
  cartDisplay.insertBefore(container, parentRef);
}

let calculateTotalPriceAndDisplayInCart = function (nbOfProductByProduct) {

  let totalPrice = 0;

  for (const property in nbOfProductByProduct) {

    switch (property) {
      case 'watches': 
        totalPrice +=  watch.price * nbOfProductByProduct[property];
        break;
      case 'headphones':
        totalPrice +=  headphone.price * nbOfProductByProduct[property];
        break;
      case 'armbands':
        totalPrice +=  armband.price * nbOfProductByProduct[property];
        break;
    }
  }

  let totalPriceHtml = document.createElement('div');
  totalPriceHtml.id = 'total-price';
  totalPriceHtml.innerHTML = `Prix total : <span id="cart-price-total"> ${ totalPrice } € </span>`;

  cartDisplay.appendChild(totalPriceHtml);
}

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


    if (cartCount.watches > 0) {
        let elementWatch = document.getElementById('watch-in-cart');
        if (elementWatch) {
          elementWatch.remove();
          createAndDisplayProductInCart(watch, cartCount.watches, 'watch-in-cart');
        } else {
          createAndDisplayProductInCart(watch, cartCount.watches, 'watch-in-cart');
        }
        //dire que si la div avec l'id est là, on l'enlève et on affiche le nouveau
    } else if (cartCount.headphones > 0) {
        let elementHeadphone = document.getElementById('watch-in-cart');
        if (elementHeadphone) {
          elementHeadphone.remove();
          createAndDisplayProductInCart(headphone, cartCount.headphones, 'headphone-in-cart');
        } else {
          createAndDisplayProductInCart(headphone, cartCount.headphones, 'headphone-in-cart');
        }
    } else if (cartCount.armbands > 0) {
      let elementArmband = document.getElementById('watch-in-cart');
      if (elementArmband) {
        elementArmband.remove();
        createAndDisplayProductInCart(armband, cartCount.armbands, 'armband-in-cart');
      } else {
        createAndDisplayProductInCart(armband, cartCount.armbands, 'armband-in-cart');
      }
    } 

    let totalPriceInCart = document.getElementById('total-price');
    if (totalPriceInCart) {
      totalPriceInCart.remove();
      calculateTotalPriceAndDisplayInCart(cartCount);
    } else {
      calculateTotalPriceAndDisplayInCart(cartCount);
    }

    //total price ne fonctionne pas
  });
});

cartIcon.addEventListener('click', (event) => {

  if (cartDisplay.style.display == 'none') {
    cartDisplay.style.display = 'block';

  } else {
    cartDisplay.style.display = 'none';
  }

});


//A faire : 
// le panier doit rester sur les autres pages 