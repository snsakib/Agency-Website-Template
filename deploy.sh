#!/bin/bash

echo "Starting script..."

# Production build
#echo "Building production files..."
#ng build --prod --output-path docs --base-href /Agency-Website-Template/

# Creating 404.html
#cd docs
#cp index.html 404.html

# Publishing to GitHub
echo 'Publishing to GitHub'
git add --all
read -r -p "Commit Message: " CM
git commit -m "$CM"
git push
