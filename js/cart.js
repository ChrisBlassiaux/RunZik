let nbCartItems = document.getElementById('nb-cart-items');
let cartLink = document.getElementById('cart-link');
let btnBuy = document.getElementsByClassName('btn')[0];
let nbItems = 0;

//Objet cart
let cart = {
  productList: [],
  getProductExist(product){
    let indexProductExist = -1;
    for(let p in this.productList){
      if(this.productList[p].id == product.id){
        indexProductExist = p;
      }
    }
    return indexProductExist;
  },
  addProduct(product){
    let indexProductExist = this.getProductExist(product);
    if(indexProductExist == -1){
      this.productList.push(product);
    } else {
      this.productList[indexProductExist].quantity += product.quantity;
    }
  },
  getTotalPrice(){
    let total = 0;
    for(product of this.productList){
      total += product.price * product.quantity;
    }
    return total;
  },
  getTotalQuantity(){
    let totalQuantity = 0;
    for(product of this.productList){
      totalQuantity += product.quantity;
    }
    return totalQuantity;
  }
}

window.addEventListener('load', function(){
  if(localStorage.getItem('cart') != null){
    cart.productList = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    nbCartItems.innerHTML = cart.getTotalQuantity();
    showCart();
  }
});


btnBuy.addEventListener('click', function(e){
  e.preventDefault();
  let title = document.getElementById('product-name');
  let price = document.getElementById('product-price');
  let quantity = document.getElementById('quantity');
  cart.addProduct(
    {
      id: this.getAttribute('data-product-id'),
      name: title.innerHTML,
      price: price.innerHTML,
      quantity: parseInt(quantity.value)
    }
    );
    document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
    hideCart();
    nbCartItems.textContent = cart.getTotalQuantity();
    
    localStorage.setItem('cart', JSON.stringify(cart.productList));
  });
  
  function showCart(){
    let nb = 0;
    for(product of cart.productList){
      nb++;
      let elem = document.createElement('div');
      elem.className = 'item-panier';
      elem.id= ''+product.id+nb;
      
      let picture = document.createElement('img');
      if(product.id == 'watch'){
        picture.src = 'images/montre_connectee_2.jpg';
      }
      if(product.id == 'headphone'){
        picture.src = 'images/running_woman_red.jpeg';
      }
      if(product.id == 'armband'){
        picture.src = 'images/brassard.jpg';
      }
      
      picture.className = 'miniature';
      elem.appendChild(picture);
      
      let divTextePanier = document.createElement('div');
      divTextePanier.className = 'texte-panier';
      
      let titleElem = document.createElement('h2');
      titleElem.className = 'title-small';
      titleElem.innerHTML = product.name;
      divTextePanier.appendChild(titleElem);
      
      let priceElem = document.createElement('p');
      priceElem.innerHTML = product.price+"€";
      divTextePanier.appendChild(priceElem);
      
      let quantityElem = document.createElement('p');
      quantityElem.textContent = 'Quantité : ' + product.quantity;
      divTextePanier.appendChild(quantityElem);
      
      let deleteElem = document.createElement('span');
      deleteElem.className = 'delItem';
      deleteElem.innerHTML = '&times';
      deleteElem.addEventListener('click', deleteCartItem);
      divTextePanier.appendChild(deleteElem);
      
      elem.appendChild(divTextePanier);
      
      document.getElementById('panier').appendChild(elem);
      document.getElementById('total').innerHTML = 'Total : ' + cart.getTotalPrice() + '€';
    }
  }
  
  function deleteCartItem(){
    console.log(cart.productList);
    let parent = this.parentNode;
    cart.productList.splice(parent.id, 1);
    console.log(cart.productList);
    nbCartItems.textContent = cart.getTotalQuantity();
    document.getElementById('total').innerHTML = 'Total : ' + cart.getTotalPrice() + '€';
    hideCart();
    showCart();
  }
  
  function hideCart(){
    let panier = document.getElementById('panier');
    while(panier.firstChild){
      panier.removeChild(panier.firstChild);
    }
  }
  
  cartLink.addEventListener('click', function(e){
    e.preventDefault();
    hideCart();
    showCart();
    if(document.getElementsByClassName('dropdown-content')[0].style.display === 'none'){
      document.getElementsByClassName('dropdown-content')[0].style.display = 'block';
    } else {
      document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
    }
  });
  