document.addEventListener('DOMContentLoaded', () => {
  const allLetters = document.querySelectorAll(".letter");

  function handleMouseEnter(e) {
    e.target.classList.add("oblique");
  }

  function handleMouseLeave(e) {
    e.target.classList.remove("oblique");
  }

  allLetters.forEach(el => {
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
  });
});
