# セットアップ手順

## 🚀 Google Apps Script URLの設定方法

### 1. Google Apps Scriptをデプロイ

1. [Google スプレッドシート](https://sheets.google.com)で新しいスプレッドシートを作成
2. **拡張機能** → **Apps Script** を開く
3. `google-apps-script.gs` の内容をコピーして貼り付け
4. **デプロイ** → **新しいデプロイ** をクリック
5. 設定：
   - 種類: **ウェブアプリ**
   - 実行: **自分**
   - アクセス: **全員**
6. **デプロイ** をクリック
7. 表示されたURLをコピー

### 2. config.jsにURLを設定

1. `public/config.js` ファイルを開く
2. `GOOGLE_SHEETS_URL` の値を、コピーしたURLに置き換える：

```javascript
const Config = {
    // ここにあなたのURLを貼り付ける
    GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbw.../exec',
    
    SHEET_NAME: 'フォーム回答',
    IMAGE_FOLDER_NAME: 'フォーム画像'
};
```

### 3. 動作確認

ブラウザでフォームを開き、コンソール（F12）で以下を実行：

```javascript
// テスト送信（データのみ）
TestSubmission.testSubmit()

// テスト送信（画像付き）
TestSubmission.testSubmitWithImages()
```

スプレッドシートにデータが保存されていれば成功です。

## 📝 トラブルシューティング

### データが保存されない場合

1. **config.js の URL確認**
   - URLが正しくコピーされているか
   - 末尾に `/exec` が含まれているか

2. **Google Apps Scriptの権限確認**
   - Apps Scriptエディタで「実行」ボタンをクリック
   - 権限を承認

3. **スプレッドシートの確認**
   - 「フォーム回答」シートが作成されているか
   - データが追加されているか

4. **ブラウザコンソールの確認**
   - エラーメッセージが表示されていないか
   - `TestSubmission.testSubmit()` の結果を確認

### 画像が保存されない場合

1. **Google Driveの確認**
   - 「フォーム画像」フォルダが作成されているか
   - 画像ファイルが保存されているか

2. **Drive APIの確認**
   - Google Apps ScriptでDrive APIが使用可能か

## 🔒 セキュリティ

- Google Apps Script URLは公開しないでください
- 本番環境では、アクセス制限を検討してください
- 必要に応じて認証機能を追加してください

## 📋 次のステップ

1. フォームに必要事項を入力
2. 画像をアップロード（任意）
3. 送信ボタンをクリック
4. Google スプレッドシートで結果を確認

---

問題が解決しない場合は、ブラウザのコンソールログを確認し、エラーメッセージを参照してください。