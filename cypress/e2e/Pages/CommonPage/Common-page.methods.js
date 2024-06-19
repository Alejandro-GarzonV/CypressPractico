import { CommonPageData } from "./Common-page.data";
import { CommonPageElements } from "./Common-page.elements";

export class  CommonPageMethods{
    
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.URL)
    }
    static clickOptionHome(){
        cy.visit(CommonPageElements.topMenu.home.click())
    }
    static clickOptionContact(){
        cy.visit(CommonPageElements.topMenu.contact.click())
    }
    static clickOptionAboutUs(){
        cy.visit(CommonPageElements.topMenu.aboutUs.click())
    }
    static clickOptionCart(){
        cy.visit(CommonPageElements.topMenu.cart.click())
    }
    static clickOptionLogin(){
        cy.visit(CommonPageElements.topMenu.login.click())
    }
    static clickOptionSingin(){
        cy.visit(CommonPageElements.topMenu.signin.click())
    }
}