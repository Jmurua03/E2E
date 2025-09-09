describe('Registro E2E Cypress - fallo', () => {
  it('No permite registrarse si las contraseñas no coinciden', () => {
    cy.visit('http://localhost:5173');

    // Ir al registro (si tenés un botón, simular clic; si no, usamos un hack temporal)
    cy.window().then((win) => (win.appState = { register: true })); // hack para mostrar el registro

    cy.get('input[placeholder="Usuario"]').type('nuevoUsuario');
    cy.get('input[placeholder="Contraseña"]').type('1234');
    cy.get('input[placeholder="Confirmar Contraseña"]').type('5678');
    cy.get('button[type="submit"]').click();

    // Verifica que aparezca el mensaje de error
    cy.contains('Las contraseñas no coinciden').should('be.visible');

    // Verifica que siga en el formulario de registro
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
