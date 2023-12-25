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
  
  export default loadContact;