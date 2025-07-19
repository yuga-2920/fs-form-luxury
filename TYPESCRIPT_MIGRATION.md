# TypeScript Migration Guide

## 概要

このドキュメントは、fs-formプロジェクトをJavaScriptからTypeScriptへ段階的に移行するためのガイドです。

## 移行戦略

### Phase 1: 準備（完了）
- [x] TypeScriptのインストール
- [x] tsconfig.jsonの設定
- [x] 型定義ファイルの作成
- [x] 必要な@typesパッケージのインストール

### Phase 2: 段階的移行
1. **新規ファイルから開始**
   - 新しく作成するファイルはTypeScriptで記述
   - 既存のJavaScriptファイルとの共存を許可

2. **モジュール単位での移行**
   - テストカバレッジが100%のモジュールから優先的に移行
   - 依存関係の少ないモジュールから開始

3. **移行順序（推奨）**
   ```
   1. utils.js → utils.ts
   2. localStorage.js → localStorage.ts
   3. formValidator.js → formValidator.ts
   4. imageMapping.js → imageMapping.ts
   5. formSubmit.js → formSubmit.ts
   ```

## 移行手順

### 1. ファイル拡張子の変更
```bash
mv src/modules/utils.js src/modules/utils.ts
```

### 2. 型の追加
```typescript
// Before (JavaScript)
export const Utils = {
  debounce: function(func, delay) {
    let timeout;
    // ...
  }
}

// After (TypeScript)
import { DebouncedFunction } from '@types/index';

export const Utils = {
  debounce: function<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): DebouncedFunction<T> {
    let timeout: NodeJS.Timeout | null;
    // ...
  }
}
```

### 3. テストファイルの更新
- テストファイルも同時に`.ts`に移行
- `@ts-expect-error`を使用してテスト中の型エラーを管理

### 4. ビルドスクリプトの追加
```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "build:ts": "tsc"
  }
}
```

## 型定義の活用

### 共通型の使用
```typescript
import { FormData, ValidationResult, Gender } from '@types/index';

function validateForm(data: FormData): ValidationResult {
  // ...
}
```

### ユーティリティ型
```typescript
// Partial型を使用した部分的な更新
function updateFormData(updates: Partial<FormData>): void {
  // ...
}

// Pick型を使用した特定フィールドの抽出
type UserInfo = Pick<FormData, 'name' | 'email' | 'phone'>;
```

## 注意事項

### 1. 段階的な厳密性
初期段階では以下の設定で開始し、徐々に厳密にする：
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "strict": false
  }
}
```

### 2. 型アサーション
移行期間中は必要に応じて型アサーションを使用：
```typescript
const element = document.getElementById('form') as HTMLFormElement;
```

### 3. any型の一時的な使用
複雑な型は一時的に`any`を使用し、後から詳細な型を定義：
```typescript
// 一時的な実装
function complexFunction(data: any): any {
  // ...
}

// 後から詳細な型を定義
interface ComplexData {
  // ...
}
function complexFunction(data: ComplexData): ProcessedData {
  // ...
}
```

## チェックリスト

### モジュール移行時の確認項目
- [ ] ファイル拡張子を`.ts`に変更
- [ ] 必要な型をインポート
- [ ] 関数の引数と戻り値に型を追加
- [ ] オブジェクトのプロパティに型を追加
- [ ] テストファイルも同時に移行
- [ ] `npm run typecheck`でエラーがないことを確認
- [ ] テストが全て通ることを確認
- [ ] カバレッジが維持されていることを確認

## トラブルシューティング

### よくあるエラーと対処法

1. **"Cannot find module"エラー**
   ```typescript
   // tsconfig.jsonのpathsを確認
   "paths": {
     "@/*": ["src/*"]
   }
   ```

2. **DOM型が見つからない**
   ```typescript
   // tsconfig.jsonのlibに"DOM"を追加
   "lib": ["ES2020", "DOM"]
   ```

3. **テストでの型エラー**
   ```typescript
   // @ts-expect-errorを使用
   // @ts-expect-error - Testing error case
   formValidator.validateEmail(123);
   ```

## 次のステップ

1. **Phase 3: 完全移行**
   - 全てのJavaScriptファイルをTypeScriptに移行
   - `allowJs`を`false`に設定
   - `strict`モードを有効化

2. **Phase 4: 高度な型の活用**
   - ジェネリック型の活用
   - 条件付き型の使用
   - 型ガードの実装

3. **Phase 5: ビルドプロセスの最適化**
   - Viteとの統合
   - 型チェックの並列実行
   - 増分ビルドの設定