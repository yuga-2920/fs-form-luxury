# 画像アップスケーリングガイド

このプロジェクトの画像を高解像度化するための2つの方法を提供しています。

## 方法1: Real-ESRGAN を使用（推奨・簡単）

最も簡単な方法です。自動的に必要なパッケージをインストールします。

```bash
python upscale_simple.py
```

このスクリプトは：
- 必要なパッケージを自動インストール
- `images`フォルダ内の全画像を4倍に拡大
- 結果を`images_upscaled`フォルダに保存

## 方法2: SwinIR を使用（高品質）

より高品質な結果が得られますが、セットアップが複雑です。

### 1. 依存関係のインストール
```bash
pip install -r requirements_swinir.txt
```

### 2. スクリプトの実行
```bash
# CPUを使用（遅いが確実）
python upscale_images.py

# GPUを使用（高速、CUDA環境が必要）
python upscale_images.py --gpu
```

### オプション
- `--input-dir`: 入力画像のディレクトリ（デフォルト: images）
- `--output-dir`: 出力先ディレクトリ（デフォルト: images_upscaled）
- `--scale`: 拡大倍率（デフォルト: 4）
- `--gpu`: GPU使用フラグ

## 画像の入れ替え方法

アップスケーリング完了後、高解像度画像を使用するには：

1. 現在の`images`フォルダをバックアップ
```bash
mv images images_original
```

2. アップスケールした画像を使用
```bash
mv images_upscaled images
```

3. 元に戻す場合
```bash
mv images images_upscaled
mv images_original images
```

## 注意事項

- 処理には時間がかかります（画像1枚あたり数秒〜数十秒）
- GPUを使用すると大幅に高速化されます
- 大量の画像がある場合は、バッチ処理を検討してください
- アップスケール後のファイルサイズは元の16倍程度になります