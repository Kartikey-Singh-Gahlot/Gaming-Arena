const btn = document.querySelector("button");
const inrBox = document.querySelector("#innerBox");
const outrBox = document.querySelector("#title");
const heading = document.querySelector("#heading");
const input = document.querySelector("input");
const moves = document.querySelector("#moves");
const score = document.querySelector("#score");
let arr = [2,3,5];
let totalMoves = 3;
let totalScore = 0;
let randomNumber;
let randomOperation;
input.disabled = true;

function check(){
  inrBox.style.backgroundColor = "transparent";
  inrBox.style.backgroundImage = "none";
  btn.textContent = "Shuffle";
  input.style.backgroundColor = "transparent";
  input.disabled = true;
  if(randomNumber==input.value){
    totalScore++;
       heading.textContent = "Right";
    score.textContent = `Score : ${totalScore}`;
  }
  else{
    heading.textContent = "Wrong";
  }
  btn.removeEventListener("click",check);
  btn.addEventListener("click",start);
}

function reset(){
  totalMoves = 3;
  totalScore = 0;
  title.textContent = "?";
  moves.textContent = `Moves: ${totalMoves}`;
  score.textContent = `Score: ${totalScore}`;
  inrBox.style.backgroundImage = " url(images/monkey_face.png)";
  inrBox.style.backgroundColor = "rgb(241, 143, 16)";
  document.body.style.background = "linear-gradient(90deg,#0f0c29,#302b63,#24243e)";
  heading.textContent = "Guess The Number";
  btn.removeEventListener("click",reset);
  btn.textContent = "Shuffle";
  btn.addEventListener("click",start);
}


btn.addEventListener("click",start);
function start(){
  btn.textContent = "Shuffle";
  totalMoves--;
  inrBox.style.backgroundColor = "rgb(241, 143, 16)";
  inrBox.style.backgroundImage = " url(images/monkey_face.png)";
  input.value = "";
  inrBox.style.animationName ="none";
  if(totalMoves>=0){
   
    btn.textContent = "Submit";
    moves.textContent = `Moves : ${totalMoves}/3`;
    randomNumber = Math.floor(Math.random()*10)+1;
    randomOperation = arr[Math.floor(Math.random()*3)];
    setTimeout(()=>{
      input.disabled = false;
      input.style.backgroundColor = "burlywood";
      inrBox.style.animationName = "shaking";
      inrBox.style.backgroundImage = " url(images/see_no_evil.png)";
      heading.textContent = `Number is greater than ${randomNumber-randomOperation} and smaller than ${randomNumber+randomOperation}`;      
    });
    title.textContent = randomNumber;
    btn.removeEventListener("click",start);
    btn.addEventListener("click",check);
  }
  else{
    inrBox.style.backgroundColor = "black";
    if(totalScore>1){
      heading.textContent = "Yay! You Won";
      inrBox.style.backgroundImage = "url(images/won.png)";
      document.body.style.background = "linear-gradient(90deg,green,green)";

    }
    else{
      heading.textContent = "Sorry you Lost";
      inrBox.style.backgroundImage = "url(images/lost_monkey.png)";
      document.body.style.background = "linear-gradient(90deg,brown,brown)";
      
    }
    btn.removeEventListener("click",start);
    btn.textContent = "Reset";
    btn.addEventListener("click",reset);
  }
}
  


  


// --------------------< HEADER NAVIGATION >---------------

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






