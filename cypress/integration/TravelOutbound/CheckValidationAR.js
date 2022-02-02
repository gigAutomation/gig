/// <reference types="cypress" />

describe('Basic Information JO',()=>{
    it('open URL',()=>{
        cy.visit('https://oneit.website/Outbound-Travel-Insurance-Request')
    })
    it('Verify that nationality field name should be (الجنسية)',()=>{
        cy.get('').should('be.visible')
        .and('contain','الجنسية')
    })
    it('Verify that should be star beside name',()=>{
        cy.get('ctl00_ContentPlaceHolder1_rfvddlNationality').should('be.visible')
    })
    it('Verify that should be star with color red beside name',()=>{
        cy.get('ctl00_ContentPlaceHolder1_rfvddlNationality').should('have.attr','class','color:Red;visibility:hidden;')
        
    })
})