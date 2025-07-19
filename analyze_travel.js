const fs = require('fs');

// Read the index.html file
const content = fs.readFileSync('/Users/yuga/Documents/programing/claude/form/fs-form/public/index.html', 'utf8');

// Split into lines
const lines = content.split('\n');

// Find all occurrences of 'その他' in travel-destination contexts
const occurrences = [];
let inTravelSection = false;

lines.forEach((line, index) => {
    // Check if we're entering a travel section
    if (line.toLowerCase().includes('travel') || line.includes('旅行')) {
        inTravelSection = true;
    }
    
    // Check for section end markers
    if (inTravelSection && line.includes('</section>')) {
        inTravelSection = false;
    }
    
    // Look for 'その他' in label tags
    if (line.includes('その他') && (line.includes('label') || line.includes('travel-destination'))) {
        occurrences.push({
            lineNumber: index + 1,
            content: line.trim(),
            inTravelSection: inTravelSection
        });
    }
});

console.log(`Found ${occurrences.length} occurrences of 'その他' in label/travel contexts:\n`);

// Group by similar content to find duplicates
const contentMap = new Map();

occurrences.forEach(occ => {
    // Normalize content for comparison (remove IDs and whitespace variations)
    let normalized = occ.content
        .replace(/id="[^"]*"/g, '')
        .replace(/for="[^"]*"/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    if (!contentMap.has(normalized)) {
        contentMap.set(normalized, []);
    }
    contentMap.get(normalized).push(occ);
});

// Report duplicates
let duplicateCount = 0;
contentMap.forEach((occList, normalizedContent) => {
    if (occList.length > 1) {
        duplicateCount++;
        console.log(`\nDuplicate found (${occList.length} occurrences):`);
        console.log(`Content: ${normalizedContent.substring(0, 100)}...`);
        occList.forEach(occ => {
            console.log(`  - Line ${occ.lineNumber}: ${occ.inTravelSection ? '[In Travel Section]' : '[Outside Travel Section]'}`);
        });
    }
});

if (duplicateCount === 0) {
    console.log('\nNo exact duplicates found.');
}

// Show all occurrences
console.log('\n\nAll occurrences:');
occurrences.forEach((occ, idx) => {
    console.log(`${idx + 1}. Line ${occ.lineNumber}: ${occ.content.substring(0, 150)}...`);
});

// Specifically look for travel-destination-label
console.log('\n\nSpecifically searching for "travel-destination-label":');
const travelDestLabels = occurrences.filter(occ => 
    occ.content.includes('travel-destination-label')
);

if (travelDestLabels.length > 0) {
    travelDestLabels.forEach(occ => {
        console.log(`Line ${occ.lineNumber}: ${occ.content}`);
    });
} else {
    console.log('No occurrences with "travel-destination-label" class found.');
}