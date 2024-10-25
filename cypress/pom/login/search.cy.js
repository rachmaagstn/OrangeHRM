export default class searchAdmin {

    static searchUsername(){
        return cy.get('[class="oxd-input oxd-input--active"]').eq(1);
    };
    static searchUserRole(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
    };
    static selectUserRole(){
       return cy.get('[role="listbox"]').click();   //click option 1
       //return cy.get('[role="listbox"]').click(60,100); //click option 2
    };
    static searchEmployeeName(){
        return cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
    };
    static selectEmployeeName(){
        return cy.get('[role="listbox"]').wait(3000).click();
    };
    static searchUserStatus(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
    };
    static selectUserStatus(){
        //return cy.get('[role="listbox"]').click();   //click option 1
        return cy.get('[role="listbox"]').click(60,100); //click option 2
    };
    static buttonSearch(){
        return cy.get('[type="submit"]').click();
    };
    static verifySearch(){
        return cy.get('[class="oxd-text oxd-text--span"]');
    };

};

