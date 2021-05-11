// DOM elements
const menuBtn = document.querySelector('.menu-btn');
let bars = document.querySelector('.menu-btn');
let header = document.querySelector('.header');
let main = document.querySelector('.main');

// Set initial state of menu
let show = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
   if (!show) {
      menuBtn.classList.add('open');
      header.style.marginRight = '450px';
      header.style.transition = 'all 1s';
      header.style.opacity = '1';
      header.style.zIndex = '5';
      bars.style.zIndex = '10';
      main.style.opacity = '0.05';
      main.style.backgroundColor = 'black';
      main.style.color = 'black';


      show = true;
   } else {
      menuBtn.classList.remove('open');
      header.style.marginRight = '-450px';
      main.style.opacity = '1';
      main.style.backgroundColor = 'transparent';

      show = false;
   }

}

console.log(menuBtn);
