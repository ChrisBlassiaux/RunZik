let nbCartItems = document.getElementById('nb-cart-items');
let cartLink = document.getElementById('cart-link');
let btnBuy = document.getElementsByClassName('btn')[0];
let nbItems = 0;
let cart = new Array();


btnBuy.addEventListener('click', function(e){
  e.preventDefault();
  let img = document.getElementsByClassName('img_product')[0];
  let title = document.getElementsByClassName('title-medium')[1];
  let price = document.getElementsByClassName('price')[0];
  cart.push([img.src, title.innerHTML, parseFloat(price.textContent)]);
  nbItems++;
  nbCartItems.textContent = nbItems;
});

function showCart(){
  let nb = 0;
  for(item of cart){
    nb++;
    let elem = document.createElement('div');
    elem.className = 'item-panier';
    elem.id= ''+nb;
    
    let picture = document.createElement('img');
    picture.src = item[0];
    picture.className = 'miniature';
    elem.appendChild(picture);
    
    let divTextePanier = document.createElement('div');
    divTextePanier.className = 'texte-panier';
    
    let titleElem = document.createElement('h2');
    titleElem.className = 'title-small';
    titleElem.innerHTML = item[1];
    divTextePanier.appendChild(titleElem);
    
    let priceElem = document.createElement('p');
    priceElem.innerHTML = item[2]+"€";
    divTextePanier.appendChild(priceElem);

    let deleteElem = document.createElement('span');
    deleteElem.className = 'delItem';
    deleteElem.innerHTML = '&times';
    deleteElem.addEventListener('click', deleteCartItem);
    divTextePanier.appendChild(deleteElem);
    
    elem.appendChild(divTextePanier);
    
    document.getElementById('panier').appendChild(elem);
  }
}

function deleteCartItem(){
  console.log(this);
  let parent = this.parentNode;
  cart.splice(parseInt(parent.id), 1);
  nbItems--;
  nbCartItems.textContent = nbItems;
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
