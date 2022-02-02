/// <reference types="cypress" />



before(() => {
    cy.visit('https://uatdataservices.gig.com.jo:82/home')
    cy.contains('Login / Register').click()

})
describe('VErify that the logged user should fill correct national id and password',()=>{
    it('fill national id',()=>{
        cy.get(':nth-child(1) > .form-control').type('9952000123')
    })
    it('fill password',()=>{
        cy.get('#loginpwd').type('P@ssw0rd')
    })
    it('click on the captcha',()=>{
        cy.get('#divCaptcha *> div > iframe').click({force:true})

        Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
            // Wait until the iframe (Google reCAPTCHA) is totally loaded
            cy.wait(5000);
            cy.get('#divCaptcha *> div > iframe')
              .then($iframe => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body)
                  .find('.g-recaptcha')
                  .should('be.visible')
                  .click();
              });
          });

    })
    it('click login button',()=>{
        cy.get('.ins-detail-form > .pad-0 > .btn').click()
    })
})