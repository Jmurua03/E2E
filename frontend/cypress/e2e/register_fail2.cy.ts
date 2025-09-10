describe('Registro E2E - correcto', () => {
  it('Permite registrarse si las contraseñas coinciden', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Registrarse').click();

    cy.get('input[placeholder="Usuario"]').type('nuevoUsuario');
    cy.get('input[placeholder="Contraseña"]').type('1234');
    cy.get('input[placeholder="Confirmar Contraseña"]').type('1234');
    cy.get('button[type="submit"]').click();

    cy.contains('Bienvenido, nuevoUsuario').should('be.visible');
  });
});
