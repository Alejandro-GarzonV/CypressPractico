export class LoginElements {

    static get Labels(){
        return {
            get loginLabel (){return cy.get('#login2')},
        };
    }
    static get textboxes(){
        return {
            get username(){return cy.get("#loginusername")},
            get password(){return cy.get("#loginpassword")}
        };
    }
    static get buttons(){
        return {
            get close(){ return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')},
            get login(){ return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')}
        };
    }
}