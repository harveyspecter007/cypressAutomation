describe('empty spec', () => {
  it('passes', () => {
    cy.injectAxe();
    cy.visit('https://example.cypress.io');
    cy.checkA11y();
  })
})