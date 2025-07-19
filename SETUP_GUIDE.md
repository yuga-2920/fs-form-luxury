# フォームデータ連携セットアップガイド

## 概要
このフォームは、Vercelのサーバーレス関数を使用してデータを保存します。
以下の3つのオプションから選択できます：

1. **Supabase**（推奨）
2. **Airtable**
3. **JSONレスポンス**（開発環境用）

## セットアップ手順

### 1. Vercelへのデプロイ

```bash
# Vercel CLIをインストール
npm i -g vercel

# プロジェクトをデプロイ
vercel
```

### 2. データストレージの選択と設定

#### Option 1: Supabase（推奨）

1. [Supabase](https://supabase.io)でアカウントを作成
2. 新しいプロジェクトを作成
3. 以下のSQLでテーブルを作成：

```sql
CREATE TABLE form_responses (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  gender VARCHAR(10),
  last_name VARCHAR(50),
  first_name VARCHAR(50),
  last_name_kana VARCHAR(50),
  first_name_kana VARCHAR(50),
  birth_date DATE,
  height INTEGER,
  weight INTEGER,
  email VARCHAR(100),
  phone_number VARCHAR(20),
  postal_code VARCHAR(10),
  prefecture VARCHAR(20),
  city VARCHAR(50),
  address TEXT,
  work_style TEXT,
  business_scenes TEXT,
  private_scenes TEXT,
  weekend_activities TEXT,
  domestic_travel TEXT,
  overseas_travel TEXT,
  dress_regulation TEXT,
  attractive_styles TEXT,
  avoid_items TEXT,
  brand_preferences TEXT,
  fashion_knowledge VARCHAR(50),
  clothing_items TEXT,
  wanted_items TEXT,
  company_name VARCHAR(100),
  department VARCHAR(50),
  company_size VARCHAR(20),
  annual_revenue VARCHAR(20),
  age_demo TEXT,
  app_usage VARCHAR(20),
  partner_service VARCHAR(10),
  fitting_time VARCHAR(20),
  gift_service VARCHAR(10),
  gift_frequency VARCHAR(20),
  transport_service VARCHAR(20),
  service_expectations TEXT,
  fashion_literacy VARCHAR(20),
  comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

4. プロジェクト設定から`URL`と`anon key`を取得
5. Vercelの環境変数に設定：

```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
```

#### Option 2: Airtable

1. [Airtable](https://airtable.com)でアカウントを作成
2. 新しいBaseを作成
3. 「フォーム回答」というテーブルを作成
4. 以下のフィールドを追加：
   - タイムスタンプ (Date time)
   - 性別 (Single line text)
   - 姓 (Single line text)
   - 名 (Single line text)
   - ... (他のフィールドも同様に追加)

5. [API Key](https://airtable.com/account)を生成
6. Base IDを確認（URLから取得）
7. Vercelの環境変数に設定：

```bash
vercel env add AIRTABLE_API_KEY
vercel env add AIRTABLE_BASE_ID
```

### 3. クライアントサイドの設定

HTMLファイルに以下のスクリプトを追加：

```html
<!-- 既存のスクリプトの後に追加 -->
<script src="form-data-exporter.js"></script>
<script src="form-api-connector.js"></script>
```

### 4. パッケージのインストール

```bash
# Supabaseを使用する場合
npm install @supabase/supabase-js

# Airtableを使用する場合
npm install airtable
```

### 5. 動作確認

1. ローカルで実行：
```bash
vercel dev
```

2. フォームに入力してデータを送信
3. データストレージで保存されたデータを確認

## データのエクスポート

### CSV形式でダウンロード
ブラウザのコンソールで以下を実行：

```javascript
FormDataExporter.downloadCSV();
```

### Supabaseからエクスポート
Supabaseダッシュボードから直接CSVエクスポートが可能

### Airtableからエクスポート
AirtableのViewメニューから「Download CSV」を選択

## トラブルシューティング

### CORSエラーが発生する場合
Vercelの設定で、APIルートのCORSヘッダーが正しく設定されているか確認

### データが保存されない場合
1. ブラウザのコンソールでエラーメッセージを確認
2. Vercelのファンクションログを確認：`vercel logs`
3. 環境変数が正しく設定されているか確認：`vercel env ls`

### フォームの送信ボタンが反応しない場合
1. JavaScriptコンソールでエラーを確認
2. 必須フィールドがすべて入力されているか確認

## セキュリティ考慮事項

1. **APIキーの管理**
   - 環境変数は必ずVercelの環境変数として設定
   - クライアントサイドのコードにAPIキーを含めない

2. **データ検証**
   - サーバーサイドでデータの検証を実施
   - SQLインジェクション対策はSupabase/Airtableが自動的に処理

3. **アクセス制限**
   - 必要に応じてVercelのAPIルートにレート制限を設定
   - Supabaseの場合、Row Level Securityを設定可能

## サポート

問題が発生した場合は、以下を確認してください：
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Airtable API Documentation](https://airtable.com/api)