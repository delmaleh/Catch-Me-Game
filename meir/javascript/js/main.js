



const Tools = {
    fixEmail: function (email) {
      var arr = email.toLowerCase().split("@");
      if (arr[1] === "gmail.com") {
        arr[0] = arr[0].replaceAll(".", "");
      }
      return arr[0] + "@" + arr[1];
    },
    fixNaN: function (num) { 
      var dec = parseFloat(num); 
      if (isNaN(dec)) {
        return 0;
      }
      var int = parseInt(dec);
      if (int < dec) {
        return dec;
      }
      return int;
    },
    getQtyByLetter: function (array) {
        // a,a,a,b,b,b,b,c,c,c,c,d,e,g,h,
        var arrFinal = [];
        var obj = { letter: array[0], qty: 1 };
        arrFinal.push(obj); // [{letter: a, qty: 3 },{letter: b, qty: 4 },{letter: c, qty: 4 }]
        for (let i = 1; i < array.length; i++) {
          const letter = array[i];
          if (letter === arrFinal[arrFinal.length - 1].letter) {
            arrFinal[arrFinal.length - 1].qty++;
          } else {
            var obj = { letter: letter, qty: 1 };
            arrFinal.push(obj);
          }
        }
    }        
  };
  
//var jsonString =JSON.stringify(Cars);
//localStorage.setItem("Cars",jsonString);
var jsObjt=localStorage.getItem("Cars");
const Cars=JSON.parse(jsObjt); 
function listCars(){

    
    var toAppend="";
    var mydiv=document.getElementById("main");
    
    
    Cars.forEach(addCar);
    mydiv.innerHTML=toAppend;
    function addCar(car,index){
        toAppend+=`<div id="car${car.id}" class="car cat-${car.category.join(" cat-")}"><h3 class="category">${car.category.join(",")}</h3>
        <img id="imgcar" src="img/${car.image}" alt="">
        <button class="btnCar blt" onclick="removeCar(this,'${car.id }')">X</button>
        <p class="make">${car.make}</p>
        <p class="model">${car.model}</p>
        <p class="price">${car.price}</p>
        
        <p class="date">Ajouter le ${getFormatedDate(car.date)}</p>
        </div>`;
        //alert(car.date);
    }
    
    
}
function getFormatedDate(num) {
  var today=new Date(num)
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
     dd = '0' + dd;
  }
  if (mm < 10) {
     mm = '0' + mm;
  }
  return dd+"/"+mm+"/"+yyyy;
}

function deleteCar(pl){
//alert(pl);
var div=document.getElementById("car"+pl);
var btn = div.querySelector(".blt");
//alert(btn);
removeCar(btn,pl);
}

function removeCar(btn,pl){
    
    btn.parentElement.remove();
    for (let index = 0; index < Cars.length; index++) {
        const element = Cars[index];
        if (element.id==pl) {
            Cars.splice(index,1);
            var jsonString =JSON.stringify(Cars);
            localStorage.setItem("Cars",jsonString);
            break;
        }
    }
    
    
 }

 const Categories = ["Economy", "Luxury", "Sport", "SUV","MidSize"];
  
 function search(){
    var catCont = document.getElementById("cat-cont");
   //alert(catCont);  
  Categories.forEach(function (cat) {
    var div = document.createElement("div");
  div.id="category-"+cat;
    var check = document.createElement("input");
  var label=document.createElement("label");
  check.type = "checkbox";
  check.value= cat;
  label.innerText = cat;
  div.appendChild(check);
  div.appendChild(label);
  check.addEventListener("change", searchCategory);
catCont.appendChild(div)
});
 }


 
function searchCategory2() {
    var catCont = document.getElementById("cat-cont");
     // alert("ok");
    var allCars = document.querySelectorAll(".car");
  allCars.forEach(function (x) {
    x.style.display = "none";
  });
  var inputs = catCont.querySelectorAll("input");
  var checkedArr = [];
  inputs.forEach(function (x) {
    if (x.checked) {
      checkedArr.push(x.value);
    }
  });
  if (checkedArr.length == 0) {
    allCars.forEach(function (x) {
      x.style.display = "block";
    });
  }
  //  ["luxury", "sport", "van"]
  checkedArr.forEach(function (z) {
    var catDivsAll = document.querySelectorAll(".cat-" + z);
    catDivsAll.forEach(function (y) {
      y.style.display = "block";
    });
  });
}


function searchCategory() {
    var catCont = document.getElementById("cat-cont");
     // alert("ok");
    var allCars = document.querySelectorAll(".car");
  allCars.forEach(function (x) {
    x.style.display = "none";
  });
  var inputs = catCont.querySelectorAll("input");
  var checkedArr = [];
  inputs.forEach(function (x) {
    if (x.checked) {
      checkedArr.push(x.value);
      
    }
  });
  if (checkedArr.length == 0) {
    allCars.forEach(function (x) {
      x.style.display = "block";
    });
  }
  for (let index = 0; index < allCars.length; index++) {
      var display=true;
        const car = allCars[index];
      var allCats=car.className;
      //console.log(allCats);
      for (let index = 0; index < checkedArr.length; index++) {
          const cat = checkedArr[index];
          if (allCats.includes(cat)==false){
            display= false;
            break;
          }
      }
      if (display==true) {
          car.style.display="block";
      }
  }
  //  ["luxury", "sport", "van"]
 // checkedArr.forEach(function (z) {
   // var catDivsAll = document.querySelectorAll(".cat-" + z);
   // catDivsAll.forEach(function (y) {
   //     y.style.display = "block";
   // });
  //});
}




function searchCategory1() {
   // var searchCar=[]; 
//alert("ok");
var myDiv=document.getElementById("main");
myDiv.innerHTML="";
    for (let index = 0; index < Cars.length; index++) {
         const car = Cars[index];
        //alert(element.category.toLowerCase()); 
        var category =car.category;
        alert(category);
        for (let index = 0; index < category.length; index++) {
            const element = category[index];
            alert(element);
            var cat=document.getElementById(element.toLowerCase());
            
            //alert(cat.value);
            if ((cat.checked)&&(element.category==cat.value.toLowerCase())){
                createNewCarHtml(element);
               // searchCar.push(element);
            }  
        }
        
        
         
     }
     
      
}
function addCategory(){
  var category=document.getElementById("category");
  var newCat=prompt("Enter a category");
  if (newCat!=null&&newCat.length>0) {
    var optionCat=new Option(newCat);
    category.add(optionCat);
    //var divCat=document.getElementById("category-"+newCat);
    Categories.push(newCat);
    var catCont = document.getElementById("cat-cont");
    var div = document.createElement("div");
    div.id="category-"+newCat;
    var check = document.createElement("input");
    var label=document.createElement("label");
    check.type = "checkbox";
    check.value= newCat;
    label.innerText = newCat;
    div.appendChild(check);
    div.appendChild(label);
    check.addEventListener("change", searchCategory);
    catCont.appendChild(div);
}
}
function removeCategory(){
  var category=document.getElementById("category");
  //il faut supprimer une category
  var nbCat=0;
  for (let index = 0; index < category.options.length; index++) {
    const element = category.options[index];
    
    if(element.selected) nbCat++;
  }
  if (nbCat>1) { 
    alert("Please select one Category to remove");
  }
  else { 
    for (let index = 0; index < category.options.length; index++) {
      const element = category.options[index];
      if(element.selected) {
        element.remove();
        var rem=document.getElementById("category-"+element.value);
        for (let index = 0; index < Categories.length; index++) {
          const cat = Categories[index];
          if (cat==element.value) {
            Categories.splice(index,1);
            break;
          }
        }
        //alert(rem);
        rem.remove();
      }
    }
  }  
}
function addCarByForm(){
    var category=document.getElementById("category");
    var make=document.getElementById("make");
    var model=document.getElementById("model");
    var price=document.getElementById("price");
    var photo=document.getElementById("photo");
    var file = photo.value.split("\\");
    var cats = [];
    for (let index = 0; index < category.options.length; index++) {
        const element = category.options[index];
        
        if(element.selected) cats.push(element.value);

    }
    var myplate=parseInt(Math.random()*10000000)+"";
    var fileName = file[file.length-1];
    var bExist=false;
    for (let index = 0; index < Cars.length; index++) {
      const element = Cars[index];
      if(element.id==myplate) {
        alert("la voiture existe dans la liste");
        bExist=true;
        break;
      }
    }
    if (!bExist) {
     
      var myCar =new Car(myplate,make.value,model.value,cats,price.value,fileName,new Date().getTime());
      Cars.push(myCar);
      var jsonString =JSON.stringify(Cars);
      localStorage.setItem("Cars",jsonString);
      createNewCarHtml(myCar);
      console.log(myCar.date);
    }
    
}

function createNewCarHtml(car){
    var myDiv=document.getElementById("main");
    var div=document.createElement("div");
    div.className=`car newCar cat-${car.category.join(" cat-")}`
    div.id="car"+car.id;
    //alert(div.className);
    var restHtml=`<h3 class="category">${car.category.join(",")}</h3>
        <img id="imgcar" src="img/${car.image}" alt="">
        <button class="btnCar blt" onclick="removeCar(this,'${car.id }')">X</button>
        <p class="make">${car.make}</p>
        <p class="model">${car.model}</p>
        <p class="price">${car.price}</p>
        <p class="date">Ajouter le ${getFormatedDate(car.date)}</p>`;
        
    div.innerHTML= restHtml;
    myDiv.appendChild(div);

}
class Car {
    constructor(_id, _make, _model, _category, _price, _image,_date) {
        this.id = _id;
        this.make = _make;
        this.model=_model;
        this.category = _category;
        this.price = _price;
        this.image = _image;
        this.date = _date;
    }
}

function addCar()
{   var toAppend="";
    var mydiv=document.getElementById("main");
    var cats=["Economy","Sport"];
    var myplate=parseInt(Math.random()*10000000)+"";
    //myplate="1234567";
    var bExist=false;
    for (let index = 0; index < Cars.length; index++) {
      const element = Cars[index];
      if(element.id==myplate) {
        alert("la voiture existe dans la liste");
        bExist=true;
        break;
      }
    }
    if (!bExist) {
      var myCar =new Car(myplate,"BMW","EClass",cats,"$23000","BMW.jpg");
      Cars.push(myCar);
      var jsonString =JSON.stringify(Cars);
      localStorage.setItem("Cars",jsonString);
      createNewCarHtml(myCar);
    }
    
   // toAppend+=`<div id="car${myCar.id}" class="car"><h3 class="category">${myCar.category}</h3>
   // <img id="imgcar" src="img/${myCar.image}" alt="">
    //<button class="btnCar" onclick="removeCar(this,'${myCar.id}')">X</button>
    //<p class="make">${myCar.make}</p>
    //<p class="model">${myCar.model}</p>
    //<p class="price">${myCar.price}</p>
    //</div>`;
    //mydiv.innerHTML+=toAppend
}
//Search absolutely WORKSSSS
//Categories add dynamic, change search checkboxes after
//All functions used one time, must be anonymous
/*
  */
  

  
  