let allLetters = document.querySelectorAll(".letter");
  
let handleMouseEnter = (e) => {
e.target.classList.add("oblique")}

Array.from(allLetters).forEach(el => {
el.addEventListener("mouseenter", handleMouseEnter);
});     
  
