// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("button:first-of-type");
var deNav = document.querySelector("header nav:nth-of-type(2)");
var deNavUl = document.querySelector("header nav:nth-of-type(2) > ul");

menuButton.onclick = openMenu;

function openMenu(){
  deNav.classList.add("toonMenu");
  // menuButton.style.opacity = 0;
  deNavUl.setAttribute('aria-hidden', 'false');

}


var sluitButton = document.querySelector("nav:nth-of-type(2) button");

sluitButton.onclick = sluitMenu;

function sluitMenu(){
  deNav.classList.remove("toonMenu");
  deNavUl.setAttribute('aria-hidden', 'true');
}

