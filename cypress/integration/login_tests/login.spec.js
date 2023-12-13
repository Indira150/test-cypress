import loginPage from './loginPage';

describe('Pruebas de Inicio de Sesión', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  //happyTest
  it('debería iniciar sesión con credenciales válidas', () => {
    loginPage.login('tu-usuario-valido', 'tu-contraseña-valida');
    loginPage.verificarInicioDeSesionExitoso();
  });

  //unhappyTest
  it('debería mostrar un error con credenciales inválidas', () => {
    loginPage.login('usuario-invalido', 'contraseña-invalida');
    loginPage.verificarErrorDeInicioDeSesion();
  });
});