import { test, expect } from '@playwright/test';

test('Permite registrarse si las contraseñas coinciden', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByText('Registrarse').click();

  await page.getByPlaceholder('Usuario').fill('Pedro Picapiedra');
  await page.locator('input[placeholder="Contra"]').first().fill('1234');
  await page.locator('input[placeholder="Confirmar Contraseña"]').last().fill('1978');
  await page.getByRole('button', { name: /registrarse|submit/i }).click();

  await expect(page.getByText('Bienvenido, nuevoUsuario')).toBeVisible();
});