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

document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for the hero title
    const titleElement = document.getElementById("hero-title");
    const titleText = titleElement.textContent;
    titleElement.textContent = ""; // Clear initial text
    let index = 0;

    // Set the border-right to blink after typing ends
    function type() {
        if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
        } else {
        // Stop blinking when text is fully typed
        titleElement.style.borderRight = "2px solid";
        }
    }

    type();
});


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


// Include EmailJS script in your HTML before this code:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("klVnMQ9r2zwhN2ula"); // Replace with your EmailJS public key

    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("formStatus");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            statusMessage.textContent = "Please fill in all fields.";
            statusMessage.classList.add("error");
            return;
        }

        // Prepare the form data
        const formData = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send form data using EmailJS
        emailjs
            .send("service_6h4pvi6", "template_7m6hcr4", formData)
            .then(() => {
                statusMessage.textContent =
                "Your message has been sent successfully!";
                statusMessage.classList.remove("error");
                form.reset(); // Clear the form
            })
            .catch((error) => {
                statusMessage.textContent =
                "Failed to send message. Please try again.";
                statusMessage.classList.add("error");
                console.error("EmailJS Error:", error);
            });
            });
});
