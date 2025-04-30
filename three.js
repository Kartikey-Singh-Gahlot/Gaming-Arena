const control = document.getElementById("control");
const headng = document.getElementById("headng");
const front = document.getElementById("front");
const choices=["Heads", "Tales"];
const face=document.getElementById("face");
let visibl="Heads";
let str;



function choosen(inp){
    str=inp;
    headng.textContent=`You've choosen : ${str}`;

}

function flip(){
 
front.style.animationName="flipping";
face.textContent=" ";


setTimeout(()=>{

    visibl=choices[Math.floor(Math.random()*2)];
    face.textContent=visibl;
    front.style.animationName="none";

    if(str==visibl){
        headng.textContent=`You Won The Toss`; 
        document.body.style.background="radial-gradient(green,black)";
    }

    else{
        headng.textContent=`You Lost The Toss`;  
        document.body.style.background="radial-gradient(red,black)";
    }

},900);


}


control.addEventListener("click" , flip);



// ----------------< HEADER NAVIGATION >-----

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