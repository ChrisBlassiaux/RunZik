
let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.burger-nav');
let nav = document.querySelector('.nav');

let products = document.querySelector('.nav .products');
let navProducts = document.querySelector('.nav-products');

let filterNav = document.querySelector('.filter-nav');

burger.addEventListener('click', function () {
  if (nav.style.display == 'none') {
    nav.style.display = 'block';
    navbar.classList.add('fixed');
    filterNav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    navbar.classList.remove('fixed');
    filterNav.style.display = 'none';
  }
});
console.log(products)
products.addEventListener('click', function () {
  if (navProducts.style.display == 'none') {
    navProducts.style.display = 'flex';
    filterNav.style.display = 'block';
  } else {
    navProducts.style.display = 'none';
    filterNav.style.display = 'none';
  }
})