let btnBuy = document.querySelectorAll('span[data-buy]');

let cart = {
  watches: 0, 
  headphones: 0, 
  armbands: 0
};

let nbProductCart = document.getElementById('nb-products-cart');

btnBuy.forEach(btn => {
  btn.addEventListener('click', productBuy);
});

function productBuy() {

  switch (this.dataset.buy) {
    case 'watch':
      cart.watches = cart.watches + 1;
      break;
    case 'headphone':
      cart.headphomes = cart.headphomes + 1;
      break;
    case 'armband':
      cart.armbands = cart.armbands + 1;
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

  if (countCart(cart) > 0) {
    nbProductCart.textContent = countCart(cart);
  }
};