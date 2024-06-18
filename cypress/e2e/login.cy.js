import { HomeMethods } from "./Pages/Home/home.methods";
import { loginMethods } from "./Pages/Login/login.methods";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que Cypress falle la prueba
  return false;
});
describe('Demoblaze', () => {
  it('Paginas  de demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.viewport(1280, 720)
    loginMethods.login('Pruebas900','Pruebas900')
    cy.wait(2000)
    cy.contains('a','Log out').should('be.visible').then(tittle =>{
    cy.log(tittle.attr('class'))
     })
    cy.get('#nameofuser').should('exist').should('contain.text','Pruebas900') 
    cy.wait(2000)
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(2000)
  })
})