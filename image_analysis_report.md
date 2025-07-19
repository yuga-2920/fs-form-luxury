# HTMLファイル内の画像分析レポート

## 概要
- **HTMLファイル内の総画像数**: 122個
- **gender-image-manager.jsに含まれていない画像数**: 64個

## gender-image-manager.jsに含まれていない画像の詳細

### 1. ブランド画像（45個）
ブランド画像は男女共通で使用されるため、性別による切り替えは不要です。

```
images/brand-adidas.jpg
images/brand-agnesb.jpg
images/brand-amiri.jpg
images/brand-arcteryx.jpg
images/brand-balenciaga.jpg
images/brand-beams.jpg
images/brand-bottega.jpg
images/brand-brunello.jpg
images/brand-canadagoose.jpg
images/brand-cdg.jpg
images/brand-celine.jpg
images/brand-chanel.jpg
images/brand-dior.jpg
images/brand-fendi.jpg
images/brand-fredperry.jpg
images/brand-gucci.jpg
images/brand-hermes.jpg
images/brand-jilsander.jpg
images/brand-lacoste.jpg
images/brand-loewe.jpg
images/brand-loropiana.jpg
images/brand-lv.jpg
images/brand-margiela.jpg
images/brand-moncler.jpg
images/brand-nanouniverse.jpg
images/brand-nike.jpg
images/brand-northface.jpg
images/brand-offwhite.jpg
images/brand-palmangels.jpg
images/brand-patagonia.jpg
images/brand-prada.jpg
images/brand-puma.jpg
images/brand-rickowens.jpg
images/brand-ships.jpg
images/brand-sl.jpg
images/brand-snowpeak.jpg
images/brand-studious.jpg
images/brand-supreme.jpg
images/brand-tomorrowland.jpg
images/brand-uniqlo.jpg
images/brand-unitedarrows.jpg
images/brand-valentino.jpg
images/brand-versace.jpg
images/brand-yohji.jpg
images/brand-zara.jpg
```

### 2. 避けたいアイテム画像（10個）
gender-image-manager.jsには7個しか含まれていません。以下の10個が不足しています：

```
images/avoid-bright-color.jpg
images/avoid-complex-pattern.jpg
images/avoid-excessive-exposure.jpg
images/avoid-flashy-decoration.jpg
images/avoid-frills-lace.jpg
images/avoid-other.jpg
images/avoid-rough-texture.jpg
images/avoid-sporty-casual.jpg
images/avoid-synthetic.jpg
images/avoid-thin-material.jpg
```

### 3. 旅行関連画像（3個）
```
images/travel-other.jpg
images/travel-overseas-hawaii.jpg
images/travel-overseas-other.jpg
```

### 4. ドレスコード画像（4個）
これらはすでに女性版の画像ですが、マネージャーに登録されていません：
```
images/dress-code-business-casual-female.jpg
images/dress-code-casual.jpg
images/dress-code-smart-casual-female.jpg
images/dress-code-suit-required-female.jpg
```

### 5. その他（2個）
```
images/hat.jpg
images/lifestyle-other-female.jpg
```

## 女性版が必要な画像

以下の画像には女性版（-female）が必要です：

1. **images/dress-code-casual.jpg** → **images/dress-code-casual-female.jpg**
   - セクション: ドレスコード
   - 用途: カジュアルなドレスコード

2. **images/hat.jpg** → **images/hat-female.jpg**
   - セクション: 衣類アイテム
   - 用途: 帽子のアイテム画像

3. **images/travel-other.jpg** → **images/travel-other-female.jpg**
   - セクション: 国内旅行/海外旅行
   - 用途: その他の旅行先

4. **images/travel-overseas-hawaii.jpg** → **images/travel-overseas-hawaii-female.jpg**
   - セクション: 海外旅行
   - 用途: ハワイ旅行

5. **images/travel-overseas-other.jpg** → **images/travel-overseas-other-female.jpg**
   - セクション: 海外旅行
   - 用途: その他の海外旅行先

## 推奨アクション

1. **gender-image-manager.jsへの追加が必要な項目**:
   - 不足している避けたいアイテム画像（10個）
   - 旅行関連画像（3個）
   - hat.jpg のアイテム画像
   - dress-code-casual.jpg

2. **女性版画像の作成が必要**:
   - 上記5個の画像について、女性版を作成する必要があります

3. **ブランド画像について**:
   - 45個のブランド画像は男女共通のため、gender-image-manager.jsへの追加は不要です