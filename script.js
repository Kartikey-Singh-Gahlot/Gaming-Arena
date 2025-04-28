const mobBtn = document.querySelector(".mobileContainer");
const ull = document.querySelector("ul");
const ad = document.querySelector("audio");
const hr1 = document.querySelector("#one");
const hr2 = document.querySelector("#two");
const hr3 = document.querySelector("#three");
const bdy = document.body;


window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
      ull.style.display="flex";
  }
  else{
    ull.style.display="none";
  }
});



let stat = "off";

mobBtn.addEventListener('click',()=>{
  
  if(stat=="off"){
    ull.className = 'mobileMenu';
    ull.style.display = 'flex';
    hr1.style.transform = "rotateZ(40deg) translateY(0px) translateX(3px)";
    hr2.style.display= "none";
    hr3.style.transform = "rotateZ(-40deg) translateY(-2px) translateX(4px)";
    stat = "on";
  }
  else{
    ull.style.display = "none";
    ull.className = 'menu';
    hr1.style.transform = "none";
    hr2.style.display = "block";
    hr3.style.transform = "none";
    stat = "off";
  }
 
})

// ------------------------< HOMEPAGE >-----------------