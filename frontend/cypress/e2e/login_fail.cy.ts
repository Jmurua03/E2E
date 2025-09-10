describe('Login E2E - fallo', () => {
  it('No permite loguearse con credenciales inválidas', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder="Usuario"]').type('usuario_incorrecto');
    cy.get('input[placeholder="Contraseña"]').type('9999');
    cy.get('button[type="submit"]').click();

    cy.contains('Usuario o contraseña incorrecta').should('be.visible');
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
