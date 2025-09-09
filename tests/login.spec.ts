import { test, expect } from '@playwright/test';

test('Login correcto Playwright', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[placeholder="Usuario"]', 'admin');
  await page.fill('input[placeholder="Contraseña"]', '1234');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Bienvenido, admin')).toBeVisible();
});
