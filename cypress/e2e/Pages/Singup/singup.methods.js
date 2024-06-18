import { SingupElements } from "./singup.elements";

export class SingupMethods {

    static clickOnSingUpLabel(){
        SingupElements.Labels.singupLabel.click();
    }
    static insertUsername(username){
        SingupElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password){
        SingupElements.textboxes.password.invoke('val',password)
    }
    static clickOnSingUpButton(){
        SingupElements.buttons.singup.click();
    }

    static singup (username,password){
        this.clickOnSingUpLabel()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSingUpButton()
    }

}