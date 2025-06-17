#!/usr/bin/env python3
import re

# Read the original index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Read the new brand section
with open('brand-section-updated.html', 'r', encoding='utf-8') as f:
    new_brand_section = f.read()

# Find the start and end of the brand section
# Start: look for the brand-selection-enhanced div
start_pattern = r'(\s*<div class="form-group brand-selection-enhanced">)'
start_match = re.search(start_pattern, content)

if not start_match:
    print("Could not find start of brand section")
    exit(1)

start_pos = start_match.start()

# Find the end - look for the closing div that matches the form-group
# We need to count divs to find the matching closing tag
pos = start_match.start()
div_count = 0
in_tag = False
i = pos

while i < len(content):
    if content[i] == '<':
        in_tag = True
        # Check if it's a div tag
        if i + 4 < len(content) and content[i:i+4] == '<div':
            div_count += 1
        elif i + 5 < len(content) and content[i:i+5] == '</div':
            div_count -= 1
            if div_count == 0:
                # Find the end of this tag
                end_pos = content.find('>', i) + 1
                break
    i += 1

# Extract the parts before and after
before = content[:start_pos]
after = content[end_pos:]

# Combine with new section
new_content = before + new_brand_section + after

# Write the result
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully replaced brand section")
print(f"Original section: {start_pos} to {end_pos}")
print(f"New content length: {len(new_content)}")