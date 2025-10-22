// Typing Animation Configuration
const typingTexts = [
    "Security Engineer",
    "Traveler",
    "Soccer Enthusiast",
    "Photography Lover",
    "Adventure Seeker",
    "Problem Solver"
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
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active section detection on scroll
    const sections = document.querySelectorAll('.section');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Home Gallery Carousel
    initHomeGallery();
});

// Home Gallery Carousel - Full Background
function initHomeGallery() {
    const slides = document.querySelectorAll('.home-background-gallery .gallery-slide');
    const indicatorsContainer = document.querySelector('.home-section .gallery-indicators');
    let currentSlide = 0;
    let autoPlayInterval;

    if (!slides.length || !indicatorsContainer) return;

    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('gallery-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.gallery-indicator');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            indicators[index].classList.remove('active');
        });
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
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
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    // Auto-play
    autoPlayInterval = setInterval(nextSlide, 5000);

    // Pause on hover over home section
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        homeSection.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        homeSection.addEventListener('mouseleave', () => {
            resetAutoPlay();
        });
    }
}

// Scroll to top button
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
        transition: all 0.3s;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1) translateY(-3px)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.5)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.4)';
    });
}

// Initialize scroll to top button
createScrollToTop();

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.interest-card, .fact-item, .stat-card, .info-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed for very small screens)
const createMobileMenu = () => {
    if (window.innerWidth <= 480) {
        const sidebar = document.querySelector('.sidebar-nav');
        let isMenuOpen = false;

        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        toggleBtn.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2563eb, #7c3aed);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1001;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
            font-size: 1.2rem;
        `;

        document.body.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                sidebar.style.transform = 'translateX(0)';
                toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                sidebar.style.transform = 'translateX(-100%)';
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Initial state
        sidebar.style.transition = 'transform 0.3s ease';
        sidebar.style.transform = 'translateX(-100%)';
        sidebar.style.left = '0';
        sidebar.style.background = 'rgba(255, 255, 255, 0.98)';
        sidebar.style.padding = '20px';
        sidebar.style.borderRadius = '0 20px 20px 0';
        sidebar.style.boxShadow = '4px 0 20px rgba(0,0,0,0.1)';
    }
};

// Check screen size and create mobile menu if needed
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
        const mobileToggle = document.querySelector('button[style*="top: 20px"]');
        if (mobileToggle) {
            mobileToggle.remove();
            const sidebar = document.querySelector('.sidebar-nav');
            sidebar.style.transform = '';
            sidebar.style.background = '';
            sidebar.style.padding = '';
            sidebar.style.borderRadius = '';
            sidebar.style.boxShadow = '';
        }
    } else {
        createMobileMenu();
    }
});
