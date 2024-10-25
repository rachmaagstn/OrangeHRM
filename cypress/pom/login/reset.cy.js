export default class resetAdmin {

    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--ghost"]').click();
    };
    static verifyReset(){
        return cy.get('[class="oxd-text oxd-text--span"]');
    };
}