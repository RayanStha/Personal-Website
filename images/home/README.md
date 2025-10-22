# Homepage Photos

Add your photos here for the homepage carousel.

## Naming Convention

Name your photos as:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- etc.

## Recommended Specs

- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 (e.g., 1920x1080, 1280x720)
- **File Size**: Under 2MB for faster loading
- **Content**: Photos of you and your travels

## How to Update

1. Add your photos to this folder
2. Open `index.html`
3. Find the carousel-slide sections
4. Replace the placeholder-image divs with:

```html
<img src="images/home/photo1.jpg" alt="Your description">
```

Example:
```html
<div class="carousel-slide">
    <img src="images/home/photo1.jpg" alt="Me at the Eiffel Tower">
    <div class="carousel-caption">
        <h3>Paris Adventure</h3>
        <p>An amazing day in the City of Lights!</p>
    </div>
</div>
```

## Tips

- Use high-quality photos
- Make sure you're in the photos (this differentiates from the travel page)
- Choose photos that represent different aspects of your life and travels
- Keep file sizes reasonable for web performance

