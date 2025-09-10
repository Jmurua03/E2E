describe('Registro E2E - fallo', () => {
  it('No permite registrarse si las contraseñas no coinciden', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Registrarse').click();

    cy.get('input[placeholder="Usuario"]').type('nuevoUsuario');
    cy.get('input[placeholder="Contraseña"]').type('1234');
    cy.get('input[placeholder="Confirmar Contraseña"]').type('5678');
    cy.get('button[type="submit"]').click();

    cy.contains('Las contraseñas no coinciden').should('be.visible');
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
