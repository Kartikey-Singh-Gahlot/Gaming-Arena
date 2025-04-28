const control = document.getElementById("control");
const headng = document.getElementById("headng");
const sound = document.getElementById("sound");
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
sound.play();



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


control.addEventListener("click" , flip)