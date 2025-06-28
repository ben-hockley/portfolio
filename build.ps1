# Build script for Ben Hockley's Portfolio
# This script builds the Tailwind CSS and prepares the site for deployment

Write-Host "🚀 Building portfolio..." -ForegroundColor Green

# Check if node_modules exists
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
        exit 1
    }
}

# Build production CSS
Write-Host "🎨 Building Tailwind CSS..." -ForegroundColor Cyan
npm run build-css-prod

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "📁 Generated files:" -ForegroundColor White
    
    $fileSize = (Get-Item "static/CSS/tailwind.css").Length
    $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
    Write-Host "   - static/CSS/tailwind.css ($fileSizeKB KB)" -ForegroundColor Gray
    
    Write-Host ""
    Write-Host "🚀 Ready for deployment to GitHub Pages!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 To deploy:" -ForegroundColor Yellow
    Write-Host "   1. git add ." -ForegroundColor Gray
    Write-Host "   2. git commit -m 'Update portfolio'" -ForegroundColor Gray
    Write-Host "   3. git push origin main" -ForegroundColor Gray
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
