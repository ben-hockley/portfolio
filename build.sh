#!/bin/bash

# Build script for Ben Hockley's Portfolio
# This script builds the Tailwind CSS and prepares the site for deployment

echo "🚀 Building portfolio..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build production CSS
echo "🎨 Building Tailwind CSS..."
npm run build-css-prod

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Generated files:"
    echo "   - static/CSS/tailwind.css ($(du -h static/CSS/tailwind.css | cut -f1))"
    echo ""
    echo "🚀 Ready for deployment to GitHub Pages!"
    echo ""
    echo "📝 To deploy:"
    echo "   1. git add ."
    echo "   2. git commit -m 'Update portfolio'"
    echo "   3. git push origin main"
else
    echo "❌ Build failed!"
    exit 1
fi
