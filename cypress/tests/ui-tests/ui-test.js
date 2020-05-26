import Chance from 'chance'
/// <reference types="cypress" />


describe('Test for reqres', () => {
    it('Positive: Search', () => {
        cy.visit(`${Cypress.env('googleURL')}'/collection/accessories_wall?hl=en-us`);
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
        cy.get(`a[href="/product/pixel_buds"]`).should('exist')
        
    })
})