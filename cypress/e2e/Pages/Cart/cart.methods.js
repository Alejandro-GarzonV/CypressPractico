import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static clickOnButtonPlaceOrder() {
        CartElements.buttons.placeOrder.click();
     }
}
