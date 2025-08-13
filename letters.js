document.addEventListener('DOMContentLoaded', () => {
  const allLetters = document.querySelectorAll(".letter");

  function handleMouseEnter(e) {
    e.target.classList.add("oblique");
  }

  allLetters.forEach(el => {
    el.addEventListener("mouseenter", handleMouseEnter);
  });
});
