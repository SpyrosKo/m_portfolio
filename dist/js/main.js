let trigger = document.querySelector('.drawer');
let menu_nav = document.querySelector('.menu__nav');
let menu = document.querySelector('.menu');

menu_nav.style.margin = '-500px';
menu_nav.style.transition = 'all 0.4s ease-in';
menu_nav.style.transform = 'rotate(90deg)';
menu_nav.style.width = '100px';

menu.style.width = '0vw';
menu.style.transition = 'all 0.3s ease-in';


function myFunction() {
   if (trigger.checked === true) {
      menu_nav.style.margin = '0 auto';
      menu_nav.style.transition = 'all 0.35 ease-in';
      menu_nav.style.transform = 'rotate(0deg)';
      menu_nav.style.width = '100vw';

      menu.style.width = '100vw';
      menu.style.transition = 'all 0.3s ease-in';
      menu.style.margin = 'auto';
   } else {
      menu_nav.style.margin = '-500px';
      menu_nav.style.transition = 'all 0.3s ease-in';
      menu_nav.style.transform = 'rotate(90deg)';

      menu.style.width = '0vw';
      menu.style.transition = 'all 0.3s ease-in';
   }
}
