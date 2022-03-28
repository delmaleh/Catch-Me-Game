import * as Model from "../js/model.js";
import * as View from "../js/view.js";

export function init() {
    View.createForm();
    var submitBtn =document.getElementById("submit");
    submitBtn.addEventListener("click",submit);

}

function submit() {
    var name= document.getElementById("name");
    var pass= document.getElementById("password"); 
    if (Model.matchInfo(name.value,pass.value)) {
       View.welcomeName(name.value);
    }
    else {
        View.alertError();
    }

}

function add(element) {
    
    View.add(element);
}