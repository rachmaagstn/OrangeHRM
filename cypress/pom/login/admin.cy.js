export default class adminPage {
    
    static buttonAdd() {
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    }
    static verifyAddPage() {
        return cy.get('h6').contains('Add User');
    }
    static selectUserRole(){
        return cy.get('[class="oxd-select-text-input"]').eq(0).click();
     }
     static clickRole(){
        return cy.get('[role="listbox"]').click();   //click option 1
        //return cy.get('[role="listbox"]').click(170,90); //click option 2
     }
     static inputEmployeeName() {
        return cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
    }
    static selectStatus(){
        return cy.get('[class="oxd-select-text-input"]').eq(1).click();
     }
     static clickStatus(){
        //return cy.get('[role="listbox"]').click();   //click option 1
        return cy.get('[role="listbox"]').click(170,90); //click option 2
     }
     static inputUsername(){
        return cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('raraagstnnn');
    }
    static inputPassword() {
        return cy.get('[type="password"]').eq(0);
    }
    static inputConfirmPassword(){
        return cy.get('[type="password"]').eq(1);
    }
    static buttonSave(){
        return cy.get('[type="submit"]').click();
    }
    static verifyAddSucces(){
        return cy.get('[aria-live="assertive"]').contains('Success');
    }

}