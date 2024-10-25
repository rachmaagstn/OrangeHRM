import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import adminPage from "../../../pom/login/admin.cy";
import searchAdmin from "../../../pom/login/search.cy";
import resetAdmin from "../../../pom/login/reset.cy";

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

When('I search Username', () => {
    searchAdmin.searchUsername().type('Admin');
});

Then('I search User Role', () => {
    searchAdmin.searchUserRole();
});

Then('I select User Role', () =>{
    searchAdmin.selectUserRole();
});

//Then('I search Employee Name', () =>{
    //searchAdmin.searchEmployeeName().type('James Rodrigues   WC Golden Boot ');
//});

//Then('I select Employee Name', () =>{
    //searchAdmin.selectEmployeeName();
//});

Then('I search User Status', () =>{
    searchAdmin.searchUserStatus();
});

When('I select User Status', () =>{
    searchAdmin.selectUserStatus();
});

Then('I click button Search', () =>{
    searchAdmin.buttonSearch();
});

Then('I verify search success', () =>{
    searchAdmin.verifySearch();
});

Then('I click button Reset', () => {
    resetAdmin.buttonReset();
});

Then('I verify reset success', () =>{
    resetAdmin.verifyReset();
});