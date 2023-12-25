function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }
  
  function createFood(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
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
        './images/yellow-img.jpeg',
        'vadapav',
        '10 Rs',
        'vadapav'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'cold coffie',
        '30 Rs',
        'cold coffie'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'chicken biryani',
        '200 Rs',
        'chicken biryani'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'sandwich',
        '50 Rs',
        'sandwich'
      ),
      createFood(
         './images/yellow-img.jpeg',
        'Corn sandwich',
        '60 Rs',
        'Corn sandwich'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'shezwan sandwich',
        '70 Rs',
        'shezwan sandwich'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'pizza',
        '90 Rs',
        'pizza'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'pizza-cheese',
        '100 Rs',
        'pizza-cheese'
      ),
      createFood(
        './images/yellow-img.jpeg',
        'burger',
        '50 Rs',
        'burger'
      )
    ];
  
    foods.forEach((food) => {
      content.appendChild(food);
    });
  }
  
  export default loadMenu;

























