import sheet from "./style.css" assert { type: "css" };
document.adoptedStyleSheets = [sheet];

var main = document.querySelector("main");
function welcomeUser(x) {
  var h1 = document.createElement("h1");
  h1.id = "user" + x.id;
  h1.innerHTML = "Welcome, " + x.fName;
  main.appendChild(h1);
  return h1;
}

function changeName(x) {
  main.innerHTML = "";
  welcomeUser(x);
}

export { welcomeUser, changeName };
