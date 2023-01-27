const htmlText = document.querySelector("#html_text");
const cssTexts = document.querySelector("#css_text");
const jsTexts = document.querySelector("#js_text");
const designOutput = document.querySelector("#design_output");

const innerStyle = document.querySelector(".innerStyle");

const helpWindow = document.querySelector(".helpWindow");
const contactMenu = document.querySelector(".myContacts");

const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// run the code written by user once the run button is clicked
const runBUtton = document.querySelector(".run-button");
runBUtton.addEventListener("click", () => {
  designOutput.innerHTML = htmlText.value + cssTexts.value + jsTexts.value;
});

//Trying to deal with the tabLinks... taking me a long time
// to figure it out  😂 😂 😂... if you are seeing this then
// that means I finally did it 🥳🥳😎

function openTab(tabName) {
  closeTabs();

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function closeTabs() {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
}

function toggleHelp() {
  helpWindow.classList.toggle("showHelp");
}

function toggleMenu() {
  contactMenu.classList.toggle("showMenu");
}
