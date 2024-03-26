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
  content.classList.add("home-lay");
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

function displayCheckout(text,price){
  wrapper.classList.add('active-popup');
  const pay = document.getElementById("pay");
  const bill = document.getElementById("bill");
  const order = document.getElementById("order");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNwTXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDTDtBQUNDO0FBQ0s7OztBQUc1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0NBQW9DLHFEQUFRO0FBQzVDLG9DQUFvQyxzREFBUTtBQUM1Qyx1Q0FBdUMsd0RBQVc7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQVE7QUFDVixFQUFFLHlEQUFRO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxFQUFFO0FBQzdDLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxLy4vc3JjL21vZHVsZXMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvLi9zcmMvbW9kdWxlcy9tZW51Mi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRCdG5BY3RpdmUoaWQpIHtcbiAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWIuYWN0aXZlXCIpO1xuICBpZiAoYWN0aXZlQnRuKSBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFkcmVzcy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYWRyZXNzLXNlY3Rpb24tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgYWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZHJlc3NcIik7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG4gIGFkcmVzcy5hcHBlbmRDaGlsZChtYXApO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJhZHJlc3MtZGVzY3JpcHRpb24tcGFyYVwiKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IGRhdGE7XG4gIGFkcmVzcy5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkcmVzcyk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHBob25lTnVtQmxvY2sobnVtLCBwaG9uZUxpc3QpIHtcbiAgY29uc3QgcGhvbmVOdW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVOdW1MaXN0LmNsYXNzTGlzdC5hZGQoXCJwaG9uZS1saXN0XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBob25lLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG51bTtcbiAgcGhvbmVOdW1MaXN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoXCJwaG9uZS1udW1cIik7XG5cbiAgcGhvbmVMaXN0LmZvckVhY2goKGQpID0+IHtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicGhvbmVOdW1cIik7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGQ7XG4gICAgcGhvbmVOdW0uYXBwZW5kQ2hpbGQocGFyYSk7XG4gIH0pO1xuICBwaG9uZU51bUxpc3QuYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuICByZXR1cm4gcGhvbmVOdW1MaXN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZsZXgtbGF5XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkLWxheVwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZS1sYXlcIik7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIHNldEJ0bkFjdGl2ZShcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgcGhvbmVTZWN0aW9uID0gcGhvbmVOdW1CbG9jayhcIlBob25lIG51bWJlcnNcIiwgW1xuICAgIFwiJCAwOTg3LTY1NC00MzIxXCIsXG4gICAgXCIjIDEyMzQtNTY3LTg5MDRcIixcbiAgXSk7XG5cbiAgY29uc3QgYWRkcmVzc1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKFxuICAgIFwiQWRyZXNzXCIsXG4gICAgXCJQaW1wcmkgQ2hpbmNod2FkIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmcsTmlnZGksIFB1bmUsIE1haGFyYXNodHJhXCIsXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZVNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3NTZWN0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJmdW5jdGlvbiBjcmVhdGVBYm91dFNlY3Rpb24oKXtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG5cblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJ3ZSBzZXJ2ZSB0aGUgdGFzdGUgeW91IGxvdmVcIjtcblxuICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRlc2NyaXB0aW9uXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID1cbiAgICBcIlRoaXMgaXMgdGhlIHR5cGUgb2YgQ2FudGVlbiB3aGljaCBzZXJ2ZXMgdGhlIGZvb2QgeW91IGxvdmUuIFdlIGhhdmUgYSB3aWRlIHJhbmdlIG9mIGZvb2QgaXRlbXMgdG8gY2hvb3NlIGZyb20uXCI7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIHJldHVybiBhYm91dDtcbn1cblxuZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLmFjdGl2ZVwiKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtbGF5XCIpO1xuIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtbGF5XCIpO1xuXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGNyZWF0ZUFib3V0U2VjdGlvbigpO1xuXG4gIHNldEJ0bkFjdGl2ZShcImhvbWVcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihpZCwgdGV4dCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gdGV4dDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICByZXR1cm4gaGVhZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlQnRuKGlkLCB0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gIHJldHVybiBidG47XG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoaWQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblxuICBjb25zdCBob21lQnRuID0gY3JlYXRlQnRuKFwiaG9tZVwiLCBcImhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oXCJtZW51XCIsIFwibWVudVwiKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bihcImNvbnRhY3RcIiwgXCJjb250YWN0XCIpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIHJldHVybiBuYXY7XG59XG5mdW5jdGlvbiBjcmVhdGVNYWluKGlkKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiBtYWluO1xufVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGlkLCB0ZXh0KSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChoMyk7XG4gIHJldHVybiBmb290ZXI7XG59XG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcImhlYWRlclwiLCBcIlBDQ09FIENhbnRlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgLy8gbmF2XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdihcIm5hdlwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAvLyB0YWItY29udGVudFxuICBjb25zdCB0YWJDb250ZW50ID0gY3JlYXRlTWFpbihcInRhYi1jb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICAvLyBmb290ZXJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKFwiZm9vdGVyXCIsIFwiTWFkZSBieSBtc2sxMDM5XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiZnVuY3Rpb24gc2V0QnRuQWN0aXZlKGlkKSB7XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLmFjdGl2ZVwiKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2hlY2tvdXQodGV4dCxwcmljZSl7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBvcHVwJyk7XG4gIGNvbnN0IHBheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5XCIpO1xuICBjb25zdCBiaWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsXCIpO1xuICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXJcIik7XG5cbiAgb3JkZXIudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG5cbiAgYmlsbC50ZXh0Q29udGVudCA9IGBCaWxsOiAke3ByaWNlfWA7XG4gIHBheS50ZXh0Q29udGVudCA9ICdQYXknO1xuXG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb29kKHNyYywgdGV4dCwgcHJpY2UsIGFsdCwgbnVtKSB7XG4gIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBmb29kLm9uY2xpY2sgPSBkaXNwbGF5Q2hlY2tvdXQodGV4dCxwcmljZSk7XG4gIGZvb2Qub25jbGljayA9IGZ1bmN0aW9uKHByaWNlLHRleHQpeyBcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wb3B1cCcpO1xuICAgIGNvbnNvbGUubG9nKGAke3ByaWNlfWApO1xuXG4gICAgY29uc3QgYmlsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWxsJyk7XG4gICAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXInKTtcblxuICAgIG9yZGVyLnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xuXG4gICAgYmlsbC50ZXh0Q29udGVudCA9IGBCaWxsOiAke3ByaWNlfWA7XG4gICAgXG5cblxufTtcbiAgLy8gZm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheUNoZWNrb3V0KHRleHQscHJpY2UpKTtcbi8vICBmb29kLnNldEF0dHJpYnV0ZSgnb25jbGljaycsZGlzcGxheUNoZWNrb3V0KHRleHQscHJpY2UpKTtcbi8vICBmb29kLnNldEF0dHJpYnV0ZSgnb25jbGljaycsKHByaWNlLHRleHQpPT57IFxuLy8gICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBvcHVwJyk7XG4vLyAgICAgY29uc3QgcGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheScpO1xuLy8gICAgIGNvbnN0IGJpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmlsbCcpO1xuLy8gICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyJyk7XG5cbi8vICAgICBvcmRlci50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcblxuLy8gICAgIGJpbGwudGV4dENvbnRlbnQgPSBgQmlsbDogJHtwcmljZX1gO1xuLy8gICAgIHBheS50ZXh0Q29udGVudCA9ICdQYXknO1xuXG5cblxuLy8gfSk7XG5cblxuICAvLyBjb25zdCBmb29kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2QuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGZvb2QuY2xhc3NMaXN0LmFkZChgJHtudW19YCk7XG4gIFxuICAvLyBmb29kLmNsYXNzTGlzdC5hZGQoXCJidG5Mb2dpbi1wb3B1cFwiKTtcblxuICBcblxuXG4gIGNvbnN0IGNhcmRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGVudFwiKTtcblxuICBjb25zdCBjYXJkaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkaW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1hZ2VcIik7XG4gIGNhcmRpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyMywyMywyMywxKSAxMDAlKSx1cmwoJHtzcmN9KWA7XG4gIGNhcmRpbWFnZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcblxuICAvKlxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcblxuICAgIGNhcmRpbWFnZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICovXG5cbiAgY29uc3QgY2FyZGluZm9yYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkaW5mb3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbmZvLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgZHVvdG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBkdW90b25lLmNsYXNzTGlzdC5hZGQoXCJmYS1kdW90b25lXCIpO1xuICBkdW90b25lLmNsYXNzTGlzdC5hZGQoXCJmYS1hcGFydG1lbnRcIik7XG5cbiAgY29uc3QgY2FyZGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkaW5mby5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbmZvXCIpO1xuXG4gIGNvbnN0IGNhcmR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmR0aXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbmZvLXRpdGxlXCIpO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGg0LnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgY2FyZHRpdGxlLmFwcGVuZENoaWxkKGgzKTtcbiAgY2FyZHRpdGxlLmFwcGVuZENoaWxkKGg0KTtcblxuICBjYXJkaW5mby5hcHBlbmRDaGlsZChkdW90b25lKTtcbiAgY2FyZGluZm8uYXBwZW5kQ2hpbGQoY2FyZHRpdGxlKTtcblxuICBjYXJkaW5mb3JhcHBlci5hcHBlbmRDaGlsZChjYXJkaW5mbyk7XG5cbiAgY2FyZGltYWdlLmFwcGVuZENoaWxkKGR1b3RvbmUpO1xuXG4gIGNhcmRjb250ZW50LmFwcGVuZENoaWxkKGNhcmRpbWFnZSk7XG4gIGNhcmRjb250ZW50LmFwcGVuZENoaWxkKGNhcmRpbmZvcmFwcGVyKTtcblxuICBmb29kLmFwcGVuZENoaWxkKGNhcmRjb250ZW50KTtcblxuXG4gIC8qICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIFxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIFxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gIFxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICBcbiAgICBmb29kLmFwcGVuZENoaWxkKGltZyk7XG4gICAgZm9vZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICovXG4gIHJldHVybiBmb29kO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLWNvbnRlbnRcIik7XG5cbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1sYXlcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZsZXgtbGF5XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJob21lLWxheVwiKTtcblxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBzZXRCdG5BY3RpdmUoXCJtZW51XCIpO1xuXG4gIGNvbnN0IGZvb2RzID0gW1xuICAgIGNyZWF0ZUZvb2QoXCIuL2Rpc3QvaW1hZ2VzL3ZhZGFwYXYuanBlZ1wiLCBcInZhZGFwYXZcIiwgXCIxMCBSc1wiLCBcInZhZGFwYXZcIixcIjFcIiksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9kaXN0L2ltYWdlcy9jb2xkLWNvZmZlZS5hdmlmXCIsXG4gICAgICBcImNvbGQgY29mZmllXCIsXG4gICAgICBcIjMwIFJzXCIsXG4gICAgICBcImNvbGQgY29mZmllXCIsXCIyXCJcbiAgICApLFxuICAgIGNyZWF0ZUZvb2QoXG4gICAgICBcIi4vZGlzdC9pbWFnZXMvY2hpY2tlbi1iaXJ5YW5pLmpwZWdcIixcbiAgICAgIFwiY2hpY2tlbiBiaXJ5YW5pXCIsXG4gICAgICBcIjIwMCBSc1wiLFxuICAgICAgXCJjaGlja2VuIGJpcnlhbmlcIixcIjNcIlxuICAgICksXG4gICAgY3JlYXRlRm9vZChcIi4vZGlzdC9pbWFnZXMvc2FuZHdpY2guanBlZ1wiLCBcInNhbmR3aWNoXCIsIFwiNTAgUnNcIiwgXCJzYW5kd2ljaFwiLFwiNFwiKSxcbiAgICBjcmVhdGVGb29kKFxuICAgICAgXCIuL2Rpc3QvaW1hZ2VzL3NhbmR3aWNoLWNvcm4uanBlZ1wiLFxuICAgICAgXCJDb3JuIHNhbmR3aWNoXCIsXG4gICAgICBcIjYwIFJzXCIsXG4gICAgICBcIkNvcm4gc2FuZHdpY2hcIixcIjVcIlxuICAgICksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9kaXN0L2ltYWdlcy9zaGV6d2FuLXNhbmR3aWNoLmpwZWdcIixcbiAgICAgIFwic2hlendhbiBzYW5kd2ljaFwiLFxuICAgICAgXCI3MCBSc1wiLFxuICAgICAgXCJzaGV6d2FuIHNhbmR3aWNoXCIsXCI2XCJcbiAgICApLFxuICAgIGNyZWF0ZUZvb2QoXCIuL2Rpc3QvaW1hZ2VzL3BpenphLmpwZWdcIiwgXCJwaXp6YVwiLCBcIjkwIFJzXCIsIFwicGl6emFcIixcIjdcIiksXG4gICAgY3JlYXRlRm9vZChcbiAgICAgIFwiLi9kaXN0L2ltYWdlcy9jaGVlc2UtcGl6emEuanBlZ1wiLFxuICAgICAgXCJwaXp6YS1jaGVlc2VcIixcbiAgICAgIFwiMTAwIFJzXCIsXG4gICAgICBcInBpenphLWNoZWVzZVwiLFwiOFwiKSxcbiAgICBjcmVhdGVGb29kKFwiLi9kaXN0L2ltYWdlcy9idXJnZXIuanBlZ1wiLCBcImJ1cmdlclwiLCBcIjUwIFJzXCIsIFwiYnVyZ2VyXCIsXCI5XCIpLFxuICBdO1xuXG4gIGZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9KTtcbiBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvbWFpbi1wYWdlXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51MlwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL21vZHVsZXMvY29udGFjdFwiO1xuXG5cbmluaXQoKTtcblxuZnVuY3Rpb24gYWRkTmF2RXZlbnRzKCkge1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuXG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWUpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDb250YWN0KTtcblxuICBcbn1cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxvYWRQYWdlKCk7XG4gIGxvYWRIb21lKCk7XG4gIGFkZE5hdkV2ZW50cygpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1jb250ZW50XCIpLm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgZm9yIChjb25zdCBjYXJkIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpKSB7XG4gICAgY29uc3QgcmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW91c2UteFwiLCBgJHt4fXB4YCk7XG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW91c2UteVwiLCBgJHt5fXB4YCk7XG4gIH1cbn07XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9