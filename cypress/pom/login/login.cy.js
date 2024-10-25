export default class loginPage {

    static verifyLoginPage() {
      return cy.get('h5').contains('Login');
    }
    static inputUsername() {
        return cy.get('[name="username"]');
    }
    static inputPassword() {
        return cy.get('[name="password"]');
    }
    static buttonSubmit() {
        return cy.get('[type="submit"]');
    }
    static invalidCredentials() {
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    }
    static dashboardPage() {
        return cy.get('h6').contains('Dashboard');
    }
    static buttonForgot() {
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static forgotPassword() {
        return cy.get('h6').contains('Reset Password');
    }
    static inputUsernameForgotPassword() {
        return cy.get('[placeholder="Username"]');
    }
    static buttonResetPassword() {
        return cy.get('[type="submit"]');
    }
    static verifyResetPassword() {
        return cy.get('h6').contains('Reset Password link sent successfully');
    }
    static adminPage() {
        return cy.get('h6').contains('Admin');
    }
    //static orangeHRM() {
        //return cy.get('[href="http://www.orangehrm.com"]');
    //}

}