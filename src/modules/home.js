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

export default loadHome;
