import { SpecialInput } from "../reusable/input.js";
import sheet from "./style.css" assert { type: "css" };

var main = document.querySelector("main");

function open() {
  document.adoptedStyleSheets = [sheet];
  var css = { backgroundColor: "yellow" , fontWeight : "bold"};
  var input = new SpecialInput(css, "email", "Enter your email", "inputEmail1");
  main.innerHTML = `<h1>Welcome to the Home component</h1>`;
  main.appendChild(input);
  main.className = "home-main";
}

export { open };
