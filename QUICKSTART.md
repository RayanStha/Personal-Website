# Quick Start Guide

Get your personal website up and running in minutes!

## 🎯 Step-by-Step Setup

### Step 1: Add Your Photos (5 minutes)

1. **Profile Photo**
   - Add a photo named `profile.jpg` to the `images/` folder
   - This will appear on your About page

2. **Homepage Photos**
   - Add 3-5 photos to `images/home/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, etc.
   - These photos should include you in them

3. **Travel Photos**
   - Add photos to `images/travel/` folder
   - Name them by location: `paris1.jpg`, `tokyo1.jpg`, etc.

### Step 2: Update Your Information (10 minutes)

1. **Open `about.html`**
   - Find and replace `[Your Name]` with your actual name
   - Update the bio paragraphs with your story
   - Fill in the fun facts (countries visited, languages, etc.)

2. **Open `education.html`**
   - Replace all `[brackets]` with your information:
     - Your degree(s)
     - University name(s)
     - Work experience
     - Skills
     - Projects

3. **Open `contact.html`**
   - Update your email address
   - Add your location
   - Update social media links

### Step 3: Add Your Travel Locations (10 minutes)

1. **Open `js/travel.js`**
2. **Update the `travelLocations` array** with your destinations:

```javascript
const travelLocations = [
    {
        name: "Paris, France",
        lat: 48.8566,        // Get from Google Maps
        lng: 2.3522,
        country: "France",
        continent: "Europe",
        date: "Summer 2023",
        description: "Your experience...",
        highlight: "Your favorite moment...",
        photos: [
            {
                src: "images/travel/paris1.jpg",
                caption: "Photo caption",
                placeholder: false  // Change to false when you add the photo
            }
        ]
    },
    // Add more locations...
];
```

3. **Find coordinates** for each location:
   - Go to Google Maps
   - Right-click on the location
   - Click the coordinates to copy
   - First number = latitude, second = longitude

### Step 4: Customize Homepage Photos (5 minutes)

1. **Open `index.html`**
2. **Find the carousel-slide sections** (around line 40)
3. **Replace placeholder divs** with your photos:

```html
<!-- BEFORE -->
<div class="carousel-slide">
    <div class="placeholder-image">
        <i class="fas fa-camera"></i>
        <p>Upload your travel photo here</p>
    </div>
</div>

<!-- AFTER -->
<div class="carousel-slide">
    <img src="images/home/photo1.jpg" alt="Description">
    <div class="carousel-caption">
        <h3>Your Photo Title</h3>
        <p>Your caption here</p>
    </div>
</div>
```

### Step 5: Update Navigation & Branding (2 minutes)

In **all HTML files** (`index.html`, `about.html`, `travel.html`, `education.html`, `contact.html`):

1. **Change the logo text:**
   ```html
   <div class="nav-logo">Your Name</div>
   ```

2. **Update footer:**
   ```html
   <p>&copy; 2025 Your Name. All rights reserved.</p>
   ```

3. **Add your social links:**
   ```html
   <a href="https://github.com/yourusername"><i class="fab fa-github"></i></a>
   <a href="https://linkedin.com/in/yourprofile"><i class="fab fa-linkedin"></i></a>
   ```

### Step 6: Test Locally (2 minutes)

1. **Open `index.html`** in your web browser
2. **Check all pages**:
   - ✅ Homepage carousel works
   - ✅ Navigation works
   - ✅ About page looks good
   - ✅ Travel map loads and pins work
   - ✅ Education page is filled in
   - ✅ Contact page has your info

### Step 7: Deploy to GitHub Pages (10 minutes)

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create a new repository**
   - Repository name: `yourusername.github.io`
   - Make it public
   - Don't initialize with README

3. **Push your code**
   ```bash
   cd Personal-Website
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the sidebar
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Click Save

5. **Visit your site!**
   - URL: `https://yourusername.github.io`
   - It may take a few minutes to go live

## 🎨 Optional Customizations

### Change Colors

Edit `css/style.css` (lines 10-17):

```css
:root {
    --primary-color: #2563eb;      /* Change this */
    --secondary-color: #7c3aed;    /* And this */
    --accent-color: #f59e0b;       /* And this */
}
```

### Enable Contact Form

1. Sign up at [Formspree.io](https://formspree.io/) (free)
2. Create a form and get your form ID
3. Edit `js/contact.js` (line 29)
4. Uncomment the Formspree section
5. Add your form ID

### Add More Pages

Want to add a blog or portfolio page?
1. Copy `about.html` as a template
2. Update the navigation in all files
3. Style as needed

## ✅ Checklist Before Going Live

- [ ] All photos uploaded
- [ ] Personal information updated
- [ ] Travel locations added
- [ ] Education filled in
- [ ] Contact info updated
- [ ] Social media links added
- [ ] Tested all pages locally
- [ ] All placeholder text removed
- [ ] Tested on mobile (resize browser)
- [ ] Committed and pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Visited live site to verify

## 🆘 Troubleshooting

**Photos not showing?**
- Check file paths match exactly
- Make sure file extensions are correct (jpg vs jpeg)
- Check capitalization (photo1.JPG vs photo1.jpg)

**Map not loading?**
- Open browser console (F12) to check for errors
- Verify latitude/longitude are numbers, not strings
- Make sure you have internet connection (map loads from CDN)

**Site not updating on GitHub Pages?**
- Wait 2-3 minutes after pushing
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for deployment status

**Carousel not working?**
- Make sure you have at least one slide
- Check browser console for JavaScript errors
- Verify `js/main.js` is loaded

## 🎉 You're Done!

Your personal website is ready! Now you can:
- Share your URL with friends and family
- Add it to your resume/CV
- Link it on social media
- Keep it updated with new travels

Need more help? Check the full `README.md` for detailed documentation.

Enjoy your new website! 🚀

