import loginPage from './loginPage';

describe('Pruebas de Inicio de Sesión', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  //happyTest
  it('debería iniciar sesión con credenciales válidas', () => {
    loginPage.login('LeonelaRodriguez015@hotmail.com', '123456');
    loginPage.verificarInicioDeSesionExitoso();
  });

  // Agregar el logout después del happy test
  it('debería cerrar sesión correctamente', () => {
    loginPage.login('LeonelaRodriguez015@hotmail.com', '123456');
    loginPage.verificarInicioDeSesionExitoso();
    
    // Agregar el logout
    loginPage.logout();
    
    // Realizar aserciones adicionales si es necesario
    // Por ejemplo, verificar que la URL haya cambiado a la página de logout
    cy.url().should('eq', Cypress.config('baseUrl') + '/logout');
  });

  //unhappyTest
  it('debería mostrar un error con credenciales inválidas', () => {
    loginPage.login('angelo@hotmail.com', '123');
    loginPage.verificarErrorDeInicioDeSesion();
  });
});