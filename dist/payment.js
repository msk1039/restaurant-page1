const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.card');
const iconClose = document.querySelector('.icon-close');
const background = document.getElementById("content");


// registerLink.addEventListener('click', () => {
//   wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');
//   });

// btnPopup.addEventListener('click', () => {
//   wrapper.classList.add('active-popup');
// });

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    background.classList.remove('backgrounddim')
});
