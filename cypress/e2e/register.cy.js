
describe('template spec', () => {
describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="ad-input"]').type("em")
    cy.get('[data-cy="error-message"]').should('contain', 'Adınızı en az 3 karakter giriniz.');
  })
})
})