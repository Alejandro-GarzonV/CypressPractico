import { CartMethods } from "../e2e/Pages/Cart/cart.methods";
import { HomeMethods } from "../e2e/Pages/Home/home.methods";
import { loginMethods } from "../e2e/Pages/Login/login.methods";
import { PlaceOrderMethods } from "../e2e/Pages/Place-Order/place-order.methods";
import { ProductDetailsMethods } from "../e2e/Pages/Product-Details/product-details.methods";
import { ThankYouforYourPurchaseMethods } from "../e2e/Pages/Thank-You-for-Your-Purchase/Thank-You-for-Your-Purchase.methods";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que Cypress falle la prueba
  return false;
});
describe('Demoblaze', () => {
  it('Paginas  de demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    loginMethods.login('Pruebas900','Pruebas900')

    //las validaciones toca cambiarlas  por  buenas practicas ya que aca no es lo correcto
    cy.contains('a','Log out').should('be.visible').then(tittle =>{
    cy.log(tittle.attr('class'))
     })
    cy.get('#nameofuser').should('exist').should('contain.text','Pruebas900') 
    //finde las  validaciones 

    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    ProductDetailsMethods.clickOnAddToCardButton()
    cy.wait(1000)
    cy.get('.active > .nav-link').click();//viaja al home
    cy.wait(1000)
    HomeMethods.clickOnProductLink('Nexus 6')
    ProductDetailsMethods.clickOnAddToCardButton()
    cy.wait(1000)
    cy.get('#cartur').click();//viaja al cart
    cy.wait(3000)
    CartMethods.clickOnDeleteLink('Nexus 6')
    //CartMethods.clickOnDeleteLink('Iphone 6 32gb')
    cy.wait(1000)
    CartMethods.clickOnButtonPlaceOrder()
    cy.wait(1000)
    PlaceOrderMethods.PlaceOrder('PruebaN1','Colombia','Bogota','4239383687554316','06','2024')
    cy.wait(1000)
    ThankYouforYourPurchaseMethods.verifyGreenIsDisplayed(),
    ThankYouforYourPurchaseMethods.clickOnOkButton()
  })
})