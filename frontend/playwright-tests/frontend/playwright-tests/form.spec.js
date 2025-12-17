import { test, expect } from '@playwright/test'

test('Form submits successfully', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.fill('input[placeholder="Full Name"]', 'Vennila')
  await page.fill('input[placeholder="Email"]', 'ven123@gmail.com')
  await page.fill('input[placeholder="Phone"]', '9876543210')
  await page.fill('textarea[placeholder="Message"]', 'Hello!')

  await page.click('button:has-text("Submit")')

  const successMsg = page.locator('.text-green-600')
  await expect(successMsg).toBeVisible()
  await expect(successMsg).toHaveText('Student registered successfully ✅')
})
