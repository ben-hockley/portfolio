# Personal Portfolio

Hello, my name is Benjamin Hockley and I am a Software Engineer studying at Cardiff University. This is my portfolio, displaying my coding skillset and experience aswell as some examples of projects which I have developed and contributed towards.

[View My Portfolio](https://ben-hockley.github.io/portfolio/)

## Built With

* HTML5, CSS3, JavaScript
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
* [Font Awesome](https://fontawesome.com/) - Icon toolkit
* [Google Maps API](https://mapsplatform.google.com/lp/maps-apis/) - Interactive maps
* [GitHub Pages](https://pages.github.com/) - Static site hosting

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ben-hockley/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Building CSS

This project uses Tailwind CSS built locally for production. The CSS is pre-built and included in the repository for GitHub Pages deployment.

#### Development (with watch mode)
```bash
npm run build-css
```

#### Production build (minified)
```bash
npm run build-css-prod
```

### Project Structure

```
├── index.html              # Main HTML file
├── package.json           # Node.js dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── src/
│   └── input.css         # Tailwind CSS input file
├── static/
│   ├── CSS/
│   │   ├── tailwind.css  # Generated Tailwind CSS (do not edit)
│   │   └── styles.css    # Custom CSS styles
│   ├── JS/
│   │   └── dynamic.js    # JavaScript functionality
│   └── img/              # Images and assets
└── README.md
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The pre-built `static/CSS/tailwind.css` file ensures that all styles load correctly on GitHub Pages.

#### Making Style Changes

If you make changes to the Tailwind configuration or add new Tailwind classes:

1. **Development build (with watch mode)**:
   ```bash
   npm run build-css
   ```
   This will watch for changes and rebuild automatically.

2. **Production build (minified)**:
   ```bash
   npm run build-css-prod
   # or simply
   npm run build
   ```

3. **Quick deployment**:
   ```bash
   npm run deploy
   ```

#### Automated Build Scripts

For convenience, you can use the provided build scripts:

**Windows (PowerShell)**:
```powershell
.\build.ps1
```

**Linux/macOS (Bash)**:
```bash
chmod +x build.sh
./build.sh
```

#### Manual Deployment Steps

1. Make your changes to HTML, add new Tailwind classes, or modify `tailwind.config.js`
2. Run the production build: `npm run build-css-prod`
3. Commit the updated files (including `static/CSS/tailwind.css`):
   ```bash
   git add .
   git commit -m "Update portfolio styles"
   git push origin main
   ```
4. GitHub Pages will automatically deploy the updated site

#### Important Notes

- Always commit the generated `static/CSS/tailwind.css` file
- The site uses a local Tailwind build (no CDN) for optimal GitHub Pages compatibility
- Custom animations and styles are defined in `tailwind.config.js`
- Additional custom CSS is in `static/CSS/styles.css`

## Authors

[Benjamin Hockley](https://github.com/ben-hockley)

## Version History
    
* V1 (27/06/2025)
    * Initial Release
    * [See Commit](https://github.com/ben-hockley/portfolio/tree/f3d4da0563b87f150841f359f1d9f42ddd27dc82)

https://github.com/user-attachments/assets/2cc137fc-2055-43bf-8d5c-c8c24bebfda9

## Acknowledgments

* [README template by @DOMPizzie](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
* [Designed using Tailwind.css](https://tailwindcss.com/)
* [Hosted through GitHub Pages](https://pages.github.com/)
* [Maps from Google Maps API](https://mapsplatform.google.com/lp/maps-apis/)
* [Icons from FontAwesome](https://fontawesome.com/)
* [Gifs made using FreeConvert](https://www.freeconvert.com/convert/mp4-to-gif)
