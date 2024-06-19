import { CartMethods } from "./Pages/Cart/cart.methods";
import { HomeMethods } from "./Pages/Home/home.methods";
import { loginMethods } from "./Pages/Login/login.methods";
import { ProductDetailsMethods } from "./Pages/Product-Details/product-details.methods";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que Cypress falle la prueba
  return false;
});
describe('Demoblaze', () => {
  it('Paginas  de demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.viewport(1280, 720)
    loginMethods.login('Pruebas900','Pruebas900')
    cy.contains('a','Log out').should('be.visible').then(tittle =>{
    cy.log(tittle.attr('class'))
     })
    cy.get('#nameofuser').should('exist').should('contain.text','Pruebas900') 
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    ProductDetailsMethods.clickOnAddToCardButton()
    cy.wait(1000)
    cy.get('.active > .nav-link').click();
    cy.wait(1000)
    HomeMethods.clickOnProductLink('Nexus 6')
    ProductDetailsMethods.clickOnAddToCardButton()
    cy.wait(1000)
    cy.get('#cartur').click();
    cy.wait(3000)
    CartMethods.clickOnDeleteLink('Nexus 6')
    //CartMethods.clickOnDeleteLink('Iphone 6 32gb')
    cy.wait(1000)
    CartMethods.clickOnButtonPlaceOrder()
  })
})