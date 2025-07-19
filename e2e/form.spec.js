import { test, expect } from '@playwright/test';

test.describe('ファッションスタイリングフォーム', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('フォームが正しく表示される', async ({ page }) => {
    // タイトルの確認
    await expect(page).toHaveTitle(/Fashion Styling Form/i);
    
    // フォームの存在確認
    const form = page.locator('#styleForm');
    await expect(form).toBeVisible();
  });

  test('基本情報を入力できる', async ({ page }) => {
    // 名前の入力
    await page.fill('input[name="name"]', 'テスト太郎');
    await expect(page.locator('input[name="name"]')).toHaveValue('テスト太郎');

    // メールアドレスの入力
    await page.fill('input[name="email"]', 'test@example.com');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');

    // 電話番号の入力
    await page.fill('input[name="phone"]', '090-1234-5678');
    await expect(page.locator('input[name="phone"]')).toHaveValue('090-1234-5678');
  });

  test('性別選択により表示内容が変わる', async ({ page }) => {
    // 初期状態の確認
    const genderRadios = page.locator('input[name="gender"]');
    await expect(genderRadios).toHaveCount(2);

    // 男性を選択
    await page.check('input[name="gender"][value="male"]');
    await expect(page.locator('input[name="gender"][value="male"]')).toBeChecked();

    // 女性を選択
    await page.check('input[name="gender"][value="female"]');
    await expect(page.locator('input[name="gender"][value="female"]')).toBeChecked();
    await expect(page.locator('input[name="gender"][value="male"]')).not.toBeChecked();
  });

  test('フォームのバリデーションが機能する', async ({ page }) => {
    // 必須フィールドを空のまま送信を試みる
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // エラーメッセージまたはHTML5バリデーションの確認
    const nameInput = page.locator('input[name="name"][required]');
    const isInvalid = await nameInput.evaluate(el => !el.checkValidity());
    expect(isInvalid).toBeTruthy();
  });

  test('LocalStorageにデータが保存される', async ({ page }) => {
    // データを入力
    await page.fill('input[name="name"]', 'ストレージテスト');
    await page.fill('input[name="email"]', 'storage@test.com');

    // 少し待機（自動保存のため）
    await page.waitForTimeout(1500);

    // LocalStorageの確認
    const storageData = await page.evaluate(() => {
      return localStorage.getItem('styleFormData');
    });

    expect(storageData).toBeTruthy();
    const parsedData = JSON.parse(storageData);
    expect(parsedData.name).toBe('ストレージテスト');
    expect(parsedData.email).toBe('storage@test.com');
  });

  test('ページリロード後もデータが復元される', async ({ page }) => {
    // データを入力
    await page.fill('input[name="name"]', '復元テスト');
    await page.fill('input[name="email"]', 'restore@test.com');
    
    // 自動保存を待つ
    await page.waitForTimeout(1500);

    // ページをリロード
    await page.reload();

    // データが復元されているか確認
    await expect(page.locator('input[name="name"]')).toHaveValue('復元テスト');
    await expect(page.locator('input[name="email"]')).toHaveValue('restore@test.com');
  });

  test('画像が正しく表示される', async ({ page }) => {
    // 回避アイテムセクションの画像確認
    const avoidImages = page.locator('.avoid-items img');
    const avoidCount = await avoidImages.count();
    
    // 少なくとも1つの画像が存在することを確認
    expect(avoidCount).toBeGreaterThan(0);

    // 最初の画像が読み込まれているか確認
    if (avoidCount > 0) {
      const firstImage = avoidImages.first();
      await expect(firstImage).toBeVisible();
      
      // 画像が実際に読み込まれているか確認
      const isLoaded = await firstImage.evaluate(img => {
        return img.complete && img.naturalHeight !== 0;
      });
      expect(isLoaded).toBeTruthy();
    }
  });

  test('レスポンシブデザインが機能する', async ({ page }) => {
    // デスクトップサイズ
    await page.setViewportSize({ width: 1200, height: 800 });
    const form = page.locator('#styleForm');
    await expect(form).toBeVisible();

    // タブレットサイズ
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(form).toBeVisible();

    // モバイルサイズ
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(form).toBeVisible();
  });
});