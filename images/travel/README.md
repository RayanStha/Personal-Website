# Travel Photos

Add your travel destination photos here.

## Naming Convention

Use descriptive names based on location:
- `paris1.jpg`, `paris2.jpg`
- `tokyo1.jpg`, `tokyo2.jpg`
- `newyork1.jpg`, `newyork2.jpg`
- etc.

## Recommended Specs

- **Format**: JPG or PNG
- **Aspect Ratio**: Any (will be cropped to fit)
- **File Size**: Under 1MB for faster loading
- **Content**: Scenic shots, landmarks, memorable moments

## How to Update

1. Add your photos to this folder
2. Open `js/travel.js`
3. Find the `travelLocations` array
4. Update the photo information:

```javascript
photos: [
    {
        src: "images/travel/paris1.jpg",
        caption: "Eiffel Tower at sunset",
        placeholder: false  // Change to false!
    },
    {
        src: "images/travel/paris2.jpg",
        caption: "Louvre Museum",
        placeholder: false
    }
]
```

## Adding New Locations

To add a new travel destination:

```javascript
{
    name: "Rome, Italy",
    lat: 41.9028,
    lng: 12.4964,
    country: "Italy",
    continent: "Europe",
    date: "Spring 2024",
    description: "Ancient history, amazing food, and beautiful architecture...",
    highlight: "Throwing coins in the Trevi Fountain",
    photos: [
        {
            src: "images/travel/rome1.jpg",
            caption: "The Colosseum",
            placeholder: false
        }
    ]
}
```

## Finding Coordinates

1. Go to [Google Maps](https://maps.google.com)
2. Search for your destination
3. Right-click on the location
4. Click the coordinates to copy them
5. First number is latitude, second is longitude

## Tips

- Each location can have multiple photos
- Photos will appear in a modal when users click the map pin
- Use landscape photos for best display
- Name files clearly for easy organization

