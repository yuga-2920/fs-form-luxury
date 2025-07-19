# fs-form デプロイメントガイド

## デプロイ方法

### 1. Vercel でのデプロイ

#### オプション A: Vercel CLI を使用
```bash
# Vercel CLIをインストール（未インストールの場合）
npm i -g vercel

# fs-formディレクトリに移動
cd fs-form

# デプロイ
vercel

# 初回は以下の設定を使用:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? fs-form
# - Directory? ./public
# - Override settings? No
```

#### オプション B: GitHub 連携
1. このプロジェクトをGitHubにプッシュ
2. https://vercel.com にアクセス
3. "New Project" をクリック
4. GitHubリポジトリをインポート
5. Root Directory を `fs-form/public` に設定
6. "Deploy" をクリック

### 2. Netlify でのデプロイ

#### オプション A: ドラッグ&ドロップ
1. https://app.netlify.com にアクセス
2. `fs-form/public` フォルダをドラッグ&ドロップ
3. 自動的にデプロイされます

#### オプション B: GitHub 連携
1. このプロジェクトをGitHubにプッシュ
2. https://app.netlify.com にアクセス
3. "New site from Git" をクリック
4. GitHubリポジトリを選択
5. Base directory を `fs-form` に設定
6. Publish directory を `public` に設定
7. "Deploy site" をクリック

### 3. GitHub Pages でのデプロイ

```bash
# gh-pages ブランチを作成してpublicフォルダの内容をプッシュ
cd fs-form
git subtree push --prefix public origin gh-pages

# または GitHub Actions を使用して自動デプロイ
```

### 4. その他の静的ホスティングサービス

`fs-form/public` フォルダの内容をそのままアップロードすれば動作します。

## デプロイ後の確認

1. フォームが正しく表示されることを確認
2. 性別切り替えが機能することを確認
3. 画像が正しく読み込まれることを確認
4. Google Sheets連携が機能することを確認（設定済みの場合）

## 環境変数

Google Sheets連携を使用する場合は、Google Apps Scriptのデプロイメントを別途行う必要があります。
詳細は `GOOGLE_SHEETS_SETUP.md` を参照してください。