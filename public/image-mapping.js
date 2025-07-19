// Image mapping definition for avoid items and attractive styles
window.imageMapping = {
    avoidItems: {
        male: {
            'logo': { name: 'ロゴ', image: 'images/avoid-logo.webp' },
            'animal-pattern': { name: 'アニマル柄', image: 'images/avoid-animal-pattern.webp' },
            'bold-print': { name: '総柄', image: 'images/avoid-bold-print.webp' },
            'complex-pattern': { name: '複雑な模様', image: 'images/avoid-complex-pattern.webp' },
            'flashy-decoration': { name: '派手な装飾', image: 'images/avoid-flashy-decoration.webp' },
            'bright-color': { name: '明るすぎる色', image: 'images/avoid-bright-color.webp' },
            'rough-texture': { name: 'ざらざらした質感', image: 'images/avoid-rough-texture.webp' },
            'synthetic': { name: '合成素材感', image: 'images/avoid-synthetic.webp' },
            'oversized': { name: 'オーバーサイズ', image: 'images/avoid-oversized.webp' },
            'tight': { name: 'タイトすぎる', image: 'images/avoid-tight.webp' },
            'thin-material': { name: '薄すぎる素材', image: 'images/avoid-thin-material.webp' },
            'sporty-casual': { name: 'スポーティ・カジュアル', image: 'images/avoid-sporty-casual.webp' },
            'other': { name: 'その他', image: 'images/avoid-other.webp' }
        },
        female: {
            'logo': { name: 'ロゴ', image: 'images/avoid-logo.webp' },
            'animal-pattern': { name: 'アニマル柄', image: 'images/avoid-animal-pattern.webp' },
            'bold-print': { name: '総柄', image: 'images/avoid-bold-print.webp' },
            'complex-pattern': { name: '複雑な模様', image: 'images/avoid-complex-pattern.webp' },
            'flashy-decoration': { name: '派手な装飾', image: 'images/avoid-flashy-decoration.webp' },
            'bright-color': { name: '明るすぎる色', image: 'images/avoid-bright-color.webp' },
            'rough-texture': { name: 'ざらざらした質感', image: 'images/avoid-rough-texture.webp' },
            'synthetic': { name: '合成素材感', image: 'images/avoid-synthetic.webp' },
            'oversized': { name: 'オーバーサイズ', image: 'images/avoid-oversized.webp' },
            'tight': { name: 'タイトすぎる', image: 'images/avoid-tight.webp' },
            'thin-material': { name: '薄すぎる素材', image: 'images/avoid-thin-material.webp' },
            'frills-lace': { name: 'フリル・レース', image: 'images/avoid-frills-lace.webp' },
            'excessive-exposure': { name: '露出過多', image: 'images/avoid-excessive-exposure.webp' },
            'mini-length': { name: 'ミニ丈', image: 'images/avoid-mini-length.webp' },
            'high-heels': { name: 'ハイヒール', image: 'images/avoid-high-heels.webp' },
            'other': { name: 'その他', image: 'images/avoid-other.webp' }
        }
    },
    attractiveStyles: {
        male: {
            'suit': { name: 'スーツ', image: 'images/style-suit.webp' },
            'casual': { name: 'カジュアル', image: 'images/style-casual.webp' },
            'elegant': { name: 'エレガント', image: 'images/style-elegant.webp' },
            'mode': { name: 'モード', image: 'images/style-mode.webp' },
            'street': { name: 'ストリート', image: 'images/style-street.webp' },
            'american-casual': { name: 'アメリカンカジュアル', image: 'images/style-american-casual.webp' },
            'sports': { name: 'スポーツMIX', image: 'images/style-sports.webp' },
            'trad': { name: 'トラッド', image: 'images/style-trad.webp' },
            'natural': { name: 'ナチュラル', image: 'images/style-natural.webp' },
            'minimal': { name: 'ミニマル', image: 'images/style-minimal.webp' },
            'outdoor': { name: 'アウトドア', image: 'images/style-outdoor.webp' },
            'utility': { name: 'ユーティリティ', image: 'images/style-utility.webp' }
        },
        female: {
            'elegant': { name: 'エレガント', image: 'images/style-elegant-f.webp' },
            'urban-conservative': { name: 'アーバンコンサバ', image: 'images/style-urban-conservative.webp' },
            'feminine': { name: 'フェミニン', image: 'images/style-feminine.webp' },
            'mode': { name: 'モード', image: 'images/style-mode-f.webp' },
            'natural': { name: 'ナチュラル', image: 'images/style-natural-f.webp' },
            'casual': { name: 'カジュアル', image: 'images/style-casual-f.webp' },
            'sporty': { name: 'スポーティ', image: 'images/style-sporty.webp' },
            'street': { name: 'ストリート', image: 'images/style-street-f.webp' },
            'utility': { name: 'ユーティリティ', image: 'images/style-utility-f.webp' },
            'french-casual': { name: 'フレンチカジュアル', image: 'images/style-french-casual.webp' },
            'minimal': { name: 'ミニマル', image: 'images/style-minimal-f.webp' },
            'vintage': { name: 'ヴィンテージ', image: 'images/style-vintage.webp' }
        }
    },
    stylePatterns: {
        male: {
            suit: {
                name: 'スーツ/トラッド',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'suit-1', name: 'スーツ1', image: 'images/pattern-suit-1.webp' },
                            { id: 'suit-2', name: 'スーツ2', image: 'images/pattern-suit-2.webp' },
                            { id: 'suit-3', name: 'スーツ3', image: 'images/pattern-suit-3.webp' }
                        ]
                    }
                ]
            },
            casual: {
                name: 'カジュアル',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'casual-1', name: 'カジュアル1', image: 'images/pattern-casual-1.webp' },
                            { id: 'casual-2', name: 'カジュアル2', image: 'images/pattern-casual-2.webp' },
                            { id: 'casual-3', name: 'カジュアル3', image: 'images/pattern-casual-3.webp' }
                        ]
                    }
                ]
            },
            elegant: {
                name: 'エレガント',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'elegant-1', name: 'エレガント1', image: 'images/pattern-elegant-1.webp' },
                            { id: 'elegant-2', name: 'エレガント2', image: 'images/pattern-elegant-2.webp' },
                            { id: 'elegant-3', name: 'エレガント3', image: 'images/pattern-elegant-3.webp' }
                        ]
                    }
                ]
            },
            mode: {
                name: 'モード',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'mode-1', name: 'モード1', image: 'images/pattern-mode-1.webp' },
                            { id: 'mode-2', name: 'モード2', image: 'images/pattern-mode-2.webp' },
                            { id: 'mode-3', name: 'モード3', image: 'images/pattern-mode-3.webp' }
                        ]
                    }
                ]
            },
            street: {
                name: 'ストリート',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'street-1', name: 'ストリート1', image: 'images/pattern-street-1.webp' },
                            { id: 'street-2', name: 'ストリート2', image: 'images/pattern-street-2.webp' },
                            { id: 'street-3', name: 'ストリート3', image: 'images/pattern-street-3.webp' }
                        ]
                    }
                ]
            },
            'american-casual': {
                name: 'アメリカンカジュアル',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'amecas-1', name: 'アメカジ1', image: 'images/pattern-amecas-1.webp' },
                            { id: 'amecas-2', name: 'アメカジ2', image: 'images/pattern-amecas-2.webp' },
                            { id: 'amecas-3', name: 'アメカジ3', image: 'images/pattern-amecas-3.webp' }
                        ]
                    }
                ]
            },
            minimal: {
                name: 'ミニマル',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'minimal-1', name: 'ミニマル1', image: 'images/pattern-minimal-1.webp' },
                            { id: 'minimal-2', name: 'ミニマル2', image: 'images/pattern-minimal-2.webp' },
                            { id: 'minimal-3', name: 'ミニマル3', image: 'images/pattern-minimal-3.webp' }
                        ]
                    }
                ]
            }
        },
        female: {
            elegant: {
                name: 'エレガント',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'elegant-f-1', name: 'エレガント1', image: 'images/pattern-elegant-f-1.webp' },
                            { id: 'elegant-f-2', name: 'エレガント2', image: 'images/pattern-elegant-f-2.webp' },
                            { id: 'elegant-f-3', name: 'エレガント3', image: 'images/pattern-elegant-f-3.webp' }
                        ]
                    }
                ]
            },
            'urban-conservative': {
                name: 'アーバンコンサバ',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'urban-1', name: 'アーバン1', image: 'images/pattern-urban-1.webp' },
                            { id: 'urban-2', name: 'アーバン2', image: 'images/pattern-urban-2.webp' },
                            { id: 'urban-3', name: 'アーバン3', image: 'images/pattern-urban-3.webp' }
                        ]
                    }
                ]
            },
            feminine: {
                name: 'フェミニン',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'feminine-1', name: 'フェミニン1', image: 'images/pattern-feminine-1.webp' },
                            { id: 'feminine-2', name: 'フェミニン2', image: 'images/pattern-feminine-2.webp' },
                            { id: 'feminine-3', name: 'フェミニン3', image: 'images/pattern-feminine-3.webp' }
                        ]
                    }
                ]
            },
            mode: {
                name: 'モード',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'mode-f-1', name: 'モード1', image: 'images/pattern-mode-f-1.webp' },
                            { id: 'mode-f-2', name: 'モード2', image: 'images/pattern-mode-f-2.webp' },
                            { id: 'mode-f-3', name: 'モード3', image: 'images/pattern-mode-f-3.webp' }
                        ]
                    }
                ]
            },
            natural: {
                name: 'ナチュラル',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'natural-f-1', name: 'ナチュラル1', image: 'images/pattern-natural-f-1.webp' },
                            { id: 'natural-f-2', name: 'ナチュラル2', image: 'images/pattern-natural-f-2.webp' },
                            { id: 'natural-f-3', name: 'ナチュラル3', image: 'images/pattern-natural-f-3.webp' }
                        ]
                    }
                ]
            },
            casual: {
                name: 'カジュアル',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'casual-f-1', name: 'カジュアル1', image: 'images/pattern-casual-f-1.webp' },
                            { id: 'casual-f-2', name: 'カジュアル2', image: 'images/pattern-casual-f-2.webp' },
                            { id: 'casual-f-3', name: 'カジュアル3', image: 'images/pattern-casual-f-3.webp' }
                        ]
                    }
                ]
            },
            sporty: {
                name: 'スポーティ',
                rows: [
                    {
                        name: 'パターン1',
                        patterns: [
                            { id: 'sporty-f-1', name: 'スポーティ1', image: 'images/pattern-sporty-f-1.webp' },
                            { id: 'sporty-f-2', name: 'スポーティ2', image: 'images/pattern-sporty-f-2.webp' },
                            { id: 'sporty-f-3', name: 'スポーティ3', image: 'images/pattern-sporty-f-3.webp' }
                        ]
                    }
                ]
            }
        }
    }
};