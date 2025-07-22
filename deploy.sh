#!/bin/bash

# TempMail Service Deployment Script
# This script builds the project and creates a deployment package

echo "🚀 Building TempMail Service..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
mkdir -p deployment

# Copy built files
cp -r dist/* deployment/
cp .htaccess deployment/
cp README.md deployment/
cp INSTALLATION_GUIDE.md deployment/
cp cpanel-install.md deployment/

# Create source package
echo "📁 Creating source package..."
mkdir -p deployment/source
cp -r src deployment/source/
cp -r public deployment/source/
cp package.json deployment/source/
cp vite.config.ts deployment/source/
cp tailwind.config.ts deployment/source/
cp tsconfig.json deployment/source/ 2>/dev/null || true

# Create zip files
echo "🗜️ Creating zip packages..."
cd deployment

# Production files (ready to upload)
zip -r ../tempmail-production.zip . -x "source/*"

# Complete source + production
zip -r ../tempmail-complete.zip .

cd ..

echo "✅ Deployment packages created:"
echo "   📦 tempmail-production.zip (ready to upload to cPanel)"
echo "   📦 tempmail-complete.zip (includes source code)"
echo ""
echo "🎉 Ready for deployment! Upload tempmail-production.zip to your cPanel hosting."

# Clean up
rm -rf deployment

echo "📖 Next steps:"
echo "1. Download tempmail-production.zip"
echo "2. Login to your cPanel"
echo "3. Upload to public_html and extract"
echo "4. Visit your domain!"