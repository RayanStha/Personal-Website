# My Personal Website

A beautiful, interactive personal website built for GitHub Pages featuring a travel map, photo gallery, and more!

## 🌟 Features

- **Home Page**: Interactive photo carousel showcasing your travel memories
- **About Me**: Personal introduction with interests and fun facts
- **Travel Map**: Interactive world map with pins for places you've visited
  - Click on pins to view photos and details
  - Automatic travel statistics
- **Education**: Resume-style layout of your academic and professional background
- **Contact**: Contact form and social media links

## 📁 Project Structure

```
Personal-Website/
├── index.html              # Home page with photo carousel
├── about.html              # About me page
├── travel.html             # Interactive travel map
├── education.html          # Education & experience
├── contact.html            # Contact page
├── css/
│   └── style.css          # All styles
├── js/
│   ├── main.js            # Main functionality & carousel
│   ├── travel.js          # Travel map functionality
│   └── contact.js         # Contact form handler
├── images/
│   ├── home/              # Photos for homepage carousel
│   ├── travel/            # Travel photos for map pins
│   └── profile.jpg        # Your profile photo
└── README.md
```

## 🚀 Getting Started

### 1. Customize Your Content

#### Update Personal Information

**About Me Page (`about.html`)**
- Replace `[Your Name]` with your name
- Update the bio text
- Fill in fun facts (countries visited, languages, etc.)

**All Pages**
- Update `My Portfolio` in the navigation to your name
- Update social media links in footer
- Change `your.email@example.com` to your actual email

#### Add Your Photos

1. **Homepage Photos** (`index.html`)
   - Add photos to `images/home/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, etc.
   - Update the carousel slides in `index.html` (look for placeholder-image divs)
   - Replace with: `<img src="images/home/photo1.jpg" alt="Description">`

2. **Profile Photo** (`about.html`)
   - Add your photo as `images/profile.jpg`
   - The site will automatically use it

3. **Travel Photos** (`travel.js`)
   - Add travel photos to `images/travel/` folder
   - Update the `travelLocations` array in `js/travel.js`

#### Add Your Travel Locations

Edit `js/travel.js` and update the `travelLocations` array:

```javascript
const travelLocations = [
    {
        name: "Paris, France",
        lat: 48.8566,          // Latitude
        lng: 2.3522,           // Longitude
        country: "France",
        continent: "Europe",
        date: "Summer 2023",
        description: "Your experience here...",
        highlight: "Best moment...",
        photos: [
            {
                src: "images/travel/paris1.jpg",
                caption: "Photo caption",
                placeholder: false  // Set to false when you add real photo
            }
        ]
    },
    // Add more locations...
];
```

**To find coordinates:**
- Go to [Google Maps](https://maps.google.com)
- Right-click on your location
- Click on the coordinates to copy them

#### Update Education & Experience

Edit `education.html`:
- Replace all `[brackets]` with your actual information
- Add/remove timeline items as needed
- Update skills, projects, and certifications

#### Customize Contact Page

Edit `contact.html`:
- Update your email, location, and social links
- To enable the contact form, sign up for [Formspree](https://formspree.io/) (free)
- Then update `js/contact.js` with your Formspree form ID

### 2. Customize Colors & Styling

Edit `css/style.css` at the top to change colors:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #7c3aed;    /* Purple accent */
    --accent-color: #f59e0b;       /* Orange accent */
    /* ... */
}
```

### 3. Deploy to GitHub Pages

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub named: `your-username.github.io`
   - Follow GitHub's instructions to push your code

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select main branch as source
   - Your site will be live at: `https://your-username.github.io`

## 🎨 Customization Tips

### Adding More Photos to Carousel

In `index.html`, copy this structure for each photo:

```html
<div class="carousel-slide">
    <img src="images/home/your-photo.jpg" alt="Description">
    <div class="carousel-caption">
        <h3>Photo Title</h3>
        <p>Caption text</p>
    </div>
</div>
```

### Adding More Travel Locations

Simply add more objects to the `travelLocations` array in `js/travel.js`. The map will automatically update!

### Changing Page Gradients

Each page hero has a unique gradient. To change them, edit the classes in `css/style.css`:

```css
.about-hero {
    background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

## 🔧 Advanced Features

### Enable Contact Form

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form ID
4. In `js/contact.js`, uncomment the Formspree section and add your ID:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    // ...
})
```

### Add Google Analytics

Add before the closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📱 Mobile Responsive

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **JavaScript** - Interactivity
- **Leaflet.js** - Interactive maps
- **Font Awesome** - Icons
- **GitHub Pages** - Hosting

## 📝 To-Do Before Going Live

- [ ] Replace all placeholder text with your information
- [ ] Add your photos to appropriate folders
- [ ] Update travel locations in `travel.js`
- [ ] Fill in education and experience
- [ ] Update all social media links
- [ ] Test contact form
- [ ] Choose and update color scheme if desired
- [ ] Test on mobile devices
- [ ] Update meta tags for SEO (optional)

## 🆘 Need Help?

### Common Issues

**Photos not showing?**
- Make sure photo paths are correct
- Check file extensions match (jpg vs jpeg)
- Photos should be in the `images/` folder

**Map not loading?**
- Check browser console for errors
- Make sure Leaflet CDN links are working
- Verify coordinates are correct (latitude, longitude)

**Changes not showing on GitHub Pages?**
- Changes can take a few minutes to deploy
- Try clearing your browser cache
- Make sure you pushed commits to GitHub

## 🎉 You're Ready!

Your website is set up and ready to customize! Start by:
1. Adding your photos
2. Updating your travel locations
3. Filling in your information
4. Deploying to GitHub Pages

Enjoy your new personal website! 🚀

