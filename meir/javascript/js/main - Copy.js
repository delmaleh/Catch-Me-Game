var a=5;
a=a+5;
var age=46;
var name1="daniel";
//alert(message);
var a=1;
var b=2;

a++;
var c=(a+2)*b;
a++
//alert(c%a);
var max=1000;
var test=Math.random()*max;
//console.log(test);
var test2=parseInt(test);
var dec=test-test2
//alert("decimale"+dec);
//alert("partie"+test2);


var pal=123456654321;



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
  const Cars = [
    {
    id:"12233445556",
    make:"Mercedes",
    model:"E-Class",
    price:"50000$",
    image:"mercedes.jpg",
    category:["Luxury"]
},
{
    id:"12233445551",
    make:"Honda",
    model:"Civic",
    price:"$50000",
    image:"honda.jpg",
    category:["Economy"]
},
{
    id:"1223344557",
    
    make:"BMW",
    model:"M5",
    price:"$20000",
    image:"bmw.jpg",
    category:["Sport"]
},
{
    id:"122334756",
    
    make:"Peugeot",
    model:"206",
    price:"$2000",
    image:"peugeot.jpg",
    category:["Sport"]},
{
    id:"1223344",
    
    make:"Renault",
    model:"clio",
    price:"$10000",
    image:"renault.jpg",
    category:["Sport","Economy"]
}];

  
function listCars(){

    
    var toAppend="";
    var mydiv=document.getElementById("main");
    
    
    Cars.forEach(addCar);
    mydiv.innerHTML=toAppend;
    function addCar(car,index){
        toAppend+=`<div id="car${car.id}" class="car"><h3 class="category">${car.category.join(",")}</h3>
        <img id="imgcar" src="img/${car.image}" alt="">
        <button class="btnCar blt" onclick="removeCar(this,'${car.id }')">X</button>
        <p class="make">${car.make}</p>
        <p class="model">${car.model}</p>
        <p class="price">${car.price}</p>
        </div>`;
    }
    
    
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
            break;
        }
    }
    
    
 }

 const Categories = ["Economy", "Luxury", "Sport", "SUV","Mid-Size"];
    
function search(){
  var catCont = document.getElementById("cat-cont");
    Categories.forEach(function (cat) {
    var div = document.createElement("div");
  var check = document.createElement("input");
  check.type = "checkbox";
  check.value = cat;
  div.appendChild(check);
  div.innerHTML += cat;
  check.addEventListener("click", searchCategory);
catCont.appendChild(div)
});

}

 
function searchCategory() {
  var allCars = document.querySelectorAll(".eachCar");
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



function searchCategory1() {
   // var searchCar=[]; 
//alert("ok");
var myDiv=document.getElementById("main");
myDiv.innerHTML="";
    for (let index = 0; index < Cars.length; index++) {
         const element = Cars[index];
        //alert(element.category.toLowerCase()); 
        var cat=document.getElementById(element.category.toLowerCase());
        //alert(cat.value);
        if ((cat.checked)&&(element.category.contains(cat.value.toLowerCase())){
            createNewCarHtml(element);
           // searchCar.push(element);
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
    var fileName = file[file.length-1];
    var myCar =new Car(parseInt(Math.random()*1000000)+"",make.value,model.value,category.value,price.value,fileName);
    Cars.push(myCar);
    createNewCarHtml(myCar);
   
    
}

function createNewCarHtml(car){
    var myDiv=document.getElementById("main");
    var div=document.createElement("div");
    div.className="car newCar";
    div.id="car"+car.id;
    var restHtml=`<h3 class="category">${car.category}</h3>
        <img id="imgcar" src="img/${car.image}" alt="">
        <button class="btnCar blt" onclick="removeCar(this,'${car.id }')">X</button>
        <p class="make">${car.make}</p>
        <p class="model">${car.model}</p>
        <p class="price">${car.price}</p>
        </div>`;
    div.innerHTML= restHtml;
    myDiv.appendChild(div);

}
class Car {
    constructor(_id, _make, _model, _category, _price, _image) {
        this.id = _id;
        this.make = _make;
        this.model=_model;
        this.category = _category;
        this.price = _price;
        this.image = _image;
    }
}

function addCar()
{   var toAppend="";
    var mydiv=document.getElementById("main");
    
    var myCar =new Car("234455677","BMW","EClass","economy","$23000","BMW.jpg");
    Cars.push(myCar);
    createNewCarHtml(myCar);
   // toAppend+=`<div id="car${myCar.id}" class="car"><h3 class="category">${myCar.category}</h3>
   // <img id="imgcar" src="img/${myCar.image}" alt="">
    //<button class="btnCar" onclick="removeCar(this,'${myCar.id}')">X</button>
    //<p class="make">${myCar.make}</p>
    //<p class="model">${myCar.model}</p>
    //<p class="price">${myCar.price}</p>
    //</div>`;
    //mydiv.innerHTML+=toAppend;
}
   
  
  

  
  