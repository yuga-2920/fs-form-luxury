// Brand data for all brands with circular logo display
const brandsData = [
    {
        category: 'ハイエンド・ラグジュアリーブランド',
        brands: [
            { id: 'HERMES', name: 'HERMES', initial: 'H', image: 'brand-hermes.jpg' },
            { id: 'LOUIS_VUITTON', name: 'LOUIS VUITTON', initial: 'LV', image: 'brand-lv.jpg' },
            { id: 'CHANEL', name: 'CHANEL', initial: 'C', image: 'brand-chanel.jpg' }
        ]
    },
    {
        category: 'ラグジュアリーブランド（クラシック & エレガント）',
        brands: [
            { id: 'DIOR', name: 'Dior', initial: 'D', image: 'brand-dior.jpg' },
            { id: 'SAINT_LAURENT', name: 'Saint Laurent', initial: 'SL', image: 'brand-sl.jpg' },
            { id: 'FENDI', name: 'Fendi', initial: 'F', image: 'brand-fendi.jpg' },
            { id: 'VALENTINO', name: 'Valentino', initial: 'V', image: 'brand-valentino.jpg' }
        ]
    },
    {
        category: 'ラグジュアリーブランド（ミニマル & モダン）',
        brands: [
            { id: 'CELINE', name: 'Celine', initial: 'C', image: 'brand-celine.jpg' },
            { id: 'LOEWE', name: 'Loewe', initial: 'L', image: 'brand-loewe.jpg' },
            { id: 'PRADA', name: 'Prada', initial: 'P', image: 'brand-prada.jpg' },
            { id: 'JIL_SANDER', name: 'Jil Sander', initial: 'JS', image: 'brand-jilsander.jpg' },
            { id: 'BOTTEGA_VENETA', name: 'Bottega Veneta', initial: 'BV', image: 'brand-bottega.jpg' }
        ]
    },
    {
        category: 'ラグジュアリーブランド（個性/華やか）',
        brands: [
            { id: 'GUCCI', name: 'Gucci', initial: 'G', image: 'brand-gucci.jpg' },
            { id: 'BALENCIAGA', name: 'Balenciaga', initial: 'B', image: 'brand-balenciaga.jpg' },
            { id: 'VERSACE', name: 'Versace', initial: 'V', image: 'brand-versace.jpg' }
        ]
    },
    {
        category: 'ラグジュアリーブランド（個性/アバンギャルド）',
        brands: [
            { id: 'COMME_DES_GARCONS', name: 'Comme des Garçons', initial: 'CDG', image: 'brand-cdg.jpg' },
            { id: 'YOHJI_YAMAMOTO', name: 'Yohji Yamamoto', initial: 'YY', image: 'brand-yohji.jpg' },
            { id: 'MAISON_MARGIELA', name: 'Maison Margiela', initial: 'MM', image: 'brand-margiela.jpg' },
            { id: 'RICK_OWENS', name: 'Rick Owens', initial: 'RO', image: 'brand-rickowens.jpg' }
        ]
    },
    {
        category: 'ラグジュアリーブランド（スポーツ & カジュアル ラグジュアリー）',
        brands: [
            { id: 'MONCLER', name: 'Moncler', initial: 'M', image: 'brand-moncler.jpg' },
            { id: 'STONE_ISLAND', name: 'Stone Island', initial: 'SI', image: 'brand-stoneisland.jpg' },
            { id: 'OFF_WHITE', name: 'Off-White', initial: 'OW', image: 'brand-offwhite.jpg' }
        ]
    },
    {
        category: 'プレミアムブランド（クラシック & ビジネス）',
        brands: [
            { id: 'BURBERRY', name: 'Burberry', initial: 'B', image: 'brand-burberry.jpg' },
            { id: 'MAX_MARA', name: 'Max Mara', initial: 'MM', image: 'brand-maxmara.jpg' },
            { id: 'RALPH_LAUREN', name: 'Ralph Lauren', initial: 'RL', image: 'brand-ralphlauren.jpg' },
            { id: 'THOM_BROWNE', name: 'Thom Browne', initial: 'TB', image: 'brand-thombrowne.jpg' }
        ]
    },
    {
        category: 'プレミアムブランド（カジュアル & トレンド）',
        brands: [
            { id: 'ALEXANDER_WANG', name: 'Alexander Wang', initial: 'AW', image: 'brand-alexanderwang.jpg' },
            { id: 'MSGM', name: 'MSGM', initial: 'M', image: 'brand-msgm.jpg' },
            { id: 'KENZO', name: 'Kenzo', initial: 'K', image: 'brand-kenzo.jpg' },
            { id: 'ISABEL_MARANT', name: 'Isabel Marant', initial: 'IM', image: 'brand-isabelmarant.jpg' },
            { id: 'GANNI', name: 'Ganni', initial: 'G', image: 'brand-ganni.jpg' }
        ]
    },
    {
        category: 'プレミアムブランド（ミニマル）',
        brands: [
            { id: 'COS', name: 'COS', initial: 'C', image: 'brand-cos.jpg' },
            { id: 'THEORY', name: 'Theory', initial: 'T', image: 'brand-theory.jpg' },
            { id: 'EVERLANE', name: 'Everlane', initial: 'E', image: 'brand-everlane.jpg' },
            { id: 'ARKET', name: 'Arket', initial: 'A', image: 'brand-arket.jpg' }
        ]
    },
    {
        category: 'プレミアムブランド（アメリカン & ワーク）',
        brands: [
            { id: 'CARHARTT_WIP', name: 'Carhartt WIP', initial: 'C', image: 'brand-carhartt.jpg' },
            { id: 'STUSSY', name: 'Stussy', initial: 'S', image: 'brand-stussy.jpg' },
            { id: 'SUPREME', name: 'Supreme', initial: 'S', image: 'brand-supreme.jpg' },
            { id: 'APC', name: 'A.P.C.', initial: 'APC', image: 'brand-apc.jpg' }
        ]
    },
    {
        category: 'ジャパンブランド（モード）',
        brands: [
            { id: 'ISSEY_MIYAKE', name: 'Issey Miyake', initial: 'IM', image: 'brand-isseymiyake.jpg' },
            { id: 'SACAI', name: 'sacai', initial: 'S', image: 'brand-sacai.jpg' },
            { id: 'UNDERCOVER', name: 'Undercover', initial: 'U', image: 'brand-undercover.jpg' },
            { id: 'TOGA', name: 'Toga', initial: 'T', image: 'brand-toga.jpg' }
        ]
    },
    {
        category: 'ジャパンブランド（カジュアル）',
        brands: [
            { id: 'UNIQLO', name: 'Uniqlo', initial: 'U', image: 'brand-uniqlo.jpg' },
            { id: 'MUJI', name: 'Muji', initial: 'M', image: 'brand-muji.jpg' },
            { id: 'BEAMS', name: 'Beams', initial: 'B', image: 'brand-beams.jpg' },
            { id: 'UNITED_ARROWS', name: 'United Arrows', initial: 'UA', image: 'brand-unitedarrows.jpg' }
        ]
    }
];

// Function to generate brand HTML
function generateBrandHTML(brand) {
    return `
                        <!-- ${brand.name} -->
                        <div class="brand-selection-item" data-brand="${brand.id}">
                            <div class="brand-logo-container" data-brand-initial="${brand.initial}">
                                <img src="images/${brand.image}" alt="${brand.name}" onerror="this.style.display='none'">
                            </div>
                            <div class="brand-name">${brand.name}</div>
                            <div class="brand-selection-buttons">
                                <button type="button" class="brand-select-btn like" data-brand="${brand.id}" data-preference="like">
                                    <span class="btn-icon">○</span>
                                </button>
                                <button type="button" class="brand-select-btn dislike" data-brand="${brand.id}" data-preference="dislike">
                                    <span class="btn-icon">×</span>
                                </button>
                            </div>
                            <input type="hidden" name="brandPreference_${brand.id}" value="">
                        </div>`;
}

// Generate complete HTML
function generateCompleteHTML() {
    let html = `
                <div class="form-group brand-selection-enhanced">
                    <div class="brand-selection-header">
                        <label>ブランドの好み</label>
                        <div class="brand-selection-legend">
                            <div class="legend-item">
                                <span class="legend-circle like">○</span>
                                <span>好き</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-circle dislike">×</span>
                                <span>苦手</span>
                            </div>
                        </div>
                    </div>

                    <div class="brand-selection-grid">`;

    brandsData.forEach(category => {
        html += `
                        <div class="brand-category-header">${category.category}</div>`;
        
        category.brands.forEach(brand => {
            html += generateBrandHTML(brand);
        });
    });

    html += `
                    </div>
                </div>`;
    
    return html;
}

// Output the HTML
console.log(generateCompleteHTML());

// Also create a file with the HTML
const fs = require('fs');
fs.writeFileSync('brand-section-updated.html', generateCompleteHTML(), 'utf8');
console.log('Brand section HTML has been generated and saved to brand-section-updated.html');