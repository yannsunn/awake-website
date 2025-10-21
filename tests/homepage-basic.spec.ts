import { test, expect } from '@playwright/test';

test.describe('ホームページ - 基本表示', () => {
  test('1.1 ホームページの正常表示', async ({ page }) => {
    // http://localhost:3006 にアクセス
    await page.goto('http://localhost:3006');

    // ページが完全に読み込まれるまで待機
    await page.waitForLoadState('networkidle');

    // ページタイトルの確認
    await expect(page).toHaveTitle(/株式会社Awake/);

    // 主要セクションの存在確認
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('1.2 主要要素の存在確認', async ({ page }) => {
    await page.goto('http://localhost:3006');
    await page.waitForLoadState('networkidle');

    // ヘッダーロゴの確認
    await expect(page.locator('header').getByText('株式会社Awake')).toBeVisible();

    // メインコピーの確認（h1要素を明示的に指定）
    await expect(page.locator('h1').getByText('ホームページ制作・AIチャットボット開発')).toBeVisible();

    // 価格情報の確認
    await expect(page.getByText(/132,000円/)).toBeVisible();
    await expect(page.getByText(/298,000円/)).toBeVisible();
    await expect(page.getByText(/10%/)).toBeVisible();

    // CTAボタンの確認
    await expect(page.getByRole('link', { name: /LINEで相談する/ }).first()).toBeVisible();
  });
});
