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
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}
function createSection(name, data) {
  const section = document.createElement("div");
  section.classList.add("adress-section");

  const title = document.createElement("h2");
  title.classList.add("adress-section-title");
  title.textContent = name;
  section.appendChild(title);

  const adress = document.createElement("div");
  adress.classList.add("adress");

  const map = document.createElement("div");
  map.classList.add("map");
  adress.appendChild(map);

  const para = document.createElement("div");
  para.classList.add("adress-description-para");
  para.textContent = data;
  adress.appendChild(para);

  section.appendChild(adress);

  return section;
}

function phoneNumBlock(num, phoneList) {
  const phoneNumList = document.createElement("div");
  phoneNumList.classList.add("phone-list");
  const title = document.createElement("h2");
  title.classList.add("phone-title");
  title.textContent = num;
  phoneNumList.appendChild(title);

  const phoneNum = document.createElement("div");
  phoneNum.classList.add("phone-num");

  phoneList.forEach((d) => {
    const para = document.createElement("p");
    para.classList.add("phoneNum");
    para.textContent = d;
    phoneNum.appendChild(para);
  });
  phoneNumList.appendChild(phoneNum);
  return phoneNumList;
}

function loadContact() {
  const content = document.getElementById("tab-content");
  content.classList.add("flex-lay");
  content.classList.remove("grid-lay");
  content.classList.remove("home-lay");
  content.textContent = "";

  setBtnActive("contact");

  const phoneSection = phoneNumBlock("Phone numbers", [
    "$ 0987-654-4321",
    "# 1234-567-8904",
  ]);

  const addressSection = createSection(
    "Adress",
    "Pimpri Chinchwad College of Engineering,Nigdi, Pune, Maharashtra",
  );

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
function createAboutSection(){
  const about = document.createElement("section");
  about.classList.add("section");


  const title = document.createElement("h2");
  title.classList.add("section-title");
  title.textContent = "we serve the taste you love";

  about.appendChild(title);

  const para = document.createElement("p");
  para.classList.add("section-description");
  para.textContent = "This is the type of Canteen which serves the food you love. We have a wide range of food items to choose from.";
   
  about.appendChild(para);

  const buttons = document.createElement('div');
  const login = document.createElement('a');
  const signup = document.createElement('a');

  login.innerText = "login";
  signup.innerText = "signup";

   buttons.classList.add("login-signup-buttons");
  login.classList.add("login-page");
  signup.classList.add("signup-page");

  login.setAttribute("href","./login-signup/login.html");
  signup.setAttribute("href","./login-signup/signup.html");

  buttons.appendChild(login);
  buttons.appendChild(signup);
  about.appendChild(buttons);
  return about;
}

function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function loadHome() {
  const content = document.getElementById("tab-content");
  content.classList.add("home-lay");
 content.classList.remove("grid-lay");
 content.classList.remove("flex-lay");

  content.textContent = "";

  const aboutSection = createAboutSection();

  setBtnActive("home");

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
  const header = document.createElement("header");
  header.setAttribute("id", id);
  const logo = document.createElement("h1");
  logo.textContent = text;
  header.appendChild(logo);
  return header;
}
function createBtn(id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  const span = document.createElement("span");
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add("tab");
  return btn;
}
function createNav(id) {
  const nav = document.createElement("nav");
  nav.setAttribute("id", id);

  const homeBtn = createBtn("home", "home");
  const menuBtn = createBtn("menu", "menu");
  const contactBtn = createBtn("contact", "contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}
function createMain(id) {
  const main = document.createElement("main");
  main.setAttribute("id", id);
  return main;
}
function createFooter(id, text , link) {
  const footer = document.createElement("footer");
  footer.setAttribute("id", id);
  const h3 = document.createElement("a");
  h3.textContent = text;
  h3.setAttribute("href",link);
  footer.appendChild(h3);
  return footer;
}

function createTestimonial(){

  const testContainer = document.createElement("div");
  testContainer.classList.add("testContainer");
  


}

function loadPage() {
  const content = document.getElementById("content");
  // header
  const header = createHeader("header", "PCCOE Canteen");
  content.appendChild(header);
  // nav
  const nav = createNav("nav");
  content.appendChild(nav);
  // tab-content
  const tabContent = createMain("tab-content");
  content.appendChild(tabContent);
  // footer
  const footer = createFooter("footer", "Made by msk1039","https://github.com/msk1039");
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
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function displayCheckout(text,price){
  wrapper.classList.add('active-popup');
  const pay = document.getElementById("pay");
  const bill = document.getElementById("bill");
  const order = document.getElementById("order");
  const background = document.getElementById("content");


  order.textContent = `${text}`;

  bill.textContent = `Bill: ${price}`;
  pay.textContent = 'Pay';


}


function createFood(src, text, price, alt, num) {
  const food = document.createElement("div");
  // food.onclick = displayCheckout(text,price);
  food.onclick = function(price,text){ 
    wrapper.classList.add('active-popup');
    console.log(`${price}`);
    const background = document.getElementById("content");
    background.classList.add('backgrounddim');

    const bill = document.getElementById('bill');
    const order = document.getElementById('order');

    order.textContent = `${text}`;

    bill.textContent = `Bill: ${price}`;
    


};
  // food.addEventListener('click',displayCheckout(text,price));
//  food.setAttribute('onclick',displayCheckout(text,price));
//  food.setAttribute('onclick',(price,text)=>{ 
//     wrapper.classList.add('active-popup');
//     const pay = document.querySelector('.pay');
//     const bill = document.querySelector('.bill');
//     const order = document.querySelector('.order');

//     order.textContent = `${text}`;

//     bill.textContent = `Bill: ${price}`;
//     pay.textContent = 'Pay';



// });


  // const food2 = document.createElement("div");
  food.classList.add("card");
  food.classList.add(`${num}`);
  
  // food.classList.add("btnLogin-popup");

  


  const cardcontent = document.createElement("div");
  cardcontent.classList.add("card-content");

  const cardimage = document.createElement("div");
  cardimage.classList.add("card-image");
  cardimage.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(23,23,23,1) 100%),url(${src})`;
  cardimage.style.borderRadius = "10px";

  /*
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.classList.add('card-img');

    cardimage.appendChild(img);
    */

  const cardinforapper = document.createElement("div");
  cardinforapper.classList.add("card-info-wrapper");

  const duotone = document.createElement("i");
  duotone.classList.add("fa-duotone");
  duotone.classList.add("fa-apartment");

  const cardinfo = document.createElement("div");
  cardinfo.classList.add("card-info");

  const cardtitle = document.createElement("div");
  cardtitle.classList.add("card-info-title");

  const h3 = document.createElement("h3");
  h3.textContent = text;

  const h4 = document.createElement("h4");
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
  const content = document.getElementById("tab-content");

  content.classList.add("grid-lay");
  content.classList.remove("flex-lay");
  content.classList.remove("home-lay");

  content.textContent = "";

  setBtnActive("menu");

  const foods = [
    createFood("./dist/images/vadapav.jpeg", "vadapav", "10 Rs", "vadapav","1"),
    createFood(
      "./dist/images/cold-coffee.avif",
      "cold coffie",
      "30 Rs",
      "cold coffie","2"
    ),
    createFood(
      "./dist/images/chicken-biryani.jpeg",
      "chicken biryani",
      "200 Rs",
      "chicken biryani","3"
    ),
    createFood("./dist/images/sandwich.jpeg", "sandwich", "50 Rs", "sandwich","4"),
    createFood(
      "./dist/images/sandwich-corn.jpeg",
      "Corn sandwich",
      "60 Rs",
      "Corn sandwich","5"
    ),
    createFood(
      "./dist/images/shezwan-sandwich.jpeg",
      "shezwan sandwich",
      "70 Rs",
      "shezwan sandwich","6"
    ),
    createFood("./dist/images/pizza.jpeg", "pizza", "90 Rs", "pizza","7"),
    createFood(
      "./dist/images/cheese-pizza.jpeg",
      "pizza-cheese",
      "100 Rs",
      "pizza-cheese","8"),
    createFood("./dist/images/burger.jpeg", "burger", "50 Rs", "burger","9"),
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
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");


  homeBtn.addEventListener("click", _modules_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
  menuBtn.addEventListener("click", _modules_menu2__WEBPACK_IMPORTED_MODULE_2__["default"]);
  contactBtn.addEventListener("click", _modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"]);

  
}
function init() {
  (0,_modules_main_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  addNavEvents();
}

document.getElementById("tab-content").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RTNCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVEeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5QkFBeUIsS0FBSzs7QUFFOUIsOEJBQThCLE1BQU07QUFDcEM7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixLQUFLOztBQUVoQyxnQ0FBZ0MsTUFBTTtBQUN0Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSzs7QUFFbkMsbUNBQW1DLE1BQU07QUFDekM7Ozs7QUFJQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0hBQWtILElBQUk7QUFDdEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3hNeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNMO0FBQ0M7QUFDSzs7O0FBRzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxvQ0FBb0MscURBQVE7QUFDNUMsb0NBQW9DLHNEQUFRO0FBQzVDLHVDQUF1Qyx3REFBVzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBUTtBQUNWLEVBQUUseURBQVE7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLEVBQUU7QUFDN0MsMkNBQTJDLEVBQUU7QUFDN0M7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvbW9kdWxlcy9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL21lbnUyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldEJ0bkFjdGl2ZShpZCkge1xuICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi5hY3RpdmVcIik7XG4gIGlmIChhY3RpdmVCdG4pIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24obmFtZSwgZGF0YSkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWRyZXNzLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhZHJlc3Mtc2VjdGlvbi10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBhZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkcmVzc1wiKTtcblxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXAuY2xhc3NMaXN0LmFkZChcIm1hcFwiKTtcbiAgYWRyZXNzLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcmEuY2xhc3NMaXN0LmFkZChcImFkcmVzcy1kZXNjcmlwdGlvbi1wYXJhXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gZGF0YTtcbiAgYWRyZXNzLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRyZXNzKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gcGhvbmVOdW1CbG9jayhudW0sIHBob25lTGlzdCkge1xuICBjb25zdCBwaG9uZU51bUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZU51bUxpc3QuY2xhc3NMaXN0LmFkZChcInBob25lLWxpc3RcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicGhvbmUtdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbnVtO1xuICBwaG9uZU51bUxpc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVOdW0uY2xhc3NMaXN0LmFkZChcInBob25lLW51bVwiKTtcblxuICBwaG9uZUxpc3QuZm9yRWFjaCgoZCkgPT4ge1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJwaG9uZU51bVwiKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gZDtcbiAgICBwaG9uZU51bS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfSk7XG4gIHBob25lTnVtTGlzdC5hcHBlbmRDaGlsZChwaG9uZU51bSk7XG4gIHJldHVybiBwaG9uZU51bUxpc3Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItY29udGVudFwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZmxleC1sYXlcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtbGF5XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJob21lLWxheVwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgc2V0QnRuQWN0aXZlKFwiY29udGFjdFwiKTtcblxuICBjb25zdCBwaG9uZVNlY3Rpb24gPSBwaG9uZU51bUJsb2NrKFwiUGhvbmUgbnVtYmVyc1wiLCBbXG4gICAgXCIkIDA5ODctNjU0LTQzMjFcIixcbiAgICBcIiMgMTIzNC01NjctODkwNFwiLFxuICBdKTtcblxuICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oXG4gICAgXCJBZHJlc3NcIixcbiAgICBcIlBpbXByaSBDaGluY2h3YWQgQ29sbGVnZSBvZiBFbmdpbmVlcmluZyxOaWdkaSwgUHVuZSwgTWFoYXJhc2h0cmFcIixcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHBob25lU2VjdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc1NlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImZ1bmN0aW9uIGNyZWF0ZUFib3V0U2VjdGlvbigpe1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcblxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIndlIHNlcnZlIHRoZSB0YXN0ZSB5b3UgbG92ZVwiO1xuXG4gIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGVzY3JpcHRpb25cIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgdGhlIHR5cGUgb2YgQ2FudGVlbiB3aGljaCBzZXJ2ZXMgdGhlIGZvb2QgeW91IGxvdmUuIFdlIGhhdmUgYSB3aWRlIHJhbmdlIG9mIGZvb2QgaXRlbXMgdG8gY2hvb3NlIGZyb20uXCI7XG4gICBcbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3Qgc2lnbnVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGxvZ2luLmlubmVyVGV4dCA9IFwibG9naW5cIjtcbiAgc2lnbnVwLmlubmVyVGV4dCA9IFwic2lnbnVwXCI7XG5cbiAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImxvZ2luLXNpZ251cC1idXR0b25zXCIpO1xuICBsb2dpbi5jbGFzc0xpc3QuYWRkKFwibG9naW4tcGFnZVwiKTtcbiAgc2lnbnVwLmNsYXNzTGlzdC5hZGQoXCJzaWdudXAtcGFnZVwiKTtcblxuICBsb2dpbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCIuL2xvZ2luLXNpZ251cC9sb2dpbi5odG1sXCIpO1xuICBzaWdudXAuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiLi9sb2dpbi1zaWdudXAvc2lnbnVwLmh0bWxcIik7XG5cbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2lnbnVwKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIHJldHVybiBhYm91dDtcbn1cblxuZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLmFjdGl2ZVwiKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtbGF5XCIpO1xuIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtbGF5XCIpO1xuIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZsZXgtbGF5XCIpO1xuXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGNyZWF0ZUFib3V0U2VjdGlvbigpO1xuXG4gIHNldEJ0bkFjdGl2ZShcImhvbWVcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihpZCwgdGV4dCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gdGV4dDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICByZXR1cm4gaGVhZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlQnRuKGlkLCB0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gIHJldHVybiBidG47XG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoaWQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblxuICBjb25zdCBob21lQnRuID0gY3JlYXRlQnRuKFwiaG9tZVwiLCBcImhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oXCJtZW51XCIsIFwibWVudVwiKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bihcImNvbnRhY3RcIiwgXCJjb250YWN0XCIpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIHJldHVybiBuYXY7XG59XG5mdW5jdGlvbiBjcmVhdGVNYWluKGlkKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiBtYWluO1xufVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGlkLCB0ZXh0ICwgbGluaykge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGgzLnNldEF0dHJpYnV0ZShcImhyZWZcIixsaW5rKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGgzKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVzdGltb25pYWwoKXtcblxuICBjb25zdCB0ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGVzdENvbnRhaW5lclwiKTtcbiAgXG5cblxufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcImhlYWRlclwiLCBcIlBDQ09FIENhbnRlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgLy8gbmF2XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdihcIm5hdlwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAvLyB0YWItY29udGVudFxuICBjb25zdCB0YWJDb250ZW50ID0gY3JlYXRlTWFpbihcInRhYi1jb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICAvLyBmb290ZXJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKFwiZm9vdGVyXCIsIFwiTWFkZSBieSBtc2sxMDM5XCIsXCJodHRwczovL2dpdGh1Yi5jb20vbXNrMTAzOVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImZ1bmN0aW9uIHNldEJ0bkFjdGl2ZShpZCkge1xuICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi5hY3RpdmVcIik7XG4gIGlmIChhY3RpdmVCdG4pIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNoZWNrb3V0KHRleHQscHJpY2Upe1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wb3B1cCcpO1xuICBjb25zdCBwYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBheVwiKTtcbiAgY29uc3QgYmlsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbFwiKTtcbiAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cbiAgb3JkZXIudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG5cbiAgYmlsbC50ZXh0Q29udGVudCA9IGBCaWxsOiAke3ByaWNlfWA7XG4gIHBheS50ZXh0Q29udGVudCA9ICdQYXknO1xuXG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb29kKHNyYywgdGV4dCwgcHJpY2UsIGFsdCwgbnVtKSB7XG4gIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBmb29kLm9uY2xpY2sgPSBkaXNwbGF5Q2hlY2tvdXQodGV4dCxwcmljZSk7XG4gIGZvb2Qub25jbGljayA9IGZ1bmN0aW9uKHByaWNlLHRleHQpeyBcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wb3B1cCcpO1xuICAgIGNvbnNvbGUubG9nKGAke3ByaWNlfWApO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kZGltJyk7XG5cbiAgICBjb25zdCBiaWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpbGwnKTtcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlcicpO1xuXG4gICAgb3JkZXIudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG5cbiAgICBiaWxsLnRleHRDb250ZW50ID0gYEJpbGw6ICR7cHJpY2V9YDtcbiAgICBcblxuXG59O1xuICAvLyBmb29kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5Q2hlY2tvdXQodGV4dCxwcmljZSkpO1xuLy8gIGZvb2Quc2V0QXR0cmlidXRlKCdvbmNsaWNrJyxkaXNwbGF5Q2hlY2tvdXQodGV4dCxwcmljZSkpO1xuLy8gIGZvb2Quc2V0QXR0cmlidXRlKCdvbmNsaWNrJywocHJpY2UsdGV4dCk9PnsgXG4vLyAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcG9wdXAnKTtcbi8vICAgICBjb25zdCBwYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5Jyk7XG4vLyAgICAgY29uc3QgYmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWxsJyk7XG4vLyAgICAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXInKTtcblxuLy8gICAgIG9yZGVyLnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xuXG4vLyAgICAgYmlsbC50ZXh0Q29udGVudCA9IGBCaWxsOiAke3ByaWNlfWA7XG4vLyAgICAgcGF5LnRleHRDb250ZW50ID0gJ1BheSc7XG5cblxuXG4vLyB9KTtcblxuXG4gIC8vIGNvbnN0IGZvb2QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgZm9vZC5jbGFzc0xpc3QuYWRkKGAke251bX1gKTtcbiAgXG4gIC8vIGZvb2QuY2xhc3NMaXN0LmFkZChcImJ0bkxvZ2luLXBvcHVwXCIpO1xuXG4gIFxuXG5cbiAgY29uc3QgY2FyZGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGNhcmRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWFnZVwiKTtcbiAgY2FyZGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDIzLDIzLDIzLDEpIDEwMCUpLHVybCgke3NyY30pYDtcbiAgY2FyZGltYWdlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXG4gIC8qXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuXG4gICAgY2FyZGltYWdlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgKi9cblxuICBjb25zdCBjYXJkaW5mb3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbmZvcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm8td3JhcHBlclwiKTtcblxuICBjb25zdCBkdW90b25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGR1b3RvbmUuY2xhc3NMaXN0LmFkZChcImZhLWR1b3RvbmVcIik7XG4gIGR1b3RvbmUuY2xhc3NMaXN0LmFkZChcImZhLWFwYXJ0bWVudFwiKTtcblxuICBjb25zdCBjYXJkaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbmZvLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm9cIik7XG5cbiAgY29uc3QgY2FyZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm8tdGl0bGVcIik7XG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgaDQudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBjYXJkdGl0bGUuYXBwZW5kQ2hpbGQoaDMpO1xuICBjYXJkdGl0bGUuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gIGNhcmRpbmZvLmFwcGVuZENoaWxkKGR1b3RvbmUpO1xuICBjYXJkaW5mby5hcHBlbmRDaGlsZChjYXJkdGl0bGUpO1xuXG4gIGNhcmRpbmZvcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRpbmZvKTtcblxuICBjYXJkaW1hZ2UuYXBwZW5kQ2hpbGQoZHVvdG9uZSk7XG5cbiAgY2FyZGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZGltYWdlKTtcbiAgY2FyZGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZGluZm9yYXBwZXIpO1xuXG4gIGZvb2QuYXBwZW5kQ2hpbGQoY2FyZGNvbnRlbnQpO1xuXG5cbiAgLyogICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gdGV4dDtcbiAgXG4gICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gIFxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgKi9cbiAgcmV0dXJuIGZvb2Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItY29udGVudFwiKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJncmlkLWxheVwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleC1sYXlcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvbWUtbGF5XCIpO1xuXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIHNldEJ0bkFjdGl2ZShcIm1lbnVcIik7XG5cbiAgY29uc3QgZm9vZHMgPSBbXG4gICAgY3JlYXRlRm9vZChcIi4vZGlzdC9pbWFnZXMvdmFkYXBhdi5qcGVnXCIsIFwidmFkYXBhdlwiLCBcIjEwIFJzXCIsIFwidmFkYXBhdlwiLFwiMVwiKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2Rpc3QvaW1hZ2VzL2NvbGQtY29mZmVlLmF2aWZcIixcbiAgICAgIFwiY29sZCBjb2ZmaWVcIixcbiAgICAgIFwiMzAgUnNcIixcbiAgICAgIFwiY29sZCBjb2ZmaWVcIixcIjJcIlxuICAgICksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9kaXN0L2ltYWdlcy9jaGlja2VuLWJpcnlhbmkuanBlZ1wiLFxuICAgICAgXCJjaGlja2VuIGJpcnlhbmlcIixcbiAgICAgIFwiMjAwIFJzXCIsXG4gICAgICBcImNoaWNrZW4gYmlyeWFuaVwiLFwiM1wiXG4gICAgKSxcbiAgICBjcmVhdGVGb29kKFwiLi9kaXN0L2ltYWdlcy9zYW5kd2ljaC5qcGVnXCIsIFwic2FuZHdpY2hcIiwgXCI1MCBSc1wiLCBcInNhbmR3aWNoXCIsXCI0XCIpLFxuICAgIGNyZWF0ZUZvb2QoXG4gICAgICBcIi4vZGlzdC9pbWFnZXMvc2FuZHdpY2gtY29ybi5qcGVnXCIsXG4gICAgICBcIkNvcm4gc2FuZHdpY2hcIixcbiAgICAgIFwiNjAgUnNcIixcbiAgICAgIFwiQ29ybiBzYW5kd2ljaFwiLFwiNVwiXG4gICAgKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2Rpc3QvaW1hZ2VzL3NoZXp3YW4tc2FuZHdpY2guanBlZ1wiLFxuICAgICAgXCJzaGV6d2FuIHNhbmR3aWNoXCIsXG4gICAgICBcIjcwIFJzXCIsXG4gICAgICBcInNoZXp3YW4gc2FuZHdpY2hcIixcIjZcIlxuICAgICksXG4gICAgY3JlYXRlRm9vZChcIi4vZGlzdC9pbWFnZXMvcGl6emEuanBlZ1wiLCBcInBpenphXCIsIFwiOTAgUnNcIiwgXCJwaXp6YVwiLFwiN1wiKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2Rpc3QvaW1hZ2VzL2NoZWVzZS1waXp6YS5qcGVnXCIsXG4gICAgICBcInBpenphLWNoZWVzZVwiLFxuICAgICAgXCIxMDAgUnNcIixcbiAgICAgIFwicGl6emEtY2hlZXNlXCIsXCI4XCIpLFxuICAgIGNyZWF0ZUZvb2QoXCIuL2Rpc3QvaW1hZ2VzL2J1cmdlci5qcGVnXCIsIFwiYnVyZ2VyXCIsIFwiNTAgUnNcIiwgXCJidXJnZXJcIixcIjlcIiksXG4gIF07XG5cbiAgZm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZCk7XG4gIH0pO1xuIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9tYWluLXBhZ2VcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnUyXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5cblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMoKSB7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZENvbnRhY3QpO1xuXG4gIFxufVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbG9hZFBhZ2UoKTtcbiAgbG9hZEhvbWUoKTtcbiAgYWRkTmF2RXZlbnRzKCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIikub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuICBmb3IgKGNvbnN0IGNhcmQgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRcIikpIHtcbiAgICBjb25zdCByZWN0ID0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tb3VzZS14XCIsIGAke3h9cHhgKTtcbiAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tb3VzZS15XCIsIGAke3l9cHhgKTtcbiAgfVxufTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=