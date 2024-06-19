export class PlaceOrderElements{
    
    static get textboxes(){
        return {
            get name(){return cy.get('#name')},
            get country(){return cy.get('#country')},
            get city(){return cy.get('#city')},
            get card(){return cy.get('#card')},
            get month(){return cy.get('#month')},
            get year(){return cy.get('#year')},
        };
    }
    static get buttons(){
        return {
            get close(){ return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')},
            get purchase(){ return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')}
        };
    }    
}
