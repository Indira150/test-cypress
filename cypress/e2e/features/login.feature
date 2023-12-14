Feature: Login page

    Feature La página de inicio de sesión funcionará según las credenciales del usuario.

    Background:
        Given que visito la página de inicio de sesión

    Scenario: Successful login
        When ingreso credenciales válidas
        Then debería iniciar sesión exitosamente

    Scenario: Unsuccessful login
        When ingreso credenciales inválidas
        Then debería ver un mensaje de error