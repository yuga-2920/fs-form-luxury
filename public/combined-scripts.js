/* Combined Scripts - All JS files merged */

/* ===== image-mapping-config.js ===== */ // Image Mapping Configuration for Gender-based Display
// This file allows easy modification of all images based on gender selection

const imageMapping = {
  // Style preference images (魅力を感じるスタイル)
  attractiveStyles: {
    male: {
      suit: {
        name: "スーツ/トラッド",
        image: "images/style-male-suit-1.webp",
      },
      mode: {
        name: "モード",
        image: "images/style-male-mode-1.webp",
      },
      elegant: {
        name: "エレガント/シック",
        image: "images/attractive-classic1.webp",
      },
      minimal: {
        name: "ミニマム/シンプル",
        image: "images/style-minimal-1.webp",
      },
      street: {
        name: "ストリート/スポーティー",
        image: "images/pattern-street1.webp",
      },
      searf: {
        name: "サーフ",
        image: "images/style-searf-1.webp",
      },
      "american-casual": {
        name: "アメカジ",
        image: "images/style-amecas-1.webp",
      },
    },
    female: {
      mode: {
        name: "モード",
        image: "images/style-female-mode-1.webp",
      },
      elegant: {
        name: "エレガント/シック",
        image: "images/style-female-elegant-1.webp",
      },
      "urban-conservative": {
        name: "アーバン/コンサバティブ",
        image: "images/style-female-urban-conservative-1.webp",
      },
      feminine: {
        name: "フェミニン",
        image: "images/style-female-feminine-1.webp",
      },
      sporty: {
        name: "スポーティー",
        image: "images/style-female-sporty-1.webp",
      },
      bohemian: {
        name: "ボヘミアン",
        image: "images/style-female-bohemian-1.webp",
      },
      "cool-rock": {
        name: "クール/ロック",
        image: "images/style-female-cool-rock-1.webp",
      },
      "vibrant-color": {
        name: "華やか／カラー",
        image: "images/style-female-vibrant-color-1.webp",
      },
      natural: {
        name: "ナチュラル",
        image: "images/style-female-natural-1.webp",
      },
    },
  },

  // Avoid items images (避けたいアイテム)
  avoidItems: {
    male: {
      tight: {
        name: "タイトすぎる",
        image: "images/avoid-tight.webp",
      },
      oversized: {
        name: "オーバーサイズ",
        image: "images/avoid-oversized.webp",
      },
      logo: {
        name: "ロゴが大きい",
        image: "images/avoid-logo.webp",
      },
      "bright-color": {
        name: "派手な色",
        image: "images/avoid-bright-color.webp",
      },
      synthetic: {
        name: "化学繊維",
        image: "images/avoid-synthetic.webp",
      },
      "bold-print": {
        name: "派手な柄",
        image: "images/avoid-bold-print.webp",
      },
      "animal-pattern": {
        name: "アニマル柄",
        image: "images/avoid-animal-pattern.webp",
      },
      "complex-pattern": {
        name: "複雑な柄",
        image: "images/avoid-complex-pattern.webp",
      },
    },
    female: {
      tight: {
        name: "タイトすぎる",
        image: "images/avoid-tight.webp",
      },
      oversized: {
        name: "オーバーサイズ",
        image: "images/avoid-oversized.webp",
      },
      logo: {
        name: "ロゴが大きい",
        image: "images/avoid-logo.webp",
      },
      "bright-color": {
        name: "派手な色",
        image: "images/avoid-bright-color.webp",
      },
      synthetic: {
        name: "化学繊維",
        image: "images/avoid-syntheticfdas.webp",
      },
      "bold-print": {
        name: "派手な柄",
        image: "images/avoid-bold-print.webp",
      },
      "animal-pattern": {
        name: "アニマル柄",
        image: "images/avoid-animal-pattern.webp",
      },
      "complex-pattern": {
        name: "複雑な柄",
        image: "images/avoid-complex-pattern.webp",
      },
      "mini-length": {
        name: "ミニ丈",
        image: "images/avoid-mini-length.webp",
      },
      "excessive-exposure": {
        name: "露出が多い",
        image: "images/avoid-excessive-exposure.webp",
      },
      "frills-lace": {
        name: "フリル/レース",
        image: "images/avoid-frills-lace.webp",
      },
      "high-heels": {
        name: "高いヒール",
        image: "images/avoid-high-heels.webp",
      },
      "thin-material": {
        name: "薄い素材",
        image: "images/avoid-thin-material.webp",
      },
      ruffles: {
        name: "ラッフル",
        image: "images/avoid-ruffles.webp",
      },
      "animal-pattern": {
        name: "アニマル柄",
        image: "images/avoid-animal-pattern.webp",
      },
      "bold-print": {
        name: "派手な柄",
        image: "images/avoid-bold-print.webp",
      },
    },
  },

  // Clothing items images (よく着用するアイテム)
  clothingItems: {
    male: {
      suits: {
        name: "スーツ",
        image: "images/item-suits.webp",
      },
      shirts: {
        name: "シャツ",
        image: "images/item-shirts.webp",
      },
      tshirts: {
        name: "Tシャツ",
        image: "images/item-tshirts.webp",
      },
      polos: {
        name: "ポロシャツ",
        image: "images/item-polos.webp",
      },
      knitwear: {
        name: "ニット・セーター",
        image: "images/item-knitwear.webp",
      },
      hoodies: {
        name: "パーカー",
        image: "images/item-hoodies.webp",
      },
      jeans: {
        name: "ジーンズ",
        image: "images/item-jeans.webp",
      },
      chinos: {
        name: "チノパン",
        image: "images/item-chinos.webp",
      },
      shorts: {
        name: "ショートパンツ",
        image: "images/item-shorts.webp",
      },
      jackets: {
        name: "ジャケット",
        image: "images/item-jackets.webp",
      },
      coats: {
        name: "コート",
        image: "images/item-coats.webp",
      },
      sneakers: {
        name: "スニーカー",
        image: "images/item-sneakers.webp",
      },
      boots: {
        name: "ブーツ",
        image: "images/item-boots.webp",
      },
      "leather-shoes": {
        name: "革靴",
        image: "images/item-leather-shoes.webp",
      },
    },
    female: {
      dresses: {
        name: "ワンピース",
        image: "images/item-dresses.webp",
      },
      blouses: {
        name: "ブラウス",
        image: "images/item-blouses.webp",
      },
      tshirts: {
        name: "Tシャツ",
        image: "images/item-tshirts-female.webp",
      },
      knitwear: {
        name: "ニット・セーター",
        image: "images/item-knitwear-female.webp",
      },
      cardigans: {
        name: "カーディガン",
        image: "images/item-cardigans.webp",
      },
      skirts: {
        name: "スカート",
        image: "images/item-skirts.webp",
      },
      pants: {
        name: "パンツ",
        image: "images/item-pants-female.webp",
      },
      jeans: {
        name: "ジーンズ",
        image: "images/item-jeans-female.webp",
      },
      jackets: {
        name: "ジャケット",
        image: "images/item-jackets-female.webp",
      },
      coats: {
        name: "コート",
        image: "images/item-coats-female.webp",
      },
      pumps: {
        name: "パンプス",
        image: "images/item-pumps.webp",
      },
      sneakers: {
        name: "スニーカー",
        image: "images/item-sneakers-female.webp",
      },
      sandals: {
        name: "サンダル",
        image: "images/item-sandals.webp",
      },
      boots: {
        name: "ブーツ",
        image: "images/item-boots-female.webp",
      },
    },
  },

  // Scene images (各シーン)
  scenes: {
    male: {
      business: {
        name: "ビジネスシーン",
        image: "images/scene-business-male.webp",
      },
      casual: {
        name: "カジュアルシーン",
        image: "images/scene-casual-male.webp",
      },
      formal: {
        name: "フォーマルシーン",
        image: "images/scene-formal-male.webp",
      },
    },
    female: {
      business: {
        name: "ビジネスシーン",
        image: "images/scene-business-female.webp",
      },
      casual: {
        name: "カジュアルシーン",
        image: "images/scene-casual-female.webp",
      },
      formal: {
        name: "フォーマルシーン",
        image: "images/scene-formal-female.webp",
      },
    },
  },

  // Placeholder images
  placeholders: {
    male: "images/placeholder-male.webp",
    female: "images/placeholder-female.webp",
  },

  // Pattern images for each style (5x3 = 15 patterns per style)
  // These will be used by style-patterns-gender-integrated.js
  stylePatterns: {
    male: {
      suit: [
        {
          id: "male-suit-1",
          name: "３ピーススーツのクラシックスタイル",
          image: "style-male-suit-1.webp",
        },
        {
          id: "male-suit-2",
          name: "ダブルジャケット",
          image: "style-male-suit-2.webp",
        },
        {
          id: "male-suit-3",
          name: "Tシャツとセットアップスタイル",
          image: "style-male-suit-3.webp",
        },
        {
          id: "male-suit-4",
          name: "シャツスタイル",
          image: "style-male-suit-4.webp",
        },
        {
          id: "male-suit-5",
          name: "スマートカジュアル",
          image: "style-male-suit-5.webp",
        },
        {
          id: "male-suit-6",
          name: "クラシック２ピーススーツ",
          image: "style-male-suit-6.webp",
        },
        {
          id: "male-suit-7",
          name: "セパレートスタイル",
          image: "style-male-suit-7.webp",
        },
        {
          id: "male-suit-8",
          name: "ジャケット×デニムの大人カジュアルコーデ",
          image: "style-male-suit-8.webp",
        },
        {
          id: "male-suit-9",
          name: "シャツスタイル",
          image: "style-male-suit-9.webp",
        },
        {
          id: "male-suit-10",
          name: "スマートカジュアル",
          image: "style-male-suit-10.webp",
        },
        {
          id: "male-suit-11",
          name: "英国紳士スタイル",
          image: "style-male-suit-11.webp",
        },
        {
          id: "male-suit-12",
          name: "セパレートスタイル",
          image: "style-male-suit-12.webp",
        },
        {
          id: "male-suit-13",
          name: "セパレートスタイル",
          image: "style-male-suit-13.webp",
        },
        {
          id: "male-suit-14",
          name: "シャツスタイル",
          image: "style-male-suit-14.webp",
        },
        {
          id: "male-suit-15",
          name: "スマートカジュアル",
          image: "style-male-suit-15.webp",
        },
      ],
      mode: [
        {
          id: "male-mode-1",
          name: "エレガントモード",
          image: "style-male-mode-1.webp",
        },
        {
          id: "male-mode-2",
          name: "ハイエンドストリート",
          image: "style-male-mode-2.webp",
        },
        {
          id: "male-mode-3",
          name: "ストリートミックス",
          image: "style-male-mode-3.webp",
        },
        {
          id: "male-mode-4",
          name: "ストリートミックス",
          image: "style-male-mode-4.webp",
        },
        {
          id: "male-mode-5",
          name: "カジュアルモード",
          image: "style-male-mode-5.webp",
        },
        {
          id: "male-mode-6",
          name: "エレガントモード",
          image: "style-male-mode-6.webp",
        },
        {
          id: "male-mode-7",
          name: "ハイエンドストリート",
          image: "style-male-mode-7.webp",
        },
        {
          id: "male-mode-8",
          name: "ストリートミックス",
          image: "style-male-mode-8.webp",
        },
        {
          id: "male-mode-9",
          name: "カジュアルモード",
          image: "style-male-mode-9.webp",
        },
        {
          id: "male-mode-10",
          name: "カジュアルモード",
          image: "style-male-mode-10.webp",
        },
        {
          id: "male-mode-11",
          name: "ハイエンドストリート",
          image: "style-male-mode-11.webp",
        },
        {
          id: "male-mode-12",
          name: "ハイエンドストリート",
          image: "style-male-mode-12.webp",
        },
        {
          id: "male-mode-13",
          name: "ストリートミックス",
          image: "style-male-mode-13.webp",
        },
        {
          id: "male-mode-14",
          name: "カジュアルモード",
          image: "style-male-mode-14.webp",
        },
        {
          id: "male-mode-15",
          name: "カジュアルモード",
          image: "style-male-mode-15.webp",
        },
      ],
      elegant: [
        {
          id: "male-elegant-1",
          name: "エレガントクラシック",
          image: "style-male-elegant-1.webp",
        },
        {
          id: "male-elegant-2",
          name: "エレガントクラシック",
          image: "style-male-elegant-2.webp",
        },
        {
          id: "male-elegant-3",
          name: "エレガントモード",
          image: "style-male-elegant-3.webp",
        },
        {
          id: "male-elegant-4",
          name: "エレガントモード",
          image: "style-male-elegant-4.webp",
        },
        {
          id: "male-elegant-5",
          name: "カジュアルミックス",
          image: "style-male-elegant-5.webp",
        },
        {
          id: "male-elegant-6",
          name: "エレガントクラシック",
          image: "style-male-elegant-6.webp",
        },
        {
          id: "male-elegant-7",
          name: "エレガントクラシック",
          image: "style-male-elegant-7.webp",
        },
        {
          id: "male-elegant-8",
          name: "エレガントモード",
          image: "style-male-elegant-8.webp",
        },
        {
          id: "male-elegant-9",
          name: "エレガントモード",
          image: "style-male-elegant-9.webp",
        },
        {
          id: "male-elegant-10",
          name: "カジュアルミックス",
          image: "style-male-elegant-10.webp",
        },
        {
          id: "male-elegant-11",
          name: "エレガントモード",
          image: "style-male-elegant-11.webp",
        },
        {
          id: "male-elegant-12",
          name: "エレガントモード",
          image: "style-male-elegant-12.webp",
        },
        {
          id: "male-elegant-13",
          name: "エレガントクラシック",
          image: "style-male-elegant-13.webp",
        },
        {
          id: "male-elegant-14",
          name: "カジュアルミックス",
          image: "style-male-elegant-14.webp",
        },
        {
          id: "male-elegant-15",
          name: "カジュアルミックス",
          image: "style-male-elegant-15.webp",
        },
      ],
      minimal: [
        {
          id: "male-minimal-1",
          name: "綺麗めシンプル",
          image: "style-male-minimal-1.webp",
        },
        {
          id: "male-minimal-2",
          name: "モードミックス",
          image: "style-male-minimal-2.webp",
        },
        {
          id: "male-minimal-3",
          name: "リラックス",
          image: "style-male-minimal-3.webp",
        },
        {
          id: "male-minimal-4",
          name: "カジュアルシンプル",
          image: "style-male-minimal-4.webp",
        },
        {
          id: "male-minimal-5",
          name: "カジュアルスポーティー",
          image: "style-male-minimal-5.webp",
        },
        {
          id: "male-minimal-6",
          name: "綺麗めシンプル",
          image: "style-male-minimal-6.webp",
        },
        {
          id: "male-minimal-7",
          name: "リラックスモード",
          image: "style-male-minimal-7.webp",
        },
        {
          id: "male-minimal-8",
          name: "リラックス",
          image: "style-male-minimal-8.webp",
        },
        {
          id: "male-minimal-9",
          name: "カジュアル",
          image: "style-male-minimal-9.webp",
        },
        {
          id: "male-minimal-10",
          name: "カジュアルスポーティー",
          image: "style-male-minimal-10.webp",
        },
        {
          id: "male-minimal-11",
          name: "エレガントリラックス",
          image: "style-male-minimal-11.webp",
        },
        {
          id: "male-minimal-12",
          name: "リラックスモード",
          image: "style-male-minimal-12.webp",
        },
        {
          id: "male-minimal-13",
          name: "綺麗めシンプル",
          image: "style-male-minimal-13.webp",
        },
        {
          id: "male-minimal-14",
          name: "カジュアル",
          image: "style-male-minimal-14.webp",
        },
        {
          id: "male-minimal-15",
          name: "カジュアルスポーティー",
          image: "style-male-minimal-15.webp",
        },
      ],
      street: [
        {
          id: "male-street-1",
          name: "オーバーシルエット",
          image: "style-male-street-1.webp",
        },
        {
          id: "male-street-2",
          name: "アメカジミックス",
          image: "style-male-street-2.webp",
        },
        {
          id: "male-street-3",
          name: "シャツで綺麗めストリート",
          image: "style-male-street-3.webp",
        },
        {
          id: "male-street-4",
          name: "スポーティーモード",
          image: "style-male-street-4.webp",
        },
        {
          id: "male-street-5",
          name: "モノトーンカジュアル",
          image: "style-male-street-5.webp",
        },
        {
          id: "male-street-6",
          name: "オーバーシルエット",
          image: "style-male-street-6.webp",
        },
        {
          id: "male-street-7",
          name: "アメカジミックス",
          image: "style-male-street-7.webp",
        },
        {
          id: "male-street-8",
          name: "スポーティー",
          image: "style-male-street-8.webp",
        },
        {
          id: "male-street-9",
          name: "アウトドア",
          image: "style-male-street-9.webp",
        },
        {
          id: "male-street-10",
          name: "アウトドア",
          image: "style-male-street-10.webp",
        },
        {
          id: "male-street-11",
          name: "オーバーシルエット",
          image: "style-male-street-11.webp",
        },
        {
          id: "male-street-12",
          name: "ショート丈・ハイウエスト",
          image: "style-male-street-12.webp",
        },
        {
          id: "male-street-13",
          name: "ショートパンツの脚見せスタイル",
          image: "style-male-street-13.webp",
        },
        {
          id: "male-street-14",
          name: "スポーティー",
          image: "style-male-street-14.webp",
        },
        {
          id: "male-street-15",
          name: "ショートパンツの脚見せスタイル",
          image: "style-male-street-15.webp",
        },
      ],
      searf: [
        {
          id: "male-searf-1",
          name: "サマーニットのゆったりスタイル",
          image: "style-male-searf-1.webp",
        },
        {
          id: "male-searf-2",
          name: "シャツ合わせのリラックススタイル",
          image: "style-male-searf-2.webp",
        },
        {
          id: "male-searf-3",
          name: "ビタミンカラーでアクティブサーフ",
          image: "style-male-searf-3.webp",
        },
        {
          id: "male-searf-4",
          name: "柔らかい印象の大人サーフ",
          image: "style-male-searf-4.webp",
        },
        {
          id: "male-searf-5",
          name: "セットアップ合わせ",
          image: "style-male-searf-5.webp",
        },
        {
          id: "male-searf-6",
          name: "柄シャツがポップなボヘミアンサーフ",
          image: "style-male-searf-6.webp",
        },
        {
          id: "male-searf-7",
          name: "白基調の爽やかスタイル",
          image: "style-male-searf-7.webp",
        },
        {
          id: "male-searf-8",
          name: "白・ブルーの爽やかスタイル",
          image: "style-male-searf-8.webp",
        },
        {
          id: "male-searf-9",
          name: "ロングシャツで縦ラインのシルエット",
          image: "style-male-searf-9.webp",
        },
        {
          id: "male-searf-10",
          name: "シャツ合わせのリラックススタイル",
          image: "style-male-searf-10.webp",
        },
        {
          id: "male-searf-11",
          name: "柄シャツがポップなボヘミアンサーフ",
          image: "style-male-searf-11.webp",
        },
        {
          id: "male-searf-12",
          name: "サマーニットのゆったりスタイル",
          image: "style-male-searf-12.webp",
        },
        {
          id: "male-searf-13",
          name: "シャツ合わせのリラックススタイル",
          image: "style-male-searf-13.webp",
        },
        {
          id: "male-searf-14",
          name: "モノトーンなモードサーフ",
          image: "style-male-searf-14.webp",
        },
        {
          id: "male-searf-15",
          name: "シャツ合わせのリラックススタイル",
          image: "style-male-searf-15.webp",
        },
      ],
      "american-casual": [
        {
          id: "male-amecas-1",
          name: "カモフラ柄がポイントのワークミックス",
          image: "style-male-amecas-1.webp",
        },
        {
          id: "male-amecas-2",
          name: "ワークミックス",
          image: "style-male-amecas-2.webp",
        },
        {
          id: "male-amecas-3",
          name: "大人カジュアル",
          image: "style-male-amecas-3.webp",
        },
        {
          id: "male-amecas-4",
          name: "ミリタリー",
          image: "style-male-amecas-4.webp",
        },
        {
          id: "male-amecas-5",
          name: "ヘリテージ",
          image: "style-male-amecas-5.webp",
        },
        {
          id: "male-amecas-6",
          name: "ルード",
          image: "style-male-amecas-6.webp",
        },
        {
          id: "male-amecas-7",
          name: "バイカー",
          image: "style-male-amecas-7.webp",
        },
        {
          id: "male-amecas-8",
          name: "グランジ",
          image: "style-male-amecas-8.webp",
        },
        {
          id: "male-amecas-9",
          name: "カレッジ",
          image: "style-male-amecas-9.webp",
        },
        {
          id: "male-amecas-10",
          name: "デニムスタイル",
          image: "style-male-amecas-10.webp",
        },
        {
          id: "male-amecas-11",
          name: "ヴィンテージスポーツ",
          image: "style-male-amecas-11.webp",
        },
        {
          id: "male-amecas-12",
          name: "アウトドア",
          image: "style-male-amecas-12.webp",
        },
        {
          id: "male-amecas-13",
          name: "ネイティブ",
          image: "style-male-amecas-13.webp",
        },
        {
          id: "male-amecas-14",
          name: "ルート66",
          image: "style-male-amecas-14.webp",
        },
        {
          id: "male-amecas-15",
          name: "ラギッド",
          image: "style-male-amecas-15.webp",
        },
      ],
    },
    female: {
      mode: [
        {
          id: "female-mode-1",
          name: "エレガントモード",
          image: "style-female-mode-1.webp",
        },
        {
          id: "female-mode-2",
          name: "エレガントモード",
          image: "style-female-mode-2.webp",
        },
        {
          id: "female-mode-3",
          name: "メンズライク",
          image: "style-female-mode-3.webp",
        },
        {
          id: "female-mode-4",
          name: "メンズライク",
          image: "style-female-mode-4.webp",
        },
        {
          id: "female-mode-5",
          name: "カジュアルミックス",
          image: "style-female-mode-5.webp",
        },
        {
          id: "female-mode-6",
          name: "エレガントモード",
          image: "style-female-mode-6.webp",
        },
        {
          id: "female-mode-7",
          name: "エレガントモード",
          image: "style-female-mode-7.webp",
        },
        {
          id: "female-mode-8",
          name: "エレガントモード",
          image: "style-female-mode-8.webp",
        },
        {
          id: "female-mode-9",
          name: "メンズライク",
          image: "style-female-mode-9.webp",
        },
        {
          id: "female-mode-10",
          name: "メンズライク",
          image: "style-female-mode-10.webp",
        },
        {
          id: "female-mode-11",
          name: "エレガントモード",
          image: "style-female-mode-11.webp",
        },
        {
          id: "female-mode-12",
          name: "エレガントモード",
          image: "style-female-mode-12.webp",
        },
        {
          id: "female-mode-13",
          name: "ストリートミックス",
          image: "style-female-mode-13.webp",
        },
        {
          id: "female-mode-14",
          name: "ストリート",
          image: "style-female-mode-14.webp",
        },
        {
          id: "female-mode-15",
          name: "アーバンミックス",
          image: "style-female-mode-15.webp",
        },
      ],
      elegant: [
        {
          id: "female-elegant-1",
          name: "クラシック",
          image: "style-female-elegant-1.webp",
        },
        {
          id: "female-elegant-2",
          name: "フェミニンミックス",
          image: "style-female-elegant-2.webp",
        },
        {
          id: "female-elegant-3",
          name: "クール",
          image: "style-female-elegant-3.webp",
        },
        {
          id: "female-elegant-4",
          name: "カジュアルミックス",
          image: "style-female-elegant-4.webp",
        },
        {
          id: "female-elegant-5",
          name: "カジュアルミックス",
          image: "style-female-elegant-5.webp",
        },
        {
          id: "female-elegant-6",
          name: "クリーンなイメージ",
          image: "style-female-elegant-6.webp",
        },
        {
          id: "female-elegant-7",
          name: "クラシック",
          image: "style-female-elegant-7.webp",
        },
        {
          id: "female-elegant-8",
          name: "クラシック",
          image: "style-female-elegant-8.webp",
        },
        {
          id: "female-elegant-9",
          name: "カジュアルミックス",
          image: "style-female-elegant-9.webp",
        },
        {
          id: "female-elegant-10",
          name: "アーバン",
          image: "style-female-elegant-10.webp",
        },
        {
          id: "female-elegant-11",
          name: "クラシック",
          image: "style-female-elegant-11.webp",
        },
        {
          id: "female-elegant-12",
          name: "フェミニンミックス",
          image: "style-female-elegant-12.webp",
        },
        {
          id: "female-elegant-13",
          name: "フェミニンミックス",
          image: "style-female-elegant-13.webp",
        },
        {
          id: "female-elegant-14",
          name: "カジュアルミックス",
          image: "style-female-elegant-14.webp",
        },
        {
          id: "female-elegant-15",
          name: "アーバン",
          image: "style-female-elegant-15.webp",
        },
      ],
      "urban-conservative": [
        {
          id: "female-urban-1",
          name: "アーバンカジュアル",
          image: "style-female-urban-conservative-1.webp",
        },
        {
          id: "female-urban-2",
          name: "ジャケットスタイル",
          image: "style-female-urban-conservative-2.webp",
        },
        {
          id: "female-urban-3",
          name: "オフィススタイル",
          image: "style-female-urban-conservative-3.webp",
        },
        {
          id: "female-urban-4",
          name: "セットアップ",
          image: "style-female-urban-conservative-4.webp",
        },
        {
          id: "female-urban-5",
          name: "オフィスカジュアル",
          image: "style-female-urban-conservative-5.webp",
        },
        {
          id: "female-urban-6",
          name: "アーバンカジュアル",
          image: "style-female-urban-conservative-6.webp",
        },
        {
          id: "female-urban-7",
          name: "ジャケットスタイル",
          image: "style-female-urban-conservative-7.webp",
        },
        {
          id: "female-urban-8",
          name: "オフィススタイル",
          image: "style-female-urban-conservative-8.webp",
        },
        {
          id: "female-urban-9",
          name: "アーバンカジュアル",
          image: "style-female-urban-conservative-9.webp",
        },
        {
          id: "female-urban-10",
          name: "アーバン",
          image: "style-female-urban-conservative-10.webp",
        },
        {
          id: "female-urban-11",
          name: "コンサバティブ",
          image: "style-female-urban-conservative-11.webp",
        },
        {
          id: "female-urban-12",
          name: "ジャケットスタイル",
          image: "style-female-urban-conservative-12.webp",
        },
        {
          id: "female-urban-13",
          name: "オフィスカジュアル",
          image: "style-female-urban-conservative-13.webp",
        },
        {
          id: "female-urban-14",
          name: "オフィスカジュアル",
          image: "style-female-urban-conservative-14.webp",
        },
        {
          id: "female-urban-15",
          name: "オフィスカジュアル",
          image: "style-female-urban-conservative-15.webp",
        },
      ],
      feminine: [
        {
          id: "female-feminine-1",
          name: "アーバンミックス",
          image: "style-female-feminine-1.webp",
        },
        {
          id: "female-feminine-2",
          name: "クールフェミニン",
          image: "style-female-feminine-2.webp",
        },
        {
          id: "female-feminine-3",
          name: "カジュアルミックス",
          image: "style-female-feminine-3.webp",
        },
        {
          id: "female-feminine-4",
          name: "女性らしい、タイトライン",
          image: "style-female-feminine-4.webp",
        },
        {
          id: "female-feminine-5",
          name: "Aライン、女性らしさ",
          image: "style-female-feminine-5.webp",
        },
        {
          id: "female-feminine-6",
          name: "ポップな印象のアクティブフェミニン",
          image: "style-female-feminine-6.webp",
        },
        {
          id: "female-feminine-7",
          name: "大人フェミニン",
          image: "style-female-feminine-7.webp",
        },
        {
          id: "female-feminine-8",
          name: "クールミックス",
          image: "style-female-feminine-8.webp",
        },
        {
          id: "female-feminine-9",
          name: "ドット柄のレトロな印象の綺麗めスタイル",
          image: "style-female-feminine-9.webp",
        },
        {
          id: "female-feminine-10",
          name: "カジュアルミックス",
          image: "style-female-feminine-10.webp",
        },
        {
          id: "female-feminine-11",
          name: "アーバンミックス",
          image: "style-female-feminine-11.webp",
        },
        {
          id: "female-feminine-12",
          name: "大人フェミニン",
          image: "style-female-feminine-12.webp",
        },
        {
          id: "female-feminine-13",
          name: "クールミックス",
          image: "style-female-feminine-13.webp",
        },
        {
          id: "female-feminine-14",
          name: "マーメイドライン",
          image: "style-female-feminine-14.webp",
        },
        {
          id: "female-feminine-15",
          name: "Aライン・可愛らしさ",
          image: "style-female-feminine-15.webp",
        },
      ],
      sporty: [
        {
          id: "female-sporty-1",
          name: "モードミックス",
          image: "style-female-sporty-1.webp",
        },
        {
          id: "female-sporty-2",
          name: "アメカジ風",
          image: "style-female-sporty-2.webp",
        },
        {
          id: "female-sporty-3",
          name: "メンズライクなモードカジュアル",
          image: "style-female-sporty-3.webp",
        },
        {
          id: "female-sporty-4",
          name: "オーバーシルエット",
          image: "style-female-sporty-4.webp",
        },
        {
          id: "female-sporty-5",
          name: "リラックススポーティー",
          image: "style-female-sporty-5.webp",
        },
        {
          id: "female-sporty-6",
          name: "モードミックス",
          image: "style-female-sporty-6.webp",
        },
        {
          id: "female-sporty-7",
          name: "アメカジ風",
          image: "style-female-sporty-7.webp",
        },
        {
          id: "female-sporty-8",
          name: "フレンチカジュアル",
          image: "style-female-sporty-8.webp",
        },
        {
          id: "female-sporty-9",
          name: "オーバーシルエット",
          image: "style-female-sporty-9.webp",
        },
        {
          id: "female-sporty-10",
          name: "リラックススポーティー",
          image: "style-female-sporty-10.webp",
        },
        {
          id: "female-sporty-11",
          name: "モードミックス",
          image: "style-female-sporty-11.webp",
        },
        {
          id: "female-sporty-12",
          name: "アメカジ風",
          image: "style-female-sporty-12.webp",
        },
        {
          id: "female-sporty-13",
          name: "メンズライクなモードカジュアル",
          image: "style-female-sporty-13.webp",
        },
        {
          id: "female-sporty-14",
          name: "メンズライク",
          image: "style-female-sporty-14.webp",
        },
        {
          id: "female-sporty-15",
          name: "リラックススポーティー",
          image: "style-female-sporty-15.webp",
        },
      ],
      bohemian: [
        {
          id: "female-bohemian-1",
          name: "ワンピーススタイル",
          image: "style-female-bohemian-1.webp",
        },
        {
          id: "female-bohemian-2",
          name: "大人リゾート",
          image: "style-female-bohemian-2.webp",
        },
        {
          id: "female-bohemian-3",
          name: "デニムスタイル",
          image: "style-female-bohemian-3.webp",
        },
        {
          id: "female-bohemian-4",
          name: "ナチュラルスタイル",
          image: "style-female-bohemian-4.webp",
        },
        {
          id: "female-bohemian-5",
          name: "フェミニンミックス",
          image: "style-female-bohemian-5.webp",
        },
        {
          id: "female-bohemian-6",
          name: "ワンピーススタイル",
          image: "style-female-bohemian-6.webp",
        },
        {
          id: "female-bohemian-7",
          name: "オシャレレイヤード",
          image: "style-female-bohemian-7.webp",
        },
        {
          id: "female-bohemian-8",
          name: "ロックスタイル",
          image: "style-female-bohemian-8.webp",
        },
        {
          id: "female-bohemian-9",
          name: "女性らしいスタイル",
          image: "style-female-bohemian-9.webp",
        },
        {
          id: "female-bohemian-10",
          name: "モダンミックス",
          image: "style-female-bohemian-10.webp",
        },
        {
          id: "female-bohemian-11",
          name: "ワンピーススタイル",
          image: "style-female-bohemian-11.webp",
        },
        {
          id: "female-bohemian-12",
          name: "大人シック",
          image: "style-female-bohemian-12.webp",
        },
        {
          id: "female-bohemian-13",
          name: "デニムスタイル",
          image: "style-female-bohemian-13.webp",
        },
        {
          id: "female-bohemian-14",
          name: "女性らしいスタイル",
          image: "style-female-bohemian-14.webp",
        },
        {
          id: "female-bohemian-15",
          name: "カジュアルミックス",
          image: "style-female-bohemian-15.webp",
        },
      ],
      "cool-rock": [
        {
          id: "female-cool-rock-1",
          name: "個性モード",
          image: "style-female-cool-rock-1.webp",
        },
        {
          id: "female-cool-rock-2",
          name: "エレガントミックス",
          image: "style-female-cool-rock-2.webp",
        },
        {
          id: "female-cool-rock-3",
          name: "スカートスタイル",
          image: "style-female-cool-rock-3.webp",
        },
        {
          id: "female-cool-rock-4",
          name: "ナチュラルミックス",
          image: "style-female-cool-rock-4.webp",
        },
        {
          id: "female-cool-rock-5",
          name: "シンプル",
          image: "style-female-cool-rock-5.webp",
        },
        {
          id: "female-cool-rock-6",
          name: "モードスタイル",
          image: "style-female-cool-rock-6.webp",
        },
        {
          id: "female-cool-rock-7",
          name: "ジャケットスタイル",
          image: "style-female-cool-rock-7.webp",
        },
        {
          id: "female-cool-rock-8",
          name: "スカートスタイル",
          image: "style-female-cool-rock-8.webp",
        },
        {
          id: "female-cool-rock-9",
          name: "カジュアルミックス",
          image: "style-female-cool-rock-9.webp",
        },
        {
          id: "female-cool-rock-10",
          name: "シンプル",
          image: "style-female-cool-rock-10.webp",
        },
        {
          id: "female-cool-rock-11",
          name: "モード",
          image: "style-female-cool-rock-11.webp",
        },
        {
          id: "female-cool-rock-12",
          name: "ジャケットスタイル",
          image: "style-female-cool-rock-12.webp",
        },
        {
          id: "female-cool-rock-13",
          name: "スカートスタイル",
          image: "style-female-cool-rock-13.webp",
        },
        {
          id: "female-cool-rock-14",
          name: "ミリタリーミックス",
          image: "style-female-cool-rock-14.webp",
        },
        {
          id: "female-cool-rock-15",
          name: "シンプル",
          image: "style-female-cool-rock-15.webp",
        },
      ],
      "vibrant-color": [
        {
          id: "female-vibrant-color-1",
          name: "柄セットアップ",
          image: "style-female-vibrant-color-1.webp",
        },
        {
          id: "female-vibrant-color-2",
          name: "柄シャツミックス",
          image: "style-female-vibrant-color-2.webp",
        },
        {
          id: "female-vibrant-color-3",
          name: "カラーブロック",
          image: "style-female-vibrant-color-3.webp",
        },
        {
          id: "female-vibrant-color-4",
          name: "Tシャツ合わせ",
          image: "style-female-vibrant-color-4.webp",
        },
        {
          id: "female-vibrant-color-5",
          name: "シンプル",
          image: "style-female-vibrant-color-5.webp",
        },
        {
          id: "female-vibrant-color-6",
          name: "カラージャケットスタイル",
          image: "style-female-vibrant-color-6.webp",
        },
        {
          id: "female-vibrant-color-7",
          name: "デニムミックス",
          image: "style-female-vibrant-color-7.webp",
        },
        {
          id: "female-vibrant-color-8",
          name: "カラーブロック",
          image: "style-female-vibrant-color-8.webp",
        },
        {
          id: "female-vibrant-color-9",
          name: "Tシャツ合わせ",
          image: "style-female-vibrant-color-9.webp",
        },
        {
          id: "female-vibrant-color-10",
          name: "シンプル",
          image: "style-female-vibrant-color-10.webp",
        },
        {
          id: "female-vibrant-color-11",
          name: "カラージャケットスタイル",
          image: "style-female-vibrant-color-11.webp",
        },
        {
          id: "female-vibrant-color-12",
          name: "カジュアルミックス",
          image: "style-female-vibrant-color-12.webp",
        },
        {
          id: "female-vibrant-color-13",
          name: "カラーブロック",
          image: "style-female-vibrant-color-13.webp",
        },
        {
          id: "female-vibrant-color-14",
          name: "Tシャツ合わせ",
          image: "style-female-vibrant-color-14.webp",
        },
        {
          id: "female-vibrant-color-15",
          name: "シンプル",
          image: "style-female-vibrant-color-15.webp",
        },
      ],
      natural: [
        {
          id: "female-natural-1",
          name: "大人リラックス",
          image: "style-female-natural-1.webp",
        },
        {
          id: "female-natural-2",
          name: "サマーニットスタイル",
          image: "style-female-natural-2.webp",
        },
        {
          id: "female-natural-3",
          name: "オーバーシャツスタイル",
          image: "style-female-natural-3.webp",
        },
        {
          id: "female-natural-4",
          name: "メンズライク",
          image: "style-female-natural-4.webp",
        },
        {
          id: "female-natural-5",
          name: "シンプル",
          image: "style-female-natural-5.webp",
        },
        {
          id: "female-natural-6",
          name: "大人リラックス",
          image: "style-female-natural-6.webp",
        },
        {
          id: "female-natural-7",
          name: "サマーニットスタイル",
          image: "style-female-natural-7.webp",
        },
        {
          id: "female-natural-8",
          name: "オーバーシャツスタイル",
          image: "style-female-natural-8.webp",
        },
        {
          id: "female-natural-9",
          name: "メンズライク",
          image: "style-female-natural-9.webp",
        },
        {
          id: "female-natural-10",
          name: "シンプル",
          image: "style-female-natural-10.webp",
        },
        {
          id: "female-natural-11",
          name: "大人リラックス",
          image: "style-female-natural-11.webp",
        },
        {
          id: "female-natural-12",
          name: "サマーニットスタイル",
          image: "style-female-natural-12.webp",
        },
        {
          id: "female-natural-13",
          name: "オーバーシャツスタイル",
          image: "style-female-natural-13.webp",
        },
        {
          id: "female-natural-14",
          name: "メンズライク",
          image: "style-female-natural-14.webp",
        },
        {
          id: "female-natural-15",
          name: "シンプル",
          image: "style-female-natural-15.webp",
        },
      ],
    },
  },
};

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = imageMapping;
}

// Make available globally (check if not already defined)
if (typeof window.imageMapping === "undefined") {
  window.imageMapping = imageMapping;
}

/* ===== form-validation.js ===== */

// Form Validation Module
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.errors = {};
    this.validationRules = {
      required: (value) => value && value.toString().trim() !== "",
      email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      phone: (value) =>
        /^[\d\-\+\(\)\s]+$/.test(value) &&
        value.replace(/\D/g, "").length >= 10,
      postal: (value) => /^\d{3}-?\d{4}$/.test(value),
      minLength: (value, min) => value && value.length >= min,
      maxLength: (value, max) => value && value.length <= max,
      number: (value) => !isNaN(value) && isFinite(value),
      date: (value) => !isNaN(Date.parse(value)),
    };

    this.errorMessages = {
      required: "この項目は必須です",
      email: "有効なメールアドレスを入力してください",
      phone: "有効な電話番号を入力してください",
      postal: "有効な郵便番号を入力してください（例: 123-4567）",
      minLength: (min) => `${min}文字以上入力してください`,
      maxLength: (max) => `${max}文字以内で入力してください`,
      number: "数値を入力してください",
      date: "有効な日付を入力してください",
    };

    this.init();
  }

  init() {
    if (!this.form) return;

    // Add real-time validation
    this.form.addEventListener("input", (e) => {
      if (e.target.matches("input, select, textarea")) {
        this.validateField(e.target);
      }
    });

    // Add blur validation for better UX
    this.form.addEventListener(
      "blur",
      (e) => {
        if (e.target.matches("input, select, textarea")) {
          this.validateField(e.target);
        }
      },
      true
    );

    // Add form submit validation
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        this.submitForm();
      } else {
        this.showValidationSummary();
      }
    });

    // Add validation attributes to fields
    this.setupValidationAttributes();
  }

  setupValidationAttributes() {
    // Required fields
    const requiredFields = this.form.querySelectorAll(
      "[required], label:has(.required) + *"
    );
    requiredFields.forEach((field) => {
      field.setAttribute("data-validate", "required");
      field.setAttribute("aria-required", "true");
    });

    // Email fields
    const emailFields = this.form.querySelectorAll(
      'input[type="email"], input[name*="email"]'
    );
    emailFields.forEach((field) => {
      const rules = field.getAttribute("data-validate") || "";
      field.setAttribute("data-validate", `${rules} email`.trim());
    });

    // Phone fields
    const phoneFields = this.form.querySelectorAll(
      'input[type="tel"], input[name*="phone"], input[name*="tel"]'
    );
    phoneFields.forEach((field) => {
      const rules = field.getAttribute("data-validate") || "";
      field.setAttribute("data-validate", `${rules} phone`.trim());
    });

    // Postal code fields
    const postalFields = this.form.querySelectorAll(
      'input[name*="postal"], input[name*="zip"]'
    );
    postalFields.forEach((field) => {
      const rules = field.getAttribute("data-validate") || "";
      field.setAttribute("data-validate", `${rules} postal`.trim());
    });
  }

  validateField(field) {
    const fieldName = field.name || field.id;
    const value = field.value;
    const rules = field.getAttribute("data-validate");

    if (!rules) return true;

    const ruleList = rules.split(" ").filter((r) => r);
    let isValid = true;

    for (const rule of ruleList) {
      if (rule === "required" && !this.validationRules.required(value)) {
        this.setFieldError(field, this.errorMessages.required);
        isValid = false;
        break;
      } else if (
        rule === "email" &&
        value &&
        !this.validationRules.email(value)
      ) {
        this.setFieldError(field, this.errorMessages.email);
        isValid = false;
        break;
      } else if (
        rule === "phone" &&
        value &&
        !this.validationRules.phone(value)
      ) {
        this.setFieldError(field, this.errorMessages.phone);
        isValid = false;
        break;
      } else if (
        rule === "postal" &&
        value &&
        !this.validationRules.postal(value)
      ) {
        this.setFieldError(field, this.errorMessages.postal);
        isValid = false;
        break;
      }
    }

    if (isValid) {
      this.clearFieldError(field);
    }

    return isValid;
  }

  validateForm() {
    const fields = this.form.querySelectorAll("input, select, textarea");
    let isValid = true;

    fields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    // Validate checkbox groups (at least one checked)
    const checkboxGroups = this.form.querySelectorAll(
      '.checkbox-group[data-required="true"]'
    );
    checkboxGroups.forEach((group) => {
      const checkedBoxes = group.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      if (checkedBoxes.length === 0) {
        this.setGroupError(group, "少なくとも1つ選択してください");
        isValid = false;
      } else {
        this.clearGroupError(group);
      }
    });

    // Validate radio groups
    const radioGroups = this.form.querySelectorAll(
      '.radio-group[data-required="true"]'
    );
    radioGroups.forEach((group) => {
      const checkedRadio = group.querySelector('input[type="radio"]:checked');
      if (!checkedRadio) {
        this.setGroupError(group, "いずれか1つを選択してください");
        isValid = false;
      } else {
        this.clearGroupError(group);
      }
    });

    return isValid;
  }

  setFieldError(field, message) {
    // Remove existing error
    this.clearFieldError(field);

    // Add error class
    field.classList.add("error");

    // Create error message element
    const errorEl = document.createElement("span");
    errorEl.className = "error-message";
    errorEl.textContent = message;
    errorEl.setAttribute("role", "alert");
    errorEl.setAttribute("aria-live", "polite");

    // Insert error after field
    field.parentNode.insertBefore(errorEl, field.nextSibling);

    // Set aria-invalid
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", errorEl.id);
  }

  clearFieldError(field) {
    field.classList.remove("error");
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");

    const error = field.parentNode.querySelector(".error-message");
    if (error) {
      error.remove();
    }
  }

  setGroupError(group, message) {
    this.clearGroupError(group);

    group.classList.add("error");

    const errorEl = document.createElement("span");
    errorEl.className = "error-message group-error";
    errorEl.textContent = message;
    errorEl.setAttribute("role", "alert");

    group.appendChild(errorEl);
  }

  clearGroupError(group) {
    group.classList.remove("error");
    const error = group.querySelector(".group-error");
    if (error) {
      error.remove();
    }
  }

  showValidationSummary() {
    // Find first error and scroll to it
    const firstError = this.form.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });

      // Focus on the field if it's focusable
      const focusableField = firstError.matches("input, select, textarea")
        ? firstError
        : firstError.querySelector("input, select, textarea");
      if (focusableField) {
        focusableField.focus();
      }
    }
  }

  showNotification(message, type = "info") {
    // Remove existing notification
    const existing = document.querySelector(".validation-notification");
    if (existing) {
      existing.remove();
    }

    const notification = document.createElement("div");
    notification.className = `validation-notification ${type}`;
    notification.setAttribute("role", "alert");
    notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="閉じる">&times;</button>
        `;

    document.body.appendChild(notification);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      notification.classList.add("fade-out");
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        notification.remove();
      });
  }

  async submitForm() {
    // Collect form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "送信中...";
    submitBtn.disabled = true;

    try {
      // Here you would normally send data to server
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      this.showNotification("フォームが正常に送信されました！", "success");

      // Save to localStorage for now
      localStorage.setItem(
        "formSubmission",
        JSON.stringify({
          data: data,
          timestamp: new Date().toISOString(),
        })
      );

      // Reset form or redirect
      if (confirm("送信が完了しました。フォームをリセットしますか？")) {
        this.form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      // Error
      this.showNotification(
        "送信中にエラーが発生しました。もう一度お試しください。",
        "error"
      );
    } finally {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
}

// Initialize validator when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.formValidator = new FormValidator("styleForm");
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = FormValidator;
}

/* ===== form-state-manager.js ===== */

// Form State Manager with Auto-save functionality
class FormStateManager {
  constructor(formId, options = {}) {
    this.form = document.getElementById(formId);
    this.storageKey = options.storageKey || "formState";
    this.autoSaveInterval = options.autoSaveInterval || 5000; // 5 seconds
    this.autoSaveTimer = null;
    this.isDirty = false;
    this.lastSaved = null;

    // Event handlers bound to this instance
    this.handleChange = this.handleChange.bind(this);
    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);

    this.init();
  }

  init() {
    if (!this.form) return;

    // Load saved state
    this.loadState();

    // Setup event listeners
    this.setupEventListeners();

    // Start auto-save
    this.startAutoSave();

    // Add UI indicators
    this.addSaveIndicator();
  }

  setupEventListeners() {
    // Track changes
    this.form.addEventListener("input", this.handleChange);
    this.form.addEventListener("change", this.handleChange);

    // Warn before leaving with unsaved changes
    window.addEventListener("beforeunload", this.handleBeforeUnload);

    // Save on visibility change (tab switch)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.isDirty) {
        this.saveState();
      }
    });
  }

  handleChange(event) {
    this.isDirty = true;

    // Reset auto-save timer
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
    }

    this.autoSaveTimer = setTimeout(() => {
      this.saveState();
    }, this.autoSaveInterval);
  }

  handleBeforeUnload(event) {
    if (this.isDirty) {
      const message = "保存されていない変更があります。ページを離れますか？";
      event.preventDefault();
      event.returnValue = message;
      return message;
    }
  }

  getFormData() {
    const formData = new FormData(this.form);
    const data = {};

    // Handle all form inputs
    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (checkboxes)
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }

    // Handle unchecked checkboxes
    const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked && checkbox.name) {
        if (!data[checkbox.name]) {
          data[checkbox.name] = [];
        }
      }
    });

    // Add metadata
    data._metadata = {
      savedAt: new Date().toISOString(),
      formVersion: "1.0",
      userAgent: navigator.userAgent,
    };

    return data;
  }

  saveState() {
    try {
      const data = this.getFormData();

      // Save to localStorage
      localStorage.setItem(this.storageKey, JSON.stringify(data));

      // Save to sessionStorage as backup
      sessionStorage.setItem(this.storageKey + "_backup", JSON.stringify(data));

      this.isDirty = false;
      this.lastSaved = new Date();

      // Optional: Save to server
      if (this.options && this.options.serverSave) {
        this.saveToServer(data);
      }
    } catch (error) {
    }
  }

  loadState() {
    try {
      const savedData =
        localStorage.getItem(this.storageKey) ||
        sessionStorage.getItem(this.storageKey + "_backup");

      if (!savedData) return;

      const data = JSON.parse(savedData);

      // Check if saved data is recent (within 7 days)
      if (data._metadata && data._metadata.savedAt) {
        const savedDate = new Date(data._metadata.savedAt);
        const daysSince = (new Date() - savedDate) / (1000 * 60 * 60 * 24);

        if (daysSince > 7) {
          if (
            confirm("保存されたデータは7日以上前のものです。読み込みますか？")
          ) {
            this.restoreFormData(data);
          } else {
            this.clearState();
          }
        } else {
          this.restoreFormData(data);
        }
      }
    } catch (error) {
    }
  }

  restoreFormData(data) {
    Object.entries(data).forEach(([key, value]) => {
      if (key === "_metadata") return;

      const elements = this.form.elements[key];

      if (!elements) return;

      if (elements.length > 1) {
        // Radio buttons or multiple checkboxes
        Array.from(elements).forEach((element) => {
          if (element.type === "checkbox") {
            element.checked = Array.isArray(value)
              ? value.includes(element.value)
              : value === element.value;
          } else if (element.type === "radio") {
            element.checked = element.value === value;
          }
        });
      } else {
        // Single element
        const element = elements;
        if (element.type === "checkbox") {
          element.checked = value === "on" || value === true;
        } else if (element.type === "file") {
          // Cannot restore file inputs
        } else {
          element.value = value;
        }
      }
    });

    // Trigger change events to update UI
    this.form.dispatchEvent(new Event("change", { bubbles: true }));
  }

  clearState() {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey + "_backup");
    this.isDirty = false;
  }

  startAutoSave() {
    // Initial auto-save setup already handled in handleChange
  }

  stopAutoSave() {
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }

  addSaveIndicator() {
    const indicator = document.createElement("div");
    indicator.id = "save-indicator";
    indicator.className = "save-indicator";

    // this.form.parentElement.insertBefore(indicator, this.form);
    // this.saveIndicator = indicator;
  }

  async saveToServer(data) {
    // Placeholder for server save functionality
    try {
      const response = await fetch("/api/save-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Server save failed");
      }
    } catch (error) {
      // Don't show error to user - localStorage save is sufficient
    }
  }

  destroy() {
    this.stopAutoSave();
    this.form.removeEventListener("input", this.handleChange);
    this.form.removeEventListener("change", this.handleChange);
    window.removeEventListener("beforeunload", this.handleBeforeUnload);

    if (this.saveIndicator) {
      this.saveIndicator.remove();
    }
  }
}

// Add styles for save indicator
const saveIndicatorStyles = `
.save-indicator {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    z-index: 1000;
    transition: all 0.3s ease;
}

.save-indicator.saving .save-icon::after {
    content: '⏳';
}

.save-indicator.saved .save-icon::after {
    content: '✓';
    color: #4caf50;
}

.save-indicator.unsaved .save-icon::after {
    content: '•';
    color: #ff9800;
}

.save-indicator.error .save-icon::after {
    content: '✗';
    color: #f44336;
}

.save-indicator.cleared .save-icon::after {
    content: '🗑';
}

.form-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    z-index: 1000;
    animation: slideUp 0.3s ease;
}

.form-notification.info {
    background-color: #2196f3;
}

.form-notification.success {
    background-color: #4caf50;
}

.form-notification.error {
    background-color: #f44336;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = saveIndicatorStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.formStateManager = new FormStateManager("styleForm", {
    storageKey: "styleFormState",
    autoSaveInterval: 5000,
    serverSave: false, // Enable when server endpoint is ready
  });
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = FormStateManager;
}

/* ===== form-progress.js ===== */

// Form Progress Indicator and Navigation
class FormProgress {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.sections = [];
    this.currentSection = 0;
    this.completedFields = new Set();

    this.init();
  }

  init() {
    if (!this.form) return;

    // Find all form sections
    this.sections = Array.from(this.form.querySelectorAll(".form-section"));

    // Initialize progress elements
    this.progressFill = document.querySelector(".progress-fill");
    this.progressPercentage = document.querySelector(".progress-percentage");
    this.fieldsCompleted = document.querySelector(".fields-completed");
    this.totalFields = this.countRequiredFields();

    // Create section navigation - commented out as method not defined
    // this.createSectionNav();

    // Setup field tracking
    this.setupFieldTracking();

    // Add smooth scroll behavior
    this.setupSmoothScroll();

    // Initialize progress
    if (this.progressFill && this.progressPercentage && this.fieldsCompleted) {
      this.updateProgress();
    }
  }

  setupFieldTracking() {
    // Track required fields
    const requiredInputs = this.form.querySelectorAll(
      '[required], [data-validate*="required"]'
    );
    const requiredGroups = this.form.querySelectorAll(
      '.checkbox-group[data-required="true"], .radio-group[data-required="true"]'
    );

    // Input tracking
    requiredInputs.forEach((input) => {
      input.addEventListener("input", () => this.checkFieldCompletion(input));
      input.addEventListener("change", () => this.checkFieldCompletion(input));

      // Check initial state
      this.checkFieldCompletion(input);
    });

    // Group tracking
    requiredGroups.forEach((group) => {
      group.addEventListener("change", () => this.checkGroupCompletion(group));

      // Check initial state
      this.checkGroupCompletion(group);
    });

    // Track section visibility
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = this.sections.indexOf(entry.target);
          if (sectionIndex !== -1) {
            this.setActiveSection(sectionIndex);
          }
        }
      });
    }, options);

    this.sections.forEach((section) => observer.observe(section));
  }

  setActiveSection(index) {
    this.currentSection = index;

    // Update nav
    if (this.sectionNav) {
      const navButtons = this.sectionNav.querySelectorAll(".section-nav-button");
      navButtons.forEach((button, i) => {
        button.classList.toggle("active", i === index);
      });
    }
  }

  checkFieldCompletion(field) {
    const fieldId = field.id || field.name;
    const isComplete = this.isFieldComplete(field);

    if (isComplete) {
      this.completedFields.add(fieldId);
    } else {
      this.completedFields.delete(fieldId);
    }

    this.updateProgress();
  }

  checkGroupCompletion(group) {
    const groupId = group.id || group.dataset.groupName;
    const isComplete = this.isGroupComplete(group);

    if (isComplete) {
      this.completedFields.add(groupId);
    } else {
      this.completedFields.delete(groupId);
    }

    this.updateProgress();
  }

  isFieldComplete(field) {
    if (field.type === "checkbox" || field.type === "radio") {
      return field.checked;
    }
    // Check if value exists before calling trim
    return field.value && field.value.trim() !== "";
  }

  isGroupComplete(group) {
    if (group.classList.contains("checkbox-group")) {
      return group.querySelectorAll("input:checked").length > 0;
    }
    if (group.classList.contains("radio-group")) {
      return group.querySelector("input:checked") !== null;
    }
    return false;
  }

  countRequiredFields() {
    let count = 0;

    // Count individual required fields
    const requiredInputs = this.form.querySelectorAll(
      '[required], [data-validate*="required"]'
    );
    requiredInputs.forEach((input) => {
      // Skip if part of a radio group (count group instead)
      if (input.type === "radio") {
        const groupName = input.name;
        if (!this.countedRadioGroups?.has(groupName)) {
          if (!this.countedRadioGroups) this.countedRadioGroups = new Set();
          this.countedRadioGroups.add(groupName);
          count++;
        }
      } else {
        count++;
      }
    });

    // Count required groups
    count += this.form.querySelectorAll(
      '.checkbox-group[data-required="true"], .radio-group[data-required="true"]'
    ).length;

    return count;
  }

  updateProgress() {
    if (!this.totalFields || this.totalFields === 0) return;

    const completed = this.completedFields.size;
    const percentage = Math.round((completed / this.totalFields) * 100);

    // Update UI
    if (this.progressFill) {
      this.progressFill.style.width = `${percentage}%`;
    }
    if (this.progressPercentage) {
      this.progressPercentage.textContent = `${percentage}%`;
    }
    if (this.fieldsCompleted) {
      this.fieldsCompleted.textContent = completed;
    }

    // Update section status
    this.updateSectionStatus();

    // Add completion effects
    if (percentage === 100 && this.progressFill) {
      this.progressFill.classList.add("complete");
      this.showCompletionMessage();
    } else if (this.progressFill) {
      this.progressFill.classList.remove("complete");
    }
  }

  updateSectionStatus() {
    this.sections.forEach((section, index) => {
      const sectionFields = section.querySelectorAll(
        '[required], [data-validate*="required"]'
      );
      const sectionGroups = section.querySelectorAll(
        '.checkbox-group[data-required="true"], .radio-group[data-required="true"]'
      );

      let sectionComplete = true;

      // Check fields
      sectionFields.forEach((field) => {
        if (!this.isFieldComplete(field)) {
          sectionComplete = false;
        }
      });

      // Check groups
      sectionGroups.forEach((group) => {
        if (!this.isGroupComplete(group)) {
          sectionComplete = false;
        }
      });

      // Update nav status
      if (this.sectionNav) {
        const navButton = this.sectionNav.querySelector(
          `[data-section="${index}"]`
        );
        if (navButton) {
          navButton.classList.toggle("section-complete", sectionComplete);
        }
      }
    });
  }

  scrollToSection(index) {
    const section = this.sections[index];
    if (!section) return;

    const offset = 100; // Account for fixed elements
    const targetPosition = section.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Focus first input in section
    setTimeout(() => {
      const firstInput = section.querySelector("input, select, textarea");
      if (firstInput) {
        firstInput.focus();
      }
    }, 500);
  }

  setupSmoothScroll() {
    // Add smooth scroll to all section transitions
    document.querySelectorAll('a[href^="#section"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        const index = this.sections.indexOf(section);
        if (index !== -1) {
          this.scrollToSection(index);
        }
      });
    });
  }

  showCompletionMessage() {
    if (this.completionShown) return;
    this.completionShown = true;

    const message = document.createElement("div");
    message.className = "completion-message";
    message.innerHTML = `
            <div class="completion-content">
                <div class="completion-icon">🎉</div>
                <h3>フォームの入力が完了しました！</h3>
                <p>すべての必須項目に入力されています。内容を確認して送信してください。</p>
                <button class="completion-close">閉じる</button>
            </div>
        `;

    document.body.appendChild(message);

    setTimeout(() => {
      message.classList.add("show");
    }, 100);

    message.querySelector(".completion-close").addEventListener("click", () => {
      message.classList.remove("show");
      setTimeout(() => message.remove(), 300);
    });
  }
}

// Add progress styles
const progressStyles = `
.progress-container {
    background: var(--searface-elevated);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin-bottom: 32px;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.progress-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
}

.progress-percentage {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
}

.progress-bar-wrapper {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    height: 20px;
    overflow: hidden;
    margin-bottom: 12px;
}

.progress-bar {
    height: 100%;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #66bb6a);
    border-radius: 10px;
    transition: width 0.5s ease;
    position: relative;
    overflow: hidden;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 2s infinite;
}

.progress-fill.complete {
    background: linear-gradient(90deg, #ffd700, #ffed4e);
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-stats {
    font-size: 14px;
    color: var(--text-secondary);
}

.sticky-section-nav {
    position: sticky;
    top: 20px;
    z-index: 100;
    margin-bottom: 32px;
}


.section-nav-list {
    list-style: none;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: thin;
}

.section-nav-item {
    flex-shrink: 0;
}

.section-nav-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.section-nav-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary-color);
    color: var(--text-primary);
    transform: translateY(-2px);
}

.section-nav-button.active {
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
}

.section-nav-button.section-complete .status-incomplete {
    display: none;
}

.section-nav-button:not(.section-complete) .status-complete {
    display: none;
}

.nav-number {
    font-weight: 600;
    font-size: 16px;
}

.nav-title {
    font-weight: 400;
}

.nav-status {
    margin-left: auto;
}

.status-complete {
    color: #4caf50;
}

.completion-message {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.completion-message.show {
    opacity: 1;
}

.completion-content {
    background: var(--searface-elevated);
    border: 2px solid var(--accent-gold);
    border-radius: var(--radius-xl);
    padding: 48px;
    text-align: center;
    max-width: 500px;
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.completion-message.show .completion-content {
    transform: scale(1);
}

.completion-icon {
    font-size: 72px;
    margin-bottom: 24px;
}

.completion-content h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.completion-content p {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
}

.completion-close {
    padding: 12px 32px;
    style-male-mode-1.webp
    color: var(--background-color);
    border: none;
    border-radius: var(--radius-md);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.completion-close:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
    .section-nav-list {
        flex-wrap: nowrap;
    }

    .section-nav-button {
        font-size: 12px;
        padding: 10px 16px;
    }

    .nav-title {
        display: none;
    }
}
`;

// Inject styles
const progressStyleSheet = document.createElement("style");
progressStyleSheet.textContent = progressStyles;
document.head.appendChild(progressStyleSheet);

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.formProgress = new FormProgress("styleForm");
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = FormProgress;
}

// Function to get all brand preferences
function getBrandPreferences() {
  const preferences = {
    liked: [],
    disliked: [],
  };

  const brandItems = document.querySelectorAll(".brand-selection-item");
  brandItems.forEach((item) => {
    const brand = item.dataset.brand;
    const hiddenInput = item.querySelector('input[type="hidden"]');
    const value = hiddenInput.value;

    if (value === "like") {
      preferences.liked.push(brand);
    } else if (value === "dislike") {
      preferences.disliked.push(brand);
    }
  });

  return preferences;
}

// Function to set brand preferences (for loading saved state)
function setBrandPreferences(preferences) {
  if (!preferences) return;

  // Clear all selections first
  document.querySelectorAll(".brand-select-btn").forEach((btn) => {
    btn.classList.remove("selected");
  });

  // Set liked brands
  if (preferences.liked && Array.isArray(preferences.liked)) {
    preferences.liked.forEach((brand) => {
      const likeBtn = document.querySelector(
        `.brand-select-btn.like[data-brand="${brand}"]`
      );
      if (likeBtn) {
        likeBtn.click();
      }
    });
  }

  // Set disliked brands
  if (preferences.disliked && Array.isArray(preferences.disliked)) {
    preferences.disliked.forEach((brand) => {
      const dislikeBtn = document.querySelector(
        `.brand-select-btn.dislike[data-brand="${brand}"]`
      );
      if (dislikeBtn) {
        dislikeBtn.click();
      }
    });
  }
}

// Export functions for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getBrandPreferences,
    setBrandPreferences,
  };
}

/* ===== brand-selection-fix.js ===== */

// Brand Selection with ○× functionality - Enhanced version
(function () {
  function handleBrandButtonClick(e) {
    // Check if clicked element is a brand button or its child
    const button = e.target.closest(".brand-select-btn");
    if (!button) return;

    e.preventDefault();
    e.stopPropagation();

    const brand = button.dataset.brand;
    const preference = button.dataset.preference;
    const brandItem = button.closest(".brand-selection-item");

    if (!brandItem) {
      return;
    }

    const hiddenInput = brandItem.querySelector('input[type="hidden"]');

    // Find the other button (like/dislike)
    const otherPreference = preference === "like" ? "dislike" : "like";
    const otherButton = brandItem.querySelector(
      `.brand-select-btn.${otherPreference}`
    );

    // Toggle selection
    if (button.classList.contains("selected")) {
      // Deselect
      button.classList.remove("selected");
      if (hiddenInput) hiddenInput.value = "";
    } else {
      // Select this and deselect other
      button.classList.add("selected");
      if (otherButton) otherButton.classList.remove("selected");
      if (hiddenInput) hiddenInput.value = preference;
    }

    // Update visual state
    updateBrandItemState(
      brandItem,
      preference,
      button.classList.contains("selected")
    );

    // Update form state if state manager exists
    if (window.formStateManager && hiddenInput) {
      window.formStateManager.handleChange({ target: hiddenInput });
    }
  }

  function updateBrandItemState(brandItem, preference, isSelected) {
    // Add visual feedback to the brand item
    brandItem.classList.remove("brand-liked", "brand-disliked");

    if (isSelected) {
      if (preference === "like") {
        brandItem.classList.add("brand-liked");
      } else {
        brandItem.classList.add("brand-disliked");
      }
    }
  }

  function initializeExistingButtons() {
    // Initialize any pre-selected buttons from saved state
    const brandItems = document.querySelectorAll(".brand-selection-item");

    brandItems.forEach((item) => {
      const hiddenInput = item.querySelector('input[type="hidden"]');
      if (hiddenInput && hiddenInput.value) {
        const preference = hiddenInput.value;
        const button = item.querySelector(`.brand-select-btn.${preference}`);
        if (button && !button.classList.contains("selected")) {
          button.classList.add("selected");
          updateBrandItemState(item, preference, true);
        }
      }
    });
  }

  // Function to get all brand preferences
  window.getBrandPreferences = function () {
    const preferences = {
      liked: [],
      disliked: [],
    };

    const brandItems = document.querySelectorAll(".brand-selection-item");
    brandItems.forEach((item) => {
      const brand = item.dataset.brand;
      const hiddenInput = item.querySelector('input[type="hidden"]');
      const value = hiddenInput ? hiddenInput.value : "";

      if (value === "like") {
        preferences.liked.push(brand);
      } else if (value === "dislike") {
        preferences.disliked.push(brand);
      }
    });

    return preferences;
  };

  // Function to set brand preferences (for loading saved state)
  window.setBrandPreferences = function (preferences) {
    if (!preferences) return;

    // Clear all selections first
    document.querySelectorAll(".brand-select-btn.selected").forEach((btn) => {
      btn.classList.remove("selected");
    });

    document.querySelectorAll(".brand-selection-item").forEach((item) => {
      item.classList.remove("brand-liked", "brand-disliked");
      const hiddenInput = item.querySelector('input[type="hidden"]');
      if (hiddenInput) hiddenInput.value = "";
    });

    // Set liked brands
    if (preferences.liked && Array.isArray(preferences.liked)) {
      preferences.liked.forEach((brand) => {
        const brandItem = document.querySelector(
          `.brand-selection-item[data-brand="${brand}"]`
        );
        if (brandItem) {
          const likeBtn = brandItem.querySelector(".brand-select-btn.like");
          const hiddenInput = brandItem.querySelector('input[type="hidden"]');
          if (likeBtn) {
            likeBtn.classList.add("selected");
            if (hiddenInput) hiddenInput.value = "like";
            updateBrandItemState(brandItem, "like", true);
          }
        }
      });
    }

    // Set disliked brands
    if (preferences.disliked && Array.isArray(preferences.disliked)) {
      preferences.disliked.forEach((brand) => {
        const brandItem = document.querySelector(
          `.brand-selection-item[data-brand="${brand}"]`
        );
        if (brandItem) {
          const dislikeBtn = brandItem.querySelector(
            ".brand-select-btn.dislike"
          );
          const hiddenInput = brandItem.querySelector('input[type="hidden"]');
          if (dislikeBtn) {
            dislikeBtn.classList.add("selected");
            if (hiddenInput) hiddenInput.value = "dislike";
            updateBrandItemState(brandItem, "dislike", true);
          }
        }
      });
    }
  };
})();

/* ===== postal-autofill.js ===== */

// Postal Code Auto-fill functionality for Japanese addresses
document.addEventListener("DOMContentLoaded", function () {
  initializePostalAutofill();
});

function initializePostalAutofill() {
  const postalInput1 = document.getElementById("postalCode1");
  const postalInput2 = document.getElementById("postalCode2");
  const prefectureSelect = document.getElementById("prefecture");
  const cityInput = document.getElementById("city");
  const addressInput = document.getElementById("streetAddress");

  if (!postalInput1 || !postalInput2) return;

  // Handle input on first postal code field
  postalInput1.addEventListener("input", function (e) {
    let value = e.target.value.replace(/[^\d]/g, "");
    e.target.value = value;

    // Move to second field when 3 digits are entered
    if (value.length === 3) {
      postalInput2.focus();
    }

    checkAndFetchAddress();
  });

  // Handle input on second postal code field
  postalInput2.addEventListener("input", function (e) {
    let value = e.target.value.replace(/[^\d]/g, "");
    e.target.value = value;

    checkAndFetchAddress();
  });

  // Handle backspace on second field
  postalInput2.addEventListener("keydown", function (e) {
    if (e.key === "Backspace" && e.target.value === "") {
      e.preventDefault();
      postalInput1.focus();
      postalInput1.setSelectionRange(
        postalInput1.value.length,
        postalInput1.value.length
      );
    }
  });

  // Function to check if both fields are complete and fetch address
  function checkAndFetchAddress() {
    const postal1 = postalInput1.value;
    const postal2 = postalInput2.value;

    if (postal1.length === 3 && postal2.length === 4) {
      const fullPostalCode = postal1 + "-" + postal2;
      fetchAddressFromPostalCode(fullPostalCode);
    }
  }

  // Find the postal code inputs container
  const postalWrapper = postalInput1.parentElement.parentElement; // postal-code-group
  const postalInputsDiv = postalInput1.parentElement; // postal-code-inputs

  // Add search button
  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.className = "postal-search-btn";
  searchButton.innerHTML = "住所検索";

  searchButton.addEventListener("click", function () {
    const postal1 = postalInput1.value;
    const postal2 = postalInput2.value;

    if (postal1.length === 3 && postal2.length === 4) {
      const fullPostalCode = postal1 + "-" + postal2;
      fetchAddressFromPostalCode(fullPostalCode);
    } else {
      showPostalError("郵便番号を正しく入力してください（例: 123-4567）");
    }
  });

  postalInputsDiv.appendChild(searchButton);

  // Add error message container
  const errorContainer = document.createElement("div");
  errorContainer.className = "postal-error-container";
  errorContainer.style.display = "none";
  postalWrapper.appendChild(errorContainer);
}

async function fetchAddressFromPostalCode(postalCode) {
  const cleanPostalCode = postalCode.replace("-", "");

  // Show loading state
  showLoadingState(true);

  try {
    // Using the free zipcloud API for Japanese postal codes
    const response = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanPostalCode}`
    );
    const data = await response.json();

    if (data.status === 200 && data.results && data.results.length > 0) {
      const result = data.results[0];

      // Fill in the address fields
      fillAddressFields({
        prefecture: result.address1,
        city: result.address2,
        address: result.address3,
      });

      showNotification("住所を自動入力しました", "success");
    } else {
      showNotification("郵便番号に該当する住所が見つかりませんでした", "error");
    }
  } catch (error) {

    // Fallback to local data if API fails
    const localAddress = getLocalPostalData(cleanPostalCode);
    if (localAddress) {
      fillAddressFields(localAddress);
      showNotification("住所を自動入力しました（オフラインデータ）", "success");
    } else {
      showNotification("住所の取得に失敗しました", "error");
    }
  } finally {
    showLoadingState(false);
  }
}

function fillAddressFields(addressData) {
  const prefectureSelect = document.getElementById("prefecture");
  const cityInput = document.getElementById("city");
  const addressInput = document.getElementById("streetAddress");

  if (prefectureSelect && addressData.prefecture) {
    // Find and select the matching prefecture option
    const options = prefectureSelect.options;
    for (let i = 0; i < options.length; i++) {
      if (
        options[i].text === addressData.prefecture ||
        options[i].value === addressData.prefecture
      ) {
        prefectureSelect.selectedIndex = i;
        // Trigger change event for any dependent logic
        prefectureSelect.dispatchEvent(new Event("change", { bubbles: true }));
        break;
      }
    }
  }

  if (cityInput && addressData.city) {
    cityInput.value = addressData.city;
    cityInput.dispatchEvent(new Event("input", { bubbles: true }));
  }

  if (addressInput && addressData.address) {
    addressInput.value = addressData.address;
    addressInput.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

function showLoadingState(isLoading) {
  const searchBtn = document.querySelector(".postal-search-btn");
  if (searchBtn) {
    searchBtn.disabled = isLoading;
    searchBtn.innerHTML = isLoading ? "検索中..." : "住所検索";
  }
}

function showNotification(message, type = "info") {
  // Reuse the notification system from form-validation if available
  if (window.formValidator && window.formValidator.showNotification) {
    window.formValidator.showNotification(message, type);
  } else {
    // Simple fallback
    const notification = document.createElement("div");
    notification.className = `postal-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === "success" ? "#4caf50" : "#f44336"};
            color: white;
            border-radius: 4px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

function showPostalError(message) {
  const errorContainer = document.querySelector(".postal-error-container");
  if (errorContainer) {
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
    errorContainer.style.color = "#f44336";
    errorContainer.style.fontSize = "14px";
    errorContainer.style.marginTop = "8px";

    // Hide after 5 seconds
    setTimeout(() => {
      errorContainer.style.display = "none";
    }, 5000);
  }
}

// Fallback local postal code data (sample for major areas)
function getLocalPostalData(postalCode) {
  const localData = {
    1000001: { prefecture: "東京都", city: "千代田区", address: "千代田" },
    1500001: { prefecture: "東京都", city: "渋谷区", address: "神宮前" },
    1600001: { prefecture: "東京都", city: "新宿区", address: "歌舞伎町" },
    5300001: { prefecture: "大阪府", city: "大阪市北区", address: "梅田" },
    6000001: { prefecture: "京都府", city: "京都市下京区", address: "烏丸通" },
    // Add more as needed
  };

  return localData[postalCode] || null;
}

// Add CSS for the search button
const style = document.createElement("style");
style.textContent = `
.postal-code-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
}

.postal-search-btn {
    padding: 8px 16px;
    style-male-mode-1.webp
    color: var(--background-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    white-space: nowrap;
    margin-left: 10px;
}

.postal-search-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.postal-search-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;
document.head.appendChild(style);

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializePostalAutofill,
    fetchAddressFromPostalCode,
  };
}

/* ===== postal-validation-fix.js ===== */

// Fix postal code validation error display
document.addEventListener("DOMContentLoaded", function () {
  // Override the setFieldError function for postal code fields
  const originalSetFieldError = window.formValidator
    ? window.formValidator.setFieldError
    : null;

  if (originalSetFieldError && window.formValidator) {
    window.formValidator.setFieldError = function (field, message) {
      // Check if this is a postal code field
      if (field.name === "postalCode1" || field.name === "postalCode2") {
        // Find the postal-code-group container
        const postalGroup = field.closest(".postal-code-group");
        if (postalGroup) {
          // Remove any existing error messages in the group
          const existingErrors = postalGroup.querySelectorAll(".error-message");
          existingErrors.forEach((error) => error.remove());

          // Create new error message
          const errorElement = document.createElement("div");
          errorElement.className = "error-message";
          errorElement.textContent = message;

          // Add error class to the group
          postalGroup.classList.add("has-error");

          // Append error to the group (not the inputs container)
          postalGroup.appendChild(errorElement);

          // Mark fields as error
          const postal1 = postalGroup.querySelector('[name="postalCode1"]');
          const postal2 = postalGroup.querySelector('[name="postalCode2"]');
          if (postal1) postal1.classList.add("error");
          if (postal2) postal2.classList.add("error");
        }
      } else {
        // For non-postal fields, use original function
        originalSetFieldError.call(this, field, message);
      }
    };
  }

  // Also override clearFieldError for postal fields
  const originalClearFieldError = window.formValidator
    ? window.formValidator.clearFieldError
    : null;

  if (originalClearFieldError && window.formValidator) {
    window.formValidator.clearFieldError = function (field) {
      if (field.name === "postalCode1" || field.name === "postalCode2") {
        const postalGroup = field.closest(".postal-code-group");
        if (postalGroup) {
          // Remove error messages
          const errors = postalGroup.querySelectorAll(".error-message");
          errors.forEach((error) => error.remove());

          // Remove error class
          postalGroup.classList.remove("has-error");

          // Remove error class from fields
          const postal1 = postalGroup.querySelector('[name="postalCode1"]');
          const postal2 = postalGroup.querySelector('[name="postalCode2"]');
          if (postal1) postal1.classList.remove("error");
          if (postal2) postal2.classList.remove("error");
        }
      } else {
        originalClearFieldError.call(this, field);
      }
    };
  }
});

/* ===== style-patterns-gender-integrated.js ===== */

// Integrated Gender-based Style Patterns with 3x5 Toggle UI
document.addEventListener("DOMContentLoaded", function () {

  // Check if integratedStylePatternData is properly initialized
  if (
    useImageMapping &&
    (!integratedStylePatternData ||
      Object.keys(integratedStylePatternData.male).length === 0)
  ) {
  }

  // Initialize gender integrated style patterns with a small delay to ensure DOM is ready
  setTimeout(() => {
    // Clear any existing pattern display first
    const patternContainer = document.getElementById(
      "patternSelectionsContainer"
    );
    if (patternContainer) {
      patternContainer.innerHTML = "";
    }

    // Only initialize if attractive-styles-dynamic.js hasn't already done it
    const checkboxes = document.querySelectorAll(
      'input[name="attractiveStyle"]'
    );
    if (checkboxes.length > 0) {
      initializeGenderIntegratedStylePatterns();
    }
  }, 1000);
});

// Use imageMapping for pattern data if available
// Enable to use imageMapping data with pattern names
const useImageMapping = typeof imageMapping !== 'undefined' && imageMapping.stylePatterns;

// Function to build pattern data from imageMapping
function buildPatternDataFromMapping() {
  if (!useImageMapping) return null;

  const patternData = { male: {}, female: {} };

  // Process each gender
  ["male", "female"].forEach((gender) => {
    const genderPatterns = imageMapping.stylePatterns[gender];
    if (!genderPatterns) return;

    // Process each style
    Object.keys(genderPatterns).forEach((styleKey) => {
      const patterns = genderPatterns[styleKey];
      const styleName =
        imageMapping.attractiveStyles[gender][styleKey]?.name || styleKey;

      // Organize into 5 rows of 3 patterns each
      const rows = [];
      for (let i = 0; i < 5; i++) {
        const rowPatterns = patterns.slice(i * 3, (i + 1) * 3);
        if (rowPatterns.length > 0) {
          rows.push({
            name: "",
            patterns: rowPatterns,
          });
        }
      }

      patternData[gender][styleKey] = {
        name: styleName,
        rows: rows,
      };
    });
  });

  return patternData;
}

// Define integratedStylePatternData using imageMapping if available
window.integratedStylePatternData = (typeof window.imageMapping !== 'undefined' && window.imageMapping.stylePatterns)
  ? buildPatternDataFromMapping() || {male: {}, female: {}}
  : {
      male: {},
      female: {}
    };

const evaluationReasons = {
  good: [
    "色合いが好み",
    "シルエットが好み",
    "素材感が好み",
    "デザインが好み",
    "自分のスタイルに合う",
    "ユニークで個性的",
  ],
  bad: [
    "色合いが好みでない",
    "イメージがつかない",
    "シルエットが好みでない",
    "素材が好みでない",
    "デザインが複雑すぎる",
    "自分には似合わない",
    "派手すぎる・地味すぎる",
  ],
};

let currentStyleKey = null;
let selectedStyles = new Set();
let isUpdating = false;
let updatePatternDisplay = null;

// Helper function to get style display name
function getStyleDisplayName(styleKey, gender) {
  const styleNames = {
    male: {
      suit: "スーツ/トラッド",
      mode: "モード",
      elegant: "エレガント/シック",
      minimal: "ミニマム/シンプル",
      street: "ストリート/スポーティー",
      relax: "サーフ",
      "american-casual": "アメカジ",
    },
    female: {
      mode: "モード",
      elegant: "エレガント/シック",
      "urban-conservative": "アーバン/コンサバティブ",
      feminine: "フェミニン",
      sporty: "スポーティー",
      natural: "ナチュラル",
    },
  };

  return styleNames[gender]?.[styleKey] || styleKey;
}

// Toggle pattern row section
window.togglePatternRowSection = function (header) {
  const section = header.parentElement;
  section.classList.toggle("expanded");
};

// Toggle pattern section (for style groups)
window.togglePatternSection = function (header) {
  const section = header.parentElement;
  const gridContainer = header.nextElementSibling;
  const toggleIcon = header.querySelector('.toggle-icon');

  // Find the pattern reason section for this style
  const styleKey = gridContainer?.getAttribute('data-style-key');
  const reasonSection = styleKey ? document.getElementById(`pattern-reasons-${styleKey}`) : null;

  if (gridContainer) {
    if (gridContainer.style.display === 'none') {
      gridContainer.style.display = 'block';
      toggleIcon.textContent = '▼';
      section.classList.remove('collapsed');
      // Show reason section if it has content
      if (reasonSection && (reasonSection.querySelector('.pattern-reason-item'))) {
        reasonSection.style.display = 'block';
      }
    } else {
      gridContainer.style.display = 'none';
      toggleIcon.textContent = '▶';
      section.classList.add('collapsed');
      // Hide reason section
      if (reasonSection) {
        reasonSection.style.display = 'none';
      }
    }
  }
};

function initializeGenderIntegratedStylePatterns() {

  // Clear previous state
  selectedStyles.clear();
  currentStyleKey = null;

  const styleCheckboxes = document.querySelectorAll(
    'input[name="attractiveStyle"]'
  );
  const patternSelections = document.getElementById("patternSelections");
  const patternContainer = document.getElementById(
    "patternSelectionsContainer"
  );


  if (!styleCheckboxes.length || !patternSelections || !patternContainer) {
    return;
  }

  // Get current gender
  function getCurrentGender() {
    const femaleRadio = document.getElementById("gender-female");
    return femaleRadio && femaleRadio.checked ? "female" : "male";
  }

  // Listen for gender changes
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (selectedStyles.size > 0) {
        updatePatternDisplay(patternContainer, patternSelections);
      }
    });
  });

  let updateTimeout;

  styleCheckboxes.forEach((checkbox) => {
    // Add already checked styles to the set
    if (checkbox.checked && checkbox.value && checkbox.value !== "undefined") {
      selectedStyles.add(checkbox.value);
    }

    checkbox.addEventListener("change", function () {

      if (isUpdating) return;

      clearTimeout(updateTimeout);
      updateTimeout = setTimeout(() => {
        if (this.checked && this.value && this.value !== "undefined") {
          selectedStyles.add(this.value);
        } else if (this.value) {
          selectedStyles.delete(this.value);
        }

        updatePatternDisplay(patternContainer, patternSelections);

        // Force show the pattern selection section
        if (patternSelections) {
          patternSelections.style.display = "block";
        }
      }, 100);
    });
  });

  // Initial display if there are selected styles
  if (selectedStyles.size > 0) {
    updatePatternDisplay(patternContainer, patternSelections);
    // Force show the pattern selection section
    if (patternSelections) {
      patternSelections.style.display = "block";
    }
  } else {
  }

  updatePatternDisplay = function (container, wrapper) {

    if (isUpdating) return;
    isUpdating = true;

    try {
      container.innerHTML = "";

      if (selectedStyles.size === 0) {
        wrapper.style.display = "none";
        currentStyleKey = null;
        return;
      }

      wrapper.style.display = "block";

      if (!currentStyleKey || !selectedStyles.has(currentStyleKey)) {
        currentStyleKey = Array.from(selectedStyles)[0];
      }

      const gender = getCurrentGender();
      const genderData = integratedStylePatternData[gender];

      // Store current radio button selections before rebuilding
      const currentSelections = {};
      container.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        currentSelections[radio.name] = radio.value;
      });

      // Display patterns for all selected styles
      Array.from(selectedStyles)
        .filter((style) => style && style !== "undefined")
        .forEach((styleKey, styleIndex) => {
          const styleData = genderData ? genderData[styleKey] : null;
          if (!styleData) {
            return;
          }

          // Add separator between styles if not the first one
          if (styleIndex > 0) {
            const separator = document.createElement("hr");
            separator.style.margin = "40px 0";
            separator.style.border = "none";
            separator.style.borderTop = "2px solid #e0e0e0";
            container.appendChild(separator);
          }

          const patternSection = document.createElement("div");
          patternSection.className = "toggle-pattern-section";

          // Flatten all patterns into a single array
          const allPatterns = [];
          styleData.rows.forEach((row, rowIndex) => {
            row.patterns.forEach((pattern, colIndex) => {
              allPatterns.push({
                pattern: pattern,
                rowIndex: rowIndex,
                colIndex: colIndex
              });
            });
          });

          // Get the style image from style-preference-card
          const styleCard = document.querySelector(`input[name="attractiveStyle"][value="${styleKey}"]`)?.closest('.style-preference-card');
          const styleImage = styleCard?.querySelector('img')?.src || '';

          patternSection.innerHTML = `
                <div class="pattern-section-header" onclick="togglePatternSection(this)">
                    <h3 class="pattern-section-title">
                        ${styleData.name}
                        ${styleImage ? `<img src="${styleImage}" alt="${styleData.name}" class="pattern-header-image">` : ''}
                    </h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="pattern-grid-container" data-style-key="${styleKey}">
                    <div class="pattern-grid-3x5">
                        ${allPatterns
                          .map((item, index) => {
                            const { pattern, rowIndex, colIndex } = item;
                            const uniqueId = `${styleKey}_${pattern.id}_${styleIndex}_${rowIndex}_${colIndex}`;
                            return `
                                <div class="pattern-item" data-pattern-id="${pattern.id}" data-pattern-name="${pattern.name}">
                                    <div class="pattern-image-container">
                                        <img src="${pattern.image.startsWith('images/') ? pattern.image : 'images/' + pattern.image}"
                                             alt="${pattern.name}"
                                             class="pattern-full-image"
                                             loading="lazy"
                                             onerror="this.src='images/placeholder-${gender}.webp'">
                                    </div>
                                    <h5 class="pattern-item-name">${pattern.name}</h5>
                                    <div class="evaluation-section">
                                        <div class="good-bad-selection">
                                            <label class="eval-option good">
                                                <input type="radio"
                                                       name="eval_${uniqueId}"
                                                       value="good"
                                                       onchange="handleAttractiveStyleEvaluation('${uniqueId}', 'good', '${pattern.id}', '${styleKey}', '${pattern.name}', '${pattern.image.startsWith('images/') ? pattern.image : 'images/' + pattern.image}')">
                                                <span class="btn-icon">○</span>
                                            </label>
                                            <label class="eval-option bad">
                                                <input type="radio"
                                                       name="eval_${uniqueId}"
                                                       value="bad"
                                                       onchange="handleAttractiveStyleEvaluation('${uniqueId}', 'bad', '${pattern.id}', '${styleKey}', '${pattern.name}', '${pattern.image.startsWith('images/') ? pattern.image : 'images/' + pattern.image}')">
                                                <span class="btn-icon">×</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
                <!-- Pattern reason selection for this style -->
                <div class="style-pattern-reasons" id="pattern-reasons-${styleKey}" style="display: none;">
                    <h4 class="reason-section-title">選択したパターンの理由</h4>
                    <div class="good-patterns-${styleKey}" style="display: none;">
                        <h5 class="reason-subtitle">○ 良いと思ったパターン</h5>
                        <div class="good-patterns-list"></div>
                    </div>
                    <div class="bad-patterns-${styleKey}" style="display: none;">
                        <h5 class="reason-subtitle">× 好みではないパターン</h5>
                        <div class="bad-patterns-list"></div>
                    </div>
                </div>
            `;

          container.appendChild(patternSection);
        }); // End of forEach for selected styles

      // Restore radio button selections
      setTimeout(() => {
        Object.entries(currentSelections).forEach(([name, value]) => {
          const radio = container.querySelector(`input[name="${name}"][value="${value}"]`);
          if (radio) {
            radio.checked = true;
          }
        });
      }, 0);

    } finally {
      setTimeout(() => {
        isUpdating = false;
      }, 200);
    }
  };
}

// Toggle pattern row section
window.togglePatternRowSection = function (header) {
  const rowSection = header.parentElement;
  const styleContainer = rowSection.parentElement; // pattern-rows-container
  const allRowSections = styleContainer.querySelectorAll(
    ".pattern-row-section"
  );

  // Close all other rows within the same style section
  allRowSections.forEach((section) => {
    if (section !== rowSection) {
      section.classList.remove("expanded");
    }
  });

  // Toggle current row
  rowSection.classList.toggle("expanded");
};

// Handle attractive style evaluation with reasons grouped by style
window.attractiveStylePatternSelections = {};

window.handleAttractiveStyleEvaluation = function(uniqueId, evaluation, patternId, styleKey, patternName, patternImage) {
  // Initialize style selections if not exists
  if (!window.attractiveStylePatternSelections[styleKey]) {
    window.attractiveStylePatternSelections[styleKey] = {
      good: {},
      bad: {}
    };
  }

  // Track the selection
  if (evaluation === 'good') {
    window.attractiveStylePatternSelections[styleKey].good[uniqueId] = {
      id: patternId,
      name: patternName,
      image: patternImage
    };
    delete window.attractiveStylePatternSelections[styleKey].bad[uniqueId];
  } else if (evaluation === 'bad') {
    window.attractiveStylePatternSelections[styleKey].bad[uniqueId] = {
      id: patternId,
      name: patternName,
      image: patternImage
    };
    delete window.attractiveStylePatternSelections[styleKey].good[uniqueId];
  }

  // Update the reason section for this style
  updateStylePatternReasons(styleKey);
};

function updateStylePatternReasons(styleKey) {
  const reasonSection = document.getElementById(`pattern-reasons-${styleKey}`);
  if (!reasonSection) return;

  const selections = window.attractiveStylePatternSelections[styleKey];
  const hasGood = Object.keys(selections.good).length > 0;
  const hasBad = Object.keys(selections.bad).length > 0;

  // Store current checkbox states before updating
  const checkedReasons = {};
  reasonSection.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    checkedReasons[checkbox.name] = true;
  });

  // Show/hide the reason section
  reasonSection.style.display = (hasGood || hasBad) ? 'block' : 'none';

  // Update good patterns
  const goodSection = reasonSection.querySelector(`.good-patterns-${styleKey}`);
  const goodList = goodSection.querySelector('.good-patterns-list');

  if (hasGood) {
    goodSection.style.display = 'block';

    // Update only new patterns, preserve existing ones
    Object.entries(selections.good).forEach(([id, pattern]) => {
      let existingItem = goodList.querySelector(`[data-pattern-unique-id="${id}"]`);

      if (!existingItem) {
        const newItem = document.createElement('div');
        newItem.className = 'pattern-reason-item';
        newItem.setAttribute('data-pattern-unique-id', id);
        newItem.innerHTML = `
          <img src="${pattern.image}" alt="${pattern.name}" class="pattern-reason-thumb">
          <div class="pattern-reason-content">
            <div class="pattern-name">${pattern.name}</div>
            <div class="reason-checkboxes">
              ${evaluationReasons.good.map((reason, idx) => `
                <label class="reason-checkbox">
                  <input type="checkbox" name="reason_${id}_${idx}" value="${reason}">
                  <span>${reason}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
        goodList.appendChild(newItem);
      }
    });

    // Remove patterns that are no longer selected as good
    goodList.querySelectorAll('.pattern-reason-item').forEach(item => {
      const itemId = item.getAttribute('data-pattern-unique-id');
      if (!selections.good[itemId]) {
        item.remove();
      }
    });
  } else {
    goodSection.style.display = 'none';
    goodList.innerHTML = '';
  }

  // Update bad patterns
  const badSection = reasonSection.querySelector(`.bad-patterns-${styleKey}`);
  const badList = badSection.querySelector('.bad-patterns-list');

  if (hasBad) {
    badSection.style.display = 'block';

    // Update only new patterns, preserve existing ones
    Object.entries(selections.bad).forEach(([id, pattern]) => {
      let existingItem = badList.querySelector(`[data-pattern-unique-id="${id}"]`);

      if (!existingItem) {
        const newItem = document.createElement('div');
        newItem.className = 'pattern-reason-item';
        newItem.setAttribute('data-pattern-unique-id', id);
        newItem.innerHTML = `
          <img src="${pattern.image}" alt="${pattern.name}" class="pattern-reason-thumb">
          <div class="pattern-reason-content">
            <div class="pattern-name">${pattern.name}</div>
            <div class="reason-checkboxes">
              ${evaluationReasons.bad.map((reason, idx) => `
                <label class="reason-checkbox">
                  <input type="checkbox" name="reason_${id}_${idx}" value="${reason}">
                  <span>${reason}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
        badList.appendChild(newItem);
      }
    });

    // Remove patterns that are no longer selected as bad
    badList.querySelectorAll('.pattern-reason-item').forEach(item => {
      const itemId = item.getAttribute('data-pattern-unique-id');
      if (!selections.bad[itemId]) {
        item.remove();
      }
    });
  } else {
    badSection.style.display = 'none';
    badList.innerHTML = '';
  }

  // Restore checkbox states
  Object.keys(checkedReasons).forEach(name => {
    const checkbox = reasonSection.querySelector(`input[name="${name}"]`);
    if (checkbox) {
      checkbox.checked = true;
    }
  });
}

// Handle Good/Bad evaluation
window.handleEvaluation = function (patternId, evaluation, originalPatternId) {
  const reasonsDiv = document.getElementById(`reasons_${patternId}`);
  const reasonOptionsDiv = document.getElementById(
    `reason_options_${patternId}`
  );

  if (reasonsDiv && reasonOptionsDiv) {
    reasonsDiv.style.display = "block";

    // Clear and populate reasons
    const reasons = evaluationReasons[evaluation];
    reasonOptionsDiv.innerHTML = reasons
      .map(
        (reason, index) => `
            <label class="reason-checkbox">
                <input type="checkbox"
                       name="reason_${patternId}"
                       value="${reason}">
                <span>${reason}</span>
            </label>
        `
      )
      .join("");
  }

  // Mark pattern as evaluated
  const patternItem = document.querySelector(
    `[data-pattern-id="${originalPatternId}"]`
  );
  if (patternItem) {
    patternItem.classList.add("evaluated", evaluation);
  }
};

// Test function for pattern display
window.testPatternDisplay = function () {

  // Force add a test style
  selectedStyles.clear();
  selectedStyles.add("suit");

  const patternSelections = document.getElementById("patternSelections");
  const patternContainer = document.getElementById(
    "patternSelectionsContainer"
  );


  if (patternSelections && patternContainer && updatePatternDisplay) {
    updatePatternDisplay(patternContainer, patternSelections);
  }
};

// Make functions available globally
window.initializeGenderIntegratedStylePatterns =
  initializeGenderIntegratedStylePatterns;
window.updateGenderStylePatterns = function () {
  if (selectedStyles.size > 0) {
    const patternSelections = document.getElementById("patternSelections");
    const patternContainer = document.getElementById(
      "patternSelectionsContainer"
    );
    if (patternSelections && patternContainer) {
      updatePatternDisplay(patternContainer, patternSelections);
    }
  }
};

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeGenderIntegratedStylePatterns,
    integratedStylePatternData,
  };
}

/* ===== style-patterns-5x3-transformer.js ===== */

// Transform style pattern data from 3 rows x 5 columns to 5 rows x 3 columns
function transformStylePatternData(originalData) {
  const transformedData = {};

  // Process each gender
  Object.keys(originalData).forEach((gender) => {
    transformedData[gender] = {};

    // Process each style
    Object.keys(originalData[gender]).forEach((styleKey) => {
      const style = originalData[gender][styleKey];
      const allPatterns = [];

      // Collect all patterns from all rows
      style.rows.forEach((row) => {
        allPatterns.push(...row.patterns);
      });

      // Ensure we have exactly 15 patterns
      if (allPatterns.length !== 15) {
        // Style has incorrect number of patterns
      }

      // Reorganize into 5 rows of 3 patterns each
      const newRows = [];
      for (let i = 0; i < 5; i++) {
        const rowPatterns = [];
        for (let j = 0; j < 3; j++) {
          const patternIndex = i * 3 + j;
          if (patternIndex < allPatterns.length) {
            rowPatterns.push(allPatterns[patternIndex]);
          }
        }
        newRows.push({
          name: "",
          patterns: rowPatterns,
        });
      }

      transformedData[gender][styleKey] = {
        name: style.name,
        rows: newRows,
      };
    });
  });

  return transformedData;
}

// Override the original data structure
if (typeof integratedStylePatternData !== "undefined") {
  const transformed = transformStylePatternData(integratedStylePatternData);

  // Replace the original data
  Object.keys(transformed).forEach((gender) => {
    integratedStylePatternData[gender] = transformed[gender];
  });

}

/* ===== attractive-styles-dynamic.js ===== */
/* This section has been removed. The functionality is handled by imageMapping and CSS */

// Function to rebuild attractive styles grid
(function() {
  // Use imageMapping if available, otherwise use default data
  const attractiveStylesConfig =
    typeof imageMapping !== "undefined" && imageMapping.attractiveStyles
      ? imageMapping.attractiveStyles
      : {
          male: {
            suit: {
              value: "suit",
              name: "スーツ/トラッド",
              image: "images/style-male-suit-1.webp",
            },
            mode: {
              value: "mode",
              name: "モード",
              image: "images/style-male-mode-1.webp",
            },
            elegant: {
              value: "elegant",
              name: "エレガント/シック",
              image: "images/attractive-classic1.webp",
            },
            minimal: {
              value: "minimal",
              name: "ミニマム/シンプル",
              image: "images/style-minimal-1.webp",
            },
            street: {
              value: "street",
              name: "ストリート/スポーティー",
              image: "images/pattern-street1.webp",
            },
            searf: {
              value: "searf",
              name: "サーフ",
              image: "images/style-searf-1.webp",
            },
            "american-casual": {
              value: "american-casual",
              name: "アメカジ",
              image: "images/style-amecas-1.webp",
            },
          },
          female: {
            mode: {
              value: "mode",
              name: "モード",
              image: "images/style-female-mode-1.webp",
            },
            elegant: {
              value: "elegant",
              name: "エレガント/シック",
              image: "images/style-female-elegant-1.webp",
            },
            "urban-conservative": {
              value: "urban-conservative",
              name: "アーバン/コンサバティブ",
              image: "images/style-female-urban-conservative-1.webp",
            },
            feminine: {
              value: "feminine",
              name: "フェミニン",
              image: "images/style-female-feminine-1.webp",
            },
            sporty: {
              value: "sporty",
              name: "スポーティー",
              image: "images/style-female-sporty-1.webp",
            },
            natural: {
              value: "natural",
              name: "ナチュラル",
              image: "images/style-female-natural-1.webp",
            },
          },
        };

  // Function to rebuild attractive styles grid
  window.rebuildAttractiveStylesGrid = function (gender) {
    const gridContainer = document.querySelector(".style-preference-grid");
    if (!gridContainer) return;

    // Clear existing content
    gridContainer.innerHTML = "";

    // Get styles for the selected gender
    const genderStyles =
      attractiveStylesConfig[gender] || attractiveStylesConfig.male;

    // Convert object to array and ensure each style has a value property
    const styles = Object.entries(genderStyles).map(([key, style]) => {
      // If using imageMapping and value is missing, add it
      if (!style.value) {
        return { ...style, value: key };
      }
      return style;
    });

    // Create style cards
    styles.forEach((style) => {

      const card = document.createElement("div");
      card.className = "style-preference-card";

      card.innerHTML = `
                <input type="checkbox" name="attractiveStyle" value="${style.value}" id="attractive-${gender}-${style.value}">
                <label for="attractive-${gender}-${style.value}">
                    <img src="${style.image}" alt="${style.name}" class="style-pattern-image">
                    <span>${style.name}</span>
                </label>
            `;

      gridContainer.appendChild(card);
    });

    // Re-attach event listeners for pattern display
    attachStyleCheckboxListeners();

    // Re-initialize gender integrated style patterns if available
    setTimeout(() => {
      if (typeof initializeGenderIntegratedStylePatterns === "function") {
        initializeGenderIntegratedStylePatterns();
      } else {
        // initializeGenderIntegratedStylePatterns is not available
      }
    }, 300);
  };

  // Function to attach event listeners to style checkboxes
  function attachStyleCheckboxListeners() {
    const styleCheckboxes = document.querySelectorAll(
      'input[name="attractiveStyle"]'
    );

    styleCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Trigger pattern update if the integrated script is loaded
        if (typeof initializeGenderIntegratedStylePatterns === "function") {
          // The integrated script already handles this
          return;
        }
      });
    });
  }

  // Listen for gender changes
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        rebuildAttractiveStylesGrid(this.value);
      }
    });
  });

  // Initialize with current gender or default to male
  const currentGender = document.querySelector('input[name="gender"]:checked');
  const genderValue = currentGender ? currentGender.value : "male";
  rebuildAttractiveStylesGrid(genderValue);

  // Also ensure pattern display is initialized after initial grid build
  setTimeout(() => {
    if (typeof initializeGenderIntegratedStylePatterns === "function") {
      initializeGenderIntegratedStylePatterns();
    }
  }, 800);
})();

/* ===== fashion-literacy-final.js ===== */

// Fashion Literacy Conditional Display - Final Version
(function () {
  "use strict";


  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {

    // Define trigger values
    const triggerValues = [
      "not-interested",
      "vaguely-interested",
      "conversational",
      "personal-curiosity",
      "basic-knowledge",
    ];

    // Get all checkboxes
    const allCheckboxes = document.querySelectorAll(
      'input[name="fashionLiteracy"]'
    );

    // Get conditional items
    const conditionalItems = document.querySelectorAll(
      ".fashion-literacy-conditional"
    );

    // List conditional items for debugging
    conditionalItems.forEach((item, index) => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) {
      }
    });

    // Initial hide with stronger CSS override
    conditionalItems.forEach((item) => {
      item.style.setProperty("display", "none", "important");
      item.style.setProperty("visibility", "hidden", "important");
      item.style.setProperty("opacity", "0", "important");
      item.style.setProperty("transition", "all 0.3s ease", "important");
    });

    // Function to update display
    function updateDisplay() {

      // Check if any trigger is checked
      let showConditional = false;
      const checkedTriggers = [];

      allCheckboxes.forEach((checkbox) => {
        if (triggerValues.includes(checkbox.value) && checkbox.checked) {
          showConditional = true;
          checkedTriggers.push(checkbox.value);
        }
      });


      // Update conditional items
      conditionalItems.forEach((item, index) => {
        if (showConditional) {
          // Remove all inline styles first
          item.style.removeProperty("display");
          item.style.removeProperty("visibility");
          item.style.removeProperty("opacity");
          // Then set display
          item.style.setProperty("display", "flex", "important");
          item.style.setProperty("visibility", "visible", "important");
          // Force reflow
          void item.offsetHeight;
          // Animate
          item.style.setProperty("opacity", "1", "important");
        } else {
          // Hide
          item.style.setProperty("opacity", "0", "important");
          item.style.setProperty("visibility", "hidden", "important");
          setTimeout(() => {
            if (!showConditional) {
              item.style.setProperty("display", "none", "important");
            }
          }, 300);

          // Uncheck any checked conditional items
          const checkbox = item.querySelector('input[type="checkbox"]');
          if (checkbox && checkbox.checked) {
            checkbox.checked = false;
          }
        }
      });

    }

    // Add event listeners
    allCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        updateDisplay();
      });
    });

    // Initial update
    updateDisplay();

    // Double-check after a short delay
    setTimeout(() => {
      updateDisplay();
    }, 100);

  });
})();

/* ===== other-option-handler.js ===== */

// Unified handler for all "その他" (Other) options with text inputs
document.addEventListener("DOMContentLoaded", function () {
  // Configuration for all "その他" options
  const otherOptionConfigs = [
    // Travel section
    {
      checkboxSelector: "#domestic-other",
      textInputName: "domesticTravelOther",
      createIfMissing: false,
    },
    {
      checkboxSelector: "#overseas-other",
      textInputName: "overseasTravelOther",
      createIfMissing: false,
    },
    // Budget section - need to create text inputs
    {
      checkboxSelector: 'input[name="shirtBudget"][value="other"]',
      textInputName: "shirtBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="tshirtBudget"][value="other"]',
      textInputName: "tshirtBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="pantsBudget"][value="other"]',
      textInputName: "pantsBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="shoesBudget"][value="other"]',
      textInputName: "shoesBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="bagBudget"][value="other"]',
      textInputName: "bagBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="knitBudget"][value="other"]',
      textInputName: "knitBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="jacketBudget"][value="other"]',
      textInputName: "jacketBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="watchBudget"][value="other"]',
      textInputName: "watchBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="accessoriesBudget"][value="other"]',
      textInputName: "accessoriesBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="hatBudget"][value="other"]',
      textInputName: "hatBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    {
      checkboxSelector: 'input[name="glassesBudget"][value="other"]',
      textInputName: "glassesBudgetOther",
      placeholder: "具体的な予算をご記入ください",
      createIfMissing: true,
    },
    // Weekday lifestyle
    {
      checkboxSelector: "#weekday-other",
      textInputName: "weekdayLifestyleOther",
      placeholder: "具体的にご記入ください",
      createIfMissing: true,
    },
  ];

  // Function to create text input field
  function createTextInput(config, checkbox) {
    const wrapper = document.createElement("div");
    wrapper.className = "other-text-input-wrapper";
    wrapper.style.display = "none";
    wrapper.style.marginTop = "10px";
    wrapper.style.marginLeft = "24px";

    const input = document.createElement("input");
    input.type = "text";
    input.name = config.textInputName;
    input.className = "other-text-input";
    input.placeholder = config.placeholder || "具体的にご記入ください";
    input.style.width = "100%";
    input.style.padding = "8px 12px";
    input.style.border = "1px solid #ddd";
    input.style.borderRadius = "4px";
    input.style.fontSize = "14px";

    wrapper.appendChild(input);

    // Insert after the checkbox's parent label
    const label = checkbox.closest("label");
    if (label && label.parentNode) {
      label.parentNode.insertBefore(wrapper, label.nextSibling);
    }

    return wrapper;
  }

  // Function to handle checkbox change
  function handleOtherCheckbox(checkbox, textInputWrapper) {
    if (checkbox.checked) {
      textInputWrapper.style.display = "block";
      const input = textInputWrapper.querySelector("input");
      if (input) {
        input.focus();
      }
    } else {
      textInputWrapper.style.display = "none";
      const input = textInputWrapper.querySelector("input");
      if (input) {
        input.value = "";
      }
    }
  }

  // Special handling for budget radio buttons (since they're radio, not checkbox)
  const budgetRadioGroups = [
    "shirtBudget",
    "tshirtBudget",
    "knitBudget",
    "jacketBudget",
    "pantsBudget",
    "shoesBudget",
    "bagBudget",
    "watchBudget",
    "accessoriesBudget",
    "hatBudget",
    "glassesBudget",
  ];

  budgetRadioGroups.forEach((groupName) => {
    const radios = document.querySelectorAll(`input[name="${groupName}"]`);
    const otherRadio = document.querySelector(
      `input[name="${groupName}"][value="other"]`
    );
    const textInputWrapper = document.querySelector(
      `input[name="${groupName}Other"]`
    )?.parentElement;

    if (otherRadio && textInputWrapper) {
      radios.forEach((radio) => {
        radio.addEventListener("change", function () {
          if (this.value === "other" && this.checked) {
            textInputWrapper.style.display = "block";
            const input = textInputWrapper.querySelector("input");
            if (input) input.focus();
          } else if (this.value !== "other" && this.checked) {
            textInputWrapper.style.display = "none";
            const input = textInputWrapper.querySelector("input");
            if (input) input.value = "";
          }
        });
      });

      // Initialize visibility
      if (!otherRadio.checked) {
        textInputWrapper.style.display = "none";
      }
    }
  });

  // Add validation for form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      let isValid = true;
      const errors = [];

      // Check all configured "その他" options
      otherOptionConfigs.forEach((config) => {
        const checkbox = document.querySelector(config.checkboxSelector);
        const textInput = document.querySelector(
          `input[name="${config.textInputName}"]`
        );

        if (
          checkbox &&
          checkbox.checked &&
          textInput &&
          !textInput.value.trim()
        ) {
          isValid = false;
          errors.push(
            `「その他」を選択した項目の詳細を入力してください: ${config.textInputName}`
          );
          textInput.style.borderColor = "#ff4444";
        }
      });

      // Check budget radio "その他" options
      budgetRadioGroups.forEach((groupName) => {
        const otherRadio = document.querySelector(
          `input[name="${groupName}"][value="other"]:checked`
        );
        const textInput = document.querySelector(
          `input[name="${groupName}Other"]`
        );

        if (otherRadio && textInput && !textInput.value.trim()) {
          isValid = false;
          errors.push(
            `「その他」を選択した予算の詳細を入力してください: ${groupName}`
          );
          textInput.style.borderColor = "#ff4444";
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert(errors.join("\n"));
      }
    });
  }
});

/* ===== pattern-evaluation-enhanced.js ===== */

// Enhanced Pattern Evaluation JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Add enhanced interactions to pattern evaluations
  function enhancePatternEvaluations() {
    // Get all pattern items
    const patternItems = document.querySelectorAll(".pattern-item");

    patternItems.forEach((item) => {
      const evalRadios = item.querySelectorAll(
        '.good-bad-selection input[type="radio"]'
      );
      const ratingSection = item.querySelector(".rating-section");
      const ratingButtons = item.querySelectorAll(".rating-btn");

      // Handle evaluation radio changes
      evalRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
          if (this.checked) {
            // Add class to pattern item
            item.classList.add("has-evaluation");

            // Add good/bad class
            if (this.value === "good") {
              item.classList.add("good-selected");
              item.classList.remove("bad-selected");
            } else {
              item.classList.add("bad-selected");
              item.classList.remove("good-selected");
            }

            // Show rating section with animation
            if (ratingSection) {
              ratingSection.classList.add("visible");
            }

            // Trigger ripple effect
            triggerRipple(this.parentElement);
          }
        });
      });

      // Handle rating button clicks
      ratingButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from siblings
          ratingButtons.forEach((b) => b.classList.remove("active"));
          // Add active class to clicked button
          this.classList.add("active");

          // Add animation
          animateButton(this);
        });
      });
    });
  }

  // Trigger ripple effect
  function triggerRipple(element) {
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Animate button click
  function animateButton(button) {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 100);
  }

  // Initialize enhancements when patterns are loaded
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.querySelector(".pattern-item")) {
            enhancePatternEvaluations();
          }
        });
      }
    });
  });

  // Start observing
  const container = document.querySelector(".complete-form-container");
  if (container) {
    observer.observe(container, {
      childList: true,
      subtree: true,
    });
  }

  // Initial enhancement
  enhancePatternEvaluations();

  // Re-enhance when gender changes
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      setTimeout(enhancePatternEvaluations, 500);
    });
  });
});

/* ===== location-data.js ===== */

// 地域データ定義
const locationData = {
  kanto: {
    name: "関東",
    prefectures: {
      tokyo: {
        name: "東京都",
        cities: [
          "千代田区",
          "中央区",
          "港区",
          "新宿区",
          "文京区",
          "台東区",
          "墨田区",
          "江東区",
          "品川区",
          "目黒区",
          "大田区",
          "世田谷区",
          "渋谷区",
          "中野区",
          "杉並区",
          "豊島区",
          "北区",
          "荒川区",
          "板橋区",
          "練馬区",
          "足立区",
          "葛飾区",
          "江戸川区",
          "その他東京23区外",
        ],
      },
      kanagawa: {
        name: "神奈川県",
        cities: ["横浜市", "川崎市", "その他神奈川県"],
      },
      chiba: {
        name: "千葉県",
        cities: ["千葉市", "その他千葉県"],
      },
      saitama: {
        name: "埼玉県",
        cities: ["さいたま市", "その他埼玉県"],
      },
      ibaraki: {
        name: "茨城県",
        cities: ["つくば市", "水戸市", "その他茨城県"],
      },
      tochigi: {
        name: "栃木県",
        cities: ["宇都宮市", "その他栃木県"],
      },
      gunma: {
        name: "群馬県",
        cities: ["前橋市", "高崎市", "その他群馬県"],
      },
    },
  },
  "hokkaido-tohoku": {
    name: "北海道・東北",
    prefectures: {
      hokkaido: {
        name: "北海道",
        cities: ["札幌市", "函館市", "旭川市", "その他北海道"],
      },
      aomori: { name: "青森県", cities: ["青森市", "その他青森県"] },
      iwate: { name: "岩手県", cities: ["盛岡市", "その他岩手県"] },
      miyagi: { name: "宮城県", cities: ["仙台市", "その他宮城県"] },
      akita: { name: "秋田県", cities: ["秋田市", "その他秋田県"] },
      yamagata: { name: "山形県", cities: ["山形市", "その他山形県"] },
      fukushima: {
        name: "福島県",
        cities: ["福島市", "郡山市", "その他福島県"],
      },
    },
  },
  chubu: {
    name: "中部",
    prefectures: {
      niigata: { name: "新潟県", cities: ["新潟市", "その他新潟県"] },
      toyama: { name: "富山県", cities: ["富山市", "その他富山県"] },
      ishikawa: { name: "石川県", cities: ["金沢市", "その他石川県"] },
      fukui: { name: "福井県", cities: ["福井市", "その他福井県"] },
      yamanashi: { name: "山梨県", cities: ["甲府市", "その他山梨県"] },
      nagano: { name: "長野県", cities: ["長野市", "松本市", "その他長野県"] },
      gifu: { name: "岐阜県", cities: ["岐阜市", "その他岐阜県"] },
      shizuoka: {
        name: "静岡県",
        cities: ["静岡市", "浜松市", "その他静岡県"],
      },
      aichi: { name: "愛知県", cities: ["名古屋市", "豊田市", "その他愛知県"] },
    },
  },
  kinki: {
    name: "近畿",
    prefectures: {
      mie: { name: "三重県", cities: ["津市", "その他三重県"] },
      shiga: { name: "滋賀県", cities: ["大津市", "その他滋賀県"] },
      kyoto: { name: "京都府", cities: ["京都市", "その他京都府"] },
      osaka: { name: "大阪府", cities: ["大阪市", "堺市", "その他大阪府"] },
      hyogo: { name: "兵庫県", cities: ["神戸市", "姫路市", "その他兵庫県"] },
      nara: { name: "奈良県", cities: ["奈良市", "その他奈良県"] },
      wakayama: { name: "和歌山県", cities: ["和歌山市", "その他和歌山県"] },
    },
  },
  "chugoku-shikoku": {
    name: "中国・四国",
    prefectures: {
      tottori: { name: "鳥取県", cities: ["鳥取市", "その他鳥取県"] },
      shimane: { name: "島根県", cities: ["松江市", "その他島根県"] },
      okayama: { name: "岡山県", cities: ["岡山市", "倉敷市", "その他岡山県"] },
      hiroshima: {
        name: "広島県",
        cities: ["広島市", "福山市", "その他広島県"],
      },
      yamaguchi: {
        name: "山口県",
        cities: ["山口市", "下関市", "その他山口県"],
      },
      tokushima: { name: "徳島県", cities: ["徳島市", "その他徳島県"] },
      kagawa: { name: "香川県", cities: ["高松市", "その他香川県"] },
      ehime: { name: "愛媛県", cities: ["松山市", "その他愛媛県"] },
      kochi: { name: "高知県", cities: ["高知市", "その他高知県"] },
    },
  },
  "kyushu-okinawa": {
    name: "九州・沖縄",
    prefectures: {
      fukuoka: {
        name: "福岡県",
        cities: ["福岡市", "北九州市", "その他福岡県"],
      },
      saga: { name: "佐賀県", cities: ["佐賀市", "その他佐賀県"] },
      nagasaki: {
        name: "長崎県",
        cities: ["長崎市", "佐世保市", "その他長崎県"],
      },
      kumamoto: { name: "熊本県", cities: ["熊本市", "その他熊本県"] },
      oita: { name: "大分県", cities: ["大分市", "別府市", "その他大分県"] },
      miyazaki: { name: "宮崎県", cities: ["宮崎市", "その他宮崎県"] },
      kagoshima: { name: "鹿児島県", cities: ["鹿児島市", "その他鹿児島県"] },
      okinawa: { name: "沖縄県", cities: ["那覇市", "その他沖縄県"] },
    },
  },
};

/* ===== script.js ===== */

// Global gender change handler
function handleGenderChange(radio) {
  const body = document.body;

  // Add transitioning class for smooth animation
  body.classList.add("gender-transitioning");

  // Remove the class after transition is complete
  setTimeout(() => {
    body.classList.remove("gender-transitioning");
  }, 600);

  // Apply gender switch with smooth transition
  if (radio.value === "female") {
    body.classList.add("female-form");
    // Update content for female form
    updateFormContent("female");
    // Update images for female
    updateAllImages("female");
  } else {
    body.classList.remove("female-form");
    // Update content for male form
    updateFormContent("male");
    // Update images for male
    updateAllImages("male");
  }
}

// Function to update form content based on gender
function updateFormContent(gender) {
  if (gender === "female" && typeof femaleFormData !== "undefined") {
    // Update text content
    const mainTitle = document.querySelector(
      '.main-title[data-gender-text="true"]'
    );
    const mainSubtitle = document.querySelector(
      '.main-subtitle[data-gender-text="true"]'
    );

    if (mainTitle && femaleFormData.textUpdates) {
      mainTitle.textContent =
        femaleFormData.textUpdates.mainTitle || mainTitle.textContent;
    }
    if (mainSubtitle && femaleFormData.textUpdates) {
      mainSubtitle.textContent =
        femaleFormData.textUpdates.mainSubtitle || mainSubtitle.textContent;
    }

    // Update section titles if specified
    if (
      femaleFormData.textUpdates &&
      femaleFormData.textUpdates.sectionTitles
    ) {
      // Update all section titles
      Object.entries(femaleFormData.textUpdates.sectionTitles).forEach(
        ([key, value]) => {
          const elements = document.querySelectorAll(
            `[data-section-key="${key}"]`
          );
          elements.forEach((el) => {
            el.textContent = value;
          });
        }
      );

      // Update subsection titles
      document.querySelectorAll(".subsection-title").forEach((title) => {
        const text = title.textContent;
        if (text.includes("魅力を感じるスタイル")) {
          title.textContent = text.replace(
            "魅力を感じるスタイル",
            femaleFormData.textUpdates.sectionTitles.attractiveStyle ||
              "魅力を感じる女性のスタイル"
          );
        } else if (text.includes("避けたいアイテム")) {
          title.textContent = text.replace(
            "避けたいアイテム",
            femaleFormData.textUpdates.sectionTitles.avoidItems ||
              "苦手な（避けたい）アイテム・デザイン"
          );
        }
      });
    }

    // Update labels and hints
    if (femaleFormData.textUpdates && femaleFormData.textUpdates.labels) {
      Object.entries(femaleFormData.textUpdates.labels).forEach(
        ([key, value]) => {
          const elements = document.querySelectorAll(
            `[data-label-key="${key}"]`
          );
          elements.forEach((el) => {
            el.textContent = value;
          });
        }
      );
    }

    // Update hint texts
    if (femaleFormData.textUpdates && femaleFormData.textUpdates.hints) {
      Object.entries(femaleFormData.textUpdates.hints).forEach(
        ([key, value]) => {
          const elements = document.querySelectorAll(
            `[data-hint-key="${key}"]`
          );
          elements.forEach((el) => {
            el.textContent = value;
          });
        }
      );
    }

    // Update attractive styles images and names
    updateStyleImages("female");

    // Update avoid items for female
    updateAvoidItems("female");

    // Update clothing items for female
    updateClothingItems("female");
  } else if (gender === "male") {
    // Reset to default male content
    const mainTitle = document.querySelector(
      '.main-title[data-gender-text="true"]'
    );
    const mainSubtitle = document.querySelector(
      '.main-subtitle[data-gender-text="true"]'
    );

    if (mainTitle) {
      mainTitle.textContent = "Personal Style Configuration";
    }
    if (mainSubtitle) {
      mainSubtitle.textContent =
        "お客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください";
    }

    // Reset section titles
    document.querySelectorAll(".subsection-title").forEach((title) => {
      const text = title.textContent;
      if (text.includes("女性のスタイル")) {
        title.textContent = text.replace(
          "魅力を感じる女性のスタイル",
          "魅力を感じるスタイル"
        );
      } else if (text.includes("アイテム・デザイン")) {
        title.textContent = text.replace(
          "苦手な（避けたい）アイテム・デザイン",
          "避けたいアイテム"
        );
      }
    });

    // Update style images back to male versions
    updateStyleImages("male");

    // Update avoid items for male
    updateAvoidItems("male");

    // Update clothing items for male
    updateClothingItems("male");
  }

  // Trigger style pattern updates if integrated script is loaded
  if (typeof window.updateGenderStylePatterns === "function") {
    window.updateGenderStylePatterns();
  }
}

// Function to update style preference images based on gender
function updateStyleImages(gender) {
  // Check if imageMapping is available
  if (typeof imageMapping === "undefined" || !imageMapping.attractiveStyles) {
    return;
  }

  const genderStyles =
    imageMapping.attractiveStyles[gender] || imageMapping.attractiveStyles.male;

  document.querySelectorAll(".style-preference-card").forEach((card) => {
    const input = card.querySelector('input[type="checkbox"]');
    const img = card.querySelector("img");
    const span = card.querySelector("span");

    if (input && img && genderStyles[input.value]) {
      const styleData = genderStyles[input.value];
      img.src = styleData.image;
      img.alt = styleData.name;

      if (span) {
        span.textContent = styleData.name;
      }
    }
  });
}

// Function to update avoid items based on gender
function updateAvoidItems(gender) {
  // Check if imageMapping is available
  if (typeof imageMapping === "undefined" || !imageMapping.avoidItems) {
    return;
  }

  const genderAvoidItems =
    imageMapping.avoidItems[gender] || imageMapping.avoidItems.male;

  document.querySelectorAll(".avoid-item").forEach((item) => {
    const input = item.querySelector('input[type="checkbox"]');
    const img = item.querySelector("img");
    const span = item.querySelector("span");

    if (input && img && genderAvoidItems[input.value]) {
      const itemData = genderAvoidItems[input.value];
      img.src = itemData.image;
      img.alt = itemData.name;

      if (span) {
        span.textContent = itemData.name;
      }
    }
  });
}

// Function to update clothing items based on gender
function updateClothingItems(gender) {
  // Check if imageMapping is available
  if (typeof imageMapping === "undefined" || !imageMapping.clothingItems) {
    return;
  }

  const genderClothingItems =
    imageMapping.clothingItems[gender] || imageMapping.clothingItems.male;

  document.querySelectorAll(".clothing-item-box").forEach((box) => {
    const input = box.querySelector('input[type="checkbox"]');
    const img = box.querySelector("img");
    const nameDiv = box.querySelector(".clothing-item-name");

    if (input && img && genderClothingItems[input.value]) {
      const itemData = genderClothingItems[input.value];
      img.src = itemData.image;
      img.alt = itemData.name;

      if (nameDiv) {
        nameDiv.textContent = itemData.name;
      }
    }
  });
}

// Helper function to check if image exists
function checkImageExists(imagePath) {
  // For now, assume all images exist
  // In production, you might want to actually check
  return true;
}

// Photo Upload Functionality
function initializePhotoUpload() {
  const photoInputs = document.querySelectorAll(".photo-input");

  photoInputs.forEach((input) => {
    input.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        const photoBox = input.closest(".photo-upload-box");
        const preview = photoBox.querySelector(".photo-preview");
        const placeholder = photoBox.querySelector(".photo-placeholder");

        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
          photoBox.classList.add("has-image");

          // Hide placeholder when image is shown
          if (placeholder) {
            placeholder.style.display = "none";
          }

          // Add change button if it doesn't exist
          let changeBtn = photoBox.querySelector(".change-photo-btn");
          if (!changeBtn) {
            changeBtn = document.createElement("button");
            changeBtn.className = "change-photo-btn";
            changeBtn.textContent = "画像を変更";
            changeBtn.type = "button";
            changeBtn.onclick = function (e) {
              e.preventDefault();
              e.stopPropagation();
              input.click();
            };
            photoBox.appendChild(changeBtn);
          }
        };

        reader.readAsDataURL(file);
      }
    });
  });

  // Drag and drop functionality
  const photoBoxes = document.querySelectorAll(".photo-upload-box");

  photoBoxes.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.add("drag-over");
    });

    box.addEventListener("dragleave", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("drag-over");
    });

    box.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("drag-over");

      const files = e.dataTransfer.files;
      const input = box.querySelector(".photo-input");

      if (files.length > 0 && files[0].type.startsWith("image/")) {
        input.files = files;
        const event = new Event("change", { bubbles: true });
        input.dispatchEvent(event);
      }
    });
  });
}

// Birth Date Population and Age Display
function populateBirthDate() {
  const currentYear = new Date().getFullYear();
  const yearSelect = document.getElementById("birthYear");
  const monthSelect = document.getElementById("birthMonth");
  const daySelect = document.getElementById("birthDay");

  // Clear existing options first (except the placeholder)
  if (yearSelect) {
    // Keep only the first option (placeholder)
    while (yearSelect.options.length > 1) {
      yearSelect.remove(1);
    }
    // Populate years (1940-current year)
    for (let year = currentYear; year >= 1940; year--) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = `${year}年`;
      yearSelect.appendChild(option);
    }
  }

  // Clear and populate months
  if (monthSelect) {
    // Keep only the first option (placeholder)
    while (monthSelect.options.length > 1) {
      monthSelect.remove(1);
    }
    // Populate months
    for (let month = 1; month <= 12; month++) {
      const option = document.createElement("option");
      option.value = month;
      option.textContent = `${month}月`;
      monthSelect.appendChild(option);
    }
  }

  // Clear and populate days (initially 1-31)
  if (daySelect) {
    // Keep only the first option (placeholder)
    while (daySelect.options.length > 1) {
      daySelect.remove(1);
    }
    // Populate days
    for (let day = 1; day <= 31; day++) {
      const option = document.createElement("option");
      option.value = day;
      option.textContent = `${day}日`;
      daySelect.appendChild(option);
    }
  }

  // Update days when month/year changes
  function updateDays() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);

    if (year && month) {
      const daysInMonth = new Date(year, month, 0).getDate();
      const currentDay = daySelect.value;

      // Clear existing options except first one
      daySelect.innerHTML = '<option value="">日</option>';

      for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
      }

      // Restore selection if still valid
      if (currentDay && currentDay <= daysInMonth) {
        daySelect.value = currentDay;
      }
    }
  }

  // Calculate and display age
  function calculateAge() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const day = parseInt(daySelect.value);
    const ageDisplay = document.getElementById("ageDisplay");

    if (year && month && day && ageDisplay) {
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      ageDisplay.textContent = `（${age}歳）`;
      ageDisplay.style.color = "#ffffff";
      ageDisplay.style.fontWeight = "500";
    } else if (ageDisplay) {
      ageDisplay.textContent = "";
    }
  }

  // Add event listeners
  if (yearSelect && monthSelect && daySelect) {
    yearSelect.addEventListener("change", function () {
      updateDays();
      calculateAge();
    });

    monthSelect.addEventListener("change", function () {
      updateDays();
      calculateAge();
    });

    daySelect.addEventListener("change", calculateAge);
  }
}

// Ensure birth date is initialized when DOM is ready
window.addEventListener("load", function () {
  // Initialize birth date with a slight delay to ensure DOM is fully ready
  setTimeout(() => {
    initializeBirthDateSelector();
    setupConditionalSections();
  }, 100);
});

// Simple gender switching
document.addEventListener("DOMContentLoaded", function () {
  // Get gender radio buttons
  const genderRadios = document.querySelectorAll('input[name="formGender"]');

  // Simple gender switch function
  function switchGender(value) {
    const body = document.body;

    if (value === "female") {
      body.classList.add("female-form");
      body.setAttribute("data-gender", "female");
    } else {
      body.classList.remove("female-form");
      body.setAttribute("data-gender", "male");
    }

    // Log current state
  }

  // Add event listeners to each radio button
  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        switchGender(this.value);
      }
    });

    // Also add click listener for immediate response
    radio.addEventListener("click", function () {
      if (!this.checked) {
        this.checked = true;
        switchGender(this.value);
      }
    });
  });

  // Initialize with current selection
  const checkedRadio = document.querySelector(
    'input[name="formGender"]:checked'
  );
  if (checkedRadio) {
    switchGender(checkedRadio.value);
  }

  // Initialize images based on default gender (female)
  setTimeout(() => {
    updateStyleImages("female");
    updateAvoidItems("female");
    updateClothingItems("female");
  }, 100);
});

// Gender-specific content mapping
const genderContent = {
  male: {
    attractiveStyles: [
      "mode",
      "classic",
      "minimal",
      "elegant",
      "casual-chic",
      "relax",
      "american-casual",
      "street",
      "conservative",
    ],
    avoidItems: [
      "tight",
      "oversized",
      "logo",
      "bright-color",
      "synthetic",
      "bold-print",
    ],
    weekdayOptions: [
      "office-external",
      "office-internal",
      "office-desk",
      "remote",
      "hybrid",
      "home",
      "other",
    ],
    holidayOptions: [
      "friends",
      "family",
      "date",
      "solo",
      "sports",
      "drive",
      "outdoor-activities",
      "events",
      "business-dining",
      "executive-meeting",
      "holiday-other",
    ],
  },
  female: {
    attractiveStyles: [
      "feminine",
      "elegant",
      "casual-chic",
      "modern",
      "classic",
      "natural",
      "sophisticated",
      "trendy",
      "artistic",
    ],
    avoidItems: [
      "mini-length",
      "excessive-exposure",
      "frills-lace",
      "high-heels",
      "thin-material",
      "ruffles",
    ],
    weekdayOptions: [
      "office-external",
      "office-internal",
      "office-desk",
      "remote",
      "hybrid",
      "home",
      "other",
    ],
    holidayOptions: [
      "friends",
      "family",
      "date",
      "solo",
      "shopping",
      "beauty-salon",
      "cultural-activities",
      "events",
      "lunch-meeting",
      "parent-activities",
      "holiday-other",
    ],
  },
};

// Female form data
const femaleFormData = {
  textUpdates: {
    mainTitle: "Personal Style Configuration for Women",
    mainSubtitle:
      "女性のお客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください",
  },
  attractiveStyles: {
    mode: { name: "モード", image: "images/style-female-mode-1.webp" },
    elegant: { name: "エレガント", image: "images/style-female-elegant-1.webp" },
    "urban-conservative": { name: "アーバン/コンサバティブ", image: "images/style-female-urban-conservative-1.webp",},
    feminine: { name: "フェミニン", image: "images/style-female-feminine-1.webp" },
    sporty: { name: "スポーティー", image: "images/style-female-sporty-1.webp" },
    natural: { name: "ナチュラル", image: "images/style-female-natural-1.webp" },
  },
  avoidItems: {
    "mini-length": { name: "ミニ丈", image: "images/avoid-mini-length.webp" },
    "excessive-exposure": {
      name: "過度な露出",
      image: "images/avoid-excessive-exposure.webp",
    },
    "frills-lace": {
      name: "フリル・レース",
      image: "images/avoid-frills-lace.webp",
    },
    "high-heels": { name: "ハイヒール", image: "images/avoid-high-heels.webp" },
    "thin-material": {
      name: "薄い素材",
      image: "images/avoid-thin-material.webp",
    },
    ruffles: { name: "ラッフル", image: "images/avoid-ruffles.webp" },
  },
};

// Function to switch form gender
function switchFormGender(gender) {
  const body = document.body;

  // Instant switch without animation
  if (gender === "female") {
    body.classList.add("female-form");
    // Update form content for female
    updateFormContent("female");
  } else {
    body.classList.remove("female-form");
    // Update form content for male
    updateFormContent("male");
  }
}

// Function to update all images based on gender - moved to global scope
function updateAllImages(gender) {
  // Get all images in the form
  const allImages = document.querySelectorAll("img");

  allImages.forEach((img) => {
    const currentSrc = img.src || img.getAttribute("src");
    if (!currentSrc) return;

    // Extract filename from path
    const filename = currentSrc.split("/").pop();

    // Check if this image has a gender variant
    if (window.imageMapping && window.imageMapping[filename]) {
      const newFilename = window.imageMapping[filename][gender] || filename;
      const newSrc = currentSrc.replace(filename, newFilename);
      img.src = newSrc;

      // Update srcset if exists
      if (img.srcset) {
        img.srcset = img.srcset.replace(filename, newFilename);
      }

      // Add visual indicator of which section is being updated
      addGenderSwitchIndicator(img, filename, gender);
    }
  });
}

// Function to add visual indicator for image switching
function addGenderSwitchIndicator(img, filename, gender) {
  const section = img.closest('.form-group, .form-section, [class*="section"]');
  if (section) {
    // Find section title or question
    const sectionTitle = section.querySelector('h3, h4, .section-title, .subsection-title, .service-question, label');
    const sectionName = sectionTitle ? sectionTitle.textContent.trim() : '不明なセクション';

    // Find or create indicator
    let indicator = section.querySelector('.gender-switch-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'gender-switch-indicator';
      indicator.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        style-male-mode-1.webp
        color: #000;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        z-index: 100;
        pointer-events: none;
        max-width: 200px;
        text-align: center;
        line-height: 1.2;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      `;
      section.style.position = 'relative';
      section.appendChild(indicator);
    }

    // Update indicator text with section info
    const genderText = gender === 'female' ? 'レディース' : 'メンズ';
    const shortSectionName = sectionName.length > 20 ? sectionName.substring(0, 17) + '...' : sectionName;
    indicator.innerHTML = `<div style="font-weight: 700;">${shortSectionName}</div><div>${genderText}画像に切り替え</div>`;

    // Show temporarily
    indicator.style.opacity = '1';
    indicator.style.transform = 'translateY(0)';
    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.style.opacity = '0';
        indicator.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          if (indicator.parentNode) {
            indicator.remove();
          }
        }, 500);
      }
    }, 3000);
  }
}

// Function to update form content based on gender
function updateFormContent(gender) {
  // Update main title and subtitle
  const mainTitle = document.querySelector(".main-title[data-gender-text]");
  const mainSubtitle = document.querySelector(
    ".main-subtitle[data-gender-text]"
  );

  if (gender === "female" && typeof femaleFormData !== "undefined") {
    // Update text content from femaleFormData
    if (mainTitle && femaleFormData.textUpdates) {
      mainTitle.textContent =
        femaleFormData.textUpdates.mainTitle ||
        "Personal Style Configuration for Women";
    }
    if (mainSubtitle && femaleFormData.textUpdates) {
      mainSubtitle.textContent =
        femaleFormData.textUpdates.mainSubtitle ||
        "女性のお客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください";
    }

    // Update attractive styles section
    updateAttractiveStyles("female");

    // Update avoid items section
    updateAvoidItems("female");

    // Update weekend activities
    updateWeekendActivities("female");
  } else {
    if (mainTitle) mainTitle.textContent = "Personal Style Configuration";
    if (mainSubtitle)
      mainSubtitle.textContent =
        "お客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください";

    // Update sections for male
    updateAttractiveStyles("male");
    updateAvoidItems("male");
    updateWeekendActivities("male");
  }

  // Update all images based on gender
  updateAllImages(gender);

  // Update style patterns if function exists
  if (typeof updateGenderStylePatterns === "function") {
    updateGenderStylePatterns();
  }
}

// Function to update attractive styles based on gender
function updateAttractiveStyles(gender) {
  const styleGrid = document.querySelector(".style-preference-grid");
  if (!styleGrid) return;

  // Clear existing styles
  styleGrid.innerHTML = "";

  if (
    gender === "female" &&
    femaleFormData &&
    femaleFormData.attractiveStyles
  ) {
    // Add female styles
    Object.entries(femaleFormData.attractiveStyles).forEach(([key, style]) => {
      const styleCard = document.createElement("div");
      styleCard.className = "style-preference-card";
      styleCard.innerHTML = `
                    <input type="checkbox" name="attractiveStyle" value="${key}" id="attractive-${key}">
                    <label for="attractive-${key}">
                        <img src="${style.image}" alt="${style.name}">
                        <span>${style.name}</span>
                    </label>
                `;
      styleGrid.appendChild(styleCard);
    });
  } else {
    // Add male styles (restore original)
    const maleStyles = genderContent.male.attractiveStyles;
    maleStyles.forEach((style) => {
      const styleCard = document.createElement("div");
      styleCard.className = "style-preference-card";
      styleCard.innerHTML = `
                    <input type="checkbox" name="attractiveStyle" value="${style}" id="attractive-${style}">
                    <label for="attractive-${style}">
                        <img src="images/style-${style}.webp" alt="${getStyleName(
        style
      )}">
                        <span>${getStyleName(style)}</span>
                    </label>
                `;
      styleGrid.appendChild(styleCard);
    });
  }

  // Re-initialize pattern selection after updating styles
  // Disabled - using style-patterns-gender-integrated.js
  // initializePatternSelection_DISABLED();
}

// Function to update avoid items based on gender
function updateAvoidItems(gender) {
  const avoidGrid = document.querySelector(".avoid-items-grid");
  if (!avoidGrid) return;

  // Clear existing items
  avoidGrid.innerHTML = "";

  if (gender === "female" && femaleFormData && femaleFormData.avoidItems) {
    // Add female avoid items
    Object.entries(femaleFormData.avoidItems).forEach(([key, item]) => {
      const avoidCard = document.createElement("div");
      avoidCard.className = "avoid-item-card";
      avoidCard.innerHTML = `
                    <input type="checkbox" name="avoidItems" value="${key}" id="avoid-${key}">
                    <label for="avoid-${key}">
                        <img src="${item.image}" alt="${item.name}">
                        <span>${item.name}</span>
                    </label>
                `;
      avoidGrid.appendChild(avoidCard);
    });
  } else {
    // Add male avoid items
    const maleAvoidItems = genderContent.male.avoidItems;
    maleAvoidItems.forEach((item) => {
      const avoidCard = document.createElement("div");
      avoidCard.className = "avoid-item-card";
      avoidCard.innerHTML = `
                    <input type="checkbox" name="avoidItems" value="${item}" id="avoid-${item}">
                    <label for="avoid-${item}">
                        <img src="images/avoid-${item}.webp" alt="${getAvoidItemName(
        item
      )}">
                        <span>${getAvoidItemName(item)}</span>
                    </label>
                `;
      avoidGrid.appendChild(avoidCard);
    });
  }
}

// Function to update weekend activities based on gender
function updateWeekendActivities(gender) {
  const weekendGrid = document.querySelector(".weekend-grid");
  if (!weekendGrid) return;

  // Note: Weekend activities are in the lifestyle section
  // This would need to be implemented based on the specific structure
}

// Helper function to get style names
function getStyleName(style) {
  const styleNames = {
    mode: "モード",
    classic: "クラシック",
    minimal: "ミニマル",
    elegant: "エレガント",
    "casual-chic": "カジュアルシック",
    relax: "リラックス",
    "american-casual": "アメリカンカジュアル",
    street: "ストリート",
    conservative: "コンサバティブ",
  };
  return styleNames[style] || style;
}

// Helper function to get avoid item names
function getAvoidItemName(item) {
  const itemNames = {
    tight: "タイト過ぎる",
    oversized: "オーバーサイズ",
    logo: "ロゴ",
    "bright-color": "明るい色",
    synthetic: "合成素材",
    "bold-print": "派手なプリント",
  };
  return itemNames[item] || item;
}

// Initialize gender switching on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // Get gender radio buttons
  const genderRadios = document.querySelectorAll('input[name="formGender"]');

  // Add event listeners to gender radios
  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function (e) {
      if (this.checked) {
        switchFormGender(this.value);
      }
    });
    // Also add click listener for better responsiveness
    radio.addEventListener("click", function (e) {
      // Force the change event if needed
      if (!this.checked) {
        this.checked = true;
        const event = new Event("change", { bubbles: true });
        this.dispatchEvent(event);
      }
    });
  });

  // Initialize with the default selected gender
  const checkedGender = document.querySelector(
    'input[name="formGender"]:checked'
  );
  if (checkedGender) {
    switchFormGender(checkedGender.value);
  }
});

// Pattern Selection Functionality
let patternSelectionInitialized = false;

function initializePatternSelection_DISABLED() {
  // DISABLED - using style-patterns-gender-integrated.js instead
  return;

  // Prevent duplicate initialization
  if (patternSelectionInitialized) {
    return;
  }

  const styleCheckboxes = document.querySelectorAll(
    'input[name="attractiveStyle"]'
  );
  const patternSection = document.getElementById("patternSelections");
  const patternContainer = document.getElementById(
    "patternSelectionsContainer"
  );

  if (!patternSection || !patternContainer || styleCheckboxes.length === 0) {
    return;
  }

  patternSelectionInitialized = true;

  // Sample items for each category
  const categoryItems = {
    tops: [
      { id: "top1", name: "シャツ1", image: "images/item-shirt1.webp" },
      { id: "top2", name: "シャツ2", image: "images/item-shirt2.webp" },
      { id: "top3", name: "ニット1", image: "images/item-knit1.webp" },
    ],
    bottoms: [
      { id: "bottom1", name: "パンツ1", image: "images/item-pants1.webp" },
      { id: "bottom2", name: "パンツ2", image: "images/item-pants2.webp" },
    ],
    outerwear: [
      { id: "outer1", name: "ジャケット1", image: "images/item-jacket1.webp" },
      { id: "outer2", name: "ジャケット2", image: "images/item-jacket2.webp" },
    ],
    shoes: [
      { id: "shoes1", name: "シューズ1", image: "images/item-shoes1.webp" },
      { id: "shoes2", name: "シューズ2", image: "images/item-shoes2.webp" },
    ],
    bags: [
      { id: "bag1", name: "バッグ1", image: "images/item-bag1.webp" },
      { id: "bag2", name: "バッグ2", image: "images/item-bag2.webp" },
    ],
  };

  // Handle style checkbox changes
  styleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {

      // Limit to 3 selections
      const checkedBoxes = Array.from(styleCheckboxes).filter(
        (cb) => cb.checked
      );
      if (checkedBoxes.length > 3) {
        this.checked = false;
        alert("最大3つまで選択できます。");
        return;
      }

      updatePatternSelections();
    });
  });

  function updatePatternSelections() {
    const selectedStyles = Array.from(styleCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    // Update pattern selections based on selected styles

    if (selectedStyles.length > 0) {
      // Show pattern section immediately
      patternSection.style.display = "block";
      patternSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
      renderPatternSelections(selectedStyles);
      // Also populate the 3-column evaluation section - Disabled as section is hidden
      // populateEvaluationColumns(selectedStyles);
    } else {
      patternSection.style.display = "none";
      patternContainer.innerHTML = "";
      // Clear the 3-column evaluation section - Disabled as section is hidden
      // clearEvaluationColumns();
    }
  }

  function renderPatternSelections(selectedStyles) {
    patternContainer.innerHTML = "";
    // Clear and render new patterns

    selectedStyles.forEach((styleKey) => {
      if (styleKey === "other") return; // Skip 'other' option

      const styleData = stylePatterns[styleKey];
      // Process each selected style
      if (!styleData) return;

      const styleContainer = document.createElement("div");
      styleContainer.className = "style-pattern-container";
      styleContainer.innerHTML = `
                <div class="style-pattern-header">
                    <img src="images/style-${styleKey}.webp" alt="${
        styleData.name
      }" class="style-pattern-icon">
                    <h3 class="style-pattern-title">${
                      styleData.name
                    }のパターンバリエーション</h3>
                </div>
                <p class="form-hint" style="margin-bottom: 20px;">以下の5つのパターンについて、それぞれGOOD/BADを評価してください。</p>
                <div class="pattern-variations-grid">
                    ${styleData.patterns
                      .map(
                        (pattern, patternIndex) => `
                        <div class="pattern-variation-card">
                            <img src="${pattern.image}" alt="${pattern.name}" onerror="this.src='images/placeholder.webp'" class="pattern-variation-image">
                            <div class="pattern-variation-name">${pattern.name}</div>
                            <div class="good-bad-selection">
                                <label class="good-bad-option good-option">
                                    <input type="radio" name="pattern_${styleKey}_${patternIndex}_eval" value="good" onchange="toggleReasonSection(this, 'pattern_${styleKey}_${patternIndex}')">
                                    <span>GOOD</span>
                                </label>
                                <label class="good-bad-option bad-option">
                                    <input type="radio" name="pattern_${styleKey}_${patternIndex}_eval" value="bad" onchange="toggleReasonSection(this, 'pattern_${styleKey}_${patternIndex}')">
                                    <span>BAD</span>
                                </label>
                            </div>
                            <div class="good-bad-reasons" id="reasons_pattern_${styleKey}_${patternIndex}" style="display: none;">
                                <p class="reason-label">理由（複数選択可）:</p>
                                <div class="reason-options">
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="design">
                                        <span>デザイン</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="color">
                                        <span>色味</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="silhouette">
                                        <span>シルエット</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="material">
                                        <span>素材感</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="trendiness">
                                        <span>トレンド感</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="practicality">
                                        <span>実用性</span>
                                    </label>
                                    <label class="reason-checkbox">
                                        <input type="checkbox" name="pattern_${styleKey}_${patternIndex}_reasons" value="other">
                                        <span>その他</span>
                                    </label>
                                    <input type="text" name="pattern_${styleKey}_${patternIndex}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                </div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="pattern-items-section" id="items_${styleKey}">
                    <h4 class="pattern-items-header">このスタイルのアイテムを評価してください</h4>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">トップス</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.tops
                              .map(
                                (item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_tops_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_tops_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_tops_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_tops_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_tops_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_tops_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">ボトムス</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.bottoms
                              .map(
                                (item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_bottoms_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_bottoms_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_bottoms_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_bottoms_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_bottoms_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_bottoms_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">アウター</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.outerwear
                              .map(
                                (item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_outerwear_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_outerwear_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_outerwear_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_outerwear_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_outerwear_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_outerwear_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">シューズ</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.shoes
                              .map(
                                (item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_shoes_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_shoes_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_shoes_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_shoes_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_shoes_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_shoes_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">バッグ</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.bags
                              .map(
                                (item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_bags_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_bags_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_bags_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_bags_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_bags_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_bags_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;

      patternContainer.appendChild(styleContainer);

      // Add event listener for pattern selection
      const patternRadios = styleContainer.querySelectorAll(
        `input[name="pattern_${styleKey}"]`
      );
      const itemsSection = styleContainer.querySelector(`#items_${styleKey}`);

      patternRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
          if (this.checked) {
            itemsSection.classList.add("active");
          }
        });
      });

      // Add event listeners for "その他" checkboxes in reason sections
      const otherReasonCheckboxes = styleContainer.querySelectorAll(
        'input[value="other"]'
      );
      otherReasonCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          const reasonSection = this.closest(".good-bad-reasons");
          const otherInput = reasonSection.querySelector(".reason-other-input");
          if (otherInput) {
            otherInput.style.display = this.checked ? "block" : "none";
            if (!this.checked) {
              otherInput.value = "";
            }
          }
        });
      });
    });
  }

  // Function to populate the 3-column evaluation section
  function populateEvaluationColumns(selectedStyles) {
    const topsContainer = document.getElementById("topsEvaluationContainer");
    const bottomsContainer = document.getElementById(
      "bottomsEvaluationContainer"
    );
    const accessoriesContainer = document.getElementById(
      "accessoriesEvaluationContainer"
    );

    if (!topsContainer || !bottomsContainer || !accessoriesContainer) {
      return;
    }

    // Define items for each category based on selected styles
    const evaluationItems = {
      tops: [
        { id: "shirt1", name: "ドレスシャツ", image: "images/item-shirt1.webp" },
        {
          id: "shirt2",
          name: "カジュアルシャツ",
          image: "images/item-shirt2.webp",
        },
        {
          id: "jacket1",
          name: "テーラードジャケット",
          image: "images/item-jacket1.webp",
        },
        {
          id: "jacket2",
          name: "カジュアルジャケット",
          image: "images/item-jacket2.webp",
        },
      ],
      bottoms: [
        { id: "pants1", name: "ドレスパンツ", image: "images/item-pants1.webp" },
        {
          id: "pants2",
          name: "カジュアルパンツ",
          image: "images/item-pants2.webp",
        },
      ],
      accessories: [
        {
          id: "shoes1",
          name: "ドレスシューズ",
          image: "images/item-shoes1.webp",
        },
        {
          id: "shoes2",
          name: "カジュアルシューズ",
          image: "images/item-shoes2.webp",
        },
        { id: "bag1", name: "ビジネスバッグ", image: "images/item-bag1.webp" },
        { id: "bag2", name: "カジュアルバッグ", image: "images/item-bag2.webp" },
      ],
    };

    // Populate each column
    populateEvaluationColumn(topsContainer, evaluationItems.tops, "tops");
    populateEvaluationColumn(
      bottomsContainer,
      evaluationItems.bottoms,
      "bottoms"
    );
    populateEvaluationColumn(
      accessoriesContainer,
      evaluationItems.accessories,
      "accessories"
    );
  }

  // Function to populate a single evaluation column
  function populateEvaluationColumn(container, items, category) {
    container.innerHTML = "";

    const itemsGrid = document.createElement("div");
    itemsGrid.className = "evaluation-items-grid";

    items.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "evaluation-item";
      itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="evaluation-item-image" onerror="this.src='images/placeholder.webp'">
                <div class="evaluation-item-name">${item.name}</div>
                <div class="good-bad-selection">
                    <label class="good-bad-option good-option">
                        <input type="radio" name="${category}_${item.id}_eval" value="good" onchange="toggleReasonSection(this, '${category}_${item.id}')">
                        <span>GOOD</span>
                    </label>
                    <label class="good-bad-option bad-option">
                        <input type="radio" name="${category}_${item.id}_eval" value="bad" onchange="toggleReasonSection(this, '${category}_${item.id}')">
                        <span>BAD</span>
                    </label>
                </div>
                <div class="good-bad-reasons" id="reasons_${category}_${item.id}" style="display: none;">
                    <p class="reason-label">理由（複数選択可）:</p>
                    <div class="reason-options">
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="design">
                            <span>デザイン</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="color">
                            <span>色味</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="silhouette">
                            <span>シルエット</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="material">
                            <span>素材感</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="price">
                            <span>価格帯</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="brand">
                            <span>ブランドイメージ</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${category}_${item.id}_reasons" value="other">
                            <span>その他</span>
                        </label>
                        <input type="text" name="${category}_${item.id}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                    </div>
                </div>
            `;
      itemsGrid.appendChild(itemDiv);
    });

    container.appendChild(itemsGrid);

    // Add event listeners for "その他" checkboxes
    const otherReasonCheckboxes = container.querySelectorAll(
      'input[value="other"]'
    );
    otherReasonCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const reasonSection = this.closest(".good-bad-reasons");
        const otherInput = reasonSection.querySelector(".reason-other-input");
        if (otherInput) {
          otherInput.style.display = this.checked ? "block" : "none";
          if (!this.checked) {
            otherInput.value = "";
          }
        }
      });
    });
  }

  // Function to clear the evaluation columns
  function clearEvaluationColumns() {
    const topsContainer = document.getElementById("topsEvaluationContainer");
    const bottomsContainer = document.getElementById(
      "bottomsEvaluationContainer"
    );
    const accessoriesContainer = document.getElementById(
      "accessoriesEvaluationContainer"
    );

    if (topsContainer) {
      topsContainer.innerHTML =
        '<div class="item-evaluation-placeholder"><p style="text-align: center; color: #999; padding: 20px;">3-1でスタイルを選択してください</p></div>';
    }
    if (bottomsContainer) {
      bottomsContainer.innerHTML =
        '<div class="item-evaluation-placeholder"><p style="text-align: center; color: #999; padding: 20px;">3-1でスタイルを選択してください</p></div>';
    }
    if (accessoriesContainer) {
      accessoriesContainer.innerHTML =
        '<div class="item-evaluation-placeholder"><p style="text-align: center; color: #999; padding: 20px;">3-1でスタイルを選択してください</p></div>';
    }
  }
}

// Function to toggle reason section display when GOOD or BAD is selected
function toggleReasonSection(radioElement, itemId) {
  const reasonSection = document.getElementById(`reasons_${itemId}`);
  const goodReasons = document.getElementById(`good_reasons_${itemId}`);
  const badReasons = document.getElementById(`bad_reasons_${itemId}`);

  if (reasonSection) {
    // Show the reason section when either GOOD or BAD is selected
    reasonSection.style.display = "block";

    // Show appropriate reason options based on selection
    if (goodReasons && badReasons) {
      if (radioElement.value === "good") {
        goodReasons.style.display = "block";
        badReasons.style.display = "none";
      } else if (radioElement.value === "bad") {
        goodReasons.style.display = "none";
        badReasons.style.display = "block";
      }
    }
  }
}

// Weekly Date Display Function
function updateWeeklyDates() {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Calculate Monday of the current week
  const monday = new Date(today);
  const daysToMonday = currentDay === 0 ? -6 : 1 - currentDay;
  monday.setDate(today.getDate() + daysToMonday);

  // Day names in order starting from Monday
  const dayElements = [
    "monday-date",
    "tuesday-date",
    "wednesday-date",
    "thursday-date",
    "friday-date",
    "saturday-date",
    "sunday-date",
  ];

  // Update each day's date
  dayElements.forEach((elementId, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    const dateElement = document.getElementById(elementId);
    if (dateElement) {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dateElement.textContent = `${month}/${day}`;
    }
  });
}

// Initialize weekday card sub-options functionality
function initializeWeekdayCardOptions() {
  // Handle weekday lifestyle checkboxes
  const weekdayCheckboxes = document.querySelectorAll(
    '.weekday-card input[type="checkbox"]'
  );

  weekdayCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const card = this.closest(".weekday-card");
      const subOptions = card.querySelector(".sub-options");

      if (subOptions) {
        if (this.checked) {
          subOptions.style.display = "block";
        } else {
          subOptions.style.display = "none";
          // Clear sub-selections when unchecked
          const subCheckboxes = subOptions.querySelectorAll(
            'input[type="checkbox"]'
          );
          subCheckboxes.forEach((subCheck) => {
            subCheck.checked = false;
          });
          const textInputs = subOptions.querySelectorAll('input[type="text"]');
          textInputs.forEach((input) => {
            input.value = "";
            input.style.display = "none";
          });
        }
      }
    });
  });

  // Handle "その他" (Other) checkboxes for meeting people
  const otherCheckboxes = document.querySelectorAll(
    '.chip-option input[value="other"]'
  );

  otherCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const chipGroup = this.closest(".chip-group");
      const subOptions = this.closest(".sub-options");
      const textInput = subOptions?.querySelector('input[type="text"]');

      if (textInput) {
        if (this.checked) {
          textInput.style.display = "block";
        } else {
          textInput.value = "";
          textInput.style.display = "none";
        }
      }
    });
  });
}

// Form initialization
// Image mapping for male/female versions - moved to global scope
// Only declare if not already declared by image-mapping-config.js
if (typeof imageMapping === "undefined") {
  window.imageMapping = {
    // Lifestyle images
    "lifestyle-office-external.webp": {
      male: "lifestyle-office-external.webp",
      female: "lifestyle-office-external-female.webp",
    },
    "lifestyle-office-internal.webp": {
      male: "lifestyle-office-internal.webp",
      female: "lifestyle-office-internal.webp",
    },
    "lifestyle-office-desk.webp": {
      male: "lifestyle-office-desk.webp",
      female: "lifestyle-office-desk-female.webp",
    },
    "lifestyle-remote.webp": {
      male: "lifestyle-remote.webp",
      female: "lifestyle-remote-female.webp",
    },
    "lifestyle-hybrid.webp": {
      male: "lifestyle-hybrid.webp",
      female: "lifestyle-hybrid-female.webp",
    },
    "lifestyle-home.webp": {
      male: "lifestyle-home.webp",
      female: "lifestyle-home-female.webp",
    },

    // Weekend activities
    "weekend-family.webp": {
      male: "weekend-family.webp",
      female: "weekend-family-female.webp",
    },
    "weekend-friends.webp": {
      male: "weekend-friends.webp",
      female: "weekend-friends-female.webp",
    },
    "weekend-date.webp": {
      male: "weekend-date.webp",
      female: "weekend-date-female.webp",
    },
    "weekend-solo.webp": {
      male: "weekend-solo.webp",
      female: "weekend-solo-female.webp",
    },
    "weekend-sports.webp": {
      male: "weekend-sports.webp",
      female: "weekend-sports-female.webp",
    },
    "weekend-drive.webp": {
      male: "weekend-drive.webp",
      female: "weekend-drive-female.webp",
    },
    "weekend-outdoor.webp": {
      male: "weekend-outdoor.webp",
      female: "weekend-outdoor-female.webp",
    },
    "weekend-event.webp": {
      male: "weekend-event.webp",
      female: "weekend-event-female.webp",
    },
    "weekend-business-dining.webp": {
      male: "weekend-business-dining.webp",
      female: "weekend-business-dining-female.webp",
    },
    "weekend-executive.webp": {
      male: "weekend-executive.webp",
      female: "weekend-executive-female.webp",
    },

    // Scene images
    "scene-internal-meeting.webp": {
      male: "scene-internal-meeting.webp",
      female: "scene-internal-meeting-female.webp",
    },
    "scene-external-meeting.webp": {
      male: "scene-external-meeting.webp",
      female: "scene-external-meeting-female.webp",
    },
    "scene-seminar.webp": {
      male: "scene-seminar.webp",
      female: "scene-seminar-female.webp",
    },
    "scene-business-dining.webp": {
      male: "scene-business-dining.webp",
      female: "scene-business-dining.webp",
    },
    "scene-site-visit.webp": {
      male: "scene-site-visit.webp",
      female: "scene-site-visit.webp",
    },
    "scene-casual-dining.webp": {
      male: "scene-casual-dining.webp",
      female: "scene-casual-dining.webp",
    },
    "scene-party.webp": {
      male: "scene-party.webp",
      female: "scene-party.webp",
    },
    "scene-shopping.webp": {
      male: "scene-shopping.webp",
      female: "scene-shopping.webp",
    },
    "scene-fitness.webp": {
      male: "scene-fitness.webp",
      female: "scene-fitness.webp",
    },
    "scene-golf.webp": {
      male: "scene-golf.webp",
      female: "scene-golf.webp",
    },
    "scene-travel.webp": {
      male: "scene-travel.webp",
      female: "scene-travel.webp",
    },
    "scene-culture.webp": {
      male: "scene-culture.webp",
      female: "scene-culture-female.webp",
    },

    // Style images
    "style-mode.webp": {
      male: "style-male-mode-1.webp",
      female: "style-mode-female.webp",
    },
    "style-classic.webp": {
      male: "style-classic.webp",
      female: "style-classic-female.webp",
    },
    "style-minimal.webp": {
      male: "style-minimal.webp",
      female: "style-minimal-female.webp",
    },
    "style-elegant.webp": {
      male: "style-elegant.webp",
      female: "style-elegant-female.webp",
    },
    "style-casual-chic.webp": {
      male: "style-casual-chic.webp",
      female: "style-casual-chic-female.webp",
    },
    "style-relax.webp": {
      male: "style-relax.webp",
      female: "style-relax-female.webp",
    },
    "style-american-casual.webp": {
      male: "style-american-casual.webp",
      female: "style-american-casual-female.webp",
    },
    "style-street.webp": {
      male: "style-street.webp",
      female: "style-street-female.webp",
    },
    "style-conservative.webp": {
      male: "style-conservative.webp",
      female: "style-conservative-female.webp",
    },

    // Dress code images
    "dress-code-suit-required.webp": {
      male: "dress-code-suit-required.webp",
      female: "dress-code-suit-required-female.webp",
    },
    "dress-code-business-casual.webp": {
      male: "dress-code-business-casual.webp",
      female: "dress-code-business-casual-female.webp",
    },
    "dress-code-smart-casual.webp": {
      male: "dress-code-smart-casual.webp",
      female: "dress-code-smart-casual-female.webp",
    },
    "dress-code-casual.webp": {
      male: "dress-code-casual.webp",
      female: "dress-code-casual-female.webp",
    },
    "dress-code-uniform.webp": {
      male: "dress-code-uniform.webp",
      female: "dress-code-uniform-female.webp",
    },
    "dress-code-no-restriction.webp": {
      male: "dress-code-no-restriction.webp",
      female: "dress-code-no-restriction-female.webp",
    },

    // Item images
    "item-shirt1.webp": {
      male: "item-shirt1.webp",
      female: "item-blouse1.webp",
    },
    "item-shirt2.webp": {
      male: "item-shirt2.webp",
      female: "item-blouse2.webp",
    },
    "item-jacket1.webp": {
      male: "item-jacket1.webp",
      female: "item-jacket1-female.webp",
    },
    "item-jacket2.webp": {
      male: "item-jacket2.webp",
      female: "item-jacket2-female.webp",
    },
    "item-pants1.webp": {
      male: "item-pants1.webp",
      female: "item-skirt1.webp",
    },
    "item-pants2.webp": {
      male: "item-pants2.webp",
      female: "item-skirt2.webp",
    },
    "item-shoes1.webp": {
      male: "item-shoes1.webp",
      female: "item-shoes1-female.webp",
    },
    "item-shoes2.webp": {
      male: "item-shoes2.webp",
      female: "item-shoes2-female.webp",
    },
    "item-bag1.webp": {
      male: "item-bag1.webp",
      female: "item-bag1-female.webp",
    },
    "item-bag2.webp": {
      male: "item-bag2.webp",
      female: "item-bag2-female.webp",
    },

    // Avoid items
    "avoid-tight.webp": {
      male: "avoid-tight.webp",
      female: "avoid-tight-female.webp",
    },
    "avoid-oversized.webp": {
      male: "avoid-oversized.webp",
      female: "avoid-oversized.webp",
    },
    "avoid-logo.webp": {
      male: "avoid-logo.webp",
      female: "avoid-logo-female.webp",
    },
    "avoid-bright-color.webp": {
      male: "avoid-bright-color.webp",
      female: "avoid-bright-color-female.webp",
    },
    "avoid-syntheticjlk.webp": {
      male: "avoid-syntheticjlk.webp",
      female: "avoid-synthetic-female.webp",
    },
    "avoid-bold-print.webp": {
      male: "avoid-bold-print.webp",
      female: "avoid-bold-print-female.webp",
    },

    // Investment items
    "investment-outer.webp": {
      male: "investment-outer.webp",
      female: "investment-outer-female.webp",
    },
    "investment-bottoms.webp": {
      male: "investment-bottoms.webp",
      female: "investment-bottoms-female.webp",
    },
    "investment-shoes.webp": {
      male: "investment-shoes.webp",
      female: "investment-shoes-female.webp",
    },
    "investment-bag.webp": {
      male: "investment-bag.webp",
      female: "investment-bag-female.webp",
    },
  };
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize photo upload functionality
  initializePhotoUpload();

  // Initialize scene frequency functionality
  // initializeSceneFrequency(); // Removed - no longer using frequency buttons

  // Populate birth date dropdowns
  populateBirthDate();

  // Update weekly dates
  updateWeeklyDates();

  // Initialize pattern selection functionality
  // Disabled - using style-patterns-gender-integrated.js
  // initializePatternSelection_DISABLED();

  // Force re-initialization after a short delay to ensure DOM is ready
  setTimeout(() => {
    // Disabled - using style-patterns-gender-integrated.js
    // initializePatternSelection_DISABLED();
  }, 500);

  // Initialize weekday card sub-options
  initializeWeekdayCardOptions();

  // Form validation and interactivity
  const form = document.querySelector("form");
  const checkboxGroups = document.querySelectorAll(
    '.checkbox-option input[type="checkbox"]'
  );
  const radioGroups = document.querySelectorAll(
    '.radio-option input[type="radio"]'
  );

  // Enhanced checkbox interactions
  checkboxGroups.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.closest(".checkbox-option");
      if (this.checked) {
        label.classList.add("selected");
      } else {
        label.classList.remove("selected");
      }
    });
  });

  // Enhanced radio button interactions
  radioGroups.forEach((radio) => {
    radio.addEventListener("change", function () {
      const name = this.name;
      // Remove selected class from all radios with same name
      document.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
        r.closest(".radio-option")?.classList.remove("selected");
      });
      // Add selected class to current radio
      this.closest(".radio-option")?.classList.add("selected");
    });
  });

  // Smooth scroll for form navigation
  function smoothScrollTo(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Form progress tracking
  function updateProgress() {
    const sections = document.querySelectorAll(".form-section");
    const totalSections = sections.length;
    let completedSections = 0;

    sections.forEach((section) => {
      const requiredInputs = section.querySelectorAll(
        "input[required], select[required], textarea[required]"
      );
      let sectionComplete = true;

      requiredInputs.forEach((input) => {
        if (input.type === "checkbox" || input.type === "radio") {
          const name = input.name;
          const checked = section.querySelector(
            `input[name="${name}"]:checked`
          );
          if (!checked) sectionComplete = false;
        } else {
          if (!input.value.trim()) sectionComplete = false;
        }
      });

      if (sectionComplete) completedSections++;
    });

    const progress = (completedSections / totalSections) * 100;
    const progressBar = document.querySelector(".progress-fill");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    const progressStep = document.querySelector(".progress-step");
    if (progressStep) {
      progressStep.textContent = `Step ${
        completedSections + 1
      } of ${totalSections}`;
    }
  }

  // Update progress on input changes
  document.addEventListener("input", updateProgress);
  document.addEventListener("change", updateProgress);

  // Initial progress update
  updateProgress();

  // Show/hide conditional options for partner service
  const partnerYes = document.querySelector(
    'input[name="partnerService"][value="yes"]'
  );
  const partnerNo = document.querySelector(
    'input[name="partnerService"][value="no"]'
  );
  const partnerOptions = document.getElementById("partnerFittingOptions");

  if (partnerYes && partnerNo && partnerOptions) {
    partnerYes.addEventListener("change", function () {
      if (this.checked) {
        partnerOptions.style.display = "block";
      }
    });

    partnerNo.addEventListener("change", function () {
      if (this.checked) {
        partnerOptions.style.display = "none";
      }
    });
  }

  // Show/hide conditional options for gift service
  const giftYes = document.querySelector(
    'input[name="giftService"][value="yes"]'
  );
  const giftNo = document.querySelector(
    'input[name="giftService"][value="no"]'
  );
  const giftOptions = document.getElementById("giftFrequencyOptions");

  if (giftYes && giftNo && giftOptions) {
    giftYes.addEventListener("change", function () {
      if (this.checked) {
        giftOptions.style.display = "block";
      }
    });

    giftNo.addEventListener("change", function () {
      if (this.checked) {
        giftOptions.style.display = "none";
      }
    });
  }

  // Show/hide other field for service expectations
  const otherCheckbox = document.querySelector(
    'input[name="serviceExpectations"][value="other"]'
  );
  const otherInput = document.querySelector(
    'input[name="serviceExpectationsOther"]'
  );

  if (otherCheckbox && otherInput) {
    otherCheckbox.addEventListener("change", function () {
      if (this.checked) {
        otherInput.style.display = "block";
      } else {
        otherInput.style.display = "none";
      }
    });
  }

  // Enhanced form submission
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show submission animation
      const submitBtn = form.querySelector(".submit-btn");
      if (submitBtn) {
        submitBtn.innerHTML = "<span>送信中...</span>";
        submitBtn.disabled = true;
      }

      // Simulate form submission (replace with actual submission logic)
      setTimeout(() => {
        alert("フォームが送信されました！ありがとうございます。");
        if (submitBtn) {
          submitBtn.innerHTML = "フォームを送信";
          submitBtn.disabled = false;
        }
      }, 2000);
    });
  }
});

// Utility functions for enhanced UX
function formatPhoneNumber(input) {
  let value = input.value.replace(/[^\d]/g, "");
  if (value.length > 0) {
    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11);
    }
  }
  input.value = value;
}

// Phone number formatting setup
function setupPhoneNumberFormatting() {
  const phoneInput = document.getElementById("phoneNumber");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      formatPhoneNumber(this);
    });
  }
}

// Basic knowledge details toggle setup
function setupBasicKnowledgeToggle() {
  const basicKnowledgeCheck = document.getElementById("basic-knowledge-check");
  const basicKnowledgeDetails = document.getElementById(
    "basic-knowledge-details"
  );

  if (basicKnowledgeCheck && basicKnowledgeDetails) {
    basicKnowledgeCheck.addEventListener("change", function () {
      if (this.checked) {
        basicKnowledgeDetails.style.display = "block";
        // Smooth scroll to show the new section
        setTimeout(() => {
          basicKnowledgeDetails.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 100);
      } else {
        basicKnowledgeDetails.style.display = "none";
      }
    });
  }
}

// Apply phone number formatting
document.addEventListener("DOMContentLoaded", function () {
  // Initialize phone number formatting
  setupPhoneNumberFormatting();

  // Initialize basic knowledge toggle
  setupBasicKnowledgeToggle();

  // Initialize style evaluation system
  initializeStyleEvaluation();

  // Initialize other style checkbox
  setupOtherStyleCheckbox();
});

// Style-based item evaluation functionality
function initializeStyleEvaluation() {
  const attractiveStyleCheckboxes = document.querySelectorAll(
    'input[name="attractiveStyle"]'
  );
  const itemEvaluationContainer = document.getElementById(
    "itemEvaluationContainer"
  );
  const styleVariationsSection = document.getElementById("styleVariations");
  const variationGrid = document.getElementById("variationGrid");

  // Add event listeners to attractive style checkboxes
  attractiveStyleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateItemEvaluation);
  });
}

// Style variations data - moved outside DOMContentLoaded
const styleVariations = {
  mode: [
    { id: "mode-level1", name: "1", image: "images/style-male-mode-1.webp" },
    { id: "mode-level2", name: "2", image: "images/style-mode-level2.webp" },
    { id: "mode-level3", name: "3", image: "images/style-mode-level3.webp" },
    { id: "mode-level4", name: "4", image: "images/style-mode-level4.webp" },
    { id: "mode-level5", name: "5", image: "images/style-mode-level5.webp" },
  ],
  classic: [
    { id: "classic-1", name: "1", image: "images/style-classic-1.webp" },
    { id: "classic-2", name: "2", image: "images/style-classic-2.webp" },
    { id: "classic-3", name: "3", image: "images/style-classic-3.webp" },
    { id: "classic-4", name: "4", image: "images/style-classic-4.webp" },
    { id: "classic-5", name: "5", image: "images/style-classic-5.webp" },
  ],
  minimal: [
    { id: "minimal-1", name: "1", image: "images/style-minimal-1.webp" },
    { id: "minimal-2", name: "2", image: "images/style-minimal-2.webp" },
    { id: "minimal-3", name: "3", image: "images/style-minimal-3.webp" },
    { id: "minimal-4", name: "4", image: "images/style-minimal-4.webp" },
    { id: "minimal-5", name: "5", image: "images/style-minimal-5.webp" },
  ],
  elegant: [
    { id: "elegant-1", name: "1", image: "images/style-elegant-1.webp" },
    { id: "elegant-2", name: "2", image: "images/style-elegant-2.webp" },
    { id: "elegant-3", name: "3", image: "images/style-elegant-3.webp" },
    { id: "elegant-4", name: "4", image: "images/style-elegant-4.webp" },
    { id: "elegant-5", name: "5", image: "images/style-elegant-5.webp" },
  ],
  "casual-chic": [
    { id: "casual-chic-1", name: "1", image: "images/style-casual-chic-1.webp" },
    { id: "casual-chic-2", name: "2", image: "images/style-casual-chic-2.webp" },
    { id: "casual-chic-3", name: "3", image: "images/style-casual-chic-3.webp" },
    { id: "casual-chic-4", name: "4", image: "images/style-casual-chic-4.webp" },
    { id: "casual-chic-5", name: "5", image: "images/style-casual-chic-5.webp" },
  ],
  relax: [
    { id: "relax-1", name: "1", image: "images/style-relax-1.webp" },
    { id: "relax-2", name: "2", image: "images/style-relax-2.webp" },
    { id: "relax-3", name: "3", image: "images/style-relax-3.webp" },
    { id: "relax-4", name: "4", image: "images/style-relax-4.webp" },
    { id: "relax-5", name: "5", image: "images/style-relax-5.webp" },
  ],
  street: [
    { id: "street-1", name: "1", image: "images/style-street-1.webp" },
    { id: "street-2", name: "2", image: "images/style-street-2.webp" },
    { id: "street-3", name: "3", image: "images/style-street-3.webp" },
    { id: "street-4", name: "4", image: "images/style-street-4.webp" },
    { id: "street-5", name: "5", image: "images/style-street-5.webp" },
  ],
  conservative: [
    {
      id: "conservative-1",
      name: "1",
      image: "images/style-conservative-1.webp",
    },
    {
      id: "conservative-2",
      name: "2",
      image: "images/style-conservative-2.webp",
    },
    {
      id: "conservative-3",
      name: "3",
      image: "images/style-conservative-3.webp",
    },
    {
      id: "conservative-4",
      name: "4",
      image: "images/style-conservative-4.webp",
    },
    {
      id: "conservative-5",
      name: "5",
      image: "images/style-conservative-5.webp",
    },
  ],
  "american-casual": [
    { id: "amecas-1", name: "1", image: "images/style-amecas-1.webp" },
    { id: "amecas-2", name: "2", image: "images/style-amecas-2.webp" },
    { id: "amecas-3", name: "3", image: "images/style-amecas-3.webp" },
    { id: "amecas-4", name: "4", image: "images/style-amecas-4.webp" },
    { id: "amecas-5", name: "5", image: "images/style-amecas-5.webp" },
  ],
};

// Function to generate reason checkboxes for pattern evaluation
function generatePatternReasons(style, index) {
  const goodReasons = [
    "シルエットが好み",
    "色使いが良い",
    "素材感が魅力的",
    "デザインが好み",
    "着回しやすそう",
  ];

  const badReasons = [
    "シルエットが合わない",
    "色使いが好みでない",
    "素材感が安っぽい",
    "デザインが派手すぎる",
    "着こなしが難しそう",
  ];

  return `
            <div class="good-reasons" id="good_reasons_pattern_${style}_${index}" style="display: none;">
                <p class="reason-label">GOODの理由（複数選択可）</p>
                ${goodReasons
                  .map(
                    (reason, reasonIndex) => `
                    <label class="reason-checkbox">
                        <input type="checkbox" name="pattern_${style}_${index}_good_reason" value="${reason}">
                        <span>${reason}</span>
                    </label>
                `
                  )
                  .join("")}
            </div>
            <div class="bad-reasons" id="bad_reasons_pattern_${style}_${index}" style="display: none;">
                <p class="reason-label">BADの理由（複数選択可）</p>
                ${badReasons
                  .map(
                    (reason, reasonIndex) => `
                    <label class="reason-checkbox">
                        <input type="checkbox" name="pattern_${style}_${index}_bad_reason" value="${reason}">
                        <span>${reason}</span>
                    </label>
                `
                  )
                  .join("")}
            </div>
        `;
}

// DISABLED - using style-patterns-gender-integrated.js instead
function showPatternSelections_DISABLED(selectedStyles) {
    return; // Function disabled
}

function showPatternSelections_ORIGINAL(selectedStyles) {
    const patternSectionsContainer =
      document.getElementById("patternSelections");
    const patternSelectionsContainer = document.getElementById(
      "patternSelectionsContainer"
    );

    if (!selectedStyles || selectedStyles.length === 0) {
      patternSectionsContainer.style.display = "none";
      return;
    }

    // Clear previous patterns
    patternSelectionsContainer.innerHTML = "";

    // Create pattern selection for each selected style
    selectedStyles.forEach((style, styleIndex) => {
      const variations = styleVariations[style] || [];
      if (variations.length === 0) return;

      const styleSection = document.createElement("div");
      styleSection.className = "style-pattern-section";
      styleSection.innerHTML = `
                <h4 class="pattern-style-title">${getStyleDisplayName(
                  style
                )} - 5つのパターンからお好みのものを選択してください</h4>
                <div class="pattern-variations-grid">
                    ${variations
                      .map(
                        (variation, index) => `
                        <div class="pattern-variation-card">
                            <img src="${variation.image}" alt="${
                          variation.name
                        }" onerror="this.src='images/placeholder.webp'" class="pattern-variation-image">
                            <div class="pattern-variation-name">${
                              variation.name
                            }</div>
                            <div class="good-bad-selection">
                                <label class="good-bad-option good-option">
                                    <input type="radio" name="pattern_${style}_${index}_eval" value="good" onchange="toggleReasonSection(this, 'pattern_${style}_${index}')">
                                    <span>GOOD</span>
                                </label>
                                <label class="good-bad-option bad-option">
                                    <input type="radio" name="pattern_${style}_${index}_eval" value="bad" onchange="toggleReasonSection(this, 'pattern_${style}_${index}')">
                                    <span>BAD</span>
                                </label>
                            </div>
                            <div class="good-bad-reasons" id="reasons_pattern_${style}_${index}" style="display: none;">
                                ${generatePatternReasons(style, index)}
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            `;
      patternSelectionsContainer.appendChild(styleSection);
    });

    // Show the pattern sections
    patternSectionsContainer.style.display = "block";
  }

  // Helper function to generate item options
  function generateItemOptions(type, patternId, items) {
    return items
      .map(
        (item, index) => `
            <div class="item-option">
                <input type="checkbox" id="${patternId}-${type}-item-${index}" name="${patternId}-${type}-items" value="${item}">
                <label for="${patternId}-${type}-item-${index}">
                    <img src="images/item-placeholder.webp" alt="${item}" width="50" height="50">
                    <span>${item}</span>
                </label>
            </div>
        `
      )
      .join("");
  }

  function showStyleVariations(selectedStyle) {
    if (!selectedStyle || selectedStyle === "other") {
      styleVariationsSection.style.display = "none";
      return;
    }

    const variations = styleVariations[selectedStyle] || [];
    if (variations.length === 0) {
      styleVariationsSection.style.display = "none";
      return;
    }

    // Clear previous variations
    variationGrid.innerHTML = "";

    // Create variation cards
    variations.forEach((variation, index) => {
      const variationCard = document.createElement("div");
      variationCard.className = "variation-card";
      variationCard.innerHTML = `
                <input type="radio" name="styleVariation" value="${
                  variation.id
                }" id="${variation.id}">
                <label for="${variation.id}" class="variation-label">
                    <img src="${variation.image}" alt="${
        variation.name
      }" class="variation-image">
                    <span class="variation-number">${index + 1}</span>
                    <span class="variation-name">${variation.name}</span>
                </label>
            `;
      variationGrid.appendChild(variationCard);
    });

    // Show the variations section with animation
    styleVariationsSection.style.display = "block";

    // Update item evaluation based on variation selection
    const variationRadios = variationGrid.querySelectorAll(
      'input[name="styleVariation"]'
    );
    variationRadios.forEach((radio) => {
      radio.addEventListener("change", updateItemEvaluation);
    });
  }

  function updateItemEvaluation() {
    const selectedStyles = document.querySelectorAll(
      'input[name="attractiveStyle"]:checked'
    );

    // Get the containers for each column
    const topsContainer = document.getElementById("topsEvaluationContainer");
    const bottomsContainer = document.getElementById(
      "bottomsEvaluationContainer"
    );
    const accessoriesContainer = document.getElementById(
      "accessoriesEvaluationContainer"
    );

    if (selectedStyles.length === 0) {
      // Show placeholder in all columns
      const placeholderHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 20px;">
                        3-1でスタイルを選択してください
                    </p>
                </div>
            `;
      topsContainer.innerHTML = placeholderHTML;
      bottomsContainer.innerHTML = placeholderHTML;
      accessoriesContainer.innerHTML = placeholderHTML;
      return;
    }

    // Clear containers
    topsContainer.innerHTML = "";
    bottomsContainer.innerHTML = "";
    accessoriesContainer.innerHTML = "";

    // Collect items from all selected styles
    let allTops = [];
    let allBottoms = [];
    let allAccessories = [];

    selectedStyles.forEach((styleCheckbox) => {
      const style = styleCheckbox.value;
      const items = styleItems[style] || {};

      if (items.tops)
        allTops = allTops.concat(
          items.tops.map((item) => ({ ...item, style }))
        );
      if (items.bottoms)
        allBottoms = allBottoms.concat(
          items.bottoms.map((item) => ({ ...item, style }))
        );
      if (items.outerwear)
        allAccessories = allAccessories.concat(
          items.outerwear.map((item) => ({ ...item, style }))
        );
      if (items.shoes)
        allAccessories = allAccessories.concat(
          items.shoes.map((item) => ({ ...item, style }))
        );
      if (items.bags)
        allAccessories = allAccessories.concat(
          items.bags.map((item) => ({ ...item, style }))
        );
    });

    // Create GOOD & BAD sections for each column
    createGoodBadSection(topsContainer, allTops, "tops");
    createGoodBadSection(bottomsContainer, allBottoms, "bottoms");
    createGoodBadSection(accessoriesContainer, allAccessories, "accessories");
  }

  function createGoodBadSection(container, items, category) {
    if (items.length === 0) {
      container.innerHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 20px;">
                        このカテゴリーのアイテムはありません
                    </p>
                </div>
            `;
      return;
    }

    // Create GOOD section
    const goodSection = document.createElement("div");
    goodSection.className = "item-good-bad-section";
    goodSection.innerHTML = `
            <span class="good-bad-label">GOOD ✓</span>
            <div class="good-items">
                <div class="item-selection-grid" id="${category}-good-items"></div>
            </div>
        `;

    // Create BAD section
    const badSection = document.createElement("div");
    badSection.className = "item-good-bad-section";
    badSection.innerHTML = `
            <span class="good-bad-label">BAD ✗</span>
            <div class="bad-items">
                <div class="item-selection-grid" id="${category}-bad-items"></div>
            </div>
        `;

    container.appendChild(goodSection);
    container.appendChild(badSection);

    // Populate items (limit to 3 per section for better layout)
    const goodGrid = document.getElementById(`${category}-good-items`);
    const badGrid = document.getElementById(`${category}-bad-items`);

    items.slice(0, 6).forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item-option";
      itemDiv.innerHTML = `
                <label>
                    <input type="checkbox" name="${category}-${
        index < 3 ? "good" : "bad"
      }-items" value="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </label>
            `;

      if (index < 3) {
        goodGrid.appendChild(itemDiv);
      } else {
        badGrid.appendChild(itemDiv);
      }
    });
  }

  function getStyleDisplayName(style) {
    const displayNames = {
      mode: "モード",
      classic: "クラシック",
      minimal: "ミニマル",
      elegant: "エレガント",
      "casual-chic": "カジュアルシック",
      relax: "リラックス",
      "american-casual": "アメリカンカジュアル",
      street: "ストリート",
      conservative: "コンサバティブ",
    };
    return displayNames[style] || style;
  }

  function updateSelectedItemsEvaluation() {
    const selectedItems = document.querySelectorAll(".item-checkbox:checked");
    const evaluationSection = document.getElementById(
      "selectedItemsEvaluation"
    );

    if (selectedItems.length === 0) {
      if (evaluationSection) {
        evaluationSection.remove();
      }
      return;
    }

    // Show evaluation section for selected items
    if (!evaluationSection) {
      const newSection = document.createElement("div");
      newSection.id = "selectedItemsEvaluation";
      newSection.innerHTML = `
                <div class="selected-items-section">
                    <div class="section-header-items">
                        <h3 class="style-section-title">アイテムの評価</h3>
                        <p class="style-section-subtitle">各アイテムについてGOOD/BADを選択し、理由をお選びください</p>
                    </div>
                    <div class="selected-items-evaluation-grid" id="selectedItemsGrid"></div>
                </div>
            `;
      document
        .getElementById("itemEvaluationContainer")
        .appendChild(newSection);
    }

    // Update evaluation grid
    const selectedItemsGrid = document.getElementById("selectedItemsGrid");
    selectedItemsGrid.innerHTML = "";

    selectedItems.forEach((checkbox) => {
      const itemId = checkbox.value;
      const selectedStyle = document.querySelector(
        'input[name="attractiveStyle"]:checked'
      ).value;
      const items = styleItems[selectedStyle] || [];
      const item = items.find((i) => i.id === itemId);

      if (item) {
        const evaluationDiv = document.createElement("div");
        evaluationDiv.className = "item-evaluation-card";
        evaluationDiv.innerHTML = `
                    <div class="item-eval-header">
                        <img src="${item.image}" alt="${item.name}" class="item-eval-image">
                        <h4 class="item-eval-name">${item.name}</h4>
                    </div>
                    <div class="item-eval-body">
                        <div class="good-bad-selection">
                            <label class="good-bad-option">
                                <input type="radio" name="${item.id}_evaluation" value="good">
                                <span class="good-label">GOOD</span>
                            </label>
                            <label class="good-bad-option">
                                <input type="radio" name="${item.id}_evaluation" value="bad">
                                <span class="bad-label">BAD</span>
                            </label>
                        </div>
                        <div class="reason-selection" id="${item.id}_reasons" style="display: none;">
                            <p class="reason-label">理由（複数選択可）:</p>
                            <div class="reason-checkboxes">
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="design">
                                    <span>デザイン</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="color">
                                    <span>色味</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="silhouette">
                                    <span>シルエット</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="material">
                                    <span>素材感</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="price">
                                    <span>価格帯</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="brand">
                                    <span>ブランドイメージ</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="other">
                                    <span>その他</span>
                                </label>
                            </div>
                            <input type="text" name="${item.id}_reason_other"
                                   placeholder="その他の理由（具体的に）"
                                   class="form-input reason-other-input" style="display: none;">
                        </div>
                    </div>
                `;

        selectedItemsGrid.appendChild(evaluationDiv);

        // Add event listeners
        const evalRadios = evaluationDiv.querySelectorAll(
          'input[name="' + item.id + '_evaluation"]'
        );
        const reasonSection = evaluationDiv.querySelector(
          "#" + item.id + "_reasons"
        );

        evalRadios.forEach((radio) => {
          radio.addEventListener("change", function () {
            if (this.checked) {
              reasonSection.style.display = "block";
            }
          });
        });

        // Other reason checkbox
        const otherCheckbox = evaluationDiv.querySelector(
          'input[value="other"]'
        );
        const otherInput = evaluationDiv.querySelector(".reason-other-input");

        if (otherCheckbox && otherInput) {
          otherCheckbox.addEventListener("change", function () {
            otherInput.style.display = this.checked ? "block" : "none";
            if (!this.checked) {
              otherInput.value = "";
            }
          });
        }
      }
    });
  }

  // Listen for style selection changes
  const attractiveStyleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
  attractiveStyleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // Check if maximum 3 styles are selected
      const checkedStyles = document.querySelectorAll(
        'input[name="attractiveStyle"]:checked'
      );
      if (checkedStyles.length > 3 && this.checked) {
        this.checked = false;
        alert("魅力を感じるスタイルは最大3つまで選択できます。");
        return;
      }

      // Get all selected styles
      const selectedStyles = Array.from(checkedStyles)
        .filter((cb) => cb.value !== "other")
        .map((cb) => cb.value);

      // Show pattern selections for all selected styles
      // Disabled - using style-patterns-gender-integrated.js instead
      // showPatternSelections(selectedStyles);
      updateMultipleStyleEvaluations();

      // Handle "other" option
      const otherInput = document.querySelector(
        'input[name="attractiveStyleOther"]'
      );
      if (this.value === "other") {
        otherInput.style.display = this.checked ? "block" : "none";
        if (!this.checked) otherInput.value = "";
      }
    });
  });

  // New function to handle multiple style selections
  function updateMultipleStyleEvaluations() {
    const itemEvaluationContainer = document.getElementById(
      "itemEvaluationContainer"
    );

    if (!itemEvaluationContainer) {
      return;
    }

    const selectedStyles = Array.from(attractiveStyleCheckboxes)
      .filter((cb) => cb.checked && cb.value !== "other")
      .map((cb) => cb.value);

    if (selectedStyles.length === 0) {
      itemEvaluationContainer.innerHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 40px;">
                        魅力を感じるスタイルを選択すると、各スタイルごとにアイテム評価が表示されます。
                    </p>
                </div>
            `;
      return;
    }

    // Clear container and create evaluation sections for each selected style
    itemEvaluationContainer.innerHTML = "";

    selectedStyles.forEach((style, index) => {
      const styleSection = document.createElement("div");
      styleSection.className = "style-evaluation-section";
      styleSection.id = `style-evaluation-${style}`;

      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "style-evaluation-title";
      sectionTitle.innerHTML = `${getStyleDisplayName(
        style
      )}スタイル - アイテム評価`;
      styleSection.appendChild(sectionTitle);

      const evaluationContent = document.createElement("div");
      evaluationContent.className = "style-evaluation-content";
      evaluationContent.id = `evaluation-content-${style}`;
      styleSection.appendChild(evaluationContent);

      itemEvaluationContainer.appendChild(styleSection);

      // Create item evaluation for this style
      createStyleItemEvaluation(style, evaluationContent);
    });
  }

  // Create item evaluation for a specific style
  function createStyleItemEvaluation(style, container) {
    const styleCategories = styleItems[style] || {};

    container.innerHTML = "";

    // Create evaluation sections for each category
    const categories = [
      { key: "tops", name: "トップス" },
      { key: "bottoms", name: "ボトムス" },
      { key: "outerwear", name: "アウター" },
      { key: "shoes", name: "シューズ" },
      { key: "bags", name: "バッグ" },
    ];

    categories.forEach((category) => {
      const categoryItems = styleCategories[category.key] || [];
      if (categoryItems.length === 0) return;

      const categorySection = document.createElement("div");
      categorySection.className = "category-evaluation-section";
      categorySection.innerHTML = `
                <h4 class="category-title">${category.name}</h4>
                <div class="category-items-grid" id="${style}-${category.key}-grid"></div>
            `;
      container.appendChild(categorySection);

      const itemsGrid = categorySection.querySelector(
        `#${style}-${category.key}-grid`
      );

      // Show items for this category
      categoryItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-evaluation-card-enhanced";
        itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="item-eval-image">
                    <h4 class="item-eval-name">${item.name}</h4>
                    <div class="good-bad-selection">
                        <label class="good-bad-option">
                            <input type="radio" name="${style}_${item.id}_evaluation" value="good">
                            <span class="good-label">GOOD</span>
                        </label>
                        <label class="good-bad-option">
                            <input type="radio" name="${style}_${item.id}_evaluation" value="bad">
                            <span class="bad-label">BAD</span>
                        </label>
                    </div>
                    <div class="reason-selection" id="${style}_${item.id}_reasons" style="display: none;">
                        <p class="reason-label">理由（複数選択可）:</p>
                        <div class="reason-checkboxes">
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="design">
                                <span>デザイン</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="color">
                                <span>色味</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="silhouette">
                                <span>シルエット</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="material">
                                <span>素材感</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="price">
                                <span>価格帯</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="brand">
                                <span>ブランドイメージ</span>
                            </label>
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${style}_${item.id}_reason" value="other">
                                <span>その他</span>
                            </label>
                        </div>
                        <input type="text" name="${style}_${item.id}_reason_other"
                              placeholder="その他の理由（具体的に）"
                              class="form-input reason-other-input" style="display: none;">
                    </div>
                `;

        itemsGrid.appendChild(itemDiv);

        // Add event listeners
        const evalRadios = itemDiv.querySelectorAll(
          `input[name="${style}_${item.id}_evaluation"]`
        );
        const reasonSection = itemDiv.querySelector(
          `#${style}_${item.id}_reasons`
        );

        evalRadios.forEach((radio) => {
          radio.addEventListener("change", function () {
            if (this.checked) {
              reasonSection.style.display = "block";
            }
          });
        });

        // Other reason checkbox
        const otherCheckbox = itemDiv.querySelector(
          `input[name="${style}_${item.id}_reason"][value="other"]`
        );
        const otherInput = itemDiv.querySelector(
          `input[name="${style}_${item.id}_reason_other"]`
        );

        if (otherCheckbox && otherInput) {
          otherCheckbox.addEventListener("change", function () {
            otherInput.style.display = this.checked ? "block" : "none";
            if (!this.checked) {
              otherInput.value = "";
            }
          });
        }
      }); // End of categoryItems.forEach
    }); // End of categories.forEach
  } // End of createStyleItemEvaluation function

  // Add toggle functionality for style variations
  const variationToggle = document.getElementById("variationToggle");
  const variationContent = document.getElementById("variationContent");

  if (variationToggle && variationContent) {
    variationToggle.addEventListener("click", function () {
      this.classList.toggle("collapsed");
      variationContent.classList.toggle("collapsed");
    });
  }

  // Handle 'other' style option
  function setupOtherStyleCheckbox() {
    const otherStyleCheckbox = document.querySelector(
      'input[name="attractiveStyle"][value="other"]'
    );
    const otherStyleInput = document.querySelector(
      'input[name="attractiveStyleOther"]'
    );

    if (otherStyleCheckbox && otherStyleInput) {
      otherStyleCheckbox.addEventListener("change", function () {
        if (this.checked) {
          otherStyleInput.style.display = "block";
        } else {
          otherStyleInput.style.display = "none";
          otherStyleInput.value = "";
        }
      });
    }
  }

  // Weekly Overview Table Functionality
  function initializeWeeklyOverview() {
    const weekDays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    function updateWeeklyRatios() {
      let workCount = 0;
      let restCount = 0;
      let noBoundaryCount = 0;
      let totalSelected = 0;

      weekDays.forEach((day) => {
        const selectedOption = document.querySelector(
          `input[name="${day}_schedule"]:checked`
        );
        if (selectedOption) {
          totalSelected++;
          switch (selectedOption.value) {
            case "work":
              workCount++;
              break;
            case "rest":
              restCount++;
              break;
            case "no-boundary":
              noBoundaryCount++;
              break;
          }
        }
      });

      // Calculate days
      const workDays = workCount;
      const restDays = restCount;
      const noBoundaryDays = noBoundaryCount;

      // Update display
      const workRatioElement = document.getElementById("workRatio");
      const restRatioElement = document.getElementById("restRatio");
      const noBoundaryRatioElement = document.getElementById("noBoundaryRatio");

      if (workRatioElement) {
        workRatioElement.textContent = `${workDays}日`;
        // Add animation class for female form
        if (document.body.classList.contains("female-form")) {
          workRatioElement.classList.add("updated");
          setTimeout(() => workRatioElement.classList.remove("updated"), 300);
        }
      }
      if (restRatioElement) {
        restRatioElement.textContent = `${restDays}日`;
        // Add animation class for female form
        if (document.body.classList.contains("female-form")) {
          restRatioElement.classList.add("updated");
          setTimeout(() => restRatioElement.classList.remove("updated"), 300);
        }
      }
      if (noBoundaryRatioElement) {
        noBoundaryRatioElement.textContent = `${noBoundaryDays}日`;
        // Add animation class for female form
        if (document.body.classList.contains("female-form")) {
          noBoundaryRatioElement.classList.add("updated");
          setTimeout(
            () => noBoundaryRatioElement.classList.remove("updated"),
            300
          );
        }
      }

      // Add visual bar representation
      const workRatio =
        totalSelected > 0 ? Math.round((workCount / 7) * 100) : 0;
      const restRatio =
        totalSelected > 0 ? Math.round((restCount / 7) * 100) : 0;
      const noBoundaryRatio =
        totalSelected > 0 ? Math.round((noBoundaryCount / 7) * 100) : 0;
      updateRatioBars(workRatio, restRatio, noBoundaryRatio);
    }

    function updateRatioBars(work, rest, noBoundary) {
      const ratioSummary = document.getElementById("weeklyRatioSummary");
      if (!ratioSummary) return;

      // Add progress bars if they don't exist
      const workItem = ratioSummary.querySelector(".work-ratio");
      const restItem = ratioSummary.querySelector(".rest-ratio");
      const noBoundaryItem = ratioSummary.querySelector(".no-boundary-ratio");

      [workItem, restItem, noBoundaryItem].forEach((item, index) => {
        if (item && !item.querySelector(".ratio-bar")) {
          const bar = document.createElement("div");
          bar.className = "ratio-bar";
          bar.innerHTML = '<div class="ratio-bar-fill"></div>';
          item.appendChild(bar);
        }
      });

      // Update bar widths with animation
      if (workItem) {
        const fill = workItem.querySelector(".ratio-bar-fill");
        if (fill) {
          fill.style.width = `${work}%`;
          fill.style.transition = "width 0.3s ease";
        }
      }
      if (restItem) {
        const fill = restItem.querySelector(".ratio-bar-fill");
        if (fill) {
          fill.style.width = `${rest}%`;
          fill.style.transition = "width 0.3s ease";
        }
      }
      if (noBoundaryItem) {
        const fill = noBoundaryItem.querySelector(".ratio-bar-fill");
        if (fill) {
          fill.style.width = `${noBoundary}%`;
          fill.style.transition = "width 0.3s ease";
        }
      }
    }

    // Add event listeners to all day schedule radios with proper event delegation
    weekDays.forEach((day) => {
      const radios = document.querySelectorAll(`input[name="${day}_schedule"]`);

      radios.forEach((radio) => {
        radio.addEventListener("change", function () {
          updateWeeklyRatios();
        });
        // Also trigger on click for better responsiveness
        radio.addEventListener("click", function () {
          if (this.checked) {
            updateWeeklyRatios();
          }
        });
      });
    });

    // Initialize ratios
    updateWeeklyRatios();

    // Make updateWeeklyRatios globally accessible
    window.updateWeeklyRatios = updateWeeklyRatios;

    // Re-initialize when switching between male/female forms
    document.addEventListener("change", function (e) {
      if (e.target.name === "formGender") {
        setTimeout(() => {
          updateWeeklyRatios();
        }, 100);
      }
    });

    // Add debugging for female form
    if (window.location.href.includes("debug=true")) {
      // Debug mode enabled
    }

    // Make updateWeeklyRatios available globally for debugging
    window.updateWeeklyRatios = updateWeeklyRatios;
  }

  // Budget Selection Functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Item Budget Range Selection
    const budgetRangeSelectors = document.querySelectorAll(
      ".budget-range-selector"
    );

    budgetRangeSelectors.forEach((selector) => {
      const options = selector.querySelectorAll(".budget-range-option");
      const hiddenInput = selector.querySelector('input[type="hidden"]');

      options.forEach((option) => {
        option.addEventListener("click", function () {
          // Remove selected class from siblings
          options.forEach((opt) => opt.classList.remove("selected"));
          // Add selected class to clicked option
          this.classList.add("selected");
          // Update hidden input value
          if (hiddenInput) {
            hiddenInput.value = this.dataset.value;
          }
        });
      });
    });

    // Season Budget Card Selection
    const budgetSelector = document.querySelector(".season-budget-selector");
    const budgetCards = budgetSelector
      ? budgetSelector.querySelectorAll(".budget-card")
      : [];
    const seasonBudgetInput = document.getElementById("seasonBudget");
    const customBudgetSection = document.querySelector(".custom-budget-input");
    const customBudgetInput = document.getElementById("customBudgetInput");
    const customBudgetMonthly = document.getElementById("customBudgetMonthly");

    budgetCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Remove active class from all cards
        budgetCards.forEach((c) => c.classList.remove("active"));
        // Add active class to clicked card
        this.classList.add("active");

        const amount = this.dataset.amount;

        if (amount === "custom") {
          // Show custom input section
          customBudgetSection.style.display = "block";
          customBudgetInput.focus();
        } else {
          // Hide custom input section
          customBudgetSection.style.display = "none";
          // Update hidden input value
          seasonBudgetInput.value = amount;
        }
      });
    });

    // Custom budget input handling
    if (customBudgetInput) {
      customBudgetInput.addEventListener("input", function () {
        const value = parseInt(this.value) || 0;
        if (value >= 100000) {
          seasonBudgetInput.value = value;
          const monthly = Math.round(value / 3);
          customBudgetMonthly.textContent =
            "月額: " + monthly.toLocaleString() + "円";
        } else {
          customBudgetMonthly.textContent = "";
        }
      });
    }

    // Weekly Schedule Enhanced Functionality
    initializeWeeklySchedule();

    // Weekly Overview Table Functionality
    initializeWeeklyOverview();

    // Force update weekly ratios after initialization
    setTimeout(() => {
      if (window.updateWeeklyRatios) {
        window.updateWeeklyRatios();
      }
    }, 100);

    // Initialize Budget Selection
    initializeBudgetSelection();

    // Initialize Corporate Information Toggle
    initializeCorporateToggle();

    // Initialize Wanted Items Functionality
    initializeWantedItems();

    // Initialize Travel Destinations Functionality
    initializeTravelDestinations();
  });

  // Weekly Schedule Functionality
  function initializeWeeklySchedule() {
    const dailyCards = document.querySelectorAll(".daily-card");
    const dailyDetailsSection = document.getElementById("dailyDetailsSection");
    const dailyDetailsGrid = document.getElementById("dailyDetailsGrid");
    const weeklySummary = document.getElementById("weeklySummary");

    let weeklyData = {};

    // Day names mapping
    const dayNames = {
      monday: "月曜日",
      tuesday: "火曜日",
      wednesday: "水曜日",
      thursday: "木曜日",
      friday: "金曜日",
      saturday: "土曜日",
      sunday: "日曜日",
    };

    // Scene options for different types
    const sceneOptions = {
      work: {
        title: "ビジネスシーン",
        options: [
          {
            id: "internal-meeting",
            name: "社内会議",
            image: "images/scene-internal-meeting.webp",
          },
          {
            id: "external-meeting",
            name: "外部商談",
            image: "images/scene-external-meeting.webp",
          },
          {
            id: "business-dining",
            name: "接待・会食",
            image: "images/scene-business-dining.webp",
          },
          {
            id: "presentation",
            name: "プレゼンテーション",
            image: "images/scene-presentation.webp",
          },
        ],
      },
      rest: {
        title: "プライベートシーン",
        options: [
          {
            id: "family-time",
            name: "家族と過ごす",
            image: "images/lifestyle-family.webp",
          },
          { id: "dating", name: "デート", image: "images/lifestyle-date.webp" },
          {
            id: "friends",
            name: "友人と会う",
            image: "images/lifestyle-friends.webp",
          },
          {
            id: "solo-time",
            name: "一人の時間",
            image: "images/lifestyle-solo.webp",
          },
        ],
      },
      "no-boundary": {
        title: "カジュアルビジネスシーン",
        options: [
          {
            id: "casual-meeting",
            name: "カジュアル会議",
            image: "images/scene-casual-meeting.webp",
          },
          {
            id: "coworking",
            name: "コワーキング",
            image: "images/scene-coworking.webp",
          },
          {
            id: "networking",
            name: "ネットワーキング",
            image: "images/scene-networking.webp",
          },
          {
            id: "creative-work",
            name: "クリエイティブワーク",
            image: "images/scene-creative.webp",
          },
        ],
      },
    };

    // Add event listeners to all day option cards
    dailyCards.forEach((card) => {
      const dayOptions = card.querySelectorAll(
        '.day-option-card input[type="radio"]'
      );
      const dayName = dayOptions[0]?.name; // Get day name from radio name

      dayOptions.forEach((option) => {
        option.addEventListener("change", function () {
          if (this.checked) {
            weeklyData[dayName] = {
              type: this.value,
              day: dayNames[dayName],
            };
            updateDayPreview(dayName, this.value);
            updateWeeklySummary();
            showDailyDetailsIfNeeded();
          }
        });
      });
    });

    function updateDayPreview(dayName, type) {
      const preview = document.getElementById(dayName + "Preview");
      if (preview) {
        const typeLabels = {
          work: "ビジネススタイル予定",
          rest: "リラックススタイル予定",
          "no-boundary": "カジュアルビジネス予定",
        };
        preview.textContent = typeLabels[type] || "";
      }
    }

    function updateWeeklySummary() {
      const selectedDays = Object.keys(weeklyData);
      if (selectedDays.length === 0) {
        weeklySummary.querySelector(".summary-text").textContent =
          "各曜日を選択すると、週間コーディネートのバランスが表示されます";
        return;
      }

      const workDays = selectedDays.filter(
        (day) => weeklyData[day].type === "work"
      ).length;
      const restDays = selectedDays.filter(
        (day) => weeklyData[day].type === "rest"
      ).length;
      const noBoundaryDays = selectedDays.filter(
        (day) => weeklyData[day].type === "no-boundary"
      ).length;

      let summaryText = `選択済み: ${selectedDays.length}/7日 | `;
      if (workDays > 0) summaryText += `ビジネス: ${workDays}日 `;
      if (restDays > 0) summaryText += `プライベート: ${restDays}日 `;
      if (noBoundaryDays > 0)
        summaryText += `カジュアルビジネス: ${noBoundaryDays}日`;

      weeklySummary.querySelector(".summary-text").textContent = summaryText;
    }

    function showDailyDetailsIfNeeded() {
      const selectedDays = Object.keys(weeklyData);
      if (selectedDays.length > 0) {
        dailyDetailsSection.style.display = "block";
        updateDailyDetailsGrid();
      }
    }

    function updateDailyDetailsGrid() {
      dailyDetailsGrid.innerHTML = "";

      Object.entries(weeklyData).forEach(([dayName, data]) => {
        const dayCard = document.createElement("div");
        dayCard.className = "daily-detail-card";

        const scenes = sceneOptions[data.type];

        dayCard.innerHTML = `
                <div class="daily-detail-header">
                    <h4 class="daily-detail-day">${data.day}</h4>
                    <p class="daily-detail-type">${scenes.title}</p>
                </div>
                <div class="daily-detail-content">
                    <div class="detail-section">
                        <h5 class="detail-section-title">主なシーン</h5>
                        <div class="detail-options-grid">
                            ${scenes.options
                              .map(
                                (option) => `
                                <div class="detail-option-card">
                                    <input type="checkbox" name="${dayName}Scenes" value="${option.id}" id="${dayName}-${option.id}">
                                    <label for="${dayName}-${option.id}">
                                        <img src="${option.image}" alt="${option.name}">
                                        <span>${option.name}</span>
                                    </label>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;

        dailyDetailsGrid.appendChild(dayCard);
      });
    }
  }

  // Style Preference Evaluation - Enhanced UI
  function initializeStyleEvaluationUI() {
    // Handle scale selection and gradient bar updates
    const scaleOptions = document.querySelectorAll(
      '.scale-option input[type="radio"]'
    );
    scaleOptions.forEach((radio) => {
      radio.addEventListener("change", function () {
        const evaluation = this.closest(".style-evaluation-item");
        const gradientFill = evaluation.querySelector(".gradient-fill");
        const styleName = this.name.replace("Scale", "");

        if (gradientFill) {
          const value = parseInt(this.value);
          const percentage = ((value - 1) / 4) * 100; // Convert 1-5 scale to 0-100%
          gradientFill.style.width = `${percentage}%`;
        }

        // Show item selection if score is 4 or 5 (liked styles)
        const value = parseInt(this.value);
        if (value >= 4) {
          showStyleItemSelection(styleName, value);
        } else {
          hideStyleItemSelection(styleName);
        }
      });
    });

    // Initialize any pre-selected values
    scaleOptions.forEach((radio) => {
      if (radio.checked) {
        radio.dispatchEvent(new Event("change"));
      }
    });
  }

  // Show item selection for liked styles
  function showStyleItemSelection(styleName, preferenceLevel) {
    const evaluationItem = document
      .querySelector(`input[name="${styleName}Scale"]:checked`)
      .closest(".style-evaluation-item");
    let itemSelectionDiv = evaluationItem.querySelector(
      ".style-item-selection"
    );

    if (!itemSelectionDiv) {
      itemSelectionDiv = document.createElement("div");
      itemSelectionDiv.className = "style-item-selection";
      evaluationItem
        .querySelector(".evaluation-content")
        .appendChild(itemSelectionDiv);
    }

    // Create item selection based on style
    const items = getStyleItems(styleName);
    itemSelectionDiv.innerHTML = `
            <div class="item-selection-header">
                <h5>このスタイルで気になるアイテムを選択してください（複数選択可）</h5>
                <p class="item-selection-hint">好みの度合い: ${
                  preferenceLevel === 5 ? "とても好み" : "やや好み"
                }</p>
            </div>
            <div class="style-items-selection-grid">
                ${items
                  .map(
                    (item) => `
                    <label class="style-item-option">
                        <input type="checkbox" name="${styleName}Items" value="${item.id}">
                        <div class="item-option-content">
                            <img src="${item.image}" alt="${item.name}">
                            <span>${item.name}</span>
                        </div>
                    </label>
                `
                  )
                  .join("")}
            </div>
        `;

    itemSelectionDiv.style.display = "block";
    itemSelectionDiv.classList.add("fade-in");
  }

  // Hide item selection
  function hideStyleItemSelection(styleName) {
    const evaluationItem = document
      .querySelector(`input[name="${styleName}Scale"]`)
      .closest(".style-evaluation-item");
    const itemSelectionDiv = evaluationItem.querySelector(
      ".style-item-selection"
    );
    if (itemSelectionDiv) {
      itemSelectionDiv.style.display = "none";
    }
  }

  // Get style-specific items
  function getStyleItems(styleName) {
    const styleItemsMap = {
      mode: [
        {
          id: "mode-jacket",
          name: "モードジャケット",
          image: "images/item-jacket1.webp",
        },
        {
          id: "mode-pants",
          name: "デザイナーズパンツ",
          image: "images/item-pants1.webp",
        },
        {
          id: "mode-shoes",
          name: "レザーブーツ",
          image: "images/item-shoes1.webp",
        },
        {
          id: "mode-bag",
          name: "ジオメトリックバッグ",
          image: "images/item-bag1.webp",
        },
      ],
      classic: [
        {
          id: "classic-jacket",
          name: "テーラードジャケット",
          image: "images/item-jacket2.webp",
        },
        {
          id: "classic-pants",
          name: "ウールトラウザーズ",
          image: "images/item-pants2.webp",
        },
        {
          id: "classic-shoes",
          name: "レザーシューズ",
          image: "images/item-shoes2.webp",
        },
        {
          id: "classic-bag",
          name: "ブリーフケース",
          image: "images/item-bag2.webp",
        },
      ],
      natural: [
        {
          id: "natural-shirt",
          name: "リネンシャツ",
          image: "images/item-shirt1.webp",
        },
        {
          id: "natural-pants",
          name: "コットンパンツ",
          image: "images/item-pants1.webp",
        },
        {
          id: "natural-shoes",
          name: "スリッポン",
          image: "images/item-shoes1.webp",
        },
        {
          id: "natural-bag",
          name: "キャンバストート",
          image: "images/item-bag1.webp",
        },
      ],
    };

    return styleItemsMap[styleName] || [];
  }

  // Initialize employee toggle functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Employee toggle functionality
    const employeeToggleBtns = document.querySelectorAll(
      ".employee-toggle-btn"
    );
    const detailOptions = document.querySelectorAll(".detail-options");
    const selectedEmployeeSizeInput = document.getElementById(
      "selectedEmployeeSize"
    );

    employeeToggleBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        employeeToggleBtns.forEach((b) => b.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        // Hide all detail options
        detailOptions.forEach((opt) => opt.classList.remove("active"));

        // Show corresponding detail options
        const size = this.getAttribute("data-size");
        const targetOptions = document.querySelector(`.${size}-options`);
        if (targetOptions) {
          targetOptions.classList.add("active");
          // Select first option in the group
          const firstRadio = targetOptions.querySelector('input[type="radio"]');
          if (firstRadio) {
            firstRadio.checked = true;
            selectedEmployeeSizeInput.value = firstRadio.value;
          }
        }
      });
    });

    // Update hidden input when radio selection changes
    document.querySelectorAll('input[name="employees"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        if (this.checked) {
          selectedEmployeeSizeInput.value = this.value;
        }
      });
    });
  });

  // Setup conditional sections
  function setupConditionalSections() {
    // Partner service conditional
    const partnerServiceRadios = document.querySelectorAll(
      'input[name="partnerService"]'
    );
    const partnerFittingTime = document.getElementById("partnerFittingTime");

    partnerServiceRadios.forEach((radio) => {
      radio.addEventListener("change", function () {
        if (partnerFittingTime) {
          if (this.value === "yes") {
            partnerFittingTime.style.display = "block";
          } else {
            partnerFittingTime.style.display = "none";
          }
        }
      });
    });

    // Present service conditional
    const presentServiceRadios = document.querySelectorAll(
      'input[name="presentService"]'
    );
    const presentFrequency = document.getElementById("presentFrequency");

    presentServiceRadios.forEach((radio) => {
      radio.addEventListener("change", function () {
        if (presentFrequency) {
          if (this.value === "yes") {
            presentFrequency.style.display = "block";
          } else {
            presentFrequency.style.display = "none";
          }
        }
      });
    });

    // Travel destination conditional details
    const destinationHeaders = document.querySelectorAll(
      '.destination-header input[type="checkbox"]'
    );

    destinationHeaders.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const details = this.closest(".destination-item").querySelector(
          ".destination-details"
        );
        if (this.checked) {
          details.style.display = "block";
        } else {
          details.style.display = "none";
        }
      });
    });
  }
  // Removed initializeSceneFrequency function - no longer using frequency buttons

  // Initialize weekday lifestyle sub-options functionality
  function initializeWeekdayLifestyleOptions() {
    // Handle weekday lifestyle checkboxes
    const weekdayCheckboxes = document.querySelectorAll(
      'input[name="weekdayLifestyle"]'
    );

    weekdayCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Find the parent card
        const parentCard = this.closest(".weekday-lifestyle-card");
        if (!parentCard) return;

        // Find sub-options within the same card
        const subOptions = parentCard.querySelector(".sub-options");
        if (subOptions) {
          subOptions.style.display = this.checked ? "block" : "none";

          // If unchecking, clear the text input
          if (!this.checked) {
            const textInput = subOptions.querySelector('input[type="text"]');
            if (textInput) textInput.value = "";

            // Uncheck all sub-checkboxes
            const subCheckboxes = subOptions.querySelectorAll(
              'input[type="checkbox"]'
            );
            subCheckboxes.forEach((cb) => (cb.checked = false));
          }
        }
      });
    });

    // Handle "その他" (Other) checkboxes for meeting people
    const meetingPeopleGroups = [
      {
        checkboxName: "externalMeetingPeople",
        inputName: "externalMeetingOther",
      },
      {
        checkboxName: "internalMeetingPeople",
        inputName: "internalMeetingOther",
      },
      { checkboxName: "deskMeetingPeople", inputName: "deskMeetingOther" },
      { checkboxName: "hybridMeetingPeople", inputName: "hybridMeetingOther" },
      { checkboxName: "homeMeetingPeople", inputName: "homeMeetingOther" },
      {
        checkboxName: "otherMeetingPeople",
        inputName: "otherMeetingOtherDetail",
      },
    ];

    meetingPeopleGroups.forEach((group) => {
      const otherCheckbox = document.querySelector(
        `input[name="${group.checkboxName}"][value="other"]`
      );
      const otherInput = document.querySelector(
        `input[name="${group.inputName}"]`
      );

      if (otherCheckbox && otherInput) {
        otherCheckbox.addEventListener("change", function () {
          otherInput.style.display = this.checked ? "block" : "none";
          if (!this.checked) {
            otherInput.value = ""; // Clear the input when unchecked
          }
        });
      }
    });
  }

  // Budget Selection Functionality
  function initializeBudgetSelection() {
    // Handle item checkbox selection
    const itemCheckboxes = document.querySelectorAll(".item-checkbox-main");

    itemCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const itemType = this.value;
        const budgetSelector = this.closest(
          ".clothing-item-enhanced"
        ).querySelector(".item-budget-selector");

        if (this.checked) {
          budgetSelector.style.display = "block";
          // Animate in
          setTimeout(() => {
            budgetSelector.classList.add("show");
          }, 10);
        } else {
          budgetSelector.classList.remove("show");
          setTimeout(() => {
            budgetSelector.style.display = "none";
          }, 300);
          // Clear selections
          const budgetCheckboxes = budgetSelector.querySelectorAll(
            'input[type="checkbox"]'
          );
          budgetCheckboxes.forEach((cb) => (cb.checked = false));
          updateBudgetCount(budgetSelector);
        }
      });
    });

    // Handle budget checkbox selection
    const budgetCheckboxes = document.querySelectorAll(
      '.budget-option-card input[type="checkbox"]'
    );

    budgetCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const budgetSelector = this.closest(".item-budget-selector");
        updateBudgetCount(budgetSelector);
      });
    });

    // Update budget count display
    function updateBudgetCount(budgetSelector) {
      const checkedBoxes = budgetSelector.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      const countDisplay = budgetSelector.querySelector(
        ".selected-budgets-count"
      );
      if (countDisplay) {
        countDisplay.textContent = checkedBoxes.length;
        countDisplay.style.display =
          checkedBoxes.length > 0 ? "inline-block" : "none";
      }
    }
  }

  // Travel Destinations Functionality
  function initializeTravelDestinations() {
    const travelCards = document.querySelectorAll(".travel-destination-card");

    travelCards.forEach((card) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      const specifications = card.querySelector(".clothing-specifications");

      if (checkbox && specifications) {
        checkbox.addEventListener("change", function () {
          specifications.style.display = this.checked ? "block" : "none";
        });
      }
    });
  }

  // Photo Upload Functionality (for both face and body photos)
  function initializePhotoUpload(photoType) {
    const fileInput = document.getElementById(`${photoType}PhotoInput`);
    const photoImg = document.getElementById(`${photoType}PhotoImg`);
    const placeholder = document.getElementById(`${photoType}PhotoPlaceholder`);
    const removeBtn = document.getElementById(`${photoType}PhotoRemove`);

    if (!fileInput || !photoImg || !placeholder || !removeBtn) return;

    // Handle file selection
    fileInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (e) {
          photoImg.src = e.target.result;
          photoImg.style.display = "block";
          placeholder.style.display = "none";
          removeBtn.style.display = "inline-block";
        };

        reader.readAsDataURL(file);
      }
    });

    // Handle photo removal
    removeBtn.addEventListener("click", function () {
      photoImg.src = "";
      photoImg.style.display = "none";
      placeholder.style.display = "flex";
      removeBtn.style.display = "none";
      fileInput.value = "";
    });
  }

  // Initialize both face and body photo uploads
  function initializeFacePhotoUpload() {
    initializePhotoUpload('face');
    initializePhotoUpload('body');
  }

  // Add initialization to DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    initializeWeekdayLifestyleOptions();
    initializePostalCode();
    initializeTravelDestinations();
    initializeFacePhotoUpload();
    // initializePatternSelection_DISABLED(); // Commented out - using existing implementation
  });

  // Corporate Information Toggle
  function initializeCorporateToggle() {
    const corporateCheckbox = document.getElementById("isCorporate");
    const corporateContent = document.getElementById("corporateInfoContent");

    if (corporateCheckbox && corporateContent) {
      corporateCheckbox.addEventListener("change", function () {
        if (this.checked) {
          corporateContent.style.display = "block";
          // Make corporate fields required
          corporateContent
            .querySelectorAll("input[required], select[required]")
            .forEach((field) => {
              field.setAttribute("data-required", "true");
            });
        } else {
          corporateContent.style.display = "none";
          // Remove required from corporate fields
          corporateContent
            .querySelectorAll('[data-required="true"]')
            .forEach((field) => {
              field.removeAttribute("required");
            });
        }
      });
    }
  }

  // Birth Date Selector Toggle Implementation
  function initializeBirthDateSelector() {
    const birthdateToggle = document.getElementById("birthdateToggle");
    const birthdateDisplay = document.getElementById("birthdateDisplay");
    const birthdateDropdown = document.getElementById("birthdateDropdown");
    const yearScroll = document.getElementById("yearScroll");
    const monthGrid = document.getElementById("monthGrid");
    const dayGrid = document.getElementById("dayGrid");
    const birthYearInput = document.getElementById("birthYear");
    const birthMonthInput = document.getElementById("birthMonth");
    const birthDayInput = document.getElementById("birthDay");
    const ageDisplayInline = document.getElementById("ageDisplayInline");
    const toggleIcon = document.querySelector(".toggle-icon");

    if (!birthdateToggle || !birthdateDropdown) {
      return;
    }

    let selectedYear = null;
    let selectedMonth = null;
    let selectedDay = null;

    // Initialize years
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1940; year--) {
      const yearItem = document.createElement("div");
      yearItem.className = "year-item";
      yearItem.textContent = `${year}年`;
      yearItem.dataset.year = year;
      yearScroll.appendChild(yearItem);
    }

    // Initialize months
    const monthNames = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ];
    monthNames.forEach((month, index) => {
      const monthItem = document.createElement("div");
      monthItem.className = "month-item";
      monthItem.textContent = month;
      monthItem.dataset.month = index + 1;
      monthGrid.appendChild(monthItem);
    });

    // Update days based on selected year and month
    function updateDays() {
      dayGrid.innerHTML = "";
      if (!selectedYear || !selectedMonth) return;

      const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const dayItem = document.createElement("div");
        dayItem.className = "day-item";
        dayItem.textContent = day;
        dayItem.dataset.day = day;
        if (selectedDay === day) {
          dayItem.classList.add("selected");
        }
        dayGrid.appendChild(dayItem);
      }
    }

    // Calculate age
    function calculateAge() {
      if (selectedYear && selectedMonth && selectedDay) {
        const birthDate = new Date(
          selectedYear,
          selectedMonth - 1,
          selectedDay
        );
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        return age;
      }
      return null;
    }

    // Toggle dropdown
    birthdateToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = birthdateDropdown.style.display === "block";
      birthdateDropdown.style.display = isOpen ? "none" : "block";
      if (toggleIcon) {
        toggleIcon.textContent = isOpen ? "▼" : "▲";
        toggleIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      }
      birthdateToggle.classList.toggle("active", !isOpen);
      if (!isOpen) {
        updateDays();
      }
    });

    // Year selection
    yearScroll.addEventListener("click", function (e) {
      if (e.target.classList.contains("year-item")) {
        document
          .querySelectorAll(".year-item")
          .forEach((item) => item.classList.remove("selected"));
        e.target.classList.add("selected");
        selectedYear = parseInt(e.target.dataset.year);
        updateDays();
        checkAndUpdateDate();
      }
    });

    // Month selection
    monthGrid.addEventListener("click", function (e) {
      if (e.target.classList.contains("month-item")) {
        document
          .querySelectorAll(".month-item")
          .forEach((item) => item.classList.remove("selected"));
        e.target.classList.add("selected");
        selectedMonth = parseInt(e.target.dataset.month);
        updateDays();
        checkAndUpdateDate();
      }
    });

    // Day selection
    dayGrid.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("day-item") &&
        !e.target.classList.contains("disabled")
      ) {
        document
          .querySelectorAll(".day-item")
          .forEach((item) => item.classList.remove("selected"));
        e.target.classList.add("selected");
        selectedDay = parseInt(e.target.dataset.day);
        checkAndUpdateDate();
      }
    });

    // Auto-update when all values are selected
    function checkAndUpdateDate() {
      if (selectedYear && selectedMonth && selectedDay) {
        // Update hidden inputs
        birthYearInput.value = selectedYear;
        birthMonthInput.value = selectedMonth;
        birthDayInput.value = selectedDay;

        // Update display
        const dateStr = `${selectedYear}年${selectedMonth}月${selectedDay}日`;
        birthdateDisplay.querySelector(".birthdate-placeholder").textContent =
          dateStr;
        birthdateDisplay.classList.add("has-value");

        // Update age display
        const age = calculateAge();
        if (age !== null) {
          ageDisplayInline.textContent = `(${age}歳)`;
          ageDisplayInline.style.display = "inline";
        }
      }
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !birthdateToggle.contains(e.target) &&
        !birthdateDropdown.contains(e.target) &&
        birthdateDropdown.style.display === "block"
      ) {
        birthdateDropdown.style.display = "none";
        toggleIcon.textContent = "▼";
        toggleIcon.style.transform = "rotate(0deg)";
        birthdateToggle.classList.remove("active");
      }
    });
  }

  // Wanted Items Functionality
  function initializeWantedItems() {
    const wantedItemCards = document.querySelectorAll(".wanted-item-card");

    wantedItemCards.forEach((card) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      const quantityInput = card.querySelector(".quantity-input");
      const minusBtn = card.querySelector(".qty-minus");
      const plusBtn = card.querySelector(".qty-plus");

      // Handle checkbox change
      checkbox.addEventListener("change", function () {
        if (this.checked && quantityInput.value == 0) {
          quantityInput.value = 1;
        } else if (!this.checked) {
          quantityInput.value = 0;
        }
      });

      // Handle quantity buttons
      minusBtn.addEventListener("click", function () {
        let value = parseInt(quantityInput.value) || 0;
        if (value > 0) {
          quantityInput.value = value - 1;
          if (quantityInput.value == 0) {
            checkbox.checked = false;
          }
        }
      });

      plusBtn.addEventListener("click", function () {
        let value = parseInt(quantityInput.value) || 0;
        if (value < 10) {
          quantityInput.value = value + 1;
          checkbox.checked = true;
        }
      });

      // Handle direct input
      quantityInput.addEventListener("change", function () {
        let value = parseInt(this.value) || 0;
        if (value < 0) value = 0;
        if (value > 10) value = 10;
        this.value = value;
        checkbox.checked = value > 0;
      });
    });
  }

  // Initialize travel destinations sub-options
  function initializeTravelDestinations() {
    // Get all travel checkboxes
    const travelCheckboxes = document.querySelectorAll(
      '.travel-option-group input[type="checkbox"]'
    );

    travelCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const optionGroup = this.closest(".travel-option-group");
        const subOptions = optionGroup.querySelector(".sub-options");

        if (subOptions) {
          if (this.checked) {
            subOptions.style.display = "block";
            // Animate the appearance
            subOptions.style.opacity = "0";
            setTimeout(() => {
              subOptions.style.transition = "opacity 0.3s ease";
              subOptions.style.opacity = "1";
            }, 10);
          } else {
            subOptions.style.transition = "opacity 0.3s ease";
            subOptions.style.opacity = "0";
            setTimeout(() => {
              subOptions.style.display = "none";
              // Uncheck all sub-options when parent is unchecked
              const subCheckboxes = subOptions.querySelectorAll(
                'input[type="checkbox"]'
              );
              subCheckboxes.forEach((subCheckbox) => {
                subCheckbox.checked = false;
              });
            }, 300);
          }
        }
      });
    });
  }

  // Initialize postal code functionality
  function initializePostalCode() {
    const postalCode1 = document.getElementById("postalCode1");
    const postalCode2 = document.getElementById("postalCode2");

    if (postalCode1 && postalCode2) {
      // Auto-focus next field when first field is complete
      postalCode1.addEventListener("input", function (e) {
        if (this.value.length === 3) {
          postalCode2.focus();
        }
      });

      // Allow only numbers
      [postalCode1, postalCode2].forEach((input) => {
        input.addEventListener("input", function (e) {
          this.value = this.value.replace(/[^0-9]/g, "");
        });
      });

      // Handle paste event for full postal code
      postalCode1.addEventListener("paste", function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData(
          "text"
        );
        const cleanedText = pastedText.replace(/[^0-9]/g, "");

        if (cleanedText.length >= 7) {
          postalCode1.value = cleanedText.substr(0, 3);
          postalCode2.value = cleanedText.substr(3, 4);
        } else if (cleanedText.length >= 3) {
          postalCode1.value = cleanedText.substr(0, 3);
          postalCode2.value = cleanedText.substr(3);
        } else {
          postalCode1.value = cleanedText;
        }
      });
    }
  }

  // Initialize fashion literacy conditional display
  function initializeFashionLiteracy() {
    const literacyCheckboxes = document.querySelectorAll(
      'input[name="fashionLiteracy"]'
    );
    const courseDetails = document.getElementById("fashionCourseDetails");
    const otherTextInput = document.querySelector(
      'input[name="fashionLiteracyOther"]'
    );

    if (!literacyCheckboxes.length || !courseDetails) return;

    // Top 5 values that should show the course details
    const topFiveValues = [
      "vaguely-interested",
      "conversational",
      "personal-curiosity",
      "basic-knowledge",
      "brands",
    ];

    function checkFashionLiteracySelection() {
      let shouldShowCourse = false;
      let shouldShowOther = false;

      literacyCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          if (topFiveValues.includes(checkbox.value)) {
            shouldShowCourse = true;
          }
          if (checkbox.value === "other") {
            shouldShowOther = true;
          }
        }
      });

      courseDetails.style.display = shouldShowCourse ? "block" : "none";
      if (otherTextInput) {
        otherTextInput.style.display = shouldShowOther ? "block" : "none";
      }
    }

    // Add event listeners to all fashion literacy checkboxes
    literacyCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", checkFashionLiteracySelection);
    });

    // Initial check
    checkFashionLiteracySelection();
  }

  // Initialize corporate info toggle
  function initializeCorporateToggle() {
    const corporateToggle = document.getElementById("isCorporate");
    const corporateContent = document.getElementById("corporateInfoContent");

    if (corporateToggle && corporateContent) {
      corporateToggle.addEventListener("change", function () {
        if (this.checked) {
          corporateContent.style.display = "block";
          // Smooth transition
          corporateContent.style.opacity = "0";
          setTimeout(() => {
            corporateContent.style.transition = "opacity 0.3s ease";
            corporateContent.style.opacity = "1";
          }, 10);
        } else {
          corporateContent.style.transition = "opacity 0.3s ease";
          corporateContent.style.opacity = "0";
          setTimeout(() => {
            corporateContent.style.display = "none";
            // Clear corporate fields when unchecked
            const corporateInputs = corporateContent.querySelectorAll(
              'input[type="text"], input[type="radio"], input[type="checkbox"]'
            );
            corporateInputs.forEach((input) => {
              if (input.type === "text") {
                input.value = "";
              } else {
                input.checked = false;
              }
            });
          }, 300);
        }
      });
    }
  }

  // Initialize fashion stance toggle
  function initializeFashionStanceToggle() {
      const fashionStanceToggle = document.getElementById('hasFashionStance');
      const fashionStanceContent = document.getElementById('fashionStanceContent');

      if (fashionStanceToggle && fashionStanceContent) {
          fashionStanceToggle.addEventListener('change', function() {
              if (this.checked) {
                  fashionStanceContent.style.display = 'block';
                  // Smooth transition
                  fashionStanceContent.style.opacity = '0';
                  setTimeout(() => {
                      fashionStanceContent.style.transition = 'opacity 0.3s ease';
                      fashionStanceContent.style.opacity = '1';
                  }, 10);
              } else {
                  fashionStanceContent.style.transition = 'opacity 0.3s ease';
                  fashionStanceContent.style.opacity = '0';
                  setTimeout(() => {
                      fashionStanceContent.style.display = 'none';
                      // Clear fashion stance selection when unchecked
                      const stanceRadios = fashionStanceContent.querySelectorAll('input[type="radio"]');
                      stanceRadios.forEach(radio => {
                          radio.checked = false;
                      });
                  }, 300);
              }
          });

          // Remove required attribute from fashion stance radios since it's now optional
          const stanceRadios = fashionStanceContent.querySelectorAll('input[type="radio"][required]');
          stanceRadios.forEach(radio => {
              radio.removeAttribute('required');
          });
      }
}

// Initialize proposal frequency toggle
// function initializeProposalFrequencyToggle() {
//     const proposalFrequencyToggle = document.getElementById('hasProposalFrequency');
//     const proposalFrequencyContent = document.getElementById('proposalFrequencyContent');

//     if (proposalFrequencyToggle && proposalFrequencyContent) {
//         proposalFrequencyToggle.addEventListener('change', function() {
//             if (this.checked) {
//                 proposalFrequencyContent.style.display = 'block';
//                 // Smooth transition
//                 proposalFrequencyContent.style.opacity = '0';
//                 setTimeout(() => {
//                     proposalFrequencyContent.style.transition = 'opacity 0.3s ease';
//                     proposalFrequencyContent.style.opacity = '1';
//                 }, 10);
//             } else {
//                 proposalFrequencyContent.style.transition = 'opacity 0.3s ease';
//                 proposalFrequencyContent.style.opacity = '0';
//                 setTimeout(() => {
//                     proposalFrequencyContent.style.display = 'none';
//                     // Clear proposal frequency selection when unchecked
//                     const frequencyRadios = proposalFrequencyContent.querySelectorAll('input[type="radio"]');
//                     frequencyRadios.forEach(radio => {
//                         radio.checked = false;
//                     });
//                 }, 300);
//             }
//         });

//         // Remove required attribute from proposal frequency radios since it's now optional
//         const frequencyRadios = proposalFrequencyContent.querySelectorAll('input[type="radio"][required]');
//         frequencyRadios.forEach(radio => {
//             radio.removeAttribute('required');
//         });
//     }
// }

// Add to initialization
// document.addEventListener('DOMContentLoaded', function() {
//     initializeFashionLiteracy();
//     initializeCorporateToggle();
//     initializeFashionStanceToggle();
//     initializeProposalFrequencyToggle();
// });

// Function to display current week dates
function displayWeekDates() {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);

    // Calculate Monday of current week (adjust if today is Sunday)
    const daysToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    monday.setDate(today.getDate() + daysToMonday);

    const dayElements = [
        { id: 'monday-date', offset: 0 },
        { id: 'tuesday-date', offset: 1 },
        { id: 'wednesday-date', offset: 2 },
        { id: 'thursday-date', offset: 3 },
        { id: 'friday-date', offset: 4 },
        { id: 'saturday-date', offset: 5 },
        { id: 'sunday-date', offset: 6 }
    ];

    dayElements.forEach(day => {
        const dateElement = document.getElementById(day.id);
        if (dateElement) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + day.offset);
            const month = date.getMonth() + 1;
            const dayOfMonth = date.getDate();
            dateElement.textContent = `${month}/${dayOfMonth}`;
        }
    });
}

// Initialize date display when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWeekDates();

    // Ensure data-gender attribute is set initially
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    if (genderRadio) {
        document.body.setAttribute('data-gender', genderRadio.value);
    } else {
        // Default to male if nothing is checked
        document.body.setAttribute('data-gender', 'male');
    }
});
