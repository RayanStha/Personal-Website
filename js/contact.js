// Contact Form Handler
// Messages are delivered to Rayan's inbox via FormSubmit (https://formsubmit.co) - no backend needed.
// The very first submission triggers a one-time activation email to the address below;
// click the link in that email and every message after that is delivered normally.
const CONTACT_EMAIL = 'rayansth141@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

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

            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> [ SENDING... ]';
            submitBtn.disabled = true;

            fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `[rayan-sec] ${formData.subject}`,
                    _template: 'table',
                    _honey: contactForm.querySelector('[name="_honey"]').value
                })
            })
            .then(response => response.json())
            .then(data => {
                if (String(data.success) === 'true') {
                    showMessage('Message delivered. Thank you for your message! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    resetBorders();
                } else {
                    throw new Error(data.message || 'Delivery failed');
                }
            })
            .catch(() => {
                showMessage(`Couldn't send right now. Please email me directly at ${CONTACT_EMAIL}.`, 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
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

let messageTimer;

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    clearTimeout(messageTimer);
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = '';
    formMessage.style.opacity = '1';

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide message after 8 seconds
    messageTimer = setTimeout(() => {
        formMessage.style.transition = 'opacity 0.5s';
        formMessage.style.opacity = '0';
        messageTimer = setTimeout(() => {
            formMessage.style.display = 'none';
        }, 500);
    }, 8000);
}

function resetBorders() {
    document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
        input.style.borderColor = '';
    });
}

// Add input validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.contact-form input:not([name="_honey"]), .contact-form textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ff4d4d';
            } else if (this.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.style.borderColor = emailRegex.test(this.value) ? '#39ff6a' : '#ff4d4d';
            } else {
                this.style.borderColor = '#39ff6a';
            }
        });
    });
});
