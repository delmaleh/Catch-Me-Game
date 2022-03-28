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
   reset();

});

function reset() {
    var arr=[];
    var i=0;
    var j=0;
    while (true) {
        i=Math.random()*10;
        j=parseInt(i);
        if (!arr.includes(j)) {
          arr.push(j);   
         }
         if (arr.length==10) break;
    }
    
    var toAppend="<div><table><tr>";
    var bti=0;
    arr.forEach((x) => {
     toAppend+=`<td><button id="btn${x}" onclick="add(this)">${x}</button></td>`;
     if (bti==4) toAppend+=`</tr><tr>`; 
     bti++;
    });
    toAppend+=`</tr></table></div><div><input id="pass" type="password" READONLY size="1"/><button onclick="submit()" id="submit" disabled>Submit</button></div>`;
    document.getElementById("main").innerHTML=toAppend;
    
}

const users=[{firstName:"daniel",lastName:"duchemin",password:"1234",email:"delmalehfr@gmail.com"}]
var myTime=null;

function add(element) {
    clearTimeout(myTime);
    var pass=document.getElementById("pass");
    if (pass.value.length!=4) {
        pass.value+=element.innerText;
        
        console.log(element.innerText);
        element.style.color="red";
        myTime=setTimeout(display,3000);
    } 
    if (pass.value.length==4) document.getElementById("submit").disabled=false;
}

function display(){
    for (var i=0;i<10;i++) {
        document.getElementById("btn"+i).style.color="black";
    } 
    var pass=document.getElementById("pass");
    pass.value="";   
}



var iTry=0;
function submit(){
    
    clearTimeout(myTime);
    var pass=document.getElementById("pass").value;
    if (pass==users[0].password) {
        alert("access granted");
        iTry=0;
    }
    else if (iTry<2){
        iTry++;
        //alert("ok");
        var tryLeft=3-iTry;
        alert(tryLeft+" try left");
    
    } else {
        alert("call the police");
        iTry=0;
    }
    reset();
    
}