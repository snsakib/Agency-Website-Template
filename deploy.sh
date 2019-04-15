#!/bin/bash

# Production build
#ng build --prod --output-path docs --base-href /Agency-Website-Template/

# Creating 404.html
#cd docs
#cp index.html 404.html

# Git commands
git add --all
read -r -p "Commit Message: " CM
git commit -m "$CM"
git push
