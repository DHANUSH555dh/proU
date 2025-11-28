#!/bin/bash

# Happy Hotel Deployment Script for Vercel

echo "🏨 Happy Hotel - Vercel Deployment Script"
echo "========================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔄 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Happy Hotel Room Features Editor System"
fi

echo ""
echo "🚀 Ready to deploy to Vercel!"
echo ""
echo "Next steps:"
echo "1. Run: vercel"
echo "2. Follow the prompts to deploy"
echo "3. Add environment variables in Vercel dashboard:"
echo "   - MONGODB_URI (your MongoDB Atlas connection string)"
echo "   - JWT_SECRET (a secure random string)"
echo "   - NODE_ENV=production"
echo ""
echo "📖 Full instructions available in DEPLOYMENT-GUIDE.md"