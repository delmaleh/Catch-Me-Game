var main= document.getElementById("main");

function createForm(){
    main.innerHTML= `<input type="text" id="name" />
    <input type="text" id="password" />
    <button id="submit">Submit</button>`;
}

function welcomeName(name) {
  //  main.innerHTML= `<h1> Welcome ${name}! </h1>`;
  
  reset();
}
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
    alert("ok");
    main.innerHTML=toAppend;
    
}

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
function alertError(){
    alert("wrong credentials!");
}

export { welcomeName,alertError,createForm,submit,display,add};