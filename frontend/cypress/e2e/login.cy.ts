describe('Login E2E - correcto', () => {
  it('Permite loguearse con credenciales válidas', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder="Usuario"]').type('admin');
    cy.get('input[placeholder="Contraseña"]').type('1234');
    cy.get('button[type="submit"]').click();

    cy.contains('Bienvenido, admin').should('be.visible');
  });
});
