
var missedClick=0;
var score=0;
var time=60;
var clicked=0;
var levelgame=1;
var pNextLevel=10;

var myTime=document.getElementById("time");
var myScore=document.getElementById("score");
var levelHtml=document.getElementById("level");
var nextLevel=document.getElementById("pNextLevel");
var missClick=document.getElementById("missedClick");
var div = document.querySelector(".div");
var block=document.querySelector(".new-block");
var accelerate=0.5;




function getUsers(){ 
    
    
    var jsObjt=localStorage.getItem("catch");
    
    
    if (jsObjt==null) { 
        return new Array();
    }
        //alert(jsObjt);
    const users=JSON.parse(jsObjt); 
    var userlist=document.querySelector(".users");
    var toAppend="";
    users.sort(function(a,b){
        return (b.score-a.score);
    })
    //alert(users.length);
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        toAppend+=`<div> <span title="${getFormatedDate(element.date)}">${element.score}:${element.name}</span></div>`;
        if (index==4) break;
    }
    //alert(toAppend);
    userlist.innerHTML=toAppend;
    return users;

}
var userWin=getUsers();

function getFormatedDate(num) {
    var today=new Date(num)
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh=today.getHours();
    var min=today.getMinutes();
    if (dd < 10) {
       dd = '0' + dd;
    }
    if (mm < 10) {
       mm = '0' + mm;
    }
    if (hh < 10) {
        hh = '0' + hh;
     }
     if (min < 10) {
        min = '0' + min;
     }
   
    return dd+"/"+mm+"/"+yyyy+" "+hh+":"+min ;
  }

function startGame(){
    var myTimeInterval=setInterval(startTime,1000);
    div.addEventListener("click", myClick);
    block.addEventListener("click", create); 
    block.style.animation="3s rotate360 infinite linear";
    function create(e) {
        var randy=parseInt(Math.random()*450);
        var randx=parseInt(Math.random()*950);
        if (randy<40) randy=40;
        block.style.top=`${randy}px`;
        block.style.left=`${randx}px`;
        score+=10*levelgame;
        clicked++;
        pNextLevel--;
        nextLevel.innerHTML=pNextLevel;
        myScore.innerHTML=score;
        if (clicked==10) {
            levelgame++;
            levelHtml.innerHTML =levelgame;
            block.style.animation=`${3-accelerate}s rotate360 infinite linear`;
            pNextLevel=10;
            nextLevel.innerHTML=pNextLevel;
            time= time + 10;
            myTime.innerHTML=time;
            accelerate+=0.5;
            clicked=0;
        }
        
        console.log(randx);
        console.log(randy);
        console.log(e.clientY);
        console.log(e.clientX);
        
    }

function initValue(){
    clicked=0;
    levelgame=1;
    pNextLevel=10;
    missedClick=0;
    score=0;
    accelerate=0.5;
    time=60;
    clicked=0;
    levelgame=1;
    pNextLevel=10;
    nextLevel.innerHTML=pNextLevel;
    myScore.innerHTML=score;
    levelHtml.innerHTML =levelgame;
    block.style.animation=`none`;
    nextLevel.innerHTML=pNextLevel;
    myTime.innerHTML=time;
    missClick.innerHTML=missedClick;
    block.style.animation=`none`; 
    block.style.top=`40px`;
    block.style.left=`100px`;
    div.removeEventListener("click", myClick);
    block.removeEventListener("click", create);        

}

    function startTime(){
        time--;
        myTime.innerHTML=time;
        if (time<0) {
            clearInterval(myTimeInterval);
            var finalScore=parseInt(myScore.innerHTML);
            initValue();
            var myName=prompt(`Game Over! Your score:${finalScore} Please enter your name`);
            var oObjt= new Object();
            oObjt.name=myName;
            oObjt.date=new Date().getTime();
            oObjt.score=finalScore;
            userWin.push(oObjt);       
            var jsonString =JSON.stringify(userWin);
            localStorage.setItem("catch",jsonString);
            getUsers();
            

                
        }
        
    }
    function myClick(e) {
        missedClick++;
        missClick.innerHTML=missedClick;
        var level=parseInt(levelHtml.innerHTML);
        score=score-level;
        myScore.innerHTML=score;
    }

}