export class ProductDetailsElements{
    
    static get buttons(){
        return {
            get addToCard(){ return cy.get('.col-sm-12 > .btn')},
        };
    }
}
