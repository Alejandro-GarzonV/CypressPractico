import { LoginElements } from "./login.elements";

export class loginMethods {

        static clickOnLoginLabel(){
            LoginElements.Labels.loginLabel.click();
        }
        static insertUsername(username){
            LoginElements.textboxes.username.invoke('val',username)
        }
        static insertPassword(password){
            LoginElements.textboxes.password.invoke('val',password)
        }
        static clickOnLoginButton(){
           LoginElements.buttons.login.click();
        }

        static login (username,password){
            this.clickOnLoginLabel()
            this.insertUsername(username)
            this.insertPassword(password)
            this.clickOnLoginButton()
            
        }
    
}