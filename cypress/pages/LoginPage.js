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
    cy.url().should('eq', Cypress.config('baseUrl'));
  }

  verificarErrorDeInicioDeSesion() {
    cy.url().should('include', '/login');
    cy.get('.login-form p').should('have.text', 'Your email or password is incorrect!');
  }
}

export const loginPage = new LoginPage();
