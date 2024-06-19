export class ThankYouforYourPurchaseElements{
    static get buttons(){
        return {
            get okConfirm(){ return cy.get('.confirm')},
        };
    }  
    static get icons(){
        return {
            get greenCheckMark() { return cy.get('.sa-success')}
        };
    }  
}
