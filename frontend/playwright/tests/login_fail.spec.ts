import { test, expect } from '@playwright/test';

test('No permite loguearse con credenciales inválidas', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.fill('input[placeholder="Usuario"]', 'Manuel Hernan salguero ');
  await page.fill('input[placeholder="Contraseña"]', '2341');
  await page.click('button[type="submit"]');

  await expect(page.getByText('Usuario o contraseña incorrecta')).toBeVisible();
  await expect(page).toHaveURL('http://localhost:5173/');
});