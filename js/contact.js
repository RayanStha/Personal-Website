// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!validateForm(formData)) {
                showMessage('Please fill in all fields correctly.', 'error');
                return;
            }

            // Here you would normally send the data to a server or service
            // For now, we'll just show a success message
            
            // OPTION 1: Using Formspree (recommended for GitHub Pages)
            // Uncomment and replace YOUR_FORM_ID with your Formspree form ID
            /*
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                showMessage('Oops! Something went wrong. Please try again.', 'error');
            });
            */

            // OPTION 2: Using EmailJS (another popular option)
            // See https://www.emailjs.com/ for setup instructions

            // OPTION 3: Simple demonstration (current implementation)
            // This just shows a success message without actually sending
            setTimeout(() => {
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                console.log('Form Data:', formData); // For testing
            }, 1000);
        });
    }
});

function validateForm(data) {
    // Check if all fields are filled
    if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }

    return true;
}

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Add input validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ef4444';
            } else if (this.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value)) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#10b981';
                }
            } else {
                this.style.borderColor = '#10b981';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#2563eb';
        });
    });
});

