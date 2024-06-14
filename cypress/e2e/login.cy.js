Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que Cypress falle la prueba
  return false;
});
describe('Login', () => {
  it('Login con credenciales', () => {
    
    //cy.get('#loginusername').closest('#logInModal .modal-body').then(parent=>{
    //  cy.log(parent.attr('class'))
    //})
    cy.Login('pruebas900','pruebas900') 
    
  })
})