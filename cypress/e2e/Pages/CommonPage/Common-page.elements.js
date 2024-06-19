export class  CommonPageElements{
    static get topMenu() { 
        return {
            get home(){return cy.get('.active > .nav-link')},
            get contact(){cy.get(':nth-child(2) > .nav-link')},
            get aboutUs(){return cy.get(':nth-child(3) > .nav-link')},  
            get cart(){return cy.get('#cartur')},
            get login(){return cy.get('#login2')},
            get signin(){return cy.get('#signin2')}
        }
    }
}
