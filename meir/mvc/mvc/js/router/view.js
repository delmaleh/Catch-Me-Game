function init(arr) {
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  arr.forEach((x) => {
    var li = document.createElement("li");
    li.innerHTML = `<a href="#${x.path}">${x.title}</a>`;
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  document.querySelector("header").appendChild(nav);
}
export { init };
