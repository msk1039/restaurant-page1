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
  para.textContent =
    "This is the type of Canteen which serves the food you love. We have a wide range of food items to choose from.";

  about.appendChild(para);
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
  content.classList.add("flex-lay");
  content.classList.remove("grid-lay");

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
function createFooter(id, text) {
  const footer = document.createElement("footer");
  footer.setAttribute("id", id);
  const h3 = document.createElement("h3");
  h3.textContent = text;
  footer.appendChild(h3);
  return footer;
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
  const footer = createFooter("footer", "Made by msk1039");
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

function createFood(src, text, price, alt) {
  const food = document.createElement("div");
  food.classList.add("card");

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

  content.textContent = "";

  setBtnActive("menu");

  const foods = [
    createFood("./images/vadapav.jpeg", "vadapav", "10 Rs", "vadapav"),
    createFood(
      "./images/cold-coffee.avif",
      "cold coffie",
      "30 Rs",
      "cold coffie",
    ),
    createFood(
      "./images/chicken-biryani.jpeg",
      "chicken biryani",
      "200 Rs",
      "chicken biryani",
    ),
    createFood("./images/sandwich.jpeg", "sandwich", "50 Rs", "sandwich"),
    createFood(
      "./images/sandwich-corn.jpeg",
      "Corn sandwich",
      "60 Rs",
      "Corn sandwich",
    ),
    createFood(
      "./images/shezwan-sandwich.jpeg",
      "shezwan sandwich",
      "70 Rs",
      "shezwan sandwich",
    ),
    createFood("./images/pizza.jpeg", "pizza", "90 Rs", "pizza"),
    createFood(
      "./images/cheese-pizza.jpeg",
      "pizza-cheese",
      "100 Rs",
      "pizza-cheese",
    ),
    createFood("./images/burger.jpeg", "burger", "50 Rs", "burger"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUUzQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRHhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtIQUFrSCxJQUFJO0FBQ3RIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUMzSXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDTDtBQUNDO0FBQ0s7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxxREFBUTtBQUM1QyxvQ0FBb0Msc0RBQVE7QUFDNUMsdUNBQXVDLHdEQUFXO0FBQ2xEO0FBQ0E7QUFDQSxFQUFFLDhEQUFRO0FBQ1YsRUFBRSx5REFBUTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsRUFBRTtBQUM3QywyQ0FBMkMsRUFBRTtBQUM3QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9tb2R1bGVzL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL21vZHVsZXMvbWVudTIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLmFjdGl2ZVwiKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihuYW1lLCBkYXRhKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZHJlc3Mtc2VjdGlvblwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImFkcmVzcy1zZWN0aW9uLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRyZXNzXCIpO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1hcC5jbGFzc0xpc3QuYWRkKFwibWFwXCIpO1xuICBhZHJlc3MuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKFwiYWRyZXNzLWRlc2NyaXB0aW9uLXBhcmFcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBkYXRhO1xuICBhZHJlc3MuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZHJlc3MpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBwaG9uZU51bUJsb2NrKG51bSwgcGhvbmVMaXN0KSB7XG4gIGNvbnN0IHBob25lTnVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lTnVtTGlzdC5jbGFzc0xpc3QuYWRkKFwicGhvbmUtbGlzdFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwaG9uZS10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBudW07XG4gIHBob25lTnVtTGlzdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZU51bS5jbGFzc0xpc3QuYWRkKFwicGhvbmUtbnVtXCIpO1xuXG4gIHBob25lTGlzdC5mb3JFYWNoKChkKSA9PiB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcInBob25lTnVtXCIpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBkO1xuICAgIHBob25lTnVtLmFwcGVuZENoaWxkKHBhcmEpO1xuICB9KTtcbiAgcGhvbmVOdW1MaXN0LmFwcGVuZENoaWxkKHBob25lTnVtKTtcbiAgcmV0dXJuIHBob25lTnVtTGlzdDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1jb250ZW50XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJmbGV4LWxheVwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZC1sYXlcIik7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIHNldEJ0bkFjdGl2ZShcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgcGhvbmVTZWN0aW9uID0gcGhvbmVOdW1CbG9jayhcIlBob25lIG51bWJlcnNcIiwgW1xuICAgIFwiJCAwOTg3LTY1NC00MzIxXCIsXG4gICAgXCIjIDEyMzQtNTY3LTg5MDRcIixcbiAgXSk7XG5cbiAgY29uc3QgYWRkcmVzc1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKFxuICAgIFwiQWRyZXNzXCIsXG4gICAgXCJQaW1wcmkgQ2hpbmNod2FkIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmcsTmlnZGksIFB1bmUsIE1haGFyYXNodHJhXCIsXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZVNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3NTZWN0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJmdW5jdGlvbiBjcmVhdGVBYm91dFNlY3Rpb24oKXtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG5cblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJ3ZSBzZXJ2ZSB0aGUgdGFzdGUgeW91IGxvdmVcIjtcblxuICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRlc2NyaXB0aW9uXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID1cbiAgICBcIlRoaXMgaXMgdGhlIHR5cGUgb2YgQ2FudGVlbiB3aGljaCBzZXJ2ZXMgdGhlIGZvb2QgeW91IGxvdmUuIFdlIGhhdmUgYSB3aWRlIHJhbmdlIG9mIGZvb2QgaXRlbXMgdG8gY2hvb3NlIGZyb20uXCI7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIHJldHVybiBhYm91dDtcbn1cblxuZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLmFjdGl2ZVwiKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZsZXgtbGF5XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkLWxheVwiKTtcblxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBhYm91dFNlY3Rpb24gPSBjcmVhdGVBYm91dFNlY3Rpb24oKTtcblxuICBzZXRCdG5BY3RpdmUoXCJob21lXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoaWQsIHRleHQpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJ0bihpZCwgdGV4dCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICByZXR1cm4gYnRuO1xufVxuZnVuY3Rpb24gY3JlYXRlTmF2KGlkKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bihcImhvbWVcIiwgXCJob21lXCIpO1xuICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnRuKFwibWVudVwiLCBcIm1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBjcmVhdGVCdG4oXCJjb250YWN0XCIsIFwiY29udGFjdFwiKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuICByZXR1cm4gbmF2O1xufVxuZnVuY3Rpb24gY3JlYXRlTWFpbihpZCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gbWFpbjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihpZCwgdGV4dCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIC8vIGhlYWRlclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJoZWFkZXJcIiwgXCJQQ0NPRSBDYW50ZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIC8vIG5hdlxuICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoXCJuYXZcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgLy8gdGFiLWNvbnRlbnRcbiAgY29uc3QgdGFiQ29udGVudCA9IGNyZWF0ZU1haW4oXCJ0YWItY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcbiAgLy8gZm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcihcImZvb3RlclwiLCBcIk1hZGUgYnkgbXNrMTAzOVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImZ1bmN0aW9uIHNldEJ0bkFjdGl2ZShpZCkge1xuICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi5hY3RpdmVcIik7XG4gIGlmIChhY3RpdmVCdG4pIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZChzcmMsIHRleHQsIHByaWNlLCBhbHQpIHtcbiAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2QuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgY29uc3QgY2FyZGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGNhcmRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWFnZVwiKTtcbiAgY2FyZGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDIzLDIzLDIzLDEpIDEwMCUpLHVybCgke3NyY30pYDtcbiAgY2FyZGltYWdlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXG4gIC8qXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuXG4gICAgY2FyZGltYWdlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgKi9cblxuICBjb25zdCBjYXJkaW5mb3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbmZvcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm8td3JhcHBlclwiKTtcblxuICBjb25zdCBkdW90b25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGR1b3RvbmUuY2xhc3NMaXN0LmFkZChcImZhLWR1b3RvbmVcIik7XG4gIGR1b3RvbmUuY2xhc3NMaXN0LmFkZChcImZhLWFwYXJ0bWVudFwiKTtcblxuICBjb25zdCBjYXJkaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRpbmZvLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm9cIik7XG5cbiAgY29uc3QgY2FyZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm8tdGl0bGVcIik7XG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgaDQudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBjYXJkdGl0bGUuYXBwZW5kQ2hpbGQoaDMpO1xuICBjYXJkdGl0bGUuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gIGNhcmRpbmZvLmFwcGVuZENoaWxkKGR1b3RvbmUpO1xuICBjYXJkaW5mby5hcHBlbmRDaGlsZChjYXJkdGl0bGUpO1xuXG4gIGNhcmRpbmZvcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRpbmZvKTtcblxuICBjYXJkaW1hZ2UuYXBwZW5kQ2hpbGQoZHVvdG9uZSk7XG5cbiAgY2FyZGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZGltYWdlKTtcbiAgY2FyZGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZGluZm9yYXBwZXIpO1xuXG4gIGZvb2QuYXBwZW5kQ2hpbGQoY2FyZGNvbnRlbnQpO1xuXG4gIC8qICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIFxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIFxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gIFxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICBcbiAgICBmb29kLmFwcGVuZENoaWxkKGltZyk7XG4gICAgZm9vZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICovXG5cbiAgcmV0dXJuIGZvb2Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItY29udGVudFwiKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJncmlkLWxheVwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleC1sYXlcIik7XG5cbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgc2V0QnRuQWN0aXZlKFwibWVudVwiKTtcblxuICBjb25zdCBmb29kcyA9IFtcbiAgICBjcmVhdGVGb29kKFwiLi9pbWFnZXMvdmFkYXBhdi5qcGVnXCIsIFwidmFkYXBhdlwiLCBcIjEwIFJzXCIsIFwidmFkYXBhdlwiKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2ltYWdlcy9jb2xkLWNvZmZlZS5hdmlmXCIsXG4gICAgICBcImNvbGQgY29mZmllXCIsXG4gICAgICBcIjMwIFJzXCIsXG4gICAgICBcImNvbGQgY29mZmllXCIsXG4gICAgKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2ltYWdlcy9jaGlja2VuLWJpcnlhbmkuanBlZ1wiLFxuICAgICAgXCJjaGlja2VuIGJpcnlhbmlcIixcbiAgICAgIFwiMjAwIFJzXCIsXG4gICAgICBcImNoaWNrZW4gYmlyeWFuaVwiLFxuICAgICksXG4gICAgY3JlYXRlRm9vZChcIi4vaW1hZ2VzL3NhbmR3aWNoLmpwZWdcIiwgXCJzYW5kd2ljaFwiLCBcIjUwIFJzXCIsIFwic2FuZHdpY2hcIiksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9pbWFnZXMvc2FuZHdpY2gtY29ybi5qcGVnXCIsXG4gICAgICBcIkNvcm4gc2FuZHdpY2hcIixcbiAgICAgIFwiNjAgUnNcIixcbiAgICAgIFwiQ29ybiBzYW5kd2ljaFwiLFxuICAgICksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9pbWFnZXMvc2hlendhbi1zYW5kd2ljaC5qcGVnXCIsXG4gICAgICBcInNoZXp3YW4gc2FuZHdpY2hcIixcbiAgICAgIFwiNzAgUnNcIixcbiAgICAgIFwic2hlendhbiBzYW5kd2ljaFwiLFxuICAgICksXG4gICAgY3JlYXRlRm9vZChcIi4vaW1hZ2VzL3BpenphLmpwZWdcIiwgXCJwaXp6YVwiLCBcIjkwIFJzXCIsIFwicGl6emFcIiksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9pbWFnZXMvY2hlZXNlLXBpenphLmpwZWdcIixcbiAgICAgIFwicGl6emEtY2hlZXNlXCIsXG4gICAgICBcIjEwMCBSc1wiLFxuICAgICAgXCJwaXp6YS1jaGVlc2VcIixcbiAgICApLFxuICAgIGNyZWF0ZUZvb2QoXCIuL2ltYWdlcy9idXJnZXIuanBlZ1wiLCBcImJ1cmdlclwiLCBcIjUwIFJzXCIsIFwiYnVyZ2VyXCIpLFxuICBdO1xuXG4gIGZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9tb2R1bGVzL21haW4tcGFnZVwiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21vZHVsZXMvbWVudTJcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIjtcblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMoKSB7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWUpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDb250YWN0KTtcbn1cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxvYWRQYWdlKCk7XG4gIGxvYWRIb21lKCk7XG4gIGFkZE5hdkV2ZW50cygpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1jb250ZW50XCIpLm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgZm9yIChjb25zdCBjYXJkIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpKSB7XG4gICAgY29uc3QgcmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW91c2UteFwiLCBgJHt4fXB4YCk7XG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW91c2UteVwiLCBgJHt5fXB4YCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=