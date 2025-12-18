import { test, expect } from '@playwright/test';

test('Form submits successfully', async ({ page }) => {

  let requestSent = false;

  // Intercept POST request
  await page.route('**/*', async route => {
    if (route.request().method() === 'POST') {
      requestSent = true;
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      });
    } else {
      await route.continue();
    }
  });

  await page.goto('http://localhost:5173');

  await page.fill('input[placeholder="Full Name"]', 'Vennila');
  await page.fill('input[placeholder="Email"]', 'ven123@gmail.com');
  await page.fill('input[placeholder="Phone"]', '9876543210');
  await page.fill('textarea', 'Hello');

  await page.getByRole('button', { name: /submit/i }).click();

  // Assert that submit request happened
  await expect.poll(() => requestSent).toBe(true);
});
