/*
document.querySelector("button").addEventListener("click",()=>
{
    var url ="http://www.omdbapi.com/?s=batman&type=series&apikey=511df700";

    fetch(url).then((res) => {
     return res.json();
    }).then (res =>{
        fetchUrl(res.Search);
    })

    
    .then().catch(error =>
        console.log(error)
        );


    function fetchUrl(arr){
        var toappend=""; 
        //alert("ok");
        arr.forEach((x) => {
            console.log(toappend);
            
            toappend +=`<div style="display:inline-flex" onclick="window.open('https://www.imdb.com/title/${x.imdbID}/');">
            <h1>${x.Title}</h1>
            <p>${x.Type}</p>
            <img src="${x.Poster} alt="" width="400"/>
            </div>`;


        }); 
        document.getElementById("main").innerHTML=toappend;
    }


});

document.querySelector("button").addEventListener("click",()=>
{
var formdata = new FormData();
formdata.append("email", "delmalehfr@gmail.com");
formdata.append("password", "daniel6090");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://burger-e0fcd7.appdrag.site/api/utilisateur/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
    fetchUrl(result);
})
  .catch(error => console.log('error', error));

  function fetchUrl(res){
    var user= JSON.parse(res); 
    document.getElementById("main").innerHTML=`<div><h1>Welcome ${user.Table[0].name}</h1></div>`
  }
});*/


document.querySelector("button").addEventListener("click",()=>
{
   var arr=[];
   while (true) {
       i=Math.random()*10;
       var j=parseInt(i);
       if (!arr.includes(j)) {
         arr.push(j);   
        }
        if (arr.length==10) break;
   }
   
   toAppend="<div><table><tr>";
   var bti=0;
   arr.forEach((x) => {
    toAppend+=`<td><button id="btn${x}" onclick="add(this)">${x}</button></td>`;
    if (bti==4) toAppend+=`</tr><tr>`; 
    bti++;
   });
   toAppend+=`</tr></table></div><div><button id="submit" onclick="submit()" disabled>Submit</button><input id="pass" type="password" READONLY size="1"/><button id="submit" onclick="submit()" disabled>Submit</button></div>`;
   document.getElementById("main").innerHTML=toAppend;
   

});
const users=[{firstName:"daniel",lastName:"duchemin",password:"1234",email:"delmalehfr@gmail.com"}]
var myTime=null;
const password="1234";
function add(element) {
    clearTimeout(myTime);
    var pass=document.getElementById("pass");
    if (pass.value.length!=4) {
        pass.value+=element.innerText;
        
        console.log(element.innerText);
        element.style.color="red";
        myTime=setTimeout(display,3000);
    } 
}

function display(){
    for (var i=0;i<10;i++) {
        document.getElementById("btn"+i).style.color="black";
    } 
    var pass=document.getElementById("pass");
    pass.value="";   
}
var itry=0;
function submit(){
    alert("ok");
    clearTimeout(myTime);
    var pass=document.getElementById("pass");
    if (pass==users[0].password==pass) {
        alert("access granted");
    }
    else {
        alert("2 try left");
    }
    
}