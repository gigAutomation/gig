/// <reference types="cypress" />


describe('open whats app', () => {
    beforeEach(() => {
        cy.visit('https://web.whatsapp.com')
    })

    it('click', () => {
        cy.get('.FPdoLc > center > .gNO89b').click()
    })
})