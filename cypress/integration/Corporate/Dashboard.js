/// <reference types="cypress" />

describe('Open Corporate Admin URL', () => {
    it('Open the URL', () => {
        cy.visit('https://stgcorporatesportal.gig.com.jo/AdminPortal/AdminHome')
    })
    it('Enter user name and password', () => {
        cy.reload()
        cy.get('#Email').type('a.haddad@gig.com.jo')
        cy.get('#Password').type('153123ah@')
        cy.get('#CaptchaInputText').click()
        cy.wait(2000)
        
        cy.get('.btn_1').click()
    })
})