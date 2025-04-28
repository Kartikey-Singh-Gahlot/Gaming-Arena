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