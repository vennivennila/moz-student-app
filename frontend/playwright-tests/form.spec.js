import { test, expect } from '@playwright/test'

test('Form submits successfully', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.fill('input[placeholder="Full Name"]', 'Vennila')
  await page.fill('input[placeholder="Email"]', 'ven123@gmail.com')
  await page.fill('input[placeholder="Phone"]', '9876543210')
  await page.fill('textarea', 'Hello')

  await page.getByRole('button', { name: /submit/i }).click()

  await page.waitForLoadState('networkidle')

  const successMsg = page.getByText('Student registered successfully')
  await expect(successMsg).toBeVisible({ timeout: 15000 })
})
