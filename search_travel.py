#!/usr/bin/env python3
import re

# Read the index.html file
with open('/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find all occurrences with その他 in travel-related contexts
travel_section = False
travel_lines = []
other_occurrences = []

for i, line in enumerate(lines, 1):
    # Check if we're in a travel section
    if '旅行' in line or 'travel' in line.lower():
        if 'section' in line or 'container' in line or 'group' in line:
            travel_section = True
            travel_lines.append((i, line.strip()))
    
    # If we find その他 in a label
    if 'その他' in line and ('label' in line or 'travel' in line.lower()):
        other_occurrences.append((i, line.strip()))
        
    # Track end of sections
    if travel_section and '</div>' in line and i > 1:
        # Check if we're leaving the travel section
        next_few_lines = ''.join(lines[i:min(i+5, len(lines))])
        if '旅行' not in next_few_lines and 'travel' not in next_few_lines.lower():
            travel_section = False

print("Found travel-related lines with 'その他' (Others):")
print("=" * 80)

# Filter for travel-destination-label specifically
travel_destination_others = []
for line_num, content in other_occurrences:
    if 'travel-destination-label' in content or ('travel' in content.lower() and 'その他' in content):
        travel_destination_others.append((line_num, content))

# Print results
if travel_destination_others:
    for line_num, content in travel_destination_others:
        # Clean up the content for display
        clean_content = content.strip()
        if len(clean_content) > 150:
            clean_content = clean_content[:150] + "..."
        print(f"Line {line_num}: {clean_content}")
else:
    print("No direct matches found. Searching more broadly...")
    
    # Search for その他 within travel sections
    print("\nAll occurrences of 'その他' in the file:")
    for line_num, content in other_occurrences[:20]:  # Limit to first 20
        clean_content = content.strip()
        if len(clean_content) > 150:
            clean_content = clean_content[:150] + "..."
        print(f"Line {line_num}: {clean_content}")

# Check for duplicates
print("\n" + "=" * 80)
print("Checking for duplicate entries...")

seen_content = {}
duplicates = []

for line_num, content in other_occurrences:
    # Normalize the content
    normalized = re.sub(r'\s+', ' ', content).strip()
    normalized = re.sub(r'id="[^"]*"', '', normalized)  # Remove unique IDs
    normalized = re.sub(r'for="[^"]*"', '', normalized)  # Remove for attributes
    
    if 'その他' in normalized:
        if normalized in seen_content:
            duplicates.append((seen_content[normalized], line_num, content.strip()))
        else:
            seen_content[normalized] = line_num

if duplicates:
    print(f"\nFound {len(duplicates)} potential duplicate entries:")
    for first_line, second_line, content in duplicates:
        print(f"\nDuplicate found:")
        print(f"  First occurrence: Line {first_line}")
        print(f"  Second occurrence: Line {second_line}")
        print(f"  Content preview: {content[:100]}...")
else:
    print("\nNo exact duplicate entries found.")

# Try to find the specific travel destination section
print("\n" + "=" * 80)
print("Looking for travel destination sections specifically...")

for i, line in enumerate(lines, 1):
    if ('travelDestinations' in line or 'travel-destinations' in line or 
        ('旅行先' in line and ('checkbox' in line or 'label' in line))):
        # Print context around this line
        start = max(0, i - 3)
        end = min(len(lines), i + 10)
        print(f"\nFound travel destination section around line {i}:")
        for j in range(start, end):
            if j < len(lines):
                print(f"  Line {j+1}: {lines[j].strip()[:100]}...")