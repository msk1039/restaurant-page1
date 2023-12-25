/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }
function createSection(name, data) {
    const section = document.createElement('div');
    section.classList.add('adress-section');
  
    const title = document.createElement('h2');
    title.classList.add('adress-section-title');
    title.textContent = name;
    section.appendChild(title);
    
    const adress = document.createElement('div');
    adress.classList.add('adress');

    const map = document.createElement('div');
    map.classList.add('map');
    adress.appendChild(map);

    const para = document.createElement('div');
    para.classList.add('adress-description-para');
    para.textContent = data;
    adress.appendChild(para);

    section.appendChild(adress);
  
    return section;
  }

  function phoneNumBlock(num, phoneList){
    const phoneNumList = document.createElement('div');
    phoneNumList.classList.add('phone-list');
    const title = document.createElement('h2');
    title.classList.add('phone-title');
    title.textContent = num;
    phoneNumList.appendChild(title); 

    const phoneNum = document.createElement('div');
    phoneNum.classList.add('phone-num');

    phoneList.forEach((d) => {
      const para = document.createElement('p');
      para.classList.add('phoneNum');
      para.textContent = d;
      phoneNum.appendChild(para);
    });
    phoneNumList.appendChild(phoneNum);
    return phoneNumList;

  }

  
  function loadContact() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
    content.textContent = '';
    
    setBtnActive('contact');

  
    const phoneSection = phoneNumBlock('Phone numbers', [
      '$ 0987-654-4321',
      '# 1234-567-8904'
    ]);
  
    const addressSection = createSection('Adress', 'Pimpri Chinchwad College of Engineering,Nigdi, Pune, Maharashtra');
  
    content.appendChild(phoneSection);
    content.appendChild(addressSection);
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'we serve the taste you love🥰';
  
    about.appendChild(title);
  
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent =
      'This is the type of Canteen which serves the food you love. We have a wide range of food items to choose from.';
  
    about.appendChild(para);
    return about;
  }
  
  function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }
  
  function loadHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
  
    content.textContent = '';
  
  
    const aboutSection = createAboutSection();
  
    setBtnActive('home');
  
    content.appendChild(aboutSection);
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/main-page.js":
/*!**********************************!*\
  !*** ./src/modules/main-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
  }
  function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
  }
  function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
  
    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');
  
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
  }
  function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
  }
  function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
  }
  function loadPage() {
    const content = document.getElementById('content');
    // header
    const header = createHeader('header', 'PCCOE Canteen');
    content.appendChild(header);
    // nav
    const nav = createNav('nav');
    content.appendChild(nav);
    // tab-content
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
    // footer
    const footer = createFooter('footer', 'Made by msk1039');
    content.appendChild(footer);
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/modules/menu2.js":
/*!******************************!*\
  !*** ./src/modules/menu2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }
  
  function createFood(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('card');

    const cardcontent = document.createElement('div');
    cardcontent.classList.add('card-content');

   const cardimage = document.createElement('div');
    cardimage.classList.add('card-image');
    cardimage.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(23,23,23,1) 100%),url(${src})`;
    cardimage.style.borderRadius = '10px';

/*
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.classList.add('card-img');

    cardimage.appendChild(img);
    */

   const cardinforapper = document.createElement('div');
    cardinforapper.classList.add('card-info-wrapper');

    const duotone = document.createElement('i');
    duotone.classList.add('fa-duotone');
    duotone.classList.add('fa-apartment');



   const cardinfo = document.createElement('div');
    cardinfo.classList.add('card-info');

   const cardtitle = document.createElement('div');
    cardtitle.classList.add('card-info-title');
    
   const h3 = document.createElement('h3');
    h3.textContent = text;

   const h4 = document.createElement('h4');
    h4.textContent = price;

    cardtitle.appendChild(h3);
    cardtitle.appendChild(h4);

    cardinfo.appendChild(duotone);
    cardinfo.appendChild(cardtitle);

    cardinforapper.appendChild(cardinfo);

    cardimage.appendChild(duotone);

    cardcontent.appendChild(cardimage);
    cardcontent.appendChild(cardinforapper);

    food.appendChild(cardcontent);
    



 /*   const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
  
    const description = document.createElement('div');
    description.classList.add('description');
  
    const foodName = document.createElement('h3');
    foodName.textContent = text;
  
    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;
  
    description.appendChild(foodName);
    description.appendChild(foodPrice);
  
    food.appendChild(img);
    food.appendChild(description);

   */
  
    
    return food;
  }
  
  function loadMenu() {
    const content = document.getElementById('tab-content');
    
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');

  
    content.textContent = '';
    
    setBtnActive('menu');
  
    const foods = [
      createFood(
        './images/vadapav.jpeg',
        'vadapav',
        '10 Rs',
        'vadapav'
      ),
      createFood(
        './images/cold-coffee.avif',
        'cold coffie',
        '30 Rs',
        'cold coffie'
      ),
      createFood(
        './images/chicken-biryani.jpeg',
        'chicken biryani',
        '200 Rs',
        'chicken biryani'
      ),
      createFood(
        './images/sandwich.jpeg',
        'sandwich',
        '50 Rs',
        'sandwich'
      ),
      createFood(
         './images/sandwich-corn.jpeg',
        'Corn sandwich',
        '60 Rs',
        'Corn sandwich'
      ),
      createFood(
        './images/shezwan-sandwich.jpeg',
        'shezwan sandwich',
        '70 Rs',
        'shezwan sandwich'
      ),
      createFood(
        './images/pizza.jpeg',
        'pizza',
        '90 Rs',
        'pizza'
      ),
      createFood(
        './images/cheese-pizza.jpeg',
        'pizza-cheese',
        '100 Rs',
        'pizza-cheese'
      ),
      createFood(
        './images/burger.jpeg',
        'burger',
        '50 Rs',
        'burger'
      )
    ];
  
    foods.forEach((food) => {
      content.appendChild(food);
    });
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main-page */ "./src/modules/main-page.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu2 */ "./src/modules/menu2.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");





init();

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
  menuBtn.addEventListener('click', _modules_menu2__WEBPACK_IMPORTED_MODULE_2__["default"]);
  contactBtn.addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"]);
}
function init() {
  (0,_modules_main_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  addNavEvents();

}

document.getElementById("tab-content").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDNUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzNEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvSEFBb0gsSUFBSTtBQUN4SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUUsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7OztVQ3RLMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNMO0FBQ0M7QUFDSzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHFEQUFRO0FBQzVDLG9DQUFvQyxzREFBUTtBQUM1Qyx1Q0FBdUMsd0RBQVc7QUFDbEQ7QUFDQTtBQUNBLEVBQUUsOERBQVE7QUFDVixFQUFFLHlEQUFRO0FBQ1Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEVBQUU7QUFDL0MsNkNBQTZDLEVBQUU7QUFDL0M7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL21vZHVsZXMvbWVudTIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gICAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlQnRuKSBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIFxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihuYW1lLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWRyZXNzLXNlY3Rpb24nKTtcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkcmVzcy1zZWN0aW9uLXRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IGFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZHJlc3MnKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgICBhZHJlc3MuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ2FkcmVzcy1kZXNjcmlwdGlvbi1wYXJhJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgYWRyZXNzLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZHJlc3MpO1xuICBcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBob25lTnVtQmxvY2sobnVtLCBwaG9uZUxpc3Qpe1xuICAgIGNvbnN0IHBob25lTnVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lTnVtTGlzdC5jbGFzc0xpc3QuYWRkKCdwaG9uZS1saXN0Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Bob25lLXRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBudW07XG4gICAgcGhvbmVOdW1MaXN0LmFwcGVuZENoaWxkKHRpdGxlKTsgXG5cbiAgICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bScpO1xuXG4gICAgcGhvbmVMaXN0LmZvckVhY2goKGQpID0+IHtcbiAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ3Bob25lTnVtJyk7XG4gICAgICBwYXJhLnRleHRDb250ZW50ID0gZDtcbiAgICAgIHBob25lTnVtLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH0pO1xuICAgIHBob25lTnVtTGlzdC5hcHBlbmRDaGlsZChwaG9uZU51bSk7XG4gICAgcmV0dXJuIHBob25lTnVtTGlzdDtcblxuICB9XG5cbiAgXG4gIGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtbGF5Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkLWxheScpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBzZXRCdG5BY3RpdmUoJ2NvbnRhY3QnKTtcblxuICBcbiAgICBjb25zdCBwaG9uZVNlY3Rpb24gPSBwaG9uZU51bUJsb2NrKCdQaG9uZSBudW1iZXJzJywgW1xuICAgICAgJyQgMDk4Ny02NTQtNDMyMScsXG4gICAgICAnIyAxMjM0LTU2Ny04OTA0J1xuICAgIF0pO1xuICBcbiAgICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oJ0FkcmVzcycsICdQaW1wcmkgQ2hpbmNod2FkIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmcsTmlnZGksIFB1bmUsIE1haGFyYXNodHJhJyk7XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmVTZWN0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3NTZWN0aW9uKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCkge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZSBzZXJ2ZSB0aGUgdGFzdGUgeW91IGxvdmXwn6WwJztcbiAgXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1kZXNjcmlwdGlvbicpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPVxuICAgICAgJ1RoaXMgaXMgdGhlIHR5cGUgb2YgQ2FudGVlbiB3aGljaCBzZXJ2ZXMgdGhlIGZvb2QgeW91IGxvdmUuIFdlIGhhdmUgYSB3aWRlIHJhbmdlIG9mIGZvb2QgaXRlbXMgdG8gY2hvb3NlIGZyb20uJztcbiAgXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgcmV0dXJuIGFib3V0O1xuICB9XG4gIFxuICBmdW5jdGlvbiBzZXRCdG5BY3RpdmUoaWQpIHtcbiAgICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVCdG4pIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi1jb250ZW50Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdmbGV4LWxheScpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1sYXknKTtcbiAgXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBcbiAgXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gY3JlYXRlQWJvdXRTZWN0aW9uKCk7XG4gIFxuICAgIHNldEJ0bkFjdGl2ZSgnaG9tZScpO1xuICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihpZCwgdGV4dCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUJ0bihpZCwgdGV4dCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICByZXR1cm4gYnRuO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZU5hdihpZCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICBcbiAgICBjb25zdCBob21lQnRuID0gY3JlYXRlQnRuKCdob21lJywgJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnRuKCdtZW51JywgJ21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlQnRuKCdjb250YWN0JywgJ2NvbnRhY3QnKTtcbiAgXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgcmV0dXJuIG5hdjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVNYWluKGlkKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGlkLCB0ZXh0KSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIHJldHVybiBmb290ZXI7XG4gIH1cbiAgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdoZWFkZXInLCAnUENDT0UgQ2FudGVlbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAvLyBuYXZcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoJ25hdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICAvLyB0YWItY29udGVudFxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBjcmVhdGVNYWluKCd0YWItY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGVudCk7XG4gICAgLy8gZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCdmb290ZXInLCAnTWFkZSBieSBtc2sxMDM5Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCJmdW5jdGlvbiBzZXRCdG5BY3RpdmUoaWQpIHtcbiAgICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVCdG4pIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVGb29kKHNyYywgdGV4dCwgcHJpY2UsIGFsdCkge1xuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50Jyk7XG5cbiAgIGNvbnN0IGNhcmRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRpbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWltYWdlJyk7XG4gICAgY2FyZGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDIzLDIzLDIzLDEpIDEwMCUpLHVybCgke3NyY30pYDtcbiAgICBjYXJkaW1hZ2Uuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEwcHgnO1xuXG4vKlxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcblxuICAgIGNhcmRpbWFnZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICovXG5cbiAgIGNvbnN0IGNhcmRpbmZvcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZGluZm9yYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbmZvLXdyYXBwZXInKTtcblxuICAgIGNvbnN0IGR1b3RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZHVvdG9uZS5jbGFzc0xpc3QuYWRkKCdmYS1kdW90b25lJyk7XG4gICAgZHVvdG9uZS5jbGFzc0xpc3QuYWRkKCdmYS1hcGFydG1lbnQnKTtcblxuXG5cbiAgIGNvbnN0IGNhcmRpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZGluZm8uY2xhc3NMaXN0LmFkZCgnY2FyZC1pbmZvJyk7XG5cbiAgIGNvbnN0IGNhcmR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmR0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWluZm8tdGl0bGUnKTtcbiAgICBcbiAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgY2FyZHRpdGxlLmFwcGVuZENoaWxkKGgzKTtcbiAgICBjYXJkdGl0bGUuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gICAgY2FyZGluZm8uYXBwZW5kQ2hpbGQoZHVvdG9uZSk7XG4gICAgY2FyZGluZm8uYXBwZW5kQ2hpbGQoY2FyZHRpdGxlKTtcblxuICAgIGNhcmRpbmZvcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRpbmZvKTtcblxuICAgIGNhcmRpbWFnZS5hcHBlbmRDaGlsZChkdW90b25lKTtcblxuICAgIGNhcmRjb250ZW50LmFwcGVuZENoaWxkKGNhcmRpbWFnZSk7XG4gICAgY2FyZGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZGluZm9yYXBwZXIpO1xuXG4gICAgZm9vZC5hcHBlbmRDaGlsZChjYXJkY29udGVudCk7XG4gICAgXG5cblxuXG4gLyogICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gdGV4dDtcbiAgXG4gICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gIFxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgKi9cbiAgXG4gICAgXG4gICAgcmV0dXJuIGZvb2Q7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWNvbnRlbnQnKTtcbiAgICBcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dyaWQtbGF5Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWxheScpO1xuXG4gIFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBzZXRCdG5BY3RpdmUoJ21lbnUnKTtcbiAgXG4gICAgY29uc3QgZm9vZHMgPSBbXG4gICAgICBjcmVhdGVGb29kKFxuICAgICAgICAnLi9pbWFnZXMvdmFkYXBhdi5qcGVnJyxcbiAgICAgICAgJ3ZhZGFwYXYnLFxuICAgICAgICAnMTAgUnMnLFxuICAgICAgICAndmFkYXBhdidcbiAgICAgICksXG4gICAgICBjcmVhdGVGb29kKFxuICAgICAgICAnLi9pbWFnZXMvY29sZC1jb2ZmZWUuYXZpZicsXG4gICAgICAgICdjb2xkIGNvZmZpZScsXG4gICAgICAgICczMCBScycsXG4gICAgICAgICdjb2xkIGNvZmZpZSdcbiAgICAgICksXG4gICAgICBjcmVhdGVGb29kKFxuICAgICAgICAnLi9pbWFnZXMvY2hpY2tlbi1iaXJ5YW5pLmpwZWcnLFxuICAgICAgICAnY2hpY2tlbiBiaXJ5YW5pJyxcbiAgICAgICAgJzIwMCBScycsXG4gICAgICAgICdjaGlja2VuIGJpcnlhbmknXG4gICAgICApLFxuICAgICAgY3JlYXRlRm9vZChcbiAgICAgICAgJy4vaW1hZ2VzL3NhbmR3aWNoLmpwZWcnLFxuICAgICAgICAnc2FuZHdpY2gnLFxuICAgICAgICAnNTAgUnMnLFxuICAgICAgICAnc2FuZHdpY2gnXG4gICAgICApLFxuICAgICAgY3JlYXRlRm9vZChcbiAgICAgICAgICcuL2ltYWdlcy9zYW5kd2ljaC1jb3JuLmpwZWcnLFxuICAgICAgICAnQ29ybiBzYW5kd2ljaCcsXG4gICAgICAgICc2MCBScycsXG4gICAgICAgICdDb3JuIHNhbmR3aWNoJ1xuICAgICAgKSxcbiAgICAgIGNyZWF0ZUZvb2QoXG4gICAgICAgICcuL2ltYWdlcy9zaGV6d2FuLXNhbmR3aWNoLmpwZWcnLFxuICAgICAgICAnc2hlendhbiBzYW5kd2ljaCcsXG4gICAgICAgICc3MCBScycsXG4gICAgICAgICdzaGV6d2FuIHNhbmR3aWNoJ1xuICAgICAgKSxcbiAgICAgIGNyZWF0ZUZvb2QoXG4gICAgICAgICcuL2ltYWdlcy9waXp6YS5qcGVnJyxcbiAgICAgICAgJ3BpenphJyxcbiAgICAgICAgJzkwIFJzJyxcbiAgICAgICAgJ3BpenphJ1xuICAgICAgKSxcbiAgICAgIGNyZWF0ZUZvb2QoXG4gICAgICAgICcuL2ltYWdlcy9jaGVlc2UtcGl6emEuanBlZycsXG4gICAgICAgICdwaXp6YS1jaGVlc2UnLFxuICAgICAgICAnMTAwIFJzJyxcbiAgICAgICAgJ3BpenphLWNoZWVzZSdcbiAgICAgICksXG4gICAgICBjcmVhdGVGb29kKFxuICAgICAgICAnLi9pbWFnZXMvYnVyZ2VyLmpwZWcnLFxuICAgICAgICAnYnVyZ2VyJyxcbiAgICAgICAgJzUwIFJzJyxcbiAgICAgICAgJ2J1cmdlcidcbiAgICAgIClcbiAgICBdO1xuICBcbiAgICBmb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2QpO1xuICAgIH0pO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9tb2R1bGVzL21haW4tcGFnZSc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51Mic7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGFkZE5hdkV2ZW50cygpIHtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xufVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbG9hZFBhZ2UoKTtcbiAgbG9hZEhvbWUoKTtcbiAgYWRkTmF2RXZlbnRzKCk7XG5cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItY29udGVudFwiKS5vbm1vdXNlbW92ZSA9IGUgPT4ge1xuICAgIGZvcihjb25zdCBjYXJkIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpKSB7XG4gICAgICBjb25zdCByZWN0ID0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gIFxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW91c2UteFwiLCBgJHt4fXB4YCk7XG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tb3VzZS15XCIsIGAke3l9cHhgKTtcbiAgICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==