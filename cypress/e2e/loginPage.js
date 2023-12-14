class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email, password) {
    cy.get('[data-qa=login-email]').type(email);
    cy.get('[data-qa=login-password]').type(password);
    cy.get('[data-qa=login-button]').click();
  }
  
  logout() {
    cy.get('[href="/logout"]').click();
  }

  verificarInicioDeSesionExitoso() {
    // Realizar aserciones específicas para un inicio de sesión exitoso
    cy.url().should('eq', Cypress.config('baseUrl'));
    // Puedes agregar más aserciones según la respuesta de éxito que esperas
  }

  verificarErrorDeInicioDeSesion() {
    // Verificar que la URL no haya cambiado (aún en la página de inicio de sesión)
    cy.url().should('include', '/login');
    // Verificar que se muestra el mensaje de error
    cy.get('.login-form p').should('have.text', 'Your email or password is incorrect!');
  }
}

export default new LoginPage();
