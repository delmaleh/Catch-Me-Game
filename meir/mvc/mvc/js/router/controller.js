import * as Model from "./model.js";
import * as View from "./view.js";
import * as Home from "../app/components/home/controller.js";
import * as Dashboard from "../app/components/dashboard/controller.js";

export async function init() {
  var menu = []
  await Model.createMenu().then(res=> {
    menu = res
    View.init(res);
  })

 

  window.addEventListener("hashchange", (e) => {
    var path = e.newURL.split("#")[1];
    console.log(e);
    switch (path) {
      case "home":
        Home.open();
        break;
      case "dashboard":
        Dashboard.open();
        break;
      default:
        break;
    }
  });
}
