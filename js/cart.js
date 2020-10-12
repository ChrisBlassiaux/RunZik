let formsBuy = document.querySelectorAll('form[data-buy]');

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
      console.log(cart)
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
