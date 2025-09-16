import { test, expect } from '@playwright/test';

test.describe('Login E2E - correcto', () => {
  test('Permite loguearse con credenciales válidas', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.fill('input[placeholder="Usuario"]', 'admin');
    await page.fill('input[placeholder="Contraseña"]', '1234');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Bienvenido, admin')).toBeVisible();
  });
});