// Travel Map Data - YOUR LOCATIONS
const travelLocations = [
    // United States
    { name: "Austin, TX", lat: 30.2672, lng: -97.7431, country: "USA", continent: "North America", date: "Visited", description: "Texas capital with live music and great food scene.", highlight: "Live music on 6th Street", photos: [{ src: "images/travel/austin.jpg", caption: "Austin", placeholder: true }] },
    { name: "Charlotte, NC", lat: 35.2271, lng: -80.8431, country: "USA", continent: "North America", date: "Visited", description: "Modern southern city with great culture.", highlight: "City exploration", photos: [{ src: "images/travel/charlotte.jpg", caption: "Charlotte", placeholder: true }] },
    { name: "Philadelphia, PA", lat: 39.9526, lng: -75.1652, country: "USA", continent: "North America", date: "Visited", description: "City of brotherly love, rich history and culture.", highlight: "Philly cheesesteaks", photos: [{ src: "images/travel/philly.jpg", caption: "Philadelphia", placeholder: true }] },
    { name: "Sayreville, NJ", lat: 40.4595, lng: -74.3609, country: "USA", continent: "North America", date: "Visited", description: "New Jersey adventures.", highlight: "East Coast vibes", photos: [{ src: "images/travel/sayreville.jpg", caption: "Sayreville", placeholder: true }] },
    { name: "New Brunswick, NJ", lat: 40.4862, lng: -74.4518, country: "USA", continent: "North America", date: "Visited", description: "College town with diverse culture.", highlight: "Rutgers campus", photos: [{ src: "images/travel/newbrunswick.jpg", caption: "New Brunswick", placeholder: true }] },
    { name: "Atlantic City, NJ", lat: 39.3643, lng: -74.4229, country: "USA", continent: "North America", date: "Visited", description: "Beach resort town and casino hub.", highlight: "Boardwalk and casinos", photos: [{ src: "images/travel/atlanticcity.jpg", caption: "Atlantic City", placeholder: true }] },
    { name: "New York City, NY", lat: 40.7128, lng: -74.0060, country: "USA", continent: "North America", date: "Visited", description: "The city that never sleeps.", highlight: "Manhattan skyline", photos: [{ src: "images/travel/nyc.jpg", caption: "NYC", placeholder: true }] },
    { name: "Boston, MA", lat: 42.3601, lng: -71.0589, country: "USA", continent: "North America", date: "Visited", description: "Historic city with rich American heritage.", highlight: "Freedom Trail", photos: [{ src: "images/travel/boston.jpg", caption: "Boston", placeholder: true }] },
    { name: "Chicago, IL", lat: 41.8781, lng: -87.6298, country: "USA", continent: "North America", date: "Visited", description: "Windy city with amazing architecture.", highlight: "Chicago deep dish pizza", photos: [{ src: "images/travel/chicago.jpg", caption: "Chicago", placeholder: true }] },
    { name: "Washington, DC", lat: 38.9072, lng: -77.0369, country: "USA", continent: "North America", date: "Visited", description: "Nation's capital with iconic monuments.", highlight: "National Mall", photos: [{ src: "images/travel/dc.jpg", caption: "Washington DC", placeholder: true }] },
    { name: "Miami, FL", lat: 25.7617, lng: -80.1918, country: "USA", continent: "North America", date: "Visited", description: "Vibrant city with beaches and nightlife.", highlight: "South Beach", photos: [{ src: "images/travel/miami.jpg", caption: "Miami", placeholder: true }] },
    { name: "Orlando, FL", lat: 28.5383, lng: -81.3792, country: "USA", continent: "North America", date: "Visited", description: "Theme park capital of the world.", highlight: "Disney World", photos: [{ src: "images/travel/orlando.jpg", caption: "Orlando", placeholder: true }] },
    { name: "Las Vegas, NV", lat: 36.1699, lng: -115.1398, country: "USA", continent: "North America", date: "Visited", description: "Entertainment capital of the world.", highlight: "The Strip", photos: [{ src: "images/travel/vegas.jpg", caption: "Las Vegas", placeholder: true }] },
    { name: "Seattle, WA", lat: 47.6062, lng: -122.3321, country: "USA", continent: "North America", date: "Visited", description: "Pacific Northwest beauty.", highlight: "Space Needle views", photos: [{ src: "images/travel/seattle.jpg", caption: "Seattle", placeholder: true }] },
    
    // Canada
    { name: "Toronto, ON", lat: 43.6532, lng: -79.3832, country: "Canada", continent: "North America", date: "Visited", description: "Canada's largest city with diverse culture.", highlight: "CN Tower", photos: [{ src: "images/travel/toronto.jpg", caption: "Toronto", placeholder: true }] },
    { name: "Montreal, QC", lat: 45.5017, lng: -73.5673, country: "Canada", continent: "North America", date: "Visited", description: "French-Canadian charm and culture.", highlight: "Old Montreal", photos: [{ src: "images/travel/montreal.jpg", caption: "Montreal", placeholder: true }] },
    { name: "Quebec City, QC", lat: 46.8139, lng: -71.2080, country: "Canada", continent: "North America", date: "Visited", description: "Historic walled city with European feel.", highlight: "Château Frontenac", photos: [{ src: "images/travel/quebec.jpg", caption: "Quebec", placeholder: true }] },
    
    // Mexico
    { name: "Playa del Carmen, Mexico", lat: 20.6296, lng: -87.0739, country: "Mexico", continent: "North America", date: "Visited", description: "Beautiful Caribbean beaches and vibrant nightlife.", highlight: "Beach paradise", photos: [{ src: "images/travel/playadelcarmen.jpg", caption: "Playa del Carmen", placeholder: true }] },
    { name: "Tulum, Mexico", lat: 20.2114, lng: -87.4654, country: "Mexico", continent: "North America", date: "Visited", description: "Ancient Mayan ruins overlooking turquoise waters.", highlight: "Mayan temples by the sea", photos: [{ src: "images/travel/tulum.jpg", caption: "Tulum", placeholder: true }] },
    
    // Spain
    { name: "Barcelona, Spain", lat: 41.3851, lng: 2.1734, country: "Spain", continent: "Europe", date: "Visited", description: "Gaudí's architectural masterpieces.", highlight: "La Sagrada Familia", photos: [{ src: "images/travel/barcelona.jpg", caption: "Barcelona", placeholder: true }] },
    { name: "Ibiza, Spain", lat: 38.9067, lng: 1.4206, country: "Spain", continent: "Europe", date: "Visited", description: "Beautiful beaches and vibrant nightlife.", highlight: "Island paradise", photos: [{ src: "images/travel/ibiza.jpg", caption: "Ibiza", placeholder: true }] },
    { name: "Sevilla, Spain", lat: 37.3891, lng: -5.9845, country: "Spain", continent: "Europe", date: "Visited", description: "Flamenco, tapas, and Andalusian culture.", highlight: "Plaza de España", photos: [{ src: "images/travel/sevilla.jpg", caption: "Sevilla", placeholder: true }] },
    { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038, country: "Spain", continent: "Europe", date: "Visited", description: "Spain's vibrant capital.", highlight: "Prado Museum", photos: [{ src: "images/travel/madrid.jpg", caption: "Madrid", placeholder: true }] },
    
    // Portugal
    { name: "Porto, Portugal", lat: 41.1579, lng: -8.6291, country: "Portugal", continent: "Europe", date: "Visited", description: "Port wine and riverside charm.", highlight: "Douro River views", photos: [{ src: "images/travel/porto.jpg", caption: "Porto", placeholder: true }] },
    { name: "Lisbon, Portugal", lat: 38.7223, lng: -9.1393, country: "Portugal", continent: "Europe", date: "Visited", description: "Historic capital with stunning views.", highlight: "Tram 28", photos: [{ src: "images/travel/lisbon.jpg", caption: "Lisbon", placeholder: true }] },
    
    // France
    { name: "Lyon, France", lat: 45.7640, lng: 4.8357, country: "France", continent: "Europe", date: "Visited", description: "Gastronomic capital of France.", highlight: "French cuisine", photos: [{ src: "images/travel/lyon.jpg", caption: "Lyon", placeholder: true }] },
    { name: "Paris, France", lat: 48.8566, lng: 2.3522, country: "France", continent: "Europe", date: "Visited", description: "The city of lights and romance.", highlight: "Eiffel Tower", photos: [{ src: "images/travel/paris.jpg", caption: "Paris", placeholder: true }] },
    { name: "Montpellier, France", lat: 43.6108, lng: 3.8767, country: "France", continent: "Europe", date: "Visited", description: "Southern French charm.", highlight: "Mediterranean vibes", photos: [{ src: "images/travel/montpellier.jpg", caption: "Montpellier", placeholder: true }] },
    { name: "Marseille, France", lat: 43.2965, lng: 5.3698, country: "France", continent: "Europe", date: "Visited", description: "Port city with Mediterranean culture.", highlight: "Old Port", photos: [{ src: "images/travel/marseille.jpg", caption: "Marseille", placeholder: true }] },
    { name: "Nice, France", lat: 43.7102, lng: 7.2620, country: "France", continent: "Europe", date: "Visited", description: "French Riviera beauty.", highlight: "Promenade des Anglais", photos: [{ src: "images/travel/nice.jpg", caption: "Nice", placeholder: true }] },
    { name: "Menton, France", lat: 43.7765, lng: 7.5042, country: "France", continent: "Europe", date: "Visited", description: "Beautiful coastal town near Italy.", highlight: "Lemon festival", photos: [{ src: "images/travel/menton.jpg", caption: "Menton", placeholder: true }] },
    { name: "Chambéry, France", lat: 45.5647, lng: 5.9215, country: "France", continent: "Europe", date: "Visited", description: "Alpine town with history.", highlight: "Mountain views", photos: [{ src: "images/travel/chambery.jpg", caption: "Chambéry", placeholder: true }] },
    { name: "Grenoble, France", lat: 45.1885, lng: 5.7245, country: "France", continent: "Europe", date: "Visited", description: "Gateway to the Alps.", highlight: "Mountain adventures", photos: [{ src: "images/travel/grenoble.jpg", caption: "Grenoble", placeholder: true }] },
    { name: "Saint-Étienne, France", lat: 45.4397, lng: 4.3872, country: "France", continent: "Europe", date: "Visited", description: "Industrial heritage and culture.", highlight: "City exploration", photos: [{ src: "images/travel/saintetienne.jpg", caption: "Saint-Étienne", placeholder: true }] },
    
    // Monaco
    { name: "Monaco", lat: 43.7384, lng: 7.4246, country: "Monaco", continent: "Europe", date: "Visited", description: "Luxury and glamour on the Mediterranean.", highlight: "Monte Carlo", photos: [{ src: "images/travel/monaco.jpg", caption: "Monaco", placeholder: true }] },
    
    // Iceland
    { name: "Iceland", lat: 64.9631, lng: -19.0208, country: "Iceland", continent: "Europe", date: "Visited", description: "Land of fire and ice.", highlight: "Natural wonders", photos: [{ src: "images/travel/iceland.jpg", caption: "Iceland", placeholder: true }] },
    
    // Switzerland
    { name: "Geneva, Switzerland", lat: 46.2044, lng: 6.1432, country: "Switzerland", continent: "Europe", date: "Visited", description: "International city with lake views.", highlight: "Jet d'Eau fountain", photos: [{ src: "images/travel/geneva.jpg", caption: "Geneva", placeholder: true }] },
    { name: "Zurich, Switzerland", lat: 47.3769, lng: 8.5417, country: "Switzerland", continent: "Europe", date: "Visited", description: "Financial hub with Swiss charm.", highlight: "Lake Zurich", photos: [{ src: "images/travel/zurich.jpg", caption: "Zurich", placeholder: true }] },
    
    // Italy
    { name: "Venice, Italy", lat: 45.4408, lng: 12.3155, country: "Italy", continent: "Europe", date: "Visited", description: "Romantic city of canals.", highlight: "Gondola rides", photos: [{ src: "images/travel/venice.jpg", caption: "Venice", placeholder: true }] },
    { name: "Florence, Italy", lat: 43.7696, lng: 11.2558, country: "Italy", continent: "Europe", date: "Visited", description: "Renaissance art and architecture.", highlight: "Duomo cathedral", photos: [{ src: "images/travel/florence.jpg", caption: "Florence", placeholder: true }] },
    { name: "Pisa, Italy", lat: 43.7228, lng: 10.4017, country: "Italy", continent: "Europe", date: "Visited", description: "Home of the famous leaning tower.", highlight: "Leaning Tower", photos: [{ src: "images/travel/pisa.jpg", caption: "Pisa", placeholder: true }] },
    { name: "Rome, Italy", lat: 41.9028, lng: 12.4964, country: "Italy", continent: "Europe", date: "Visited", description: "Eternal city of history.", highlight: "Colosseum", photos: [{ src: "images/travel/rome.jpg", caption: "Rome", placeholder: true }] },
    { name: "Turin, Italy", lat: 45.0703, lng: 7.6869, country: "Italy", continent: "Europe", date: "Visited", description: "Industrial city with elegance.", highlight: "Mole Antonelliana", photos: [{ src: "images/travel/turin.jpg", caption: "Turin", placeholder: true }] },
    
    // United Kingdom
    { name: "London, UK", lat: 51.5074, lng: -0.1278, country: "United Kingdom", continent: "Europe", date: "Visited", description: "Historic capital with modern culture.", highlight: "Big Ben & London Eye", photos: [{ src: "images/travel/london.jpg", caption: "London", placeholder: true }] },
    
    // Middle East & Asia
    { name: "Nepal", lat: 28.3949, lng: 84.1240, country: "Nepal", continent: "Asia", date: "Visited", description: "Himalayan kingdom.", highlight: "Mountain majesty", photos: [{ src: "images/travel/nepal.jpg", caption: "Nepal", placeholder: true }] },
    { name: "Doha, Qatar", lat: 25.2854, lng: 51.5310, country: "Qatar", continent: "Asia", date: "Visited", description: "Modern Middle Eastern metropolis.", highlight: "Futuristic architecture", photos: [{ src: "images/travel/qatar.jpg", caption: "Qatar", placeholder: true }] },
    { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, country: "UAE", continent: "Asia", date: "Visited", description: "City of superlatives.", highlight: "Burj Khalifa", photos: [{ src: "images/travel/dubai.jpg", caption: "Dubai", placeholder: true }] },
    { name: "Abu Dhabi, UAE", lat: 24.4539, lng: 54.3773, country: "UAE", continent: "Asia", date: "Visited", description: "Capital of UAE with Grand Mosque and F1 racing.", highlight: "Abu Dhabi F1 Grand Prix", photos: [{ src: "images/travel/abudhabi.jpg", caption: "Abu Dhabi", placeholder: true }] },
    { name: "Muscat, Oman", lat: 23.5880, lng: 58.3829, country: "Oman", continent: "Asia", date: "Visited", description: "Arabian beauty and culture.", highlight: "Sultan Qaboos Mosque", photos: [{ src: "images/travel/oman.jpg", caption: "Oman", placeholder: true }] },
    { name: "Saudi Arabia", lat: 23.8859, lng: 45.0792, country: "Saudi Arabia", continent: "Asia", date: "Visited", description: "Historic Arabian Peninsula.", highlight: "Cultural experience", photos: [{ src: "images/travel/saudi.jpg", caption: "Saudi Arabia", placeholder: true }] }
];

// Initialize map
let map;
let markers = [];
let currentModalLocation = null;
let currentPhotoIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    initMap();
    updateTravelStats();
    initTravelBackgroundGallery();
});

// Travel Background Gallery Carousel
function initTravelBackgroundGallery() {
    const slides = document.querySelectorAll('.travel-background-gallery .travel-bg-slide');
    const indicatorsContainer = document.querySelector('.travel-section .travel-gallery-indicators');
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

    const indicators = document.querySelectorAll('.travel-gallery-indicators .gallery-indicator');

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

    // Pause on hover over travel section
    const travelSection = document.querySelector('.travel-section');
    if (travelSection) {
        travelSection.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        travelSection.addEventListener('mouseleave', () => {
            resetAutoPlay();
        });
    }
}

function initMap() {
    // Initialize Leaflet map
    map = L.map('travel-map').setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);

    // Custom icon for markers
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: linear-gradient(135deg, #2563eb, #7c3aed); width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;"><i class="fas fa-map-pin"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    // Add markers for each location
    travelLocations.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center; min-width: 150px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 1.1rem;">${location.name}</h3>
                    <p style="margin: 0 0 10px 0; color: #666;">${location.date}</p>
                    <button onclick="openLocationModal(${index})" style="
                        background: linear-gradient(135deg, #2563eb, #7c3aed);
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: 600;
                    ">View Details</button>
                </div>
            `);
        
        markers.push(marker);
    });
}

function openLocationModal(index) {
    const location = travelLocations[index];
    currentModalLocation = location;
    currentPhotoIndex = 0;

    const modal = document.getElementById('photoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDate = document.getElementById('modalDate');
    const modalHighlight = document.getElementById('modalHighlight');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = location.name;
    modalDescription.textContent = location.description;
    modalDate.textContent = location.date;
    modalHighlight.innerHTML = `<i class="fas fa-star"></i> ${location.highlight}`;

    updateModalImage();

    modal.classList.add('active');
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const photo = currentModalLocation.photos[currentPhotoIndex];

    if (photo.placeholder) {
        // Create placeholder
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 100%;
            height: 600px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        `;
        placeholder.innerHTML = `
            <i class="fas fa-camera" style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.8;"></i>
            <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Upload your photo here</p>
            <p style="font-size: 0.9rem; opacity: 0.7; font-style: italic;">${photo.src}</p>
            <p style="margin-top: 1rem; opacity: 0.9;">${photo.caption}</p>
        `;
        modalImage.replaceWith(placeholder);
        placeholder.id = 'modalImage';
    } else {
        if (modalImage.tagName !== 'IMG') {
            const img = document.createElement('img');
            img.id = 'modalImage';
            document.getElementById('modalImage').replaceWith(img);
        }
        modalImage.src = photo.src;
        modalImage.alt = photo.caption;
    }

    // Hide/show navigation buttons based on number of photos
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    if (currentModalLocation.photos.length > 1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function updateTravelStats() {
    const countries = new Set(travelLocations.map(loc => loc.country));
    const continents = new Set(travelLocations.map(loc => loc.continent));
    const cities = travelLocations.length;

    document.getElementById('countries-count').textContent = countries.size;
    document.getElementById('continents-count').textContent = continents.size;
    document.getElementById('cities-count').textContent = cities;

    // Animate counters
    animateCounter('countries-count', countries.size);
    animateCounter('continents-count', continents.size);
    animateCounter('cities-count', cities);
}

function animateCounter(id, target) {
    const element = document.getElementById(id);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Modal controls
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photoModal');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentPhotoIndex = (currentPhotoIndex - 1 + currentModalLocation.photos.length) % currentModalLocation.photos.length;
            updateModalImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentPhotoIndex = (currentPhotoIndex + 1) % currentModalLocation.photos.length;
            updateModalImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                modal.classList.remove('active');
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
});

// Make function global for onclick handler
window.openLocationModal = openLocationModal;

