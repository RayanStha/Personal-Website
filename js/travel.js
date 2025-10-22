// Travel Map Data - ADD YOUR LOCATIONS HERE
const travelLocations = [
    {
        name: "Paris, France",
        lat: 48.8566,
        lng: 2.3522,
        country: "France",
        continent: "Europe",
        date: "Summer 2023",
        description: "The city of lights and love. Visited the Eiffel Tower, Louvre Museum, and enjoyed amazing French cuisine.",
        highlight: "Watching sunset from the Eiffel Tower",
        photos: [
            {
                src: "images/travel/paris1.jpg",
                caption: "Eiffel Tower at sunset",
                placeholder: true
            },
            {
                src: "images/travel/paris2.jpg",
                caption: "Louvre Museum",
                placeholder: true
            }
        ]
    },
    {
        name: "Tokyo, Japan",
        lat: 35.6762,
        lng: 139.6503,
        country: "Japan",
        continent: "Asia",
        date: "Spring 2023",
        description: "An incredible blend of traditional and modern culture. Cherry blossoms, temples, and amazing technology.",
        highlight: "Cherry blossom viewing in Shinjuku Gyoen",
        photos: [
            {
                src: "images/travel/tokyo1.jpg",
                caption: "Cherry blossoms in Tokyo",
                placeholder: true
            },
            {
                src: "images/travel/tokyo2.jpg",
                caption: "Tokyo skyline",
                placeholder: true
            }
        ]
    },
    {
        name: "New York City, USA",
        lat: 40.7128,
        lng: -74.0060,
        country: "USA",
        continent: "North America",
        date: "Fall 2022",
        description: "The city that never sleeps. Explored Central Park, Times Square, and the Statue of Liberty.",
        highlight: "View from Top of the Rock at night",
        photos: [
            {
                src: "images/travel/nyc1.jpg",
                caption: "Manhattan skyline",
                placeholder: true
            },
            {
                src: "images/travel/nyc2.jpg",
                caption: "Central Park in autumn",
                placeholder: true
            }
        ]
    },
    {
        name: "Barcelona, Spain",
        lat: 41.3851,
        lng: 2.1734,
        country: "Spain",
        continent: "Europe",
        date: "Summer 2022",
        description: "Gaudí's masterpieces, beautiful beaches, and vibrant culture. La Sagrada Familia was breathtaking.",
        highlight: "Sunrise at Park Güell",
        photos: [
            {
                src: "images/travel/barcelona1.jpg",
                caption: "La Sagrada Familia",
                placeholder: true
            },
            {
                src: "images/travel/barcelona2.jpg",
                caption: "Park Güell",
                placeholder: true
            }
        ]
    },
    {
        name: "Sydney, Australia",
        lat: -33.8688,
        lng: 151.2093,
        country: "Australia",
        continent: "Australia",
        date: "Winter 2022",
        description: "Beautiful harbor, iconic Opera House, and amazing beaches. The wildlife was incredible!",
        highlight: "Opera House at sunset",
        photos: [
            {
                src: "images/travel/sydney1.jpg",
                caption: "Sydney Opera House",
                placeholder: true
            },
            {
                src: "images/travel/sydney2.jpg",
                caption: "Bondi Beach",
                placeholder: true
            }
        ]
    }
    // Add more locations following the same format
];

// Initialize map
let map;
let markers = [];
let currentModalLocation = null;
let currentPhotoIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    initMap();
    updateTravelStats();
});

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

