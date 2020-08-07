// let menu = document.querySelector('.menu');
// let trigger = document.querySelector('.drawer');
// let menu_nav = document.querySelector('.menu__nav');
// let mql = window.matchMedia('(max-width: 900px)');
// let mql2 = window.matchMedia('(min-width: 900px)');
// let drawer_div = document.querySelector('#drawer-div');

// drawer_div.addEventListener('click', function () {
//    if (drawer_div) {
//       menu.style.width = '100vw';
//       menu.style.transition = 'all 0.3s ease-in';
//       menu.style.margin = 'auto';

//       menu_nav.style.margin = '0 auto';
//       menu_nav.style.transition = 'all 0.35 ease-in';
//       menu_nav.style.transform = 'rotate(0deg)';
//       menu_nav.style.width = '100vw';

//    } else {
//       menu.style.width = '0vw';
//       menu.style.transition = 'all 0.3s ease-out';
//       menu.style.margin = 'auto';

//       menu_nav.style.margin = '-500px auto';
//       menu_nav.style.transition = 'all 0.3s ease-in';
//       menu_nav.style.transform = 'rotate(90deg)';


//    }
// });

// trigger.addEventListener('click', function () {

//    if (mql) {
//       if (trigger.checked === true) {
//          menu.style.width = '100vw';
//          menu.style.transition = 'all 0.3s ease-in';
//          menu.style.margin = 'auto';

//          menu_nav.style.margin = '0 auto';
//          menu_nav.style.transition = 'all 0.35 ease-in';
//          menu_nav.style.transform = 'rotate(0deg)';
//          menu_nav.style.width = '100vw';

//       } else if (trigger.checked === false) {
//          menu.style.width = '0vw';
//          menu.style.transition = 'all 0.3s ease-out';
//          menu.style.margin = 'auto';

//          menu_nav.style.margin = '-500px auto';
//          menu_nav.style.transition = 'all 0.3s ease-in';
//          menu_nav.style.transform = 'rotate(90deg)';


//       }

//       else if (mql2) {
//          if (trigger.checked === false) {
//             menu_nav.style.margin = '0px';
//          }
//       }
//    }
// });


// // function myFunction() {

// //    if (mql) {
// //       // menu.style.width = '0vw';
// //       // menu.style.transition = 'all 0.3s ease-in';

// //       // menu_nav.style.margin = '0';
// //       // menu_nav.style.transition = 'all 0.4s ease-in';
// //       // menu_nav.style.transform = 'rotate(90deg)';
// //       // menu_nav.style.width = '100px';

// //       if (trigger.checked === true) {
// //          menu.style.width = '100vw';
// //          menu.style.transition = 'all 0.3s ease-in';
// //          menu.style.margin = 'auto';

// //          menu_nav.style.margin = '0 auto';
// //          menu_nav.style.transition = 'all 0.35 ease-in';
// //          menu_nav.style.transform = 'rotate(0deg)';
// //          menu_nav.style.width = '100vw';


// //       } else {
// //          menu.style.width = '0vw';
// //          menu.style.transition = 'all 0.3s ease-out';
// //          menu.style.margin = 'auto';

// //          menu_nav.style.margin = '-500px auto';
// //          menu_nav.style.transition = 'all 0.3s ease-in';
// //          menu_nav.style.transform = 'rotate(90deg)';
// //       }
// //    }



// // }

// // if (mql2) {
// //    if (trigger.checked === false) {
// //       menu_nav.style.flexDirection = 'row';
// //    }

// // }

/* Variable de l'ID omega-content */
var content = document.querySelector('#omega-content');
/* Variable de l'ID omega-sidebar-body */
var sidebarBody = document.querySelector('#omega-sidebar-body');
/* Variable du bouton hamburger */
var button = document.querySelector('#omega-button');
/* Variable de la div overlay */
var overlay = document.querySelector('#omega-overlay');
/* Class CSS */
var activatedClass = 'omega-activated';


sidebarBody.innerHTML = content.innerHTML;

/**
 * Permet de d'ajouter la class CSS omega-activated si le bouton est cliqué
 */
button.addEventListener('click', function (e) {
   e.preventDefault;
   this.parentNode.classList.add(activatedClass);
});

/**
 * Permet de fermer la sidebar avec la touche echap du clavier
 */
button.addEventListener('keydown', function (e) {
   if (this.parentNode.classList.contains(activatedClass)) {
      if (e.repeat === false && e.which === 27)
         this.parentNode.classList.remove(activatedClass);
   }
});

/**
 * Permet de fermer la sidebar si clic dans l'overlay
 */
overlay.addEventListener('click', function (e) {
   e.preventDefault;
   this.parentNode.classList.remove(activatedClass);
});



