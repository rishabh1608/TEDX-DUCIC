const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
const link=document.querySelectorAll('nav-links li');
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});