describe('empty spec', () => {
  it('passes', () => {
    cy.viewport("iphone-x");
    cy.visit('https://example.cypress.io');
    cy.injectAxe();
    cy.checkA11y();
    expect("test").to.equal("dev");
  })
})