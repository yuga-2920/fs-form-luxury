# Public JavaScript モジュール化計画

## 概要

publicディレクトリ内のJavaScriptファイルをESモジュールに変換し、テスト可能な構造にリファクタリングします。

## 対象ファイル分析

### 1. 高優先度（コア機能）

#### local-storage-handler.js（拡張版）
- **現状**: グローバルオブジェクト、自動保存、画像保存、インポート/エクスポート機能
- **既存モジュール**: src/modules/localStorage.js（基本版）
- **アクション**: 拡張機能を新モジュール`localStorageEnhanced.js`として実装

#### gender-image-manager.js
- **機能**: 性別に基づく画像の動的切り替え
- **依存**: gender-image-config.js
- **アクション**: 新モジュール`genderImageManager.js`として実装

#### file-download-handler.js
- **機能**: フォームデータのダウンロード処理
- **アクション**: 新モジュール`fileDownload.js`として実装

### 2. 中優先度（統合機能）

#### google-sheets-integration.js
- **機能**: Google Sheetsへのデータ送信
- **アクション**: 新モジュール`googleSheetsIntegration.js`として実装

#### quantity-input-handler.js
- **機能**: 数量入力フィールドの処理
- **アクション**: 新モジュール`quantityInput.js`として実装

#### wanted-items-input-handler.js
- **機能**: 希望アイテムの入力処理
- **アクション**: 新モジュール`wantedItems.js`として実装

### 3. 低優先度（UIヘルパー）

#### other-option-handler.js
- **機能**: 「その他」オプションの表示/非表示
- **アクション**: 新モジュール`otherOption.js`として実装

#### placeholder-functions.js
- **機能**: プレースホルダー関連のユーティリティ
- **アクション**: 既存`utils.js`に統合

#### conditional-options-fix.js
- **機能**: 条件付きオプションの修正
- **アクション**: 新モジュール`conditionalOptions.js`として実装

### 4. 統合ファイル

#### combined-scripts.js
- **機能**: 複数のスクリプトを統合
- **アクション**: 分解して個別モジュールへ

#### form-fixes.js
- **機能**: フォーム関連の修正集
- **アクション**: 関連モジュールに分散

## 実装順序

1. **Phase 1: 基本モジュールの拡張**
   - LocalStorageEnhanced（自動保存、画像保存、エクスポート）
   - GenderImageManager（画像切り替え）
   - FileDownload（ダウンロード処理）

2. **Phase 2: 統合機能**
   - GoogleSheetsIntegration
   - QuantityInput
   - WantedItems

3. **Phase 3: UIヘルパー**
   - OtherOption
   - ConditionalOptions

## モジュール構造

```
src/modules/
├── localStorage.js          # 既存（基本版）
├── localStorageEnhanced.js  # 新規（拡張版）
├── genderImageManager.js    # 新規
├── fileDownload.js          # 新規
├── googleSheetsIntegration.js # 新規
├── quantityInput.js         # 新規
├── wantedItems.js           # 新規
├── otherOption.js           # 新規
├── conditionalOptions.js    # 新規
└── __tests__/
    ├── localStorageEnhanced.test.js
    ├── genderImageManager.test.js
    ├── fileDownload.test.js
    └── ...
```

## 実装方針

1. **段階的移行**
   - 既存のグローバルオブジェクトを維持しながら、内部実装をモジュールに置き換え
   - 後方互換性を保ちながら新機能を追加

2. **テスト駆動開発**
   - 各モジュールに対してテストを先に作成
   - カバレッジ95%以上を目標

3. **型定義の準備**
   - TypeScript移行を見据えた型定義の準備
   - JSDocコメントで型情報を記載

## 移行後の統合

### index.htmlの更新
```html
<!-- 既存 -->
<script src="local-storage-handler.js"></script>

<!-- 新規 -->
<script type="module">
import { LocalStorageEnhanced } from './js/modules/localStorageEnhanced.js';
window.LocalStorageHandler = LocalStorageEnhanced;
LocalStorageEnhanced.init();
</script>
```

## リスクと対策

1. **既存コードの依存関係**
   - リスク: グローバル変数への依存
   - 対策: ファサードパターンで段階的に移行

2. **ブラウザ互換性**
   - リスク: ESモジュールのサポート
   - 対策: ビルドツールでのバンドル化

3. **テストの複雑性**
   - リスク: DOM操作とブラウザAPIの多用
   - 対策: モック化とテストユーティリティの活用