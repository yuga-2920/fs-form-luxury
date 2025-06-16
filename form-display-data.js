// Form Display Data - Comprehensive management of all form items, images, and content for Men's and Ladies forms
const formDisplayData = {
    // Men's Form Data
    men: {
        // Basic Information Text
        textContent: {
            mainTitle: 'Personal Style Configuration',
            mainSubtitle: 'お客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください',
            sectionTitles: {
                basicInfo: 'お客様の基本情報',
                lifestyle: 'ライフスタイル',
                stylePreference: 'スタイルの嗜好性',
                budget: 'ご予算',
                brands: 'ブランドについて',
                bodyInfo: '体型情報',
                serviceUsage: 'サービス利用に関するご要望',
                fashionInterest: 'ファッションへの興味',
                travel: '旅行の頻度と服装のニーズ',
                corporate: '法人情報'
            }
        },
        
        // Style Options (3-1. 魅力を感じるスタイル)
        attractiveStyles: [
            { id: 'classic', name: 'クラシック', image: 'images/style-classic.jpg' },
            { id: 'minimal', name: 'ミニマル', image: 'images/style-minimal.jpg' },
            { id: 'casual-chic', name: 'カジュアルシック', image: 'images/style-casual-chic.jpg' },
            { id: 'mode', name: 'モード', image: 'images/style-mode.jpg' },
            { id: 'elegant', name: 'エレガント', image: 'images/style-elegant.jpg' },
            { id: 'american-casual', name: 'アメリカンカジュアル', image: 'images/style-american-casual.jpg' },
            { id: 'conservative', name: 'コンサバティブ', image: 'images/style-conservative.jpg' },
            { id: 'relax', name: 'リラックス', image: 'images/style-relax.jpg' },
            { id: 'street', name: 'ストリート', image: 'images/style-street.jpg' }
        ],
        
        // Avoid Items (3-2. 避けたいアイテム)
        avoidItems: [
            { id: 'logo', name: '大きなロゴ', image: 'images/avoid-logo.jpg' },
            { id: 'bright-color', name: '明るすぎる色', image: 'images/avoid-bright-color.jpg' },
            { id: 'tight', name: 'タイト過ぎる', image: 'images/avoid-tight.jpg' },
            { id: 'oversized', name: 'オーバーサイズ', image: 'images/avoid-oversized.jpg' },
            { id: 'bold-print', name: '派手なプリント', image: 'images/avoid-bold-print.jpg' },
            { id: 'synthetic', name: '安価な素材', image: 'images/avoid-synthetic.jpg' },
            { id: 'rough-texture', name: '粗い質感', image: 'images/avoid-rough-texture.jpg' },
            { id: 'neon-colors', name: 'ネオンカラー', image: 'images/avoid-neon-colors.jpg' },
            { id: 'complex-pattern', name: '複雑な柄', image: 'images/avoid-complex-pattern.jpg' },
            { id: 'flashy-decoration', name: '派手な装飾', image: 'images/avoid-flashy-decoration.jpg' },
            { id: 'boxy-silhouette', name: 'ボクシーなシルエット', image: 'images/avoid-boxy-silhouette.jpg' },
            { id: 'sporty-casual', name: 'スポーティカジュアル', image: 'images/avoid-sporty-casual.jpg' }
        ],
        
        // Item GOOD & BAD Evaluation Items (Pattern Selection)
        styleItems: {
            classic: {
                tops: [
                    { id: 'classic-shirt', name: 'クラシックシャツ', image: 'images/item-shirt1.jpg' },
                    { id: 'classic-knit', name: 'クラシックニット', image: 'images/item-knit1.jpg' },
                    { id: 'classic-polo', name: 'ポロシャツ', image: 'images/item-polo1.jpg' }
                ],
                bottoms: [
                    { id: 'classic-trouser', name: 'ウールトラウザー', image: 'images/item-pants1.jpg' },
                    { id: 'classic-chino', name: 'チノパン', image: 'images/item-chino1.jpg' },
                    { id: 'classic-denim', name: 'クラシックデニム', image: 'images/item-denim1.jpg' }
                ],
                outerwear: [
                    { id: 'classic-jacket', name: 'テーラードジャケット', image: 'images/item-jacket1.jpg' },
                    { id: 'classic-coat', name: 'チェスターコート', image: 'images/item-coat1.jpg' }
                ],
                shoes: [
                    { id: 'classic-leather', name: 'レザーシューズ', image: 'images/item-shoes1.jpg' },
                    { id: 'classic-loafer', name: 'ローファー', image: 'images/item-loafer1.jpg' }
                ],
                bags: [
                    { id: 'classic-briefcase', name: 'ブリーフケース', image: 'images/item-bag1.jpg' },
                    { id: 'classic-tote', name: 'レザートート', image: 'images/item-tote1.jpg' }
                ]
            },
            minimal: {
                tops: [
                    { id: 'minimal-tee', name: 'ミニマルTシャツ', image: 'images/item-tee2.jpg' },
                    { id: 'minimal-shirt', name: 'シンプルシャツ', image: 'images/item-shirt2.jpg' }
                ],
                bottoms: [
                    { id: 'minimal-pants', name: 'スリムパンツ', image: 'images/item-pants2.jpg' },
                    { id: 'minimal-shorts', name: 'ミニマルショーツ', image: 'images/item-shorts2.jpg' }
                ],
                outerwear: [
                    { id: 'minimal-blazer', name: 'ミニマルブレザー', image: 'images/item-blazer2.jpg' }
                ],
                shoes: [
                    { id: 'minimal-sneaker', name: 'ホワイトスニーカー', image: 'images/item-sneaker2.jpg' }
                ],
                bags: [
                    { id: 'minimal-backpack', name: 'ミニマルバックパック', image: 'images/item-backpack2.jpg' }
                ]
            }
            // Add more styles as needed...
        },
        
        // Weekend Activities (2-3. 休日の過ごし方)
        weekendActivities: [
            { id: 'sports', name: 'スポーツ', image: 'images/weekend-sports.jpg' },
            { id: 'outdoor', name: 'アウトドア', image: 'images/weekend-outdoor.jpg' },
            { id: 'dining', name: '外食・グルメ', image: 'images/weekend-dining.jpg' },
            { id: 'business-dining', name: 'ビジネス会食', image: 'images/weekend-business-dining.jpg' },
            { id: 'executive', name: '経営者の集まり', image: 'images/weekend-executive.jpg' },
            { id: 'family', name: '家族との時間', image: 'images/weekend-family.jpg' },
            { id: 'solo', name: '一人の時間', image: 'images/weekend-solo.jpg' },
            { id: 'date', name: 'デート', image: 'images/weekend-date.jpg' },
            { id: 'event', name: 'イベント・パーティー', image: 'images/weekend-event.jpg' },
            { id: 'business', name: 'ビジネス関連', image: 'images/weekend-business.jpg' },
            { id: 'drive', name: 'ドライブ', image: 'images/weekend-drive.jpg' }
        ],
        
        // Scene Options (2-2. どんなシーンが多いか)
        businessScenes: [
            { id: 'internal-meeting', name: '社内会議', image: 'images/scene-internal-meeting.jpg' },
            { id: 'external-meeting', name: '社外会議・商談', image: 'images/scene-external-meeting.jpg' },
            { id: 'business-dining', name: '会食・接待', image: 'images/scene-business-dining.jpg' },
            { id: 'seminar', name: 'セミナー・講演', image: 'images/scene-seminar.jpg' },
            { id: 'exhibition', name: '展示会・イベント', image: 'images/scene-exhibition.jpg' },
            { id: 'site-visit', name: '現場訪問・視察', image: 'images/scene-site-visit.jpg' }
        ],
        
        casualScenes: [
            { id: 'shopping', name: 'ショッピング', image: 'images/scene-shopping.jpg' },
            { id: 'casual-dining', name: 'カジュアルな外食', image: 'images/scene-casual-dining.jpg' },
            { id: 'fitness', name: 'フィットネス・ジム', image: 'images/scene-fitness.jpg' },
            { id: 'travel', name: '旅行・レジャー', image: 'images/scene-travel.jpg' },
            { id: 'culture', name: '美術館・映画館', image: 'images/scene-culture.jpg' },
            { id: 'sports-watching', name: 'スポーツ観戦', image: 'images/scene-sports-watching.jpg' }
        ],
        
        formalScenes: [
            { id: 'formal-party', name: 'フォーマルパーティー', image: 'images/scene-formal.jpg' },
            { id: 'ceremony', name: '冠婚葬祭', image: 'images/scene-ceremony.jpg' },
            { id: 'luxury-dining', name: '高級レストラン', image: 'images/scene-luxury-dining.jpg' },
            { id: 'party', name: 'パーティー・レセプション', image: 'images/scene-party.jpg' },
            { id: 'golf', name: 'ゴルフ', image: 'images/scene-golf.jpg' },
            { id: 'school-event', name: '学校行事', image: 'images/scene-school-event.jpg' }
        ],
        
        // Dress Code Options (2-1-C. ドレスコード)
        dressCodes: [
            { id: 'suit-required', name: 'スーツ必須', image: 'images/dress-code-suit-required.jpg' },
            { id: 'business-casual', name: 'ビジネスカジュアル', image: 'images/dress-code-business-casual.jpg' },
            { id: 'smart-casual', name: 'スマートカジュアル', image: 'images/dress-code-smart-casual.jpg' },
            { id: 'casual', name: 'カジュアルOK', image: 'images/dress-code-casual.jpg' },
            { id: 'no-restriction', name: '規定なし', image: 'images/dress-code-no-restriction.jpg' },
            { id: 'uniform', name: '制服・作業着', image: 'images/dress-code-uniform.jpg' }
        ],
        
        // Favorite Brands (5-1. 気に入っているブランド)
        favoriteBrands: [
            { id: 'lv', name: 'Louis Vuitton', image: 'images/brand-lv.jpg' },
            { id: 'gucci', name: 'Gucci', image: 'images/brand-gucci.jpg' },
            { id: 'hermes', name: 'Hermès', image: 'images/brand-hermes.jpg' },
            { id: 'chanel', name: 'Chanel', image: 'images/brand-chanel.jpg' },
            { id: 'dior', name: 'Dior', image: 'images/brand-dior.jpg' },
            { id: 'prada', name: 'Prada', image: 'images/brand-prada.jpg' },
            { id: 'bottega', name: 'Bottega Veneta', image: 'images/brand-bottega.jpg' },
            { id: 'celine', name: 'Celine', image: 'images/brand-celine.jpg' },
            { id: 'sl', name: 'Saint Laurent', image: 'images/brand-sl.jpg' },
            { id: 'balenciaga', name: 'Balenciaga', image: 'images/brand-balenciaga.jpg' }
        ],
        
        // Investment Items (4-4. 投資アイテム)
        investmentItems: [
            { id: 'outer', name: 'アウター', image: 'images/investment-outer.jpg' },
            { id: 'shoes', name: 'シューズ', image: 'images/investment-shoes.jpg' },
            { id: 'bag', name: 'バッグ', image: 'images/investment-bag.jpg' },
            { id: 'bottoms', name: 'ボトムス', image: 'images/investment-bottoms.jpg' }
        ],
        
        // Travel Destinations (9-2. よく行かれる旅行先)
        travelDestinations: {
            domestic: [
                { id: 'city', name: '都市（例: 東京、大阪）', image: 'images/travel-domestic-city.jpg' },
                { id: 'resort', name: 'リゾート（例: 沖縄、北海道）', image: 'images/travel-domestic-resort.jpg' },
                { id: 'hot-springs', name: '温泉地', image: 'images/travel-hot-springs.jpg' },
                { id: 'outdoor', name: 'アウトドア/自然（例: 山、海）', image: 'images/travel-outdoor.jpg' },
                { id: 'other', name: 'その他', image: 'images/travel-other.jpg' }
            ],
            overseas: [
                { id: 'asia', name: 'アジア', image: 'images/travel-overseas-asia.jpg' },
                { id: 'europe-america', name: '欧米', image: 'images/travel-overseas-western.jpg' },
                { id: 'resort', name: 'ビーチリゾート', image: 'images/travel-overseas-resort.jpg' },
                { id: 'other', name: 'その他', image: 'images/travel-overseas-other.jpg' }
            ]
        },
        
        // Service Options (Section 7)
        serviceOptions: [
            { id: 'app', name: 'アプリ利用', image: 'images/service-app.jpg' },
            { id: 'partner', name: 'パートナー制度', image: 'images/service-partner.jpg' },
            { id: 'gift', name: 'プレゼントサービス', image: 'images/service-gift.jpg' },
            { id: 'transport', name: '送迎サービス', image: 'images/service-transport.jpg' },
            { id: 'expectations', name: 'サービスへの期待', image: 'images/service-expectations.jpg' }
        ]
    },
    
    // Ladies Form Data
    ladies: {
        // Basic Information Text
        textContent: {
            mainTitle: 'Personal Style Configuration for Women',
            mainSubtitle: '女性のお客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください',
            sectionTitles: {
                basicInfo: 'お客様の基本情報',
                lifestyle: 'ライフスタイル',
                stylePreference: 'スタイルの嗜好性',
                budget: 'ご予算',
                brands: 'ブランドについて',
                bodyInfo: '体型情報',
                serviceUsage: 'サービス利用に関するご要望',
                fashionInterest: 'ファッションへの興味',
                travel: '旅行の頻度と服装のニーズ',
                corporate: '法人情報'
            }
        },
        
        // Style Options (3-1. 魅力を感じるスタイル)
        attractiveStyles: [
            { id: 'feminine', name: 'フェミニン', image: 'images/style-feminine.jpg' },
            { id: 'elegant', name: 'エレガント', image: 'images/style-elegant.jpg' },
            { id: 'casual-chic', name: 'カジュアルシック', image: 'images/style-casual-chic.jpg' },
            { id: 'modern', name: 'モダン', image: 'images/style-modern.jpg' },
            { id: 'classic', name: 'クラシック', image: 'images/style-classic.jpg' },
            { id: 'natural', name: 'ナチュラル', image: 'images/style-natural.jpg' },
            { id: 'sophisticated', name: 'ソフィスティケート', image: 'images/style-sophisticated.jpg' },
            { id: 'trendy', name: 'トレンディ', image: 'images/style-trendy.jpg' },
            { id: 'artistic', name: 'アーティスティック', image: 'images/style-artistic.jpg' }
        ],
        
        // Avoid Items (3-2. 避けたいアイテム)
        avoidItems: [
            { id: 'mini-length', name: 'ミニ丈', image: 'images/avoid-mini-length.jpg' },
            { id: 'excessive-exposure', name: '過度な露出', image: 'images/avoid-excessive-exposure.jpg' },
            { id: 'frills-lace', name: 'フリル・レース', image: 'images/avoid-frills-lace.jpg' },
            { id: 'high-heels', name: 'ハイヒール', image: 'images/avoid-high-heels.jpg' },
            { id: 'thin-material', name: '薄い素材', image: 'images/avoid-thin-material.jpg' },
            { id: 'ruffles', name: 'ラッフル', image: 'images/avoid-ruffles.jpg' },
            { id: 'animal-pattern', name: 'アニマル柄', image: 'images/avoid-animal-pattern.jpg' },
            { id: 'bold-print', name: '派手なプリント', image: 'images/avoid-bold-print.jpg' },
            { id: 'flashy-decoration', name: '派手な装飾', image: 'images/avoid-flashy-decoration.jpg' },
            { id: 'tight', name: 'タイト過ぎる', image: 'images/avoid-tight.jpg' },
            { id: 'oversized', name: 'オーバーサイズ', image: 'images/avoid-oversized.jpg' },
            { id: 'sporty-casual', name: 'スポーティカジュアル', image: 'images/avoid-sporty-casual.jpg' }
        ],
        
        // Item GOOD & BAD Evaluation Items (Pattern Selection) 
        styleItems: {
            feminine: {
                tops: [
                    { id: 'feminine-blouse', name: 'フェミニンブラウス', image: 'images/item-blouse1.jpg' },
                    { id: 'feminine-knit', name: 'ソフトニット', image: 'images/item-knit1.jpg' },
                    { id: 'feminine-cardigan', name: 'カーディガン', image: 'images/item-cardigan1.jpg' }
                ],
                bottoms: [
                    { id: 'feminine-skirt', name: 'フレアスカート', image: 'images/item-skirt1.jpg' },
                    { id: 'feminine-pants', name: 'テーパードパンツ', image: 'images/item-pants1.jpg' },
                    { id: 'feminine-dress', name: 'ワンピース', image: 'images/item-dress1.jpg' }
                ],
                outerwear: [
                    { id: 'feminine-coat', name: 'トレンチコート', image: 'images/item-coat1.jpg' },
                    { id: 'feminine-jacket', name: 'ツイードジャケット', image: 'images/item-jacket1.jpg' }
                ],
                shoes: [
                    { id: 'feminine-pumps', name: 'パンプス', image: 'images/item-pumps1.jpg' },
                    { id: 'feminine-flats', name: 'バレエシューズ', image: 'images/item-flats1.jpg' }
                ],
                bags: [
                    { id: 'feminine-handbag', name: 'ハンドバッグ', image: 'images/item-handbag1.jpg' },
                    { id: 'feminine-tote', name: 'トートバッグ', image: 'images/item-tote1.jpg' }
                ]
            },
            elegant: {
                tops: [
                    { id: 'elegant-silk', name: 'シルクブラウス', image: 'images/item-silk1.jpg' },
                    { id: 'elegant-cashmere', name: 'カシミヤニット', image: 'images/item-cashmere1.jpg' }
                ],
                bottoms: [
                    { id: 'elegant-pencil', name: 'ペンシルスカート', image: 'images/item-pencil1.jpg' },
                    { id: 'elegant-wide', name: 'ワイドパンツ', image: 'images/item-wide1.jpg' }
                ],
                outerwear: [
                    { id: 'elegant-cape', name: 'ケープコート', image: 'images/item-cape1.jpg' }
                ],
                shoes: [
                    { id: 'elegant-heels', name: 'ヒールパンプス', image: 'images/item-heels1.jpg' }
                ],
                bags: [
                    { id: 'elegant-clutch', name: 'クラッチバッグ', image: 'images/item-clutch1.jpg' }
                ]
            }
            // Add more styles as needed...
        },
        
        // Weekend Activities (2-3. 休日の過ごし方)
        weekendActivities: [
            { id: 'shopping', name: 'ショッピング', image: 'images/weekend-shopping.jpg' },
            { id: 'beauty-salon', name: 'ビューティーサロン', image: 'images/weekend-beauty.jpg' },
            { id: 'lunch-meeting', name: 'ランチ会', image: 'images/weekend-lunch.jpg' },
            { id: 'cultural-activities', name: '文化活動', image: 'images/weekend-culture.jpg' },
            { id: 'parent-activities', name: '保護者活動', image: 'images/weekend-parent.jpg' },
            { id: 'yoga-fitness', name: 'ヨガ・フィットネス', image: 'images/weekend-yoga.jpg' },
            { id: 'family', name: '家族との時間', image: 'images/weekend-family.jpg' },
            { id: 'date', name: 'デート', image: 'images/weekend-date.jpg' },
            { id: 'event', name: 'イベント・パーティー', image: 'images/weekend-event.jpg' },
            { id: 'business-dining', name: 'ビジネス会食', image: 'images/weekend-business-dining.jpg' },
            { id: 'executive', name: '経営者の集まり', image: 'images/weekend-executive.jpg' }
        ],
        
        // All other sections same as men's with adjusted text/images where needed
        // Scene Options, Dress Codes, Brands, Investment Items, Travel, Services etc.
        // Copy from men's data and adjust as needed...
    }
};

// Export for use in main form
if (typeof module !== 'undefined' && module.exports) {
    module.exports = formDisplayData;
}