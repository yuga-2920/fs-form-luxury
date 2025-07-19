#!/bin/bash

echo "Searching for 'その他' (Others) in travel-destination labels..."
echo "================================================"

# Find all lines with travel-destination-label and その他
grep -n "travel-destination-label.*その他" "/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html" 2>/dev/null || {
    # If first pattern doesn't match, try the reverse
    grep -n "その他.*travel-destination-label" "/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html" 2>/dev/null
}

echo ""
echo "Searching for all occurrences of 'その他' in label tags..."
echo "================================================"

# Find all label tags containing その他 and show line numbers with context
grep -n '<label.*その他.*</label>' "/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html" | head -20

echo ""
echo "Searching in travel sections specifically..."
echo "================================================"

# Look for travel sections and その他 within 50 lines
awk '/travel|旅行/{start=NR} start && NR<=start+50 && /その他/{print "Line " NR ": " $0}' "/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html" | head -20