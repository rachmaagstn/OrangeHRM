import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text', 'Login');
});

Then('I click the button Forgot Password', () => {
    //cy.intercept('GET', '**/action-summary').as('action');
    loginPage.buttonForgot().click();
    //cy.wait('@action');
});

Then('I verify forgot password', () => {
    loginPage.forgotPassword().should('have.text', 'Reset Password');
});

When('I submit the Username', () => {
    loginPage.inputUsernameForgotPassword().type('Admin');
});

Then('I click the button Reset Password', () => {
    cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestResetPassword').as('passwordReset');
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset').as('action');
    loginPage.buttonResetPassword().click();
    cy.wait('@passwordReset').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(302);
    });
    cy.wait('@action').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    });
    //cy.wait('@action');
    //cy.wait('@passwordReset');
});

Then('I verify Reset Password link sent successfully', () => {
    loginPage.verifyResetPassword().should('have.text', 'Reset Password link sent successfully');
});