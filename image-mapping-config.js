// Image Mapping Configuration for Gender-based Display
// This file allows easy modification of all images based on gender selection

const imageMapping = {
    // Style preference images (魅力を感じるスタイル)
    attractiveStyles: {
        male: {
            'suit': { 
                name: 'スーツ/トラッド', 
                image: 'images/style-suit-level1.jpg' 
            },
            'mode': { 
                name: 'モード', 
                image: 'images/style-mode-level1.jpg' 
            },
            'elegant': { 
                name: 'エレガント/シック', 
                image: 'images/attractive-classic1.jpg' 
            },
            'minimal': { 
                name: 'ミニマム/シンプル', 
                image: 'images/style-minimal-1.jpg' 
            },
            'street': { 
                name: 'ストリート/スポーティー', 
                image: 'images/pattern-street1.jpg' 
            },
            'relax': { 
                name: 'サーフ', 
                image: 'images/style-searf-1.jpg' 
            },
            'american-casual': { 
                name: 'アメカジ', 
                image: 'images/style-amecas-1.jpg' 
            }
        },
        female: {
            'mode': { 
                name: 'モード', 
                image: 'images/style-female-mode-1.jpg' 
            },
            'elegant': { 
                name: 'エレガント/シック', 
                image: 'images/style-female-elegant-1.jpg' 
            },
            'urban-conservative': { 
                name: 'アーバン/コンサバティブ', 
                image: 'images/style-female-urban-conservative-1.jpg' 
            },
            'feminine': { 
                name: 'フェミニン', 
                image: 'images/style-female-feminine-1.jpg' 
            },
            'sporty': { 
                name: 'スポーティー', 
                image: 'images/style-female-sporty-1.jpg' 
            },
            'natural': { 
                name: 'ナチュラル', 
                image: 'images/style-female-natural-1.jpg' 
            }
        }
    },
    
    // Avoid items images (避けたいアイテム)
    avoidItems: {
        male: {
            'tight': { 
                name: 'タイトすぎる', 
                image: 'images/avoid-tight.jpg' 
            },
            'oversized': { 
                name: 'オーバーサイズ', 
                image: 'images/avoid-oversized.jpg' 
            },
            'logo': { 
                name: 'ロゴが大きい', 
                image: 'images/avoid-logo.jpg' 
            },
            'bright-color': { 
                name: '派手な色', 
                image: 'images/avoid-bright-color.jpg' 
            },
            'synthetic': { 
                name: '化学繊維', 
                image: 'images/avoid-synthetic.jpg' 
            },
            'bold-print': { 
                name: '派手な柄', 
                image: 'images/avoid-bold-print.jpg' 
            },
            'animal-pattern': { 
                name: 'アニマル柄', 
                image: 'images/avoid-animal-pattern.jpg' 
            },
            'complex-pattern': { 
                name: '複雑な柄', 
                image: 'images/avoid-complex-pattern.jpg' 
            }
        },
        female: {
            'mini-length': { 
                name: 'ミニ丈', 
                image: 'images/avoid-mini-length.jpg' 
            },
            'excessive-exposure': { 
                name: '露出が多い', 
                image: 'images/avoid-excessive-exposure.jpg' 
            },
            'frills-lace': { 
                name: 'フリル/レース', 
                image: 'images/avoid-frills-lace.jpg' 
            },
            'high-heels': { 
                name: '高いヒール', 
                image: 'images/avoid-high-heels.jpg' 
            },
            'thin-material': { 
                name: '薄い素材', 
                image: 'images/avoid-thin-material.jpg' 
            },
            'ruffles': { 
                name: 'ラッフル', 
                image: 'images/avoid-ruffles.jpg' 
            },
            'animal-pattern': { 
                name: 'アニマル柄', 
                image: 'images/avoid-animal-pattern.jpg' 
            },
            'bold-print': { 
                name: '派手な柄', 
                image: 'images/avoid-bold-print.jpg' 
            }
        }
    },
    
    // Clothing items images (よく着用するアイテム)
    clothingItems: {
        male: {
            'suits': {
                name: 'スーツ',
                image: 'images/item-suits.jpg'
            },
            'shirts': {
                name: 'シャツ',
                image: 'images/item-shirts.jpg'
            },
            'tshirts': {
                name: 'Tシャツ',
                image: 'images/item-tshirts.jpg'
            },
            'polos': {
                name: 'ポロシャツ',
                image: 'images/item-polos.jpg'
            },
            'knitwear': {
                name: 'ニット・セーター',
                image: 'images/item-knitwear.jpg'
            },
            'hoodies': {
                name: 'パーカー',
                image: 'images/item-hoodies.jpg'
            },
            'jeans': {
                name: 'ジーンズ',
                image: 'images/item-jeans.jpg'
            },
            'chinos': {
                name: 'チノパン',
                image: 'images/item-chinos.jpg'
            },
            'shorts': {
                name: 'ショートパンツ',
                image: 'images/item-shorts.jpg'
            },
            'jackets': {
                name: 'ジャケット',
                image: 'images/item-jackets.jpg'
            },
            'coats': {
                name: 'コート',
                image: 'images/item-coats.jpg'
            },
            'sneakers': {
                name: 'スニーカー',
                image: 'images/item-sneakers.jpg'
            },
            'boots': {
                name: 'ブーツ',
                image: 'images/item-boots.jpg'
            },
            'leather-shoes': {
                name: '革靴',
                image: 'images/item-leather-shoes.jpg'
            }
        },
        female: {
            'dresses': {
                name: 'ワンピース',
                image: 'images/item-dresses.jpg'
            },
            'blouses': {
                name: 'ブラウス',
                image: 'images/item-blouses.jpg'
            },
            'tshirts': {
                name: 'Tシャツ',
                image: 'images/item-tshirts-female.jpg'
            },
            'knitwear': {
                name: 'ニット・セーター',
                image: 'images/item-knitwear-female.jpg'
            },
            'cardigans': {
                name: 'カーディガン',
                image: 'images/item-cardigans.jpg'
            },
            'skirts': {
                name: 'スカート',
                image: 'images/item-skirts.jpg'
            },
            'pants': {
                name: 'パンツ',
                image: 'images/item-pants-female.jpg'
            },
            'jeans': {
                name: 'ジーンズ',
                image: 'images/item-jeans-female.jpg'
            },
            'jackets': {
                name: 'ジャケット',
                image: 'images/item-jackets-female.jpg'
            },
            'coats': {
                name: 'コート',
                image: 'images/item-coats-female.jpg'
            },
            'pumps': {
                name: 'パンプス',
                image: 'images/item-pumps.jpg'
            },
            'sneakers': {
                name: 'スニーカー',
                image: 'images/item-sneakers-female.jpg'
            },
            'sandals': {
                name: 'サンダル',
                image: 'images/item-sandals.jpg'
            },
            'boots': {
                name: 'ブーツ',
                image: 'images/item-boots-female.jpg'
            }
        }
    },
    
    // Scene images (各シーン)
    scenes: {
        male: {
            'business': {
                name: 'ビジネスシーン',
                image: 'images/scene-business-male.jpg'
            },
            'casual': {
                name: 'カジュアルシーン',
                image: 'images/scene-casual-male.jpg'
            },
            'formal': {
                name: 'フォーマルシーン',
                image: 'images/scene-formal-male.jpg'
            }
        },
        female: {
            'business': {
                name: 'ビジネスシーン',
                image: 'images/scene-business-female.jpg'
            },
            'casual': {
                name: 'カジュアルシーン',
                image: 'images/scene-casual-female.jpg'
            },
            'formal': {
                name: 'フォーマルシーン',
                image: 'images/scene-formal-female.jpg'
            }
        }
    },
    
    // Placeholder images
    placeholders: {
        male: 'images/placeholder-male.jpg',
        female: 'images/placeholder-female.jpg'
    },
    
    // Pattern images for each style (5x3 = 15 patterns per style)
    // These will be used by style-patterns-gender-integrated.js
    stylePatterns: {
        male: {
            suit: [
                { id: 'male-suit-1', name: 'クラシックスーツ', image: 'style-male-suit-1.jpg' },
                { id: 'male-suit-2', name: 'ブリティッシュ', image: 'style-male-suit-2.jpg' },
                { id: 'male-suit-3', name: 'イタリアン', image: 'style-male-suit-3.jpg' },
                { id: 'male-suit-4', name: 'アメリカントラッド', image: 'style-male-suit-4.jpg' },
                { id: 'male-suit-5', name: 'モダンスーツ', image: 'style-male-suit-5.jpg' },
                { id: 'male-suit-6', name: 'ビジネスカジュアル', image: 'style-male-suit-6.jpg' },
                { id: 'male-suit-7', name: 'スマートカジュアル', image: 'style-male-suit-7.jpg' },
                { id: 'male-suit-8', name: 'プレッピー', image: 'style-male-suit-8.jpg' },
                { id: 'male-suit-9', name: 'アイビー', image: 'style-male-suit-9.jpg' },
                { id: 'male-suit-10', name: 'トラディショナル', image: 'style-male-suit-10.jpg' },
                { id: 'male-suit-11', name: 'ネオクラシック', image: 'style-male-suit-11.jpg' },
                { id: 'male-suit-12', name: 'コンテンポラリー', image: 'style-male-suit-12.jpg' },
                { id: 'male-suit-13', name: 'パワースーツ', image: 'style-male-suit-13.jpg' },
                { id: 'male-suit-14', name: 'リラックススーツ', image: 'style-male-suit-14.jpg' },
                { id: 'male-suit-15', name: 'ハイブリッド', image: 'style-male-suit-15.jpg' }
            ],
            mode: [
                { id: 'male-mode-1', name: 'アヴァンギャルド', image: 'style-male-mode-1.jpg' },
                { id: 'male-mode-2', name: 'ミニマルモード', image: 'style-male-mode-2.jpg' },
                { id: 'male-mode-3', name: 'ダークモード', image: 'style-male-mode-3.jpg' },
                { id: 'male-mode-4', name: 'フューチャリスティック', image: 'style-male-mode-4.jpg' },
                { id: 'male-mode-5', name: 'アーキテクチュラル', image: 'style-male-mode-5.jpg' },
                { id: 'male-mode-6', name: 'デコンストラクション', image: 'style-male-mode-6.jpg' },
                { id: 'male-mode-7', name: 'オールブラック', image: 'style-male-mode-7.jpg' },
                { id: 'male-mode-8', name: 'ニュートラル', image: 'style-male-mode-8.jpg' },
                { id: 'male-mode-9', name: 'エクスペリメンタル', image: 'style-male-mode-9.jpg' },
                { id: 'male-mode-10', name: 'ジオメトリック', image: 'style-male-mode-10.jpg' },
                { id: 'male-mode-11', name: 'モノクローム', image: 'style-male-mode-11.jpg' },
                { id: 'male-mode-12', name: 'レイヤード', image: 'style-male-mode-12.jpg' },
                { id: 'male-mode-13', name: 'アシンメトリー', image: 'style-male-mode-13.jpg' },
                { id: 'male-mode-14', name: 'テクスチャー', image: 'style-male-mode-14.jpg' },
                { id: 'male-mode-15', name: 'モダンミニマル', image: 'style-male-mode-15.jpg' }
            ],
            elegant: [
                { id: 'male-elegant-1', name: 'クラシックエレガント', image: 'style-male-elegant-1.jpg' },
                { id: 'male-elegant-2', name: 'モダンエレガント', image: 'style-male-elegant-2.jpg' },
                { id: 'male-elegant-3', name: 'イタリアンシック', image: 'style-male-elegant-3.jpg' },
                { id: 'male-elegant-4', name: 'フレンチシック', image: 'style-male-elegant-4.jpg' },
                { id: 'male-elegant-5', name: 'コンテンポラリー', image: 'style-male-elegant-5.jpg' },
                { id: 'male-elegant-6', name: 'ダンディ', image: 'style-male-elegant-6.jpg' },
                { id: 'male-elegant-7', name: 'ジェントルマン', image: 'style-male-elegant-7.jpg' },
                { id: 'male-elegant-8', name: 'ソフィスティケート', image: 'style-male-elegant-8.jpg' },
                { id: 'male-elegant-9', name: 'ラグジュアリー', image: 'style-male-elegant-9.jpg' },
                { id: 'male-elegant-10', name: 'タイムレス', image: 'style-male-elegant-10.jpg' },
                { id: 'male-elegant-11', name: 'ビジネスエレガント', image: 'style-male-elegant-11.jpg' },
                { id: 'male-elegant-12', name: 'カジュアルエレガント', image: 'style-male-elegant-12.jpg' },
                { id: 'male-elegant-13', name: 'イブニングエレガント', image: 'style-male-elegant-13.jpg' },
                { id: 'male-elegant-14', name: 'モダンクラシック', image: 'style-male-elegant-14.jpg' },
                { id: 'male-elegant-15', name: 'リファインド', image: 'style-male-elegant-15.jpg' }
            ],
            minimal: [
                { id: 'male-minimal-1', name: 'エッセンシャル', image: 'style-male-minimal-1.jpg' },
                { id: 'male-minimal-2', name: 'モノトーン', image: 'style-male-minimal-2.jpg' },
                { id: 'male-minimal-3', name: 'ノームコア', image: 'style-male-minimal-3.jpg' },
                { id: 'male-minimal-4', name: 'スカンジナビアン', image: 'style-male-minimal-4.jpg' },
                { id: 'male-minimal-5', name: 'ジャパニーズミニマル', image: 'style-male-minimal-5.jpg' },
                { id: 'male-minimal-6', name: 'クリーンライン', image: 'style-male-minimal-6.jpg' },
                { id: 'male-minimal-7', name: 'ニュートラルトーン', image: 'style-male-minimal-7.jpg' },
                { id: 'male-minimal-8', name: 'モダンベーシック', image: 'style-male-minimal-8.jpg' },
                { id: 'male-minimal-9', name: 'アーバンミニマル', image: 'style-male-minimal-9.jpg' },
                { id: 'male-minimal-10', name: 'ソフトミニマル', image: 'style-male-minimal-10.jpg' },
                { id: 'male-minimal-11', name: 'ラグジュアリーミニマル', image: 'style-male-minimal-11.jpg' },
                { id: 'male-minimal-12', name: 'テクニカルミニマル', image: 'style-male-minimal-12.jpg' },
                { id: 'male-minimal-13', name: 'オーガニックミニマル', image: 'style-male-minimal-13.jpg' },
                { id: 'male-minimal-14', name: 'アーキテクチュラルミニマル', image: 'style-male-minimal-14.jpg' },
                { id: 'male-minimal-15', name: 'ゼロウェイスト', image: 'style-male-minimal-15.jpg' }
            ],
            street: [
                { id: 'male-street-1', name: 'アーバンストリート', image: 'style-male-street-1.jpg' },
                { id: 'male-street-2', name: 'スケーター', image: 'style-male-street-2.jpg' },
                { id: 'male-street-3', name: 'アスレジャー', image: 'style-male-street-3.jpg' },
                { id: 'male-street-4', name: 'テックウェア', image: 'style-male-street-4.jpg' },
                { id: 'male-street-5', name: 'ストリートラグジュアリー', image: 'style-male-street-5.jpg' },
                { id: 'male-street-6', name: 'ヒップホップ', image: 'style-male-street-6.jpg' },
                { id: 'male-street-7', name: 'グラフィティ', image: 'style-male-street-7.jpg' },
                { id: 'male-street-8', name: 'スポーツミックス', image: 'style-male-street-8.jpg' },
                { id: 'male-street-9', name: 'アウトドアアーバン', image: 'style-male-street-9.jpg' },
                { id: 'male-street-10', name: 'サイバーパンク', image: 'style-male-street-10.jpg' },
                { id: 'male-street-11', name: 'ジャパニーズストリート', image: 'style-male-street-11.jpg' },
                { id: 'male-street-12', name: 'ヴィンテージスポーツ', image: 'style-male-street-12.jpg' },
                { id: 'male-street-13', name: 'ニューウェーブ', image: 'style-male-street-13.jpg' },
                { id: 'male-street-14', name: 'フューチャースポーツ', image: 'style-male-street-14.jpg' },
                { id: 'male-street-15', name: 'アーバンアスリート', image: 'style-male-street-15.jpg' }
            ],
            relax: [
                { id: 'male-relax-1', name: 'ビーチカジュアル', image: 'style-male-relax-1.jpg' },
                { id: 'male-relax-2', name: 'カリフォルニア', image: 'style-male-relax-2.jpg' },
                { id: 'male-relax-3', name: 'サーファー', image: 'style-male-relax-3.jpg' },
                { id: 'male-relax-4', name: 'トロピカル', image: 'style-male-relax-4.jpg' },
                { id: 'male-relax-5', name: 'リゾート', image: 'style-male-relax-5.jpg' },
                { id: 'male-relax-6', name: 'ボヘミアン', image: 'style-male-relax-6.jpg' },
                { id: 'male-relax-7', name: 'ナチュラル', image: 'style-male-relax-7.jpg' },
                { id: 'male-relax-8', name: 'アーシートーン', image: 'style-male-relax-8.jpg' },
                { id: 'male-relax-9', name: 'コンフォート', image: 'style-male-relax-9.jpg' },
                { id: 'male-relax-10', name: 'イージーウェア', image: 'style-male-relax-10.jpg' },
                { id: 'male-relax-11', name: 'オーガニック', image: 'style-male-relax-11.jpg' },
                { id: 'male-relax-12', name: 'ルーズフィット', image: 'style-male-relax-12.jpg' },
                { id: 'male-relax-13', name: 'ウィークエンド', image: 'style-male-relax-13.jpg' },
                { id: 'male-relax-14', name: 'ラウンジウェア', image: 'style-male-relax-14.jpg' },
                { id: 'male-relax-15', name: 'エコカジュアル', image: 'style-male-relax-15.jpg' }
            ],
            'american-casual': [
                { id: 'male-amecas-1', name: 'ヴィンテージアメリカン', image: 'style-male-amecas-1.jpg' },
                { id: 'male-amecas-2', name: 'ワークウェア', image: 'style-male-amecas-2.jpg' },
                { id: 'male-amecas-3', name: 'ウエスタン', image: 'style-male-amecas-3.jpg' },
                { id: 'male-amecas-4', name: 'ミリタリー', image: 'style-male-amecas-4.jpg' },
                { id: 'male-amecas-5', name: 'ヘリテージ', image: 'style-male-amecas-5.jpg' },
                { id: 'male-amecas-6', name: 'ルード', image: 'style-male-amecas-6.jpg' },
                { id: 'male-amecas-7', name: 'バイカー', image: 'style-male-amecas-7.jpg' },
                { id: 'male-amecas-8', name: 'グランジ', image: 'style-male-amecas-8.jpg' },
                { id: 'male-amecas-9', name: 'カレッジ', image: 'style-male-amecas-9.jpg' },
                { id: 'male-amecas-10', name: 'デニムスタイル', image: 'style-male-amecas-10.jpg' },
                { id: 'male-amecas-11', name: 'ヴィンテージスポーツ', image: 'style-male-amecas-11.jpg' },
                { id: 'male-amecas-12', name: 'アウトドア', image: 'style-male-amecas-12.jpg' },
                { id: 'male-amecas-13', name: 'ネイティブ', image: 'style-male-amecas-13.jpg' },
                { id: 'male-amecas-14', name: 'ルート66', image: 'style-male-amecas-14.jpg' },
                { id: 'male-amecas-15', name: 'ラギッド', image: 'style-male-amecas-15.jpg' }
            ]
        },
        female: {
            mode: [
                { id: 'female-mode-1', name: 'アヴァンギャルド', image: 'style-female-mode-1.jpg' },
                { id: 'female-mode-2', name: 'コンセプチュアル', image: 'style-female-mode-2.jpg' },
                { id: 'female-mode-3', name: 'アーティスティック', image: 'style-female-mode-3.jpg' },
                { id: 'female-mode-4', name: 'エクスペリメンタル', image: 'style-female-mode-4.jpg' },
                { id: 'female-mode-5', name: 'フューチャリスティック', image: 'style-female-mode-5.jpg' },
                { id: 'female-mode-6', name: 'デコンストラクション', image: 'style-female-mode-6.jpg' },
                { id: 'female-mode-7', name: 'ミニマルモード', image: 'style-female-mode-7.jpg' },
                { id: 'female-mode-8', name: 'アーキテクチュラル', image: 'style-female-mode-8.jpg' },
                { id: 'female-mode-9', name: 'モノクローム', image: 'style-female-mode-9.jpg' },
                { id: 'female-mode-10', name: 'ジオメトリック', image: 'style-female-mode-10.jpg' },
                { id: 'female-mode-11', name: 'ネオモード', image: 'style-female-mode-11.jpg' },
                { id: 'female-mode-12', name: 'ダークモード', image: 'style-female-mode-12.jpg' },
                { id: 'female-mode-13', name: 'シュールリアル', image: 'style-female-mode-13.jpg' },
                { id: 'female-mode-14', name: 'スカルプチュラル', image: 'style-female-mode-14.jpg' },
                { id: 'female-mode-15', name: 'ハイファッション', image: 'style-female-mode-15.jpg' }
            ],
            elegant: [
                { id: 'female-elegant-1', name: 'クラシックエレガント', image: 'style-female-elegant-1.jpg' },
                { id: 'female-elegant-2', name: 'モダンエレガント', image: 'style-female-elegant-2.jpg' },
                { id: 'female-elegant-3', name: 'ラグジュアリーエレガント', image: 'style-female-elegant-3.jpg' },
                { id: 'female-elegant-4', name: 'ミニマルエレガント', image: 'style-female-elegant-4.jpg' },
                { id: 'female-elegant-5', name: 'タイムレスエレガント', image: 'style-female-elegant-5.jpg' },
                { id: 'female-elegant-6', name: 'ソフィスティケート', image: 'style-female-elegant-6.jpg' },
                { id: 'female-elegant-7', name: 'パワーエレガント', image: 'style-female-elegant-7.jpg' },
                { id: 'female-elegant-8', name: 'コンテンポラリーエレガント', image: 'style-female-elegant-8.jpg' },
                { id: 'female-elegant-9', name: 'アーバンエレガント', image: 'style-female-elegant-9.jpg' },
                { id: 'female-elegant-10', name: 'エフォートレスエレガント', image: 'style-female-elegant-10.jpg' },
                { id: 'female-elegant-11', name: 'シックエレガント', image: 'style-female-elegant-11.jpg' },
                { id: 'female-elegant-12', name: 'フォーマルエレガント', image: 'style-female-elegant-12.jpg' },
                { id: 'female-elegant-13', name: 'ビジネスエレガント', image: 'style-female-elegant-13.jpg' },
                { id: 'female-elegant-14', name: 'イブニングエレガント', image: 'style-female-elegant-14.jpg' },
                { id: 'female-elegant-15', name: 'グレースエレガント', image: 'style-female-elegant-15.jpg' }
            ],
            'urban-conservative': [
                { id: 'female-urban-1', name: 'ビジネスシック', image: 'style-female-urban-1.jpg' },
                { id: 'female-urban-2', name: 'オフィスエレガント', image: 'style-female-urban-2.jpg' },
                { id: 'female-urban-3', name: 'コンサバティブモダン', image: 'style-female-urban-3.jpg' },
                { id: 'female-urban-4', name: 'アーバンプロフェッショナル', image: 'style-female-urban-4.jpg' },
                { id: 'female-urban-5', name: 'シティシック', image: 'style-female-urban-5.jpg' },
                { id: 'female-urban-6', name: 'エグゼクティブ', image: 'style-female-urban-6.jpg' },
                { id: 'female-urban-7', name: 'キャリアウーマン', image: 'style-female-urban-7.jpg' },
                { id: 'female-urban-8', name: 'スマートコンサバ', image: 'style-female-urban-8.jpg' },
                { id: 'female-urban-9', name: 'モダンオフィス', image: 'style-female-urban-9.jpg' },
                { id: 'female-urban-10', name: 'ビジネスカジュアル', image: 'style-female-urban-10.jpg' },
                { id: 'female-urban-11', name: 'アーバンクラシック', image: 'style-female-urban-11.jpg' },
                { id: 'female-urban-12', name: 'ニューコンサバ', image: 'style-female-urban-12.jpg' },
                { id: 'female-urban-13', name: 'メトロポリタン', image: 'style-female-urban-13.jpg' },
                { id: 'female-urban-14', name: 'コーポレートシック', image: 'style-female-urban-14.jpg' },
                { id: 'female-urban-15', name: 'アーバンエレガント', image: 'style-female-urban-15.jpg' }
            ],
            feminine: [
                { id: 'female-feminine-1', name: 'ロマンティック', image: 'style-female-feminine-1.jpg' },
                { id: 'female-feminine-2', name: 'スウィート', image: 'style-female-feminine-2.jpg' },
                { id: 'female-feminine-3', name: 'エレガントフェミニン', image: 'style-female-feminine-3.jpg' },
                { id: 'female-feminine-4', name: 'モダンフェミニン', image: 'style-female-feminine-4.jpg' },
                { id: 'female-feminine-5', name: 'クラシックフェミニン', image: 'style-female-feminine-5.jpg' },
                { id: 'female-feminine-6', name: 'ソフトフェミニン', image: 'style-female-feminine-6.jpg' },
                { id: 'female-feminine-7', name: 'ミニマルフェミニン', image: 'style-female-feminine-7.jpg' },
                { id: 'female-feminine-8', name: 'ボヘミアンフェミニン', image: 'style-female-feminine-8.jpg' },
                { id: 'female-feminine-9', name: 'パリジェンヌ', image: 'style-female-feminine-9.jpg' },
                { id: 'female-feminine-10', name: 'レディライク', image: 'style-female-feminine-10.jpg' },
                { id: 'female-feminine-11', name: 'ガーリー', image: 'style-female-feminine-11.jpg' },
                { id: 'female-feminine-12', name: 'プリティ', image: 'style-female-feminine-12.jpg' },
                { id: 'female-feminine-13', name: 'デリケート', image: 'style-female-feminine-13.jpg' },
                { id: 'female-feminine-14', name: 'グレースフル', image: 'style-female-feminine-14.jpg' },
                { id: 'female-feminine-15', name: 'シアーフェミニン', image: 'style-female-feminine-15.jpg' }
            ],
            sporty: [
                { id: 'female-sporty-1', name: 'アスレジャー', image: 'style-female-sporty-1.jpg' },
                { id: 'female-sporty-2', name: 'アクティブウェア', image: 'style-female-sporty-2.jpg' },
                { id: 'female-sporty-3', name: 'スポーツラグジュアリー', image: 'style-female-sporty-3.jpg' },
                { id: 'female-sporty-4', name: 'ヨガウェア', image: 'style-female-sporty-4.jpg' },
                { id: 'female-sporty-5', name: 'ランニングスタイル', image: 'style-female-sporty-5.jpg' },
                { id: 'female-sporty-6', name: 'ジムウェア', image: 'style-female-sporty-6.jpg' },
                { id: 'female-sporty-7', name: 'アウトドアスポーツ', image: 'style-female-sporty-7.jpg' },
                { id: 'female-sporty-8', name: 'ダンスウェア', image: 'style-female-sporty-8.jpg' },
                { id: 'female-sporty-9', name: 'テニスウェア', image: 'style-female-sporty-9.jpg' },
                { id: 'female-sporty-10', name: 'スイムウェア', image: 'style-female-sporty-10.jpg' },
                { id: 'female-sporty-11', name: 'アーバンスポーツ', image: 'style-female-sporty-11.jpg' },
                { id: 'female-sporty-12', name: 'ストリートスポーツ', image: 'style-female-sporty-12.jpg' },
                { id: 'female-sporty-13', name: 'ハイテクスポーツ', image: 'style-female-sporty-13.jpg' },
                { id: 'female-sporty-14', name: 'レトロスポーツ', image: 'style-female-sporty-14.jpg' },
                { id: 'female-sporty-15', name: 'フィットネススタイル', image: 'style-female-sporty-15.jpg' }
            ],
            natural: [
                { id: 'female-natural-1', name: 'オーガニック', image: 'style-female-natural-1.jpg' },
                { id: 'female-natural-2', name: 'アースカラー', image: 'style-female-natural-2.jpg' },
                { id: 'female-natural-3', name: 'リネンスタイル', image: 'style-female-natural-3.jpg' },
                { id: 'female-natural-4', name: 'ボヘミアン', image: 'style-female-natural-4.jpg' },
                { id: 'female-natural-5', name: 'エコシック', image: 'style-female-natural-5.jpg' },
                { id: 'female-natural-6', name: 'リラックスナチュラル', image: 'style-female-natural-6.jpg' },
                { id: 'female-natural-7', name: 'ミニマルナチュラル', image: 'style-female-natural-7.jpg' },
                { id: 'female-natural-8', name: 'アーバンナチュラル', image: 'style-female-natural-8.jpg' },
                { id: 'female-natural-9', name: 'モダンナチュラル', image: 'style-female-natural-9.jpg' },
                { id: 'female-natural-10', name: 'スカンジナビアン', image: 'style-female-natural-10.jpg' },
                { id: 'female-natural-11', name: 'カントリー', image: 'style-female-natural-11.jpg' },
                { id: 'female-natural-12', name: 'エスニック', image: 'style-female-natural-12.jpg' },
                { id: 'female-natural-13', name: 'ヴィンテージナチュラル', image: 'style-female-natural-13.jpg' },
                { id: 'female-natural-14', name: 'コンフォートナチュラル', image: 'style-female-natural-14.jpg' },
                { id: 'female-natural-15', name: 'ピュアナチュラル', image: 'style-female-natural-15.jpg' }
            ]
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageMapping;
}

// Make available globally (check if not already defined)
if (typeof window.imageMapping === 'undefined') {
    window.imageMapping = imageMapping;
}