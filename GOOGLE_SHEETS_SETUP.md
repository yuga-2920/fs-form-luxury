# Google Sheets連携セットアップガイド

このガイドでは、フォームの回答をGoogle Sheetsに自動転記する設定方法を説明します。

## 必要なもの

1. Googleアカウント
2. Google Sheets（スプレッドシート）
3. Google Drive（画像保存用）

## セットアップ手順

### 1. Google Sheetsの準備

1. 新しいGoogle Sheetsを作成
2. シート名を「フォーム回答」に変更
3. スプレッドシートのIDをメモ（URLの `/d/` と `/edit` の間の文字列）

### 2. Google Driveフォルダの作成

1. Google Driveで新しいフォルダを作成（例：「フォーム画像」）
2. フォルダを右クリック → 「リンクを取得」
3. 「制限付き」を「リンクを知っている全員」に変更
4. フォルダIDをメモ（URLの最後の部分）

### 3. Google Apps Scriptの設定

1. Google Sheetsで「拡張機能」→「Apps Script」を開く
2. `google-apps-script.gs` の内容をコピー＆ペースト
3. 以下の値を置き換え：
   - `YOUR_SPREADSHEET_ID`: スプレッドシートのID
   - `YOUR_FOLDER_ID`: Google DriveフォルダのID

### 4. Web Appとしてデプロイ

1. Apps Scriptエディタで「デプロイ」→「新しいデプロイ」
2. 種類：「ウェブアプリ」を選択
3. 設定：
   - 説明：任意（例：「フォーム送信エンドポイント」）
   - 実行ユーザー：「自分」
   - アクセスできるユーザー：「全員」
4. 「デプロイ」をクリック
5. Web AppのURLをコピー

### 5. フォームの設定

1. `google-sheets-integration.js` を開く
2. `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` を先ほどコピーしたURLに置き換え
3. `index.html` に以下を追加（</body>の前）：
   ```html
   <script src="google-sheets-integration.js"></script>
   ```

## データ構造

### スプレッドシートの列

| 列名 | 説明 | データ型 |
|------|------|----------|
| タイムスタンプ | 送信日時 | ISO 8601形式 |
| 名前 | お客様名 | テキスト |
| メールアドレス | 連絡先メール | メール形式 |
| 電話番号 | 連絡先電話 | テキスト |
| 性別 | male/female | 選択値 |
| 生年月日 | YYYY/MM/DD | 日付形式 |
| 身長 | cm単位 | 数値 |
| 体重 | kg単位 | 数値 |
| ビジネスシーン | 複数選択（カンマ区切り） | テキスト |
| プライベートシーン | 複数選択（カンマ区切り） | テキスト |
| 顔写真URL | Google DriveのURL | URL |
| 全身写真URL | Google DriveのURL | URL |

### 画像の保存

- 画像は自動的にGoogle Driveに保存されます
- ファイル名：`face_[timestamp].jpg`、`body_[timestamp].jpg`
- 共有設定：リンクを知っている全員が閲覧可能

## トラブルシューティング

### よくある問題

1. **CORS エラー**
   - Apps Scriptの設定で「全員」がアクセスできるようになっているか確認

2. **画像がアップロードされない**
   - Google Driveフォルダの共有設定を確認
   - フォルダIDが正しいか確認

3. **データが保存されない**
   - スプレッドシートIDが正しいか確認
   - Apps Scriptのデプロイが最新か確認

### デバッグ方法

1. ブラウザの開発者ツールでコンソールを確認
2. Google Apps Scriptのログを確認（表示 → ログ）
3. テストデータを送信して動作確認

## セキュリティ考慮事項

- 個人情報を扱うため、スプレッドシートのアクセス権限は適切に管理してください
- 定期的にアクセスログを確認してください
- 不要になったデータは適切に削除してください

## サンプルデータ

`sample-form-responses.csv` ファイルには、テスト用のサンプルデータが含まれています。
このデータを使用してスプレッドシートの動作確認ができます。