describe('Login E2E Cypress - fallo', () => {
  it('No permite loguearse con credenciales incorrectas', () => {
    cy.visit('http://localhost:5173');
    cy.get('input[placeholder="Usuario"]').type('usuario_incorrecto');
    cy.get('input[placeholder="Contraseña"]').type('12345');
    cy.get('button[type="submit"]').click();

    // Verifica que aparezca el mensaje de error
    cy.contains('Usuario o contraseña incorrecta').should('be.visible');

    // Verifica que no haya redirección a Dashboard
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
