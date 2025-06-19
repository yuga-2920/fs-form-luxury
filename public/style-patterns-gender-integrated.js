// Integrated Gender-based Style Patterns with 3x5 Toggle UI
document.addEventListener('DOMContentLoaded', function() {
    // Check if integratedStylePatternData is properly initialized
    if (useImageMapping && (!integratedStylePatternData || Object.keys(integratedStylePatternData.male).length === 0)) {
        console.warn('Pattern data from imageMapping is empty, using default data');
    }

    // Initialize gender integrated style patterns with a small delay to ensure DOM is ready
    setTimeout(() => {
        // Clear any existing pattern display first
        const patternContainer = document.getElementById('patternSelectionsContainer');
        if (patternContainer) {
            patternContainer.innerHTML = '';
        }
        
        initializeGenderIntegratedStylePatterns();
    }, 500);
});

// Use imageMapping for pattern data if available
// Temporarily disabled to use default data which has correct 5x3 structure
const useImageMapping = false; // typeof imageMapping !== 'undefined' && imageMapping.stylePatterns;

// Function to build pattern data from imageMapping
function buildPatternDataFromMapping() {
    if (!useImageMapping) return null;

    const patternData = { male: {}, female: {} };

    // Process each gender
    ['male', 'female'].forEach(gender => {
        const genderPatterns = imageMapping.stylePatterns[gender];
        if (!genderPatterns) return;

        // Process each style
        Object.keys(genderPatterns).forEach(styleKey => {
            const patterns = genderPatterns[styleKey];
            const styleName = imageMapping.attractiveStyles[gender][styleKey]?.name || styleKey;

            // Organize into 5 rows of 3 patterns each
            const rows = [];
            for (let i = 0; i < 5; i++) {
                const rowPatterns = patterns.slice(i * 3, (i + 1) * 3);
                if (rowPatterns.length > 0) {
                    rows.push({
                        name: '',
                        patterns: rowPatterns
                    });
                }
            }

            patternData[gender][styleKey] = {
                name: styleName,
                rows: rows
            };
        });
    });

    return patternData;
}

// Combined style pattern data for both genders
const integratedStylePatternData = useImageMapping ? buildPatternDataFromMapping() : {
    male: {
        suit: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-suit-1', name: '', image: 'style-male-suit-1.jpg' },
                        { id: 'male-suit-2', name: '', image: 'style-male-suit-2.jpg' },
                        { id: 'male-suit-3', name: '', image: 'style-male-suit-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-suit-4', name: '', image: 'style-male-suit-4.jpg' },
                        { id: 'male-suit-5', name: '', image: 'style-male-suit-5.jpg' },
                        { id: 'male-suit-6', name: '', image: 'style-male-suit-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-suit-7', name: '', image: 'style-male-suit-7.jpg' },
                        { id: 'male-suit-8', name: '', image: 'style-male-suit-8.jpg' },
                        { id: 'male-suit-9', name: '', image: 'style-male-suit-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-suit-10', name: '', image: 'style-male-suit-10.jpg' },
                        { id: 'male-suit-11', name: '', image: 'style-male-suit-11.jpg' },
                        { id: 'male-suit-12', name: '', image: 'style-male-suit-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-suit-13', name: '', image: 'style-male-suit-13.jpg' },
                        { id: 'male-suit-14', name: '', image: 'style-male-suit-14.jpg' },
                        { id: 'male-suit-15', name: '', image: 'style-male-suit-15.jpg' }
                    ]
                }
            ]
        },
        mode: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-mode-1', name: '', image: 'style-male-mode-1.jpg' },
                        { id: 'male-mode-2', name: '', image: 'style-male-mode-2.jpg' },
                        { id: 'male-mode-3', name: '', image: 'style-male-mode-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-mode-4', name: '', image: 'style-male-mode-4.jpg' },
                        { id: 'male-mode-5', name: '', image: 'style-male-mode-5.jpg' },
                        { id: 'male-mode-6', name: '', image: 'style-male-mode-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-mode-7', name: '', image: 'style-male-mode-7.jpg' },
                        { id: 'male-mode-8', name: '', image: 'style-male-mode-8.jpg' },
                        { id: 'male-mode-9', name: '', image: 'style-male-mode-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-mode-10', name: '', image: 'style-male-mode-10.jpg' },
                        { id: 'male-mode-11', name: '', image: 'style-male-mode-11.jpg' },
                        { id: 'male-mode-12', name: '', image: 'style-male-mode-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-mode-13', name: '', image: 'style-male-mode-13.jpg' },
                        { id: 'male-mode-14', name: '', image: 'style-male-mode-14.jpg' },
                        { id: 'male-mode-15', name: '', image: 'style-male-mode-15.jpg' }
                    ]
                }
            ]
        },
        elegant: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-elegant-1', name: '', image: 'style-male-elegant-1.jpg' },
                        { id: 'male-elegant-2', name: '', image: 'style-male-elegant-2.jpg' },
                        { id: 'male-elegant-3', name: '', image: 'style-male-elegant-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-elegant-4', name: '', image: 'style-male-elegant-4.jpg' },
                        { id: 'male-elegant-5', name: '', image: 'style-male-elegant-5.jpg' },
                        { id: 'male-elegant-6', name: '', image: 'style-male-elegant-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-elegant-7', name: '', image: 'style-male-elegant-7.jpg' },
                        { id: 'male-elegant-8', name: '', image: 'style-male-elegant-8.jpg' },
                        { id: 'male-elegant-9', name: '', image: 'style-male-elegant-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-elegant-10', name: '', image: 'style-male-elegant-10.jpg' },
                        { id: 'male-elegant-11', name: '', image: 'style-male-elegant-11.jpg' },
                        { id: 'male-elegant-12', name: '', image: 'style-male-elegant-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-elegant-13', name: '', image: 'style-male-elegant-13.jpg' },
                        { id: 'male-elegant-14', name: '', image: 'style-male-elegant-14.jpg' },
                        { id: 'male-elegant-15', name: '', image: 'style-male-elegant-15.jpg' }
                    ]
                }
            ]
        },
        minimal: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-minimal-1', name: '', image: 'style-male-minimal-1.jpg' },
                        { id: 'male-minimal-2', name: '', image: 'style-male-minimal-2.jpg' },
                        { id: 'male-minimal-3', name: '', image: 'style-male-minimal-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-minimal-4', name: '', image: 'style-male-minimal-4.jpg' },
                        { id: 'male-minimal-5', name: '', image: 'style-male-minimal-5.jpg' },
                        { id: 'male-minimal-6', name: '', image: 'style-male-minimal-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-minimal-7', name: '', image: 'style-male-minimal-7.jpg' },
                        { id: 'male-minimal-8', name: '', image: 'style-male-minimal-8.jpg' },
                        { id: 'male-minimal-9', name: '', image: 'style-male-minimal-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-minimal-10', name: '', image: 'style-male-minimal-10.jpg' },
                        { id: 'male-minimal-11', name: '', image: 'style-male-minimal-11.jpg' },
                        { id: 'male-minimal-12', name: '', image: 'style-male-minimal-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-minimal-13', name: '', image: 'style-male-minimal-13.jpg' },
                        { id: 'male-minimal-14', name: '', image: 'style-male-minimal-14.jpg' },
                        { id: 'male-minimal-15', name: '', image: 'style-male-minimal-15.jpg' }
                    ]
                }
            ]
        },
        street: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-street-1', name: '', image: 'style-male-street-1.jpg' },
                        { id: 'male-street-2', name: '', image: 'style-male-street-2.jpg' },
                        { id: 'male-street-3', name: '', image: 'style-male-street-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-street-4', name: '', image: 'style-male-street-4.jpg' },
                        { id: 'male-street-5', name: '', image: 'style-male-street-5.jpg' },
                        { id: 'male-street-6', name: '', image: 'style-male-street-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-street-7', name: '', image: 'style-male-street-7.jpg' },
                        { id: 'male-street-8', name: '', image: 'style-male-street-8.jpg' },
                        { id: 'male-street-9', name: '', image: 'style-male-street-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-street-10', name: '', image: 'style-male-street-10.jpg' },
                        { id: 'male-street-11', name: '', image: 'style-male-street-11.jpg' },
                        { id: 'male-street-12', name: '', image: 'style-male-street-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-street-13', name: '', image: 'style-male-street-13.jpg' },
                        { id: 'male-street-14', name: '', image: 'style-male-street-14.jpg' },
                        { id: 'male-street-15', name: '', image: 'style-male-street-15.jpg' }
                    ]
                }
            ]
        },
        relax: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-relax-1', name: '', image: 'style-male-relax-1.jpg' },
                        { id: 'male-relax-2', name: '', image: 'style-male-relax-2.jpg' },
                        { id: 'male-relax-3', name: '', image: 'style-male-relax-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-relax-4', name: '', image: 'style-male-relax-4.jpg' },
                        { id: 'male-relax-5', name: '', image: 'style-male-relax-5.jpg' },
                        { id: 'male-relax-6', name: '', image: 'style-male-relax-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-relax-7', name: '', image: 'style-male-relax-7.jpg' },
                        { id: 'male-relax-8', name: '', image: 'style-male-relax-8.jpg' },
                        { id: 'male-relax-9', name: '', image: 'style-male-relax-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-relax-10', name: '', image: 'style-male-relax-10.jpg' },
                        { id: 'male-relax-11', name: '', image: 'style-male-relax-11.jpg' },
                        { id: 'male-relax-12', name: '', image: 'style-male-relax-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-relax-13', name: '', image: 'style-male-relax-13.jpg' },
                        { id: 'male-relax-14', name: '', image: 'style-male-relax-14.jpg' },
                        { id: 'male-relax-15', name: '', image: 'style-male-relax-15.jpg' }
                    ]
                }
            ]
        },
        'american-casual': {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'male-amecas-1', name: '', image: 'style-male-amecas-1.jpg' },
                        { id: 'male-amecas-2', name: '', image: 'style-male-amecas-2.jpg' },
                        { id: 'male-amecas-3', name: '', image: 'style-male-amecas-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-amecas-4', name: '', image: 'style-male-amecas-4.jpg' },
                        { id: 'male-amecas-5', name: '', image: 'style-male-amecas-5.jpg' },
                        { id: 'male-amecas-6', name: '', image: 'style-male-amecas-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-amecas-7', name: '', image: 'style-male-amecas-7.jpg' },
                        { id: 'male-amecas-8', name: '', image: 'style-male-amecas-8.jpg' },
                        { id: 'male-amecas-9', name: '', image: 'style-male-amecas-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-amecas-10', name: '', image: 'style-male-amecas-10.jpg' },
                        { id: 'male-amecas-11', name: '', image: 'style-male-amecas-11.jpg' },
                        { id: 'male-amecas-12', name: '', image: 'style-male-amecas-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'male-amecas-13', name: '', image: 'style-male-amecas-13.jpg' },
                        { id: 'male-amecas-14', name: '', image: 'style-male-amecas-14.jpg' },
                        { id: 'male-amecas-15', name: '', image: 'style-male-amecas-15.jpg' }
                    ]
                }
            ]
        }
    },
    female: {
        // Female style patterns
        feminine: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-feminine-1', name: '', image: 'style-female-feminine-1.jpg' },
                        { id: 'female-feminine-2', name: '', image: 'style-female-feminine-2.jpg' },
                        { id: 'female-feminine-3', name: '', image: 'style-female-feminine-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-feminine-4', name: '', image: 'style-female-feminine-4.jpg' },
                        { id: 'female-feminine-5', name: '', image: 'style-female-feminine-5.jpg' },
                        { id: 'female-feminine-6', name: '', image: 'style-female-feminine-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-feminine-7', name: '', image: 'style-female-feminine-7.jpg' },
                        { id: 'female-feminine-8', name: '', image: 'style-female-feminine-8.jpg' },
                        { id: 'female-feminine-9', name: '', image: 'style-female-feminine-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-feminine-10', name: '', image: 'style-female-feminine-10.jpg' },
                        { id: 'female-feminine-11', name: '', image: 'style-female-feminine-11.jpg' },
                        { id: 'female-feminine-12', name: '', image: 'style-female-feminine-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-feminine-13', name: '', image: 'style-female-feminine-13.jpg' },
                        { id: 'female-feminine-14', name: '', image: 'style-female-feminine-14.jpg' },
                        { id: 'female-feminine-15', name: '', image: 'style-female-feminine-15.jpg' }
                    ]
                }
            ]
        },
        mode: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-mode-1', name: '', image: 'style-female-mode-1.jpg' },
                        { id: 'female-mode-2', name: '', image: 'style-female-mode-2.jpg' },
                        { id: 'female-mode-3', name: '', image: 'style-female-mode-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-mode-4', name: '', image: 'style-female-mode-4.jpg' },
                        { id: 'female-mode-5', name: '', image: 'style-female-mode-5.jpg' },
                        { id: 'female-mode-6', name: '', image: 'style-female-mode-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-mode-7', name: '', image: 'style-female-mode-7.jpg' },
                        { id: 'female-mode-8', name: '', image: 'style-female-mode-8.jpg' },
                        { id: 'female-mode-9', name: '', image: 'style-female-mode-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-mode-10', name: '', image: 'style-female-mode-10.jpg' },
                        { id: 'female-mode-11', name: '', image: 'style-female-mode-11.jpg' },
                        { id: 'female-mode-12', name: '', image: 'style-female-mode-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-mode-13', name: '', image: 'style-female-mode-13.jpg' },
                        { id: 'female-mode-14', name: '', image: 'style-female-mode-14.jpg' },
                        { id: 'female-mode-15', name: '', image: 'style-female-mode-15.jpg' }
                    ]
                }
            ]
        },
        elegant: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-elegant-1', name: '', image: 'style-female-elegant-1.jpg' },
                        { id: 'female-elegant-2', name: '', image: 'style-female-elegant-2.jpg' },
                        { id: 'female-elegant-3', name: '', image: 'style-female-elegant-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-elegant-4', name: '', image: 'style-female-elegant-4.jpg' },
                        { id: 'female-elegant-5', name: '', image: 'style-female-elegant-5.jpg' },
                        { id: 'female-elegant-6', name: '', image: 'style-female-elegant-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-elegant-7', name: '', image: 'style-female-elegant-7.jpg' },
                        { id: 'female-elegant-8', name: '', image: 'style-female-elegant-8.jpg' },
                        { id: 'female-elegant-9', name: '', image: 'style-female-elegant-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-elegant-10', name: '', image: 'style-female-elegant-10.jpg' },
                        { id: 'female-elegant-11', name: '', image: 'style-female-elegant-11.jpg' },
                        { id: 'female-elegant-12', name: '', image: 'style-female-elegant-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-elegant-13', name: '', image: 'style-female-elegant-13.jpg' },
                        { id: 'female-elegant-14', name: '', image: 'style-female-elegant-14.jpg' },
                        { id: 'female-elegant-15', name: '', image: 'style-female-elegant-15.jpg' }
                    ]
                }
            ]
        },
        'urban-conservative': {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-urban-1', name: '', image: 'style-female-urban-1.jpg' },
                        { id: 'female-urban-2', name: '', image: 'style-female-urban-2.jpg' },
                        { id: 'female-urban-3', name: '', image: 'style-female-urban-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-urban-4', name: '', image: 'style-female-urban-4.jpg' },
                        { id: 'female-urban-5', name: '', image: 'style-female-urban-5.jpg' },
                        { id: 'female-urban-6', name: '', image: 'style-female-urban-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-urban-7', name: '', image: 'style-female-urban-7.jpg' },
                        { id: 'female-urban-8', name: '', image: 'style-female-urban-8.jpg' },
                        { id: 'female-urban-9', name: '', image: 'style-female-urban-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-urban-10', name: '', image: 'style-female-urban-10.jpg' },
                        { id: 'female-urban-11', name: '', image: 'style-female-urban-11.jpg' },
                        { id: 'female-urban-12', name: '', image: 'style-female-urban-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-urban-13', name: '', image: 'style-female-urban-13.jpg' },
                        { id: 'female-urban-14', name: '', image: 'style-female-urban-14.jpg' },
                        { id: 'female-urban-15', name: '', image: 'style-female-urban-15.jpg' }
                    ]
                }
            ]
        },
        sporty: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-sporty-1', name: '', image: 'style-female-sporty-1.jpg' },
                        { id: 'female-sporty-2', name: '', image: 'style-female-sporty-2.jpg' },
                        { id: 'female-sporty-3', name: '', image: 'style-female-sporty-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-sporty-4', name: '', image: 'style-female-sporty-4.jpg' },
                        { id: 'female-sporty-5', name: '', image: 'style-female-sporty-5.jpg' },
                        { id: 'female-sporty-6', name: '', image: 'style-female-sporty-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-sporty-7', name: '', image: 'style-female-sporty-7.jpg' },
                        { id: 'female-sporty-8', name: '', image: 'style-female-sporty-8.jpg' },
                        { id: 'female-sporty-9', name: '', image: 'style-female-sporty-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-sporty-10', name: '', image: 'style-female-sporty-10.jpg' },
                        { id: 'female-sporty-11', name: '', image: 'style-female-sporty-11.jpg' },
                        { id: 'female-sporty-12', name: '', image: 'style-female-sporty-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-sporty-13', name: '', image: 'style-female-sporty-13.jpg' },
                        { id: 'female-sporty-14', name: '', image: 'style-female-sporty-14.jpg' },
                        { id: 'female-sporty-15', name: '', image: 'style-female-sporty-15.jpg' }
                    ]
                }
            ]
        },
        natural: {
            name: '',
            rows: [
                {
                    name: '',
                    patterns: [
                        { id: 'female-natural-1', name: '', image: 'style-female-natural-1.jpg' },
                        { id: 'female-natural-2', name: '', image: 'style-female-natural-2.jpg' },
                        { id: 'female-natural-3', name: '', image: 'style-female-natural-3.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-natural-4', name: '', image: 'style-female-natural-4.jpg' },
                        { id: 'female-natural-5', name: '', image: 'style-female-natural-5.jpg' },
                        { id: 'female-natural-6', name: '', image: 'style-female-natural-6.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-natural-7', name: '', image: 'style-female-natural-7.jpg' },
                        { id: 'female-natural-8', name: '', image: 'style-female-natural-8.jpg' },
                        { id: 'female-natural-9', name: '', image: 'style-female-natural-9.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-natural-10', name: '', image: 'style-female-natural-10.jpg' },
                        { id: 'female-natural-11', name: '', image: 'style-female-natural-11.jpg' },
                        { id: 'female-natural-12', name: '', image: 'style-female-natural-12.jpg' }
                    ]
                },
                {
                    name: '',
                    patterns: [
                        { id: 'female-natural-13', name: '', image: 'style-female-natural-13.jpg' },
                        { id: 'female-natural-14', name: '', image: 'style-female-natural-14.jpg' },
                        { id: 'female-natural-15', name: '', image: 'style-female-natural-15.jpg' }
                    ]
                }
            ]
        }
    }
};

// Good/Bad reasons
const evaluationReasons = {
    good: [
        '色合いが好み',
        'シルエットが良い',
        '素材感が好き',
        'デザインが洗練されている',
        'コーディネートしやすそう',
        '自分のスタイルに合う',
        'トレンドを押さえている',
        'ユニークで個性的'
    ],
    bad: [
        '色が合わない',
        'シルエットが好みでない',
        '素材が安っぽく見える',
        'デザインが複雑すぎる',
        'コーディネートが難しそう',
        '自分には似合わない',
        '流行遅れに感じる',
        '派手すぎる・地味すぎる'
    ]
};

let currentStyleKey = null;
let selectedStyles = new Set();
let isUpdating = false;
let updatePatternDisplay = null;

// Toggle pattern row section
window.togglePatternRowSection = function(header) {
    const section = header.parentElement;
    section.classList.toggle('expanded');
};

function initializeGenderIntegratedStylePatterns() {
    // Clear previous state
    selectedStyles.clear();
    currentStyleKey = null;

    const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    const patternSelections = document.getElementById('patternSelections');
    const patternContainer = document.getElementById('patternSelectionsContainer');


    if (!styleCheckboxes.length || !patternSelections || !patternContainer) {
        console.log('Style pattern elements not found');
        return;
    }

    // Get current gender
    function getCurrentGender() {
        const femaleRadio = document.getElementById('gender-female');
        return (femaleRadio && femaleRadio.checked) ? 'female' : 'male';
    }

    // Listen for gender changes
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (selectedStyles.size > 0) {
                updatePatternDisplay(patternContainer, patternSelections);
            }
        });
    });

    let updateTimeout;

    styleCheckboxes.forEach(checkbox => {
        // Add already checked styles to the set
        if (checkbox.checked && checkbox.value && checkbox.value !== 'undefined') {
            selectedStyles.add(checkbox.value);
        }

        checkbox.addEventListener('change', function() {
            console.log('Checkbox changed:', this.value, 'Checked:', this.checked);
            
            if (isUpdating) return;

            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => {
                if (this.checked && this.value && this.value !== 'undefined') {
                    selectedStyles.add(this.value);
                    console.log('Added style:', this.value, 'Total selected:', selectedStyles.size);
                } else if (this.value) {
                    selectedStyles.delete(this.value);
                    console.log('Removed style:', this.value, 'Total selected:', selectedStyles.size);
                }

                updatePatternDisplay(patternContainer, patternSelections);
                
                // Force show the pattern selection section
                if (patternSelections) {
                    patternSelections.style.display = 'block';
                }
            }, 100);
        });
    });

    // Initial display if there are selected styles
    if (selectedStyles.size > 0) {
        updatePatternDisplay(patternContainer, patternSelections);
    }

    updatePatternDisplay = function(container, wrapper) {
        console.log('updatePatternDisplay called, selectedStyles:', Array.from(selectedStyles));
        
        if (isUpdating) return;
        isUpdating = true;

        try {
            container.innerHTML = '';

            if (selectedStyles.size === 0) {
                console.log('No styles selected, hiding wrapper');
                wrapper.style.display = 'none';
                currentStyleKey = null;
                return;
            }

            console.log('Showing wrapper, displaying patterns for styles:', Array.from(selectedStyles));
            wrapper.style.display = 'block';

            if (!currentStyleKey || !selectedStyles.has(currentStyleKey)) {
                currentStyleKey = Array.from(selectedStyles)[0];
            }

            const gender = getCurrentGender();
            const genderData = integratedStylePatternData[gender];

            // Display patterns for all selected styles
            Array.from(selectedStyles).filter(style => style && style !== 'undefined').forEach((styleKey, styleIndex) => {
                const styleData = genderData ? genderData[styleKey] : null;
                if (!styleData) {
                    console.error('No style data found for:', styleKey, 'in gender:', gender);
                    console.error('Available keys:', genderData ? Object.keys(genderData) : 'No gender data');
                    return;
                }
                

                // Add separator between styles if not the first one
                if (styleIndex > 0) {
                    const separator = document.createElement('hr');
                    separator.style.margin = '40px 0';
                    separator.style.border = 'none';
                    separator.style.borderTop = '2px solid #e0e0e0';
                    container.appendChild(separator);
                }

                const patternSection = document.createElement('div');
                patternSection.className = 'toggle-pattern-section';
                patternSection.innerHTML = `
                <div class="pattern-section-header">
                    <h3 class="pattern-section-title">${styleData.name} - パターン選択（${gender === 'female' ? '女性' : '男性'}向け）</h3>
                    <p class="pattern-section-description">各パターンをクリックして評価してください（5行×3列）</p>
                </div>
                <div class="pattern-rows-container" data-style-key="${styleKey}">
                    ${styleData.rows.map((row, rowIndex) => {
                        // Custom row labels
                        const rowLabels = [
                            'ベーシック',
                            'カジュアル', 
                            'モード',
                            'エレガント',
                            'アドバンス'
                        ];
                        const rowLabel = row.name || rowLabels[rowIndex] || `レベル ${rowIndex + 1}`;
                        
                        return `
                            <div class="pattern-row-section${rowIndex === 0 ? ' expanded' : ''}" data-row-index="${rowIndex}" data-style="${styleKey}">
                                <div class="row-header" onclick="togglePatternRowSection(this)">
                                    <div class="row-preview">
                                        ${row.patterns.map(pattern => `
                                            <img src="images/${pattern.image}"
                                                 alt="${pattern.name}"
                                                 class="row-thumbnail"
                                                 loading="lazy"
                                                 onerror="this.src='images/placeholder-${gender}.jpg'">
                                        `).join('')}
                                    </div>
                                    <span class="row-label">${rowLabel}</span>
                                    <span class="toggle-icon">▼</span>
                                </div>
                                <div class="row-details">
                                    <div class="pattern-grid-5">
                                        ${row.patterns.map((pattern, colIndex) => {
                                            const uniqueId = `${styleKey}_${pattern.id}_${styleIndex}_${rowIndex}_${colIndex}`;
                                            return `
                                                <div class="pattern-item" data-pattern-id="${pattern.id}">
                                                    <div class="pattern-image-container">
                                                        <img src="images/${pattern.image}"
                                                             alt="${pattern.name}"
                                                             class="pattern-full-image"
                                                             loading="lazy"
                                                             onerror="this.src='images/placeholder-${gender}.jpg'">
                                                    </div>
                                                    <h5 class="pattern-item-name">${pattern.name}</h5>
                                                    <div class="evaluation-section">
                                                        <div class="good-bad-selection">
                                                            <label class="eval-option good">
                                                                <input type="radio"
                                                                       name="eval_${uniqueId}"
                                                                       value="good"
                                                                       onchange="handleEvaluation('${uniqueId}', 'good', '${pattern.id}')">
                                                                <span>Good</span>
                                                            </label>
                                                            <label class="eval-option bad">
                                                                <input type="radio"
                                                                       name="eval_${uniqueId}"
                                                                       value="bad"
                                                                       onchange="handleEvaluation('${uniqueId}', 'bad', '${pattern.id}')">
                                                                <span>Bad</span>
                                                            </label>
                                                        </div>
                                                        <div class="reason-selection" id="reasons_${uniqueId}" style="display: none;">
                                                            <label class="reason-label">理由を選択:</label>
                                                            <div class="reason-options" id="reason_options_${uniqueId}">
                                                                <!-- Reasons will be populated dynamically -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;

                container.appendChild(patternSection);
            }); // End of forEach for selected styles

        } finally {
            setTimeout(() => {
                isUpdating = false;
            }, 200);
        }
    }
}

// Toggle pattern row section
window.togglePatternRowSection = function(header) {
    const rowSection = header.parentElement;
    const styleContainer = rowSection.parentElement; // pattern-rows-container
    const allRowSections = styleContainer.querySelectorAll('.pattern-row-section');

    // Close all other rows within the same style section
    allRowSections.forEach(section => {
        if (section !== rowSection) {
            section.classList.remove('expanded');
        }
    });

    // Toggle current row
    rowSection.classList.toggle('expanded');
};

// Handle Good/Bad evaluation
window.handleEvaluation = function(patternId, evaluation, originalPatternId) {
    const reasonsDiv = document.getElementById(`reasons_${patternId}`);
    const reasonOptionsDiv = document.getElementById(`reason_options_${patternId}`);

    if (reasonsDiv && reasonOptionsDiv) {
        reasonsDiv.style.display = 'block';

        // Clear and populate reasons
        const reasons = evaluationReasons[evaluation];
        reasonOptionsDiv.innerHTML = reasons.map((reason, index) => `
            <label class="reason-checkbox">
                <input type="checkbox"
                       name="reason_${patternId}"
                       value="${reason}">
                <span>${reason}</span>
            </label>
        `).join('');
    }

    // Mark pattern as evaluated
    const patternItem = document.querySelector(`[data-pattern-id="${originalPatternId}"]`);
    if (patternItem) {
        patternItem.classList.add('evaluated', evaluation);
    }
};

// Test function for pattern display
window.testPatternDisplay = function() {
    console.log('Test button clicked');
    
    // Force add a test style
    selectedStyles.clear();
    selectedStyles.add('suit');
    
    const patternSelections = document.getElementById('patternSelections');
    const patternContainer = document.getElementById('patternSelectionsContainer');
    
    console.log('Elements found:', !!patternSelections, !!patternContainer);
    
    if (patternSelections && patternContainer && updatePatternDisplay) {
        updatePatternDisplay(patternContainer, patternSelections);
    }
};

// Make functions available globally
window.initializeGenderIntegratedStylePatterns = initializeGenderIntegratedStylePatterns;
window.updateGenderStylePatterns = function() {
    if (selectedStyles.size > 0) {
        const patternSelections = document.getElementById('patternSelections');
        const patternContainer = document.getElementById('patternSelectionsContainer');
        if (patternSelections && patternContainer) {
            updatePatternDisplay(patternContainer, patternSelections);
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeGenderIntegratedStylePatterns,
        integratedStylePatternData
    };
}