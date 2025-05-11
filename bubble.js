document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("panel");
  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("start-btn");

  let score = 0;
  let hitNumber = 0;
  let timer = 30;
  let isGameOver = false;

  function makeBubble() {
    let clutter = "";
    for (let i = 0; i < 150; i++) {
      let rand = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rand}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
  }

  function getNewHit() {
    hitNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitNumber;
  }

  function updateScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
  }

  function runTimer() {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
      } else {
        clearInterval(timerInterval);
        isGameOver = true;
        showGameOverScreen();
      }
    }, 1000);
  }

  function showGameOverScreen() {
    document.querySelector("#pbottom").innerHTML = `
      <div class="game-over">
        <h1>Game Over</h1>
        <p>Your Score: <strong>${score}</strong></p>
        <button id="play-again-btn">Play Again</button>
      </div>
    `;

    document.getElementById("play-again-btn").addEventListener("click", () => {
      score = 0;
      timer = 30;
      isGameOver = false;
      document.querySelector("#scoreval").textContent = score;
      document.querySelector("#timerval").textContent = timer;
      getNewHit();
      makeBubble();
      runTimer();
    });
  }

  document.querySelector("#pbottom").addEventListener("click", function (e) {
    if (isGameOver) return;

    const clickedNum = Number(e.target.textContent);
    if (!isNaN(clickedNum) && clickedNum === hitNumber) {
      updateScore();
      getNewHit();
      makeBubble();
    }
  });

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    panel.classList.remove("hidden");
    getNewHit();
    makeBubble();
    runTimer();
  });
});


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
