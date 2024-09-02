document.addEventListener("DOMContentLoaded", function () {
    //initialize aos
    AOS.init({
        duration: 1000,
        offset: 100,
        });
    //initialize typed.js
    var options = {
      strings: ["Hi, Julie here."],
      typeSpeed: 100, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      backDelay: 2000, // delay before starting to backspace
      startDelay: 1000, // delay before typing starts
      loop: true, // loop the animation
      showCursor: true, // show cursor
    };
    var typed = new Typed("#typewriter", options);

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  });