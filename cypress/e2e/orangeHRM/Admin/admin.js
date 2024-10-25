import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import adminPage from "../../../pom/login/admin.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I verify login success', () => {
    loginPage.dashboardPage().should('have.text', 'Dashboard')
});

Given('I open the Admin page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    //cy.wait(10000);
});

Then('I should see the Admin page', () => {
    loginPage.adminPage().should('have.text', 'Admin')
});

Then('I click the button Add', () => {
    adminPage.buttonAdd();
});

When('I should see the Add page', () => {
    adminPage.verifyAddPage().should('have.text','Add User');
});

When('I select User Role', () => {
    adminPage.selectUserRole();
});

Then('I click User Role', () => {
    adminPage.clickRole();
});

Then('I input Employee Name', () => {
    adminPage.inputEmployeeName().type('John Doe');
});

When('I select Status', () => {
    adminPage.selectStatus();
});

Then('I click Status', () => {
    adminPage.clickStatus();
});

Then('I type Username', () =>{
    adminPage.inputUsername();
});

When('I type Password', () => {
    adminPage.inputPassword().type('Lalali.17');
});

Then('I type Confirm Password', () => {
    adminPage.inputConfirmPassword().type('Lalali.17');
});

Then('I click button Save', () =>{
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers').as('viewSystemUser');
    adminPage.buttonSave();
    cy.wait('@viewSystemUser').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    });
});

Then('I verify add data success', () =>{
    adminPage.verifyAddSucces().should('have.text', 'Success');
});

//When('I submit the User Role', () => {
    //adminPage.inputUsername().type('Admin');
//});