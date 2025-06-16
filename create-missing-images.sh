#!/bin/bash

# Create missing images as simple colored placeholders
# These are placeholder images - replace with actual images later

# Service images (dark gray placeholders)
convert -size 400x300 xc:#2a2a2a images/service-app.jpg
convert -size 400x300 xc:#2a2a2a images/service-partner.jpg
convert -size 400x300 xc:#2a2a2a images/service-gift.jpg
convert -size 400x300 xc:#2a2a2a images/service-transport.jpg
convert -size 400x300 xc:#2a2a2a images/service-expectations.jpg

# Travel images - Domestic (slightly lighter gray)
convert -size 400x300 xc:#3a3a3a images/travel-domestic-city.jpg
convert -size 400x300 xc:#3a3a3a images/travel-domestic-resort.jpg
convert -size 400x300 xc:#3a3a3a images/travel-hot-springs.jpg
convert -size 400x300 xc:#3a3a3a images/travel-outdoor.jpg
convert -size 400x300 xc:#3a3a3a images/travel-other.jpg

# Travel images - Overseas (medium gray)
convert -size 400x300 xc:#4a4a4a images/travel-overseas-asia.jpg
convert -size 400x300 xc:#4a4a4a images/travel-overseas-western.jpg
convert -size 400x300 xc:#4a4a4a images/travel-overseas-resort.jpg
convert -size 400x300 xc:#4a4a4a images/travel-overseas-other.jpg

# Missing lifestyle images
convert -size 400x300 xc:#5a5a5a images/lifestyle-other.jpg

# Missing dress code images  
convert -size 400x300 xc:#4a4a4a images/dress-code-suit.jpg
convert -size 400x300 xc:#4a4a4a images/dress-code-flexible.jpg

# Women's style images
convert -size 400x300 xc:#d4a574 images/style-feminine.jpg
convert -size 400x300 xc:#c19a6b images/style-modern.jpg
convert -size 400x300 xc:#daa520 images/style-natural.jpg
convert -size 400x300 xc:#b8860b images/style-sophisticated.jpg
convert -size 400x300 xc:#cd853f images/style-artistic.jpg
convert -size 400x300 xc:#d2691e images/style-trendy.jpg

echo "Missing images created as placeholders"