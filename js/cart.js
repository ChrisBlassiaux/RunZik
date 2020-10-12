let formsBuy = document.querySelectorAll('form[data-buy]');
// let filterNav = document.querySelector('.filter-nav');

//créer un objet par article
//class par défaut et chaque produit est une instance

/* <div id="cart-title-product">Montre Run'Zik S plus</div> 
<div>Qté: <span id="cart-nb-products">7</span></div>
<div>Prix total : <span id="cart-price-total"> 200euros</span></div> 
<hr></hr> */

//créer un gabarit des objets
//créer les objets 
// créer l'element dans le cart (product, quantity) => multiplier le product.price par quantity

let createProductInCart = function (title, quantity, totalPrice) {

}

class Products {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

}


let cart = {
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
        cart.watches += nbOfProducts === 0 ? 1 : nbOfProducts;
        break;
      case 'headphone':
        cart.headphomes += nbOfProducts === 0 ? 1 : nbOfProducts;
        break;
      case 'armband':
        cart.armbands += nbOfProducts === 0 ? 1 : nbOfProducts;
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

    // console.log(countCart(cart))
  
    if (countCart(cart) > 0) {
      nbProductCartHtml.textContent = countCart(cart);
    }

  });
});
