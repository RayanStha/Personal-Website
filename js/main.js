// Typing Animation Configuration
const typingTexts = [
    "a Security Engineer",
    "a Traveler",
    "a Soccer Enthusiast",
    "a Photography Lover",
    "a Gamer",
    "an Adventure Seeker",
    "a Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// Typing Animation Function
function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Smooth Scroll Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    setTimeout(typeText, 1000);

    // Smooth scroll for navigation
    const navItems = document.querySelectorAll('.nav-item');
    const tabStrip = document.querySelector('.tmux-tabs');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active section detection on scroll
    const sections = document.querySelectorAll('.section');
    let currentSection = '';

    function updateActiveNav() {
        let current = sections.length ? sections[0].id : '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - window.innerHeight / 3) {
                current = section.id;
            }
        });

        // Bottom of the page always counts as the last section
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            current = sections[sections.length - 1].id;
        }

        if (current === currentSection) return;
        currentSection = current;

        navItems.forEach(item => {
            const isActive = item.getAttribute('data-section') === current;
            item.classList.toggle('active', isActive);

            // Keep the active tab visible in the scrollable tab strip on small screens
            if (isActive && tabStrip && tabStrip.scrollWidth > tabStrip.clientWidth) {
                tabStrip.scrollTo({
                    left: item.offsetLeft - tabStrip.clientWidth / 2 + item.clientWidth / 2,
                    behavior: 'smooth'
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav(); // Initial call

    // Home Gallery Carousel
    initHomeGallery();
});

// Background slideshow - shared by the home and travel sections
function initSlideshow(slideSelector, indicatorsSelector, interval = 5000) {
    const slides = document.querySelectorAll(slideSelector);
    const indicatorsContainer = document.querySelector(indicatorsSelector);
    let currentSlide = 0;
    let autoPlayInterval;

    if (!slides.length || !indicatorsContainer) return;

    // Create indicators
    const indicators = Array.from(slides, (_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('gallery-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.title = `img_${String(index + 1).padStart(2, '0')}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
        return indicator;
    });

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
            indicators[index].classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
        resetAutoPlay();
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, interval);
    }

    // Auto-play
    resetAutoPlay();
}

// Home Gallery Carousel - Full Background
function initHomeGallery() {
    initSlideshow('.home-background-gallery .gallery-slide', '.home-section .gallery-indicators');
}

// Scroll to top button
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '[ ↑ top ]';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize scroll to top button
createScrollToTop();

// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.term-window:not(.hero-window):not(.modal-content), .fact-item, .stat-card, .timeline-item, .skill-category, .project-card.side'
    );

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
