import { User } from "./models/user.js";

var user = {};
function getUserInfo() {
  var userJSON = localStorage.userInfo;
  if (userJSON) user = JSON.parse(userJSON);
  return user.id ? user : null;
}

function changeName(x) {
  user.fName = x;
  localStorage.userInfo = JSON.stringify(user);
}

function addUser(x, y) {
  user = new User(x, y);
  localStorage.userInfo = JSON.stringify(user);
  return user;
}

export { getUserInfo, changeName, addUser };
