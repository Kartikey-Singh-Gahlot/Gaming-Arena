function makeBubble(){
    var c = "";
for(var i=1;i<=189;i++){
    var rn=Math.floor(Math.random()*10)
    c +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = c;
}
var r=0;
function getNewHit(){
 r= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=r;
}
var timer=30;
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
    
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML=`<h1>Game over</h1>`;
        }
            },1000);
}
var score=0;
function getscore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbottom")
.addEventListener("click",function(details){
    var a =(Number(details.target.textContent));
    if(a===r){
        getscore();
        getNewHit();
        makeBubble();
    }
})
getNewHit();
runtimer();
makeBubble();

// ---------------< NAVBAR SCRIPT >------------


const mobileContainer = document.querySelector(".mobileContainer");
const lines = document.querySelectorAll(".lines");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

let stat = "off";


window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
      ul.style.display="flex";
  }
  else{
    ul.style.display="none";
  }
});


mobileContainer.addEventListener("click",()=>{
  if(stat != "on"){
    lines[0].style.transform = "rotateZ(40deg) translateY(0px) translateX(3px)";
    lines[1].style.display = "none";
    lines[2].style.transform = "rotateZ(-40deg) translateY(-2px) translateX(4px)";
    stat = "on";
    nav.style.height = "100vh";
    nav.style.width = "100%";
    nav.style.backgroundColor = "black";
    ul.style.display = "flex";
  }
  else{
    lines[0].style.transform = "none";
    lines[1].style.display = "block";
    lines[2].style.transform = "none";
    stat = "off";
    nav.style.height = "fit-content";
    nav.style.width = "fit-content";
    nav.style.backgroundColor = "transparent";
    ul.style.display = "none";
  }
});
