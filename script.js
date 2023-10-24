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
      loop: false, // loop the animation
    };
    var typed = new Typed("#typewriter", options);
  });