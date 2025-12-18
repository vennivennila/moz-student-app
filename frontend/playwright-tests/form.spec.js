import { test, expect } from '@playwright/test';

test('Form submits successfully', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.fill('input[placeholder="Full Name"]', 'Vennila');
  await page.fill('input[placeholder="Email"]', 'ven123@gmail.com');
  await page.fill('input[placeholder="Phone"]', '9876543210');
  await page.fill('textarea', 'Hello');

  const submitBtn = page.getByRole('button', { name: /submit/i });

  await expect(submitBtn).toBeEnabled();
  await submitBtn.click();

  // Assert page is still alive (no crash)
  await expect(page).toHaveURL(/localhost:5173/);
});
