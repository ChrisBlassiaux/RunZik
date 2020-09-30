
let burger = document.querySelector('.burger-nav');
let nav = document.querySelector('.nav');


burger.addEventListener('click', function () {
  if (nav.style.display == 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});