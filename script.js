// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Optional: Change the burger icon to a 'close' icon when the menu is open
    if (navLinks.classList.contains('nav-active')) {
        // Change burger to 'close' icon if desired
        burger.innerHTML = '<span></span><span></span><span></span>'; // Reset to burger
        burger.style.position = 'absolute'; // Positioning the burger
    } else {
        // Reset to normal burger icon when closed
        burger.innerHTML = '<span></span><span></span><span></span>'; // Reset to burger
    }
});



// Typing effect for the hero title
const titleElement = document.getElementById('hero-title');
const titleText = titleElement.textContent;
titleElement.textContent = '';
let index = 0;

function type() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
    }
}

type();


document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store the target section ID
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Check if target section exists
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
