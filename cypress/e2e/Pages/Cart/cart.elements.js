export class CartElements{
    static get buttons(){
        return {
            get placeOrder(){ return cy.get('.col-lg-1 > .btn')},
        };
    }
    static get links(){
        return {
             delete(productName){ return cy.contains('td',productName).closest('tr').find("a")},
        };
    }
}
