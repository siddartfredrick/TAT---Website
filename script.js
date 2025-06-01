document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Verify reCAPTCHA
            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                alert('Please complete the reCAPTCHA verification');
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            formData.append('g-recaptcha-response', recaptchaResponse);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to your server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Clear form and reCAPTCHA
            contactForm.reset();
            grecaptcha.reset();
        });
    }
}); 