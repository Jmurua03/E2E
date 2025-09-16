import { test, expect } from '@playwright/test';

test('No permite registrarse si las contraseñas no coinciden', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByText('Registrarse').click();

  await page.getByPlaceholder('Usuario').fill('ricardo ford');
  await page.locator('input[placeholder="Contraseña"]').first().fill('1234');
  await page.locator('input[placeholder="Confirmar Contraseña"]').last().fill('1978');
  await page.getByRole('button', { name: /registrarse|submit/i }).click();

  await expect(page.getByText('Las contraseñas no coinciden')).toBeVisible();
  await expect(page).toHaveURL('http://localhost:5173/');
});