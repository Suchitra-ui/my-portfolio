// Wait for DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
    
    // Handle Contact Form Submission
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Prevent the default form refreshing behavior
            event.preventDefault();

            // Get user input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            // Simple popup confirmation message
            alert(`Thank you, ${name}! Your message has been received. I will reply to ${email} soon.`);

            // Clear input fields
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});