#!/usr/bin/env python3
import re

# Read the index.html file
with open('/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find all occurrences of travel-destination-label with その他
pattern = re.compile(r'travel-destination-label.*その他|その他.*travel-destination-label')
occurrences = []

for i, line in enumerate(lines, 1):
    if pattern.search(line):
        occurrences.append((i, line.strip()))

# Also search for just label tags with その他 in travel sections
travel_section = False
for i, line in enumerate(lines, 1):
    if 'travel' in line.lower() and ('section' in line or 'container' in line):
        travel_section = True
    elif '</section>' in line or '</div>' in line:
        if travel_section and 'travel' not in lines[min(i, len(lines)-1)]:
            travel_section = False
    
    if travel_section and 'label' in line and 'その他' in line:
        if not any(i == occ[0] for occ in occurrences):
            occurrences.append((i, line.strip()))

# Sort by line number
occurrences.sort(key=lambda x: x[0])

print(f"Found {len(occurrences)} occurrences of 'その他' in travel-destination labels:\n")
for line_num, content in occurrences:
    print(f"Line {line_num}: {content[:150]}...")

# Check for duplicates
seen_content = {}
duplicates = []
for line_num, content in occurrences:
    # Normalize content for comparison
    normalized = re.sub(r'\s+', ' ', content).strip()
    if normalized in seen_content:
        duplicates.append((seen_content[normalized], line_num, normalized))
    else:
        seen_content[normalized] = line_num

if duplicates:
    print(f"\n\nFound {len(duplicates)} duplicate entries:")
    for first_line, second_line, content in duplicates:
        print(f"\nDuplicate found:")
        print(f"  First occurrence: Line {first_line}")
        print(f"  Second occurrence: Line {second_line}")
        print(f"  Content: {content[:150]}...")
else:
    print("\n\nNo duplicate entries found.")