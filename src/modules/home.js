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

export default loadHome;
