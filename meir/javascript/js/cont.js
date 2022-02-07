const C = {
    hr: {val:0, DOM:document.getElementById("hr") },
    min: {val:0, DOM:document.getElementById("min") },
    sec: {val:0, DOM:document.getElementById("sec") }
}

var myInterval=null;
function startChrono(){
    myInterval=setInterval(chrono,1000);
    bReset=false;
}

function setTime(){
if (bReset) {
    var chrono=prompt("valeur chrono");
    var time = chrono.split(":");
    C.sec.val=parseInt(time[2]);
    C.hr.val=parseInt(time[0]);
    C.min.val=parseInt(time[1]);
    C.hr.DOM.innerHTML=time[0];
    C.min.DOM.innerHTML=time[1];
    C.sec.DOM.innerHTML=time[2];
}
else {
    alert("Stop chrono before setTime");
}    
}
function stopChrono(){
    //console.log("clear")
    clearInterval(myInterval);
    console.log(myInterval);
    bReset=true;
}

var bReset=false;

function resetChrono(){
    if (bReset) {
        C.hr.val=0;
        C.min.val=0;
        C.sec.val=0;
        C.hr.DOM.innerHTML="00";
        C.min.DOM.innerHTML="00";
        C.sec.DOM.innerHTML="00";
    }
    else {
        alert("Stop chrono before reseting");
    }
}
function chrono(){
    
    C.sec.val++;
    C.sec.val<10 ? C.sec.DOM.innerHTML="0"+C.sec.val : C.sec.DOM.innerHTML=C.sec.val;
    if (C.sec.val==60) {
        C.sec.DOM.innerHTML="00";
        C.sec.val=0;
        C.min.val++;        
        C.min.val<10 ? C.min.DOM.innerHTML="0"+C.min.val : C.min.DOM.innerHTML=C.min.val; 
            
        
       if (C.min.val==60){
            C.min.DOM.innerHTML="00";
            C.min.val=0;
            C.hr.val++;
            C.hr.val<10 ? C.hr.DOM.innerHTML="0"+C.hr.val : C.hr.DOM.innerHTML=C.hr.val;
            
       }

    }
}
