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

function calculeimpot(s) {
   var impot=0;
    if (s<=25000) impot=s*0.1;
     else if (s>25000&&s<=50000) {
         impot=25000*0.1+(s-25000)*0.2;
     } else if (s>50000&&s<=100000){
        impot=25000*0.1+25000*0.2+(s-50000)*0.3;
     }
    else if (s>100000&&s<150000){
            impot=25000*0.1+25000*0.2+50000*0.3+(s-100000)*0.4;
    }
    else {
        impot=25000*0.1+25000*0.2+50000*0.3+100000*0.4+(s-150000)*0.5;
    
    }
    alert("impot:"+impot); 
}

function gift() {
    //start
var month = 1; // janvier
var myster = 0;
var rentDue = 0;
var gift = false;
var salary = parseInt(prompt("What is your salary?")); // 500
var balance = salary * 2; // 500
const Rent = parseInt(prompt("What is your rent?")); // 700

rentDue = Rent;
if (balance >= rentDue) {
  balance -= rentDue;
  rentDue = 0
} 

month ++;
balance += salary / 2;

if (balance >= rentDue) { // janvier au cas ou pas payé
  balance -= rentDue;
  rentDue = 0;
} 

rentDue += Rent + 200; // electricity high

if (balance >= rentDue) {
  balance -= rentDue;
  rentDue = 0;
} 

balance -= 500; // credit card
month ++;

if(balance < 0) {
    gift = true;
} 

myster = Math.abs(balance);
balance = 0;

console.log("The month is: " + month)
console.log("The mysterious amount is: " + myster);
console.log("The rent amount due is: " + rentDue);
console.log("The gift boolean is: " + gift); // gift boolean
//stop
}



function reverse(num){
    rev="";
    nums=num+"";
    neg=false;
    message="";
    if (num<0){ 
      num=num*-1;
      neg=true;
    }
    while(num>0) {
        temp= num%10;
        rev=rev+temp;
        
        
        num=(num-temp)/10;
    }
    if (neg==true) rev+="-"
    alert(rev+","+nums)
    if (rev===nums) message="ce nombre est un pallindrome";
    else message="ce nombre n est pas un pallindrome";
    alert(message);
}
function reverse2(num){
    var num2=num+"";
    var rev="";
    for (i=0;i<num2.length;i++){
        rev+=num2[num2.length-i-1];
    }
    if (rev===num2) message=rev+" est un pallindrome";
    else message=rev+" est pas un pallindrome";
    alert(message);
}
function magicNumber() {
    var f = false;
    var arr = "";
    for (let i = 0; i < 5; i++) {
      var num = parseInt(prompt("enter a number")); // 66662
      if (num < 1) {
        continue;
      } else {
        var sum = 0;// 123
        while (num > 0) { 
          sum += num % 10;  // 7
          num = Math.trunc(num / 10);
        }
        arr += sum + ", "
        if (sum === 26) {
          f = true;
          break;
        }
      }
    }
    
    if (f) {
      alert("magic number found");
    }
    
    console.log(arr);
    
    alert(arr);
    
}
function gmail(){
    var mail="";
    var email2="";
    while (mail.indexOf("gmail.com")<0) {
     mail=prompt("Enter an gmail adresse").toLocaleLowerCase();    
    }
    mail=mail.replaceAll(".","");
    mail=mail.replace("gmailcom","gmail.com");
    alert(mail);
}
function tab() {
    var name1=[];
    var name2="";
    for (i=0;i<5;i++) {
        name1.push(prompt("enter a name"));

    }
    
    alert("list of student are:"+name1.sort().join(" ,"));
}
function testAlfabet(){
    var voyels=["a","e","i","u"];
    var consonne=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    var a=[];
    var b=[];
    var name1=prompt("Please enter your fullname:").toLocaleLowerCase();
    for (let index = 0; index < name1.length; index++) {
        
       if (consonne.includes(name1[index])==true) b.push(name1[index]);
       else if(voyels.includes(name1[index])==true) a.push(name1[index]);
    }
    message="Your string contains the following vowels: "+a.sort().join(" ,")+".  And the following consonants: "+b.sort().join(" ,")+".";
    alert(message);
    
}
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
 
  
function validate() {
    var users= [{firstName:"daniel",name:"elmaleh",password:"dany6090"},
    {firstName:"david",name:"cohen",password:"cohen6090"},
    {firstName:"yossef",name:"elbase",password:"elbase6090"},
    {firstName:"benjamen",name:"dahan",password:"dahan6090"}];
    //alert(users[0].firstName);
    var firstName=document.getElementById("username").value.trim();
    var password= document.getElementById("password").value.trim();
    //alert(firstName);
    
    if (firstName.length<=0) alert("Please enter your firstname");
    else if (password.length<=0) alert("Please enter your password");
    
    else {
        var userFound=false;
        for (i=0;i<users.length;i++) {
            if ((users[i].firstName==firstName)&&(users[i].password==password)){ 
                var selection=document.querySelector("#main");
                selection.innerHTML=`<h1>Wellcome ${firstName.toUpperCase()} </h1>`;
                userFound=true;
                break;
            }    
        }
        if (userFound==false) alert("please enter user login and password");
    }
}
function listCars(){

    
    const cars = [
        {
        make:"Mercedes",
        model:"E-Class",
        price:"50000$",
        image:"mercedes.jpg",
        category:"Luxury"
    },
    {
        make:"Honda",
        model:"Civic",
        price:"$50000",
        image:"honda.jpg",
        category:"Economy"
    },
    {
        make:"BMW",
        model:"M5",
        price:"$20000",
        image:"bmw.jpg",
        category:"Sport"
    },
    {
        make:"Peugeot",
        model:"206",
        price:"$2000",
        image:"peugeot.jpg",
        category:"Sport"},
    {
        make:"Renault",
        model:"clio",
        price:"$10000",
        image:"renault.jpg",
        category:"Sport"
    }];
    var toAppend="";
    var mydiv=document.getElementById("main");
    
    
    cars.forEach(addCar);
    mydiv.innerHTML=toAppend;
    function addCar(car,index){
        toAppend+=`<div id="car${index}" class="car"><h3 class="category">${car.category}</h3>
        <img id="imgcar" src="img/${car.image}" alt="">
        <button class="fas fa-window-close btnCar" onclick="removeCar(${index})"></button>
        <p class="make">${car.make}</p>
        <p class="model">${car.model}</p>
        <p class="price">${car.price}</p>
        </div>`;
    }
    
}
function removeCar(index){
    var myCar=document.getElementById("car"+index);
    myCar.remove();
    
 }
 /*const Bus320 = [
    { name: "meir sabbah", paid: true, gender: "female" },
    { name: "daniel ammar", paid: true, gender: "male", putAlready: true },
    { name: "donovan vervial", paid: false, gender: "male", putAlready: true },
    { name: "phillippe khayat", paid: true, gender: "male", putAlready: false },
    { name: "nicholas becane", paid: false, gender: "female" },
    { name: "netanael chetrit", paid: true, gender: "male", putAlready: false },
    { name: "dan khayat", paid: true, gender: "male", putAlready: true },
  ];
  
    
    Bus320.pourChak = function (callback) {
      for (let index = 0; index < this.length; index++) {
        const element = this[index];
        callback(element, index);
      }
    };
    
    function inspector(passenger, i) {
      if (passenger) {
        if (passenger.paid && passenger.paid === true) {
          console.log(`Passenger # ${i + 1} has paid.`);
        } else {
          console.log(
            `Passenger # ${i + 1}: ${
              passenger.name
            } was fined 200$ and was ejected from the tram.`
          );
        }
      }
    }
    
    Bus320.pourChak(inspector);
    
    Bus320.pourChak(function (passenger) {
      console.log(`I just sang a personal song for : ${passenger.name}`);
    });
    
    Bus320.pourChak(function (passenger) {
      if (passenger.gender === "male" && passenger.putAlready === false) {
        console.log(`The shaliach put on tefilin for : ${passenger.name}`);
      }
    });
*/  

function mouseOver(){
    var div = document.querySelector(".div");
    div.addEventListener("click", out);
    //div.addEventListener("click", myClick);
    block=document.querySelector(".new-block");
    block.addEventListener("click", create);
    function create(e) {
    var randy=parseInt(Math.random()*500);
    var randx=parseInt(Math.random()*1000);
    if (randy<40) randy=40;
    //var block=document.querySelector(".new-block");
    block.style.top=`${randy}px`;
    block.style.left=`${randx}px`;
    
    console.log(randx);
    console.log(randy);
    console.log(e.clientY);
    console.log(e.clientX);
    //var newDiv = `<div style='top:${randy}px; left:${randx}px;' class='new-block'></div>`;
    //div.innerHTML += newDiv;
    }

    function out(e) {
       
    }

    function myClick(e) {
        if(e.pointerType == "touch") {
            alert("YOu can't play on a touchscreen")
        }
    }

}
function onlyLetter(array) {
    const alpha = ['A','B', 'C'] // ETC.
  for (var i = 0; i < array.length; i++) {
    const char = array[i];
    if (alpha.includes(char)) {
      break;
    }
  }
  return array.slice(i);
}
  
function objectArray(){
    var aletter=[];
    var name1=prompt("Please enter your fullname:").toUpperCase();
    var sortName=[];
    var message="";
    for (let index = 0; index < name1.length; index++) {
        sortName.push(name1[index]);
    }
    sortName.sort();
    for (let index = 0; index < sortName.length; index++) {
        if (calculAmount(aletter,sortName[index])==false) {
            letters=new Object();
            letters.letter=sortName[index];
            letters.amount=1;
            aletter.push(letters);
        }
    }

    for (let index = 0; index < aletter.length; index++) {
    message+="{ LETTER:"+aletter[index].letter+", AMOUNT:"+ aletter[index].amount+"} , ";

    }
    alert(message);
}
function calculAmount(oArray,oLetter){
    isDouble=false;
    
    for (let index = 0; index < oArray.length; index++) {
       if (oArray[index].letter==oLetter) {
           oArray[index].amount+=1;
           isDouble=true;
          /// alert("false");
        }
    }
    return isDouble;
}
function parite(num){
    npair="";
    nimpair="";
    paritenum="";
    
    for (i=1;i<=num;i++){

        if (i%2==0) {
            npair+=i+",";
            if(i==num) paritenum="le numero etait pair";
        }    
        else {
            nimpair+=i+",";
            if(i==num) paritenum="le numero etait impair";
        }    
    }
    alert("numero paire:"+npair);
    alert("numero impair:"+nimpair)
    alert(paritenum);
}

function moyenne(){
    var list=[45,67,55,123,100,100];
    var moyenne=0;
    for (i=0;i<list.length;i++){
        if (list[i]==0) break;
        if (i==0) moyenne=list[0];
        else
            moyenne=(moyenne+list[i])/2;        
    } 
    alert(moyenne);    
}
function numarray(num) {
    ncinq="";
    nhuit="";
    total=0;
    var arrays=new Array();
    for (i=1;i<=num;i++){

        if (i%5==0) {
            ncinq+=i+",";
            total+=i;
            arrays.push(i);
        } 
    }   
    for (i=1;i<=num;i++){
   
        if (i%8==0){
            nhuit+=i+",";
            total+=i;
            arrays.push(i);
        }    
    }
    alert(ncinq);
    alert(nhuit);
    alert(total);
    alert(arrays);
}
function moys(succes){
    var moyenne=0;
    var nbr=0;
    for (i=0;i<succes.length;i++) {
        if (succes[i]>=70) {
            moyenne+=succes[i];
            nbr++;
    
        }   
    }
    return (moyenne/nbr);    
}
function moyns(notesucces){
    var moyenne=0;
    var nbr=0;
    for (i=0;i<notesucces.length;i++) {
        if (notesucces[i]<70) {
            moyenne+=notesucces[i];
            nbr++;
    
        }   
    }
    return (moyenne/nbr);    
}

function etudiant(){
    var listetud=["david","daniel","dan","meir"];
    var resultetud=[75,70,80,90];
    
    var list="";
    for (i=0;i<listetud.length;i++) {
        if (resultetud[i]>=70) list+=listetud[i]+","
    }
    alert(list);
    alert(moyns(resultetud));
    alert(moys(resultetud));

}
function puissance(a,b) {
    c=a;
    neg=false;
    if (b<0) {
        neg=true;
        b=b*-1; 
    }
    if (b==0) a=1;
    
    for (i=1;i<b;i++){
        a=a*c;
    }
    if (neg) {
        a=1/a;
        b=b*-1;
    }    
    alert(a);
    alert(c**b);
}
function falafelFoodTruck() {
    var bread = "pita";
    var qtyBalls = 5;
    var extras = ["hummus", "salad", "onion", "pickles"];
    var extrasText = extras.join(", ");
    return `Welcome to Meir Falafel, here is your falafel in a ${bread}.  
    You have inside ${qtyBalls} falafel balls, and I added ${extrasText}.`;
  }
  
  function falafelResto(bread, qtyBalls, extrasText) {
    // var extrasText = extras.join(", ");
    return `Welcome to Meir Falafel, here is your falafel in a ${bread}.  
    You have inside ${qtyBalls} falafel balls, and I added ${extrasText}.`;
  }
function search(){
  const Categories = ["Economy", "Luxury", "Sport", "Sedan"];
    var catCont = document.getElementById("cat-cont")
    Categories.forEach(function (cat) {
    var div = document.createElement("div");
  var check = document.createElement("input");
  check.type = "checkbox";
  check.value = cat;
  div.appendChild(check);
  div.innerHTML += cat;
  check.addEventListener("change", searchCategory);
catCont.appendChild(div)
});

function searchCategory() {

}
  
}

class Car {
    constructor(_plate, _make, _model, _category, _price, _image) {
        this.plate = _plate;
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
    toAppend+=`<div id="car${myCar.plate}" class="car"><h3 class="category">${myCar.category}</h3>
    <img id="imgcar" src="img/${myCar.image}" alt="">
    <button class="fas fa-window-close btnCar" onclick="removeCar(${myCar.plate})"></button>
    <p class="make">${myCar.make}</p>
    <p class="model">${myCar.model}</p>
    <p class="price">${myCar.price}</p>
    </div>`;
    mydiv.innerHTML+=toAppend;
}
  
  
  const Orders = []
  

  function order() {
    var falafel = falafelResto(
       prompt("which bread?"),
       prompt("How many balls?"),
       prompt("what extras? ")
     );
    Orders.push(falafel)
  }
  