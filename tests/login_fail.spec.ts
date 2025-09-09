import { test, expect } from '@playwright/test';

test('Login falla con credenciales incorrectas', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[placeholder="Usuario"]', 'usuario_incorrecto');
  await page.fill('input[placeholder="Contraseña"]', '12345');
  await page.click('button[type="submit"]');

  // Verifica que aparezca el mensaje de error
  await expect(
    page.locator('text=Usuario o contraseña incorrecta')
  ).toBeVisible();

  // Verifica que siga en la misma URL
  await expect(page).toHaveURL('http://localhost:5173/');
});
