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

  //unhappyTest
  it('debería mostrar un error con credenciales inválidas', () => {
    loginPage.login('angelo@hotmail.com', '123');
    loginPage.verificarErrorDeInicioDeSesion();
  });
});