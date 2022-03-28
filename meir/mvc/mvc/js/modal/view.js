function init(){

var navBtn= document.getElementById("main");
navBtn.addEventListener("click",promises);

}
function promises(e){
    var question= prompt("enter a discussion place");
    var place=prompt("enter a placeholder");
    var discussion= document.getElementById("question");
    var topic=document.getElementById("topic");
    var ok=document.getElementById("ok");
    var cancel=document.getElementById("cancel");
    
    
    ok.addEventListener("click",accept);
    cancel.addEventListener("click",reject)
    discussion.innerText=question;
    topic.placeholder=place;
}
function accept(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("bienvenue");
         var welcome=document.querySelector(".modal-content"); 
         var topic=document.getElementById("topic"); 
         welcome.innerHTML="welcome to "+topic.value;    
        }, parseInt(Math.random() * 7000));
      });
    
}
function reject(){
    
    var welcome=document.querySelector(".modal-content"); 
    var topic=document.getElementById("topic"); 
    welcome.innerHTML="you cancelled early";    
        
}


export { init };