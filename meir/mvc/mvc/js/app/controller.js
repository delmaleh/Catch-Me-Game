import * as Model from "./model.js";
import * as View from "./view.js";

var user = 2626;
export function init() {
  console.log("I am initialized");
  user = Model.getUserInfo();
  if (!user) {
    var fName = prompt("Whats your name");
    var email = prompt("Whats your email");
    user = Model.addUser(fName, email);
  }
  var h1 = View.welcomeUser(user);
  h1.addEventListener("click", changeName);
}

function changeName() {
  user.fName = prompt("What's your new name?"); // Fred
  Model.changeName(user.fName);
  View.changeName(user.fName);
}

