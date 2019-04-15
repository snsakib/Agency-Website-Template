#!/bin/bash

echo "Starting script..."

# Production build
echo "Building production files..."
ng build --prod --output-path docs --base-href /agency-landing-page/

# Creating 404.html
cd docs
sed -i "s/\(C:\/Program\sFiles\/Git\/agency-landing-page\/\)/\/agency-landing-page\//" index.html
cp index.html 404.html

# Publishing to GitHub
echo 'Publishing to GitHub'
git add --all
read -r -p "Commit Message: " CM
git commit -m "$CM"
git push
