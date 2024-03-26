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
    createFood("./images/vadapav.jpeg", "vadapav", "10 Rs", "vadapav","1"),
    createFood(
      "./images/cold-coffee.avif",
      "cold coffie",
      "30 Rs",
      "cold coffie","2"
    ),
    createFood(
      "./images/chicken-biryani.jpeg",
      "chicken biryani",
      "200 Rs",
      "chicken biryani","3"
    ),
    createFood("./images/sandwich.jpeg", "sandwich", "50 Rs", "sandwich","4"),
    createFood(
      "./images/sandwich-corn.jpeg",
      "Corn sandwich",
      "60 Rs",
      "Corn sandwich","5"
    ),
    createFood(
      "./images/shezwan-sandwich.jpeg",
      "shezwan sandwich",
      "70 Rs",
      "shezwan sandwich","6"
    ),
    createFood("./images/pizza.jpeg", "pizza", "90 Rs", "pizza","7"),
    createFood(
      "./images/cheese-pizza.jpeg",
      "pizza-cheese",
      "100 Rs",
      "pizza-cheese","8"),
    createFood("./images/burger.jpeg", "burger", "50 Rs", "burger","9"),
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
 

}

export default loadMenu;
