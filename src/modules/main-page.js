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

export default loadPage;
