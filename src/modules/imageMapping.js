// Image Mapping Module
const imageMappingData = {
  avoidItems: {
    male: {
      logo: { name: 'ロゴ', image: 'images/avoid-logo.jpg' },
      'animal-pattern': { name: 'アニマル柄', image: 'images/avoid-animal-pattern.jpg' },
      'bold-print': { name: '総柄', image: 'images/avoid-bold-print.jpg' },
      'complex-pattern': { name: '複雑な模様', image: 'images/avoid-complex-pattern.jpg' },
      'flashy-decoration': { name: '派手な装飾', image: 'images/avoid-flashy-decoration.jpg' },
      'bright-color': { name: '明るすぎる色', image: 'images/avoid-bright-color.jpg' },
      'rough-texture': { name: 'ざらざらした質感', image: 'images/avoid-rough-texture.jpg' },
      synthetic: { name: '合成素材感', image: 'images/avoid-synthetic.jpg' },
      oversized: { name: 'オーバーサイズ', image: 'images/avoid-oversized.jpg' },
      tight: { name: 'タイトすぎる', image: 'images/avoid-tight.jpg' },
      'thin-material': { name: '薄すぎる素材', image: 'images/avoid-thin-material.jpg' },
      'sporty-casual': { name: 'スポーティ・カジュアル', image: 'images/avoid-sporty-casual.jpg' },
      other: { name: 'その他', image: 'images/avoid-other.jpg' },
    },
    female: {
      logo: { name: 'ロゴ', image: 'images/avoid-logo.jpg' },
      'animal-pattern': { name: 'アニマル柄', image: 'images/avoid-animal-pattern.jpg' },
      'bold-print': { name: '総柄', image: 'images/avoid-bold-print.jpg' },
      'complex-pattern': { name: '複雑な模様', image: 'images/avoid-complex-pattern.jpg' },
      'flashy-decoration': { name: '派手な装飾', image: 'images/avoid-flashy-decoration.jpg' },
      'bright-color': { name: '明るすぎる色', image: 'images/avoid-bright-color.jpg' },
      'rough-texture': { name: 'ざらざらした質感', image: 'images/avoid-rough-texture.jpg' },
      synthetic: { name: '合成素材感', image: 'images/avoid-synthetic.jpg' },
      oversized: { name: 'オーバーサイズ', image: 'images/avoid-oversized.jpg' },
      tight: { name: 'タイトすぎる', image: 'images/avoid-tight.jpg' },
      'thin-material': { name: '薄すぎる素材', image: 'images/avoid-thin-material.jpg' },
      'frills-lace': { name: 'フリル・レース', image: 'images/avoid-frills-lace.jpg' },
      'excessive-exposure': { name: '露出過多', image: 'images/avoid-excessive-exposure.jpg' },
      'mini-length': { name: 'ミニ丈', image: 'images/avoid-mini-length.jpg' },
      'high-heels': { name: 'ハイヒール', image: 'images/avoid-high-heels.jpg' },
      other: { name: 'その他', image: 'images/avoid-other.jpg' },
    },
  },
  attractiveStyles: {
    male: {
      suit: { name: 'スーツ', image: 'images/style-suit.jpg' },
      casual: { name: 'カジュアル', image: 'images/style-casual.jpg' },
      elegant: { name: 'エレガント', image: 'images/style-elegant.jpg' },
      mode: { name: 'モード', image: 'images/style-mode.jpg' },
      street: { name: 'ストリート', image: 'images/style-street.jpg' },
      'american-casual': {
        name: 'アメリカンカジュアル',
        image: 'images/style-american-casual.jpg',
      },
      sports: { name: 'スポーツMIX', image: 'images/style-sports.jpg' },
      trad: { name: 'トラッド', image: 'images/style-trad.jpg' },
      natural: { name: 'ナチュラル', image: 'images/style-natural.jpg' },
      minimal: { name: 'ミニマル', image: 'images/style-minimal.jpg' },
      outdoor: { name: 'アウトドア', image: 'images/style-outdoor.jpg' },
      utility: { name: 'ユーティリティ', image: 'images/style-utility.jpg' },
    },
    female: {
      elegant: { name: 'エレガント', image: 'images/style-elegant-f.jpg' },
      'urban-conservative': {
        name: 'アーバンコンサバ',
        image: 'images/style-urban-conservative.jpg',
      },
      feminine: { name: 'フェミニン', image: 'images/style-feminine.jpg' },
      mode: { name: 'モード', image: 'images/style-mode-f.jpg' },
      natural: { name: 'ナチュラル', image: 'images/style-natural-f.jpg' },
      casual: { name: 'カジュアル', image: 'images/style-casual-f.jpg' },
      sporty: { name: 'スポーティ', image: 'images/style-sporty.jpg' },
      street: { name: 'ストリート', image: 'images/style-street-f.jpg' },
      utility: { name: 'ユーティリティ', image: 'images/style-utility-f.jpg' },
      'french-casual': { name: 'フレンチカジュアル', image: 'images/style-french-casual.jpg' },
      minimal: { name: 'ミニマル', image: 'images/style-minimal-f.jpg' },
      vintage: { name: 'ヴィンテージ', image: 'images/style-vintage.jpg' },
    },
  },
};

export const ImageMapping = {
  // 回避アイテムの画像情報を取得
  getAvoidItemImage: function (gender, itemId) {
    if (!this.validateGender(gender)) return undefined;
    return imageMappingData.avoidItems[gender]?.[itemId];
  },

  // 魅力的なスタイルの画像情報を取得
  getAttractiveStyleImage: function (gender, styleId) {
    if (!this.validateGender(gender)) return undefined;
    return imageMappingData.attractiveStyles[gender]?.[styleId];
  },

  // 性別による回避アイテムリストを取得
  getAvoidItemsByGender: function (gender) {
    if (!this.validateGender(gender)) return {};
    return imageMappingData.avoidItems[gender] || {};
  },

  // 性別による魅力的なスタイルリストを取得
  getAttractiveStylesByGender: function (gender) {
    if (!this.validateGender(gender)) return {};
    return imageMappingData.attractiveStyles[gender] || {};
  },

  // すべての回避アイテムを取得
  getAllAvoidItems: function () {
    return imageMappingData.avoidItems;
  },

  // すべての魅力的なスタイルを取得
  getAllAttractiveStyles: function () {
    return imageMappingData.attractiveStyles;
  },

  // 性別の検証
  validateGender: function (gender) {
    return gender === 'male' || gender === 'female';
  },
};
