document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    // Toggle the 'nav-active' class
    navLinks.classList.toggle("nav-active");

    // Animate the burger lines
    burger.classList.toggle("toggle");
  });
});

// Typing effect for the hero title
const titleElement = document.getElementById("hero-title");
const titleText = titleElement.textContent;
titleElement.textContent = "";
let index = 0;

function type() {
  if (index < titleText.length) {
    titleElement.textContent += titleText.charAt(index);
    index++;
    setTimeout(type, 100); // Adjust typing speed here
  }
}

type();

document.addEventListener("DOMContentLoaded", () => {
  // Select all links with hashes
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store the target section ID
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Check if target section exists
      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
