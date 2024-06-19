import { PlaceOrderElements } from "./place-order.elements"

export class PlaceOrderMethods{
    

    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke('val',name)
    }
    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke('val',country)
    }
    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke('val',city)
    }
    static insertCard(card){
        PlaceOrderElements.textboxes.card.invoke('val',card)
    }
    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke('val',month)
    }
    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke('val',year)
    }
    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
     }
     static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
     }

     static PlaceOrder (name,country,city,card,month,year){
         this.insertName(name)
         this.insertCountry(country)
         this.insertCity(city)
         this.insertCard(card)
         this.insertMonth(month)
         this.insertYear(year)
         this.clickOnPurchaseButton()
     }

}
