import { ThankYouforYourPurchaseElements } from "./Thank-You-for-Your-Purchase.elements";

export class ThankYouforYourPurchaseMethods{
    static clickOnOkButton(){
        ThankYouforYourPurchaseElements.buttons.okConfirm.click();
     }
     static verifyGreenIsDisplayed(){
       ThankYouforYourPurchaseElements.icons.greenCheckMark.should("exist");
     }
}
