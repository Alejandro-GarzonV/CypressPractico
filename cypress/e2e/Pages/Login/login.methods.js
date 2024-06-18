import { LoginElements } from "./login.elements";

export class loginMethods {

        static clickOnLoginLabel(){
            LoginElements.Labels.loginLabel.click();
        }
        static insertUsername(username){
            LoginElements.textboxes.username.type(username)
        }
        static insertPassword(password){
            LoginElements.textboxes.password.type(password)
        }
        static clickOnLoginButton(){
           LoginElements.buttons.login.click();
        }

        static login (username,password){
            this.clickOnLoginLabel()
            this.insertUsername(username)
            cy.wait(1500)
            this.insertPassword(password)
            cy.wait(1500)
            this.clickOnLoginButton()
        }
    
}