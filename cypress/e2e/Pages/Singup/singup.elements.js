export class SingupElements {
    static get Labels(){
        return {
            get singupLabel (){return cy.get('#signin2')},
        };
    }
    static get textboxes(){
        return {
            get username(){return cy.get('#sign-username')},
            get password(){return cy.get('#sign-password')}
        };
    }
    static get buttons(){
        return {
            get close(){ return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')},
            get singup(){ return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')}
        };
    }
}