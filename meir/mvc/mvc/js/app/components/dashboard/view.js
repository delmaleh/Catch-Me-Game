import sheet from './style.css' assert { type: "css" };



var main = document.querySelector("main");

function open() {
  document.adoptedStyleSheets = [sheet];
  main.innerHTML = `<h1>Welcome to the Dashboard component</h1>`;
  main.className = "dashboard-main";
}

export { open };
