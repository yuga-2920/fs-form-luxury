# TDD (Test-Driven Development) Implementation

このプロジェクトでは、テスト駆動開発（TDD）を実践しています。

## セットアップ

### 必要なパッケージ

```bash
npm install -D vitest @vitest/coverage-v8 @vitest/ui jsdom @testing-library/dom @testing-library/jest-dom
```

### テストコマンド

```bash
# テストの実行（ウォッチモード）
npm test

# テストUIの起動
npm run test:ui

# 単回実行
npm run test:run

# カバレッジレポートの生成
npm run coverage
```

## TDDサイクル

### 1. RED（失敗するテストを書く）

まず、実装前に失敗するテストを書きます：

```javascript
// src/modules/__tests__/localStorage.test.js
it('フォームデータを保存できる', () => {
  // テストを書く
  expect(savedData.name).toBe('テスト太郎');
});
```

### 2. GREEN（テストを通す最小限の実装）

テストを通すための最小限のコードを書きます：

```javascript
// src/modules/localStorage.js
saveFormData: function() {
  // 最小限の実装
}
```

### 3. REFACTOR（リファクタリング）

テストが通った状態でコードを改善します。

## 実装済みモジュール

### 1. LocalStorageHandler
- **機能**: フォームデータのローカルストレージへの保存・復元
- **カバレッジ**: 100%
- **テストケース**: 11個

### 2. FormValidator
- **機能**: フォーム入力値の検証
- **カバレッジ**: 100%
- **テストケース**: 14個

### 3. ImageMapping
- **機能**: 画像マッピングの管理と取得
- **カバレッジ**: 100%
- **テストケース**: 16個

### 4. Utils
- **機能**: 汎用ユーティリティ関数（debounce、throttle、日付フォーマット、ディープクローンなど）
- **カバレッジ**: 100%
- **テストケース**: 21個

### 5. FormSubmit
- **機能**: フォーム送信とデータのシリアライズ
- **カバレッジ**: 96.03%
- **テストケース**: 14個

### 6. LocalStorageEnhanced
- **機能**: 拡張版ローカルストレージ処理（自動保存、画像保存、インポート/エクスポート）
- **カバレッジ**: 95.42%
- **テストケース**: 20個

## プロジェクト構造

```
fs-form/
├── src/
│   ├── modules/
│   │   ├── localStorage.js
│   │   ├── localStorageEnhanced.js
│   │   ├── formValidator.js
│   │   ├── imageMapping.js
│   │   ├── utils.js
│   │   ├── formSubmit.js
│   │   └── __tests__/
│   │       ├── localStorage.test.js
│   │       ├── localStorageEnhanced.test.js
│   │       ├── formValidator.test.js
│   │       ├── imageMapping.test.js
│   │       ├── utils.test.js
│   │       ├── formSubmit.test.js
│   │       └── performance.test.js
│   └── test/
│       └── setup.js
├── public/
├── vitest.config.js
└── package.json
```

## カバレッジ目標

- ライン: 100%
- 関数: 100%
- ブランチ: 100%
- ステートメント: 100%

## ベストプラクティス

1. **テストファースト**: 実装前に必ずテストを書く
2. **小さなステップ**: 一度に大きな機能を作らない
3. **継続的なリファクタリング**: テストが通ったら改善する
4. **カバレッジの維持**: 常に100%を目指す
5. **意味のあるテスト**: 実装の詳細ではなく振る舞いをテストする

## E2Eテスト

Playwrightを使用したEnd-to-Endテストも実装されています：

```bash
# E2Eテストの実行
npm run test:e2e

# UIモードでE2Eテストを実行
npm run test:e2e:ui

# ブラウザを表示してE2Eテストを実行
npm run test:e2e:headed
```

## CI/CDパイプライン

GitHub Actionsを使用して、以下の自動化を実現：

1. **テストの自動実行**: プッシュ/PRごとに単体テストとE2Eテストを実行
2. **カバレッジレポート**: Codecovへの自動アップロード
3. **自動デプロイ**: mainブランチへのプッシュ時にVercelへ自動デプロイ

## コード品質

### ESLintとPrettier
プロジェクトではESLintとPrettierを使用してコード品質を保っています：

```bash
# コードのlint
npm run lint

# lintエラーの自動修正
npm run lint:fix

# コードのフォーマット
npm run format

# フォーマットチェック
npm run format:check
```

## TypeScript移行準備（完了）

TypeScriptへの段階的移行のための準備が完了しました：

- **tsconfig.json**: 厳密な型チェック設定
- **型定義ファイル**: `src/types/index.d.ts`、`src/types/global.d.ts`
- **移行ガイド**: `TYPESCRIPT_MIGRATION.md`
- **スクリプト**: `npm run typecheck`、`npm run build:ts`

詳細は[TypeScript移行ガイド](./TYPESCRIPT_MIGRATION.md)を参照してください。

## パフォーマンステスト（完了）

`tinybench`を使用したパフォーマンステストを実装しました：

- **テスト対象**: 全モジュールの主要機能
- **ベンチマーク**: 実行速度とメモリ使用量
- **テストケース**: 12個のパフォーマンステスト
- **ドキュメント**: `PERFORMANCE_TESTING.md`

```bash
# パフォーマンステストの実行
npm test -- src/modules/__tests__/performance.test.js
```

詳細は[パフォーマンステストガイド](./PERFORMANCE_TESTING.md)を参照してください。

## publicディレクトリのモジュール化（進行中）

[公開ディレクトリのJavaScriptモジュール化計画](./PUBLIC_JS_MODULARIZATION_PLAN.md)に基づいて、既存のJavaScriptファイルをESモジュールに変換中：

- ✅ LocalStorageEnhanced（拡張版）
- ⏳ GenderImageManager
- ⏳ FileDownloadHandler
- ⏳ GoogleSheetsIntegration

## 次のステップ

1. 既存のpublicディレクトリ内の残りのJavaScriptファイルをモジュール化
2. TypeScriptへの実際の移行開始（utils.jsから）
3. ビジュアルリグレッションテストの追加
4. 統合テストの拡充