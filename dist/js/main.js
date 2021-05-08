// DOM elements
const menuBtn = document.querySelector('.menu-btn');
let bars = document.querySelector('.menu-btn__burger');
let header = document.querySelector('.header');

// Set initial state of menu
let show = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
   if (!show) {
      menuBtn.classList.add('open');
      header.style.marginRight = '400px';
      header.style.transition = 'all 1s';

      show = true;
   } else {
      menuBtn.classList.remove('open');
      header.style.marginRight = '-400px';
      show = false;
   }

}

console.log(menuBtn);