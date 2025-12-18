import { test, expect } from '@playwright/test';

test('Form submits successfully', async ({ page }) => {

  // Mock backend API
  await page.route('**/api/**', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true })
    });
  });

  await page.goto('http://localhost:5173');

  await page.fill('input[placeholder="Full Name"]', 'Vennila');
  await page.fill('input[placeholder="Email"]', 'ven123@gmail.com');
  await page.fill('input[placeholder="Phone"]', '9876543210');
  await page.fill('textarea', 'Hello');

  await page.getByRole('button', { name: /submit/i }).click();

  const successMsg = page.getByText('Student registered successfully');
  await expect(successMsg).toBeVisible({ timeout: 15000 });
});
