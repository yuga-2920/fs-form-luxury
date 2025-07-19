import '@testing-library/jest-dom';

// グローバルなテスト設定
beforeEach(() => {
  // 各テストの前にlocalStorageをクリア
  localStorage.clear();
  // DOMをクリア
  document.body.innerHTML = '';
});

// グローバルなモック
global.fetch = vi.fn();
