document.addEventListener("DOMContentLoaded", function () {
    //initialize aos
    AOS.init({
        duration: 1000,
        offset: 100,
    });

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