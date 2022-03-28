export class SpecialInput extends HTMLInputElement {
  constructor(_css, _type, _placeholder, _id) {
    super();
    this.type = _type;
    this.placeholder = _placeholder;
    this.id = _id;
    this.style.fontSize = "20px";
    this.style.padding = "10px";
    for (let key in _css) {
      console.log(key);
      console.log(_css[key]);
      this.style[key] = _css[key];
    }
    this.addEventListener("change", this.change);
    this.addEventListener("click", this.click);
    this.addEventListener("mouseover", this.hover);
  }

  change() {
    console.log(this.value);
  }

  hover() {
    this.style.border = "1px gray solid";
  }

  click() {
    alert("I clicked");
  }
}

customElements.define("special-inputs", SpecialInput, { extends: "input" });