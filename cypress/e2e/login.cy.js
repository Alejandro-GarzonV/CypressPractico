Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que Cypress falle la prueba
  return false;
});
describe('Login', () => {
  it('Login con credenciales', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.viewport(1280, 720)
    cy.get('#login2').click()
    cy.get('#loginusername').type('prueba900')
    cy.get('#loginpassword').type('prueba900')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    //cy.wait(20000)
    cy.get('#nameofuser').should('exist')

    cy.contains('a','Log out').should('be.visible').then(tittle =>{
      cy.log(tittle.attr('class'))
    })

  })
})