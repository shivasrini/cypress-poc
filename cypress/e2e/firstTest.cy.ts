import 'cypress-plugin-api'
import 'cypress-real-events'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('[href="https://www.cypress.io"]').realHover()
    cy.api({
      method: 'GET',
      url: 'www.google.com',
    })
  })
})
