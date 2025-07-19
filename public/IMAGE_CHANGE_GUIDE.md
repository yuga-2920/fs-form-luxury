# 画像変更ガイド / Image Change Guide

## メンズ・レディース画像の変更場所

### 1. メインの画像マッピング (combined-scripts.js)
ファイル: `/public/combined-scripts.js` の冒頭（6行目付近）

```javascript
const imageMapping = {
  // スタイル画像
  attractiveStyles: {
    male: {
      suit: {
        name: "スーツ/トラッド",
        image: "images/style-male-suit-1.jpg",  // ← ここを変更
      },
      // ... 他のスタイル
    },
    female: {
      mode: {
        name: "モード",
        image: "images/style-female-mode-1.jpg",  // ← ここを変更
      },
      // ... 他のスタイル
    }
  },

  // スタイルパターン画像（各スタイルの15枚）
  stylePatterns: {
    male: {
      suit: {
        name: "スーツ/トラッド",
        rows: [
          {
            patterns: [
              { id: "male-suit-1", name: "", image: "style-male-suit-1.jpg" },
              // ... 他のパターン
            ]
          }
        ]
      }
    },
    female: {
      // 同様の構造
    }
  }
}
```

### 2. ドレスコード画像の変更 (form-fixes.js)
ファイル: `/public/form-fixes.js` の785行目付近

```javascript
function getGenderImagePath(imageKey, gender) {
    const genderImageMap = {
        // ドレスコード画像を追加
        'dress-code-suit': {
            male: 'images/dress-code-suit-required.jpg',
            female: 'images/dress-code-suit-required-female.jpg'  // ← ここを変更
        },
        'dress-code-business': {
            male: 'images/dress-code-business-casual.jpg',
            female: 'images/dress-code-business-casual-female.jpg'
        },
        // ... 他のドレスコード
    };

    return genderImageMap[imageKey]?.[gender] || genderImageMap[imageKey]?.['male'];
}
```

### 3. HTML内での画像指定
ファイル: `/public/index.html`

HTMLで直接画像を指定している場合は、`data-gender-image`属性を追加します：

```html
<img src="images/dress-code-suit-required.jpg"
     data-gender-image="dress-code-suit"
     alt="スーツ必着">
```

## 画像変更の手順

1. **画像ファイルの準備**
   - 男性用: `images/dress-code-suit-required.jpg`
   - 女性用: `images/dress-code-suit-required-female.jpg`

2. **form-fixes.js の更新**
   - `getGenderImagePath`関数に画像マッピングを追加

3. **HTMLの更新**
   - `data-gender-image`属性を追加

4. **テスト**
   - 性別切り替えで画像が変わることを確認

## 注意点
- 画像ファイル名は統一的な命名規則に従う（例: `[カテゴリー]-[性別].jpg`）
- 画像サイズは統一する（推奨: 400x300px）
- 必ず両性別の画像を用意する