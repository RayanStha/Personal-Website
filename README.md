# guest@rayan-sec

Personal website of Rayan Shrestha. It's a single-page, terminal-themed site (green phosphor, CRT scanlines, tmux-style navigation) built with plain HTML, CSS and JavaScript, so there's no build step. It's designed for GitHub Pages.

## Structure

```
index.html          # The whole site: home, about, projects, experience, travel, contact
css/style.css       # Terminal theme (colors live in :root at the top)
js/effects.js       # Boot sequence, matrix rain, tmux clock, name glitch
js/main.js          # Typing animation, nav/scroll tracking, background slideshows
js/travel.js        # Travel map data (travelLocations) + Leaflet map + photo modal
js/contact.js       # Contact form -> email via FormSubmit
images/home/        # Home background slideshow (photo1.jpg ... photo10.jpg)
images/travel-bg/   # Travel background slideshow (travelbg1.jpg ... travelbg14.jpg)
images/travel/      # Optional photos for map markers
```

## Common edits

- **Projects / experience / skills:** edit the matching `<section>` in `index.html`.
- **Typing phrases on the home screen:** `typingTexts` at the top of `js/main.js`.
- **Add a place to the map:** add an entry to `travelLocations` in `js/travel.js`. The stats count themselves.
- **Background photos:** drop JPGs into `images/home/` or `images/travel-bg/` and add a slide in `index.html`. Resize them to about 1920px first so the page stays fast.
- **Boot sequence:** it plays once per browser session. Edit `bootLines` in `js/effects.js`.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which forwards messages to `rayansth141@gmail.com`. The **first** submission sends a one-time activation email to that inbox, and you need to click the link in it before messages are delivered.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```
