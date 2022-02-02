/// <reference types="cypress" />

before(() => {
    cy.visit('https://stg-intranetportal.gig.com.jo:455')
    cy.contains('Login / Register').click()
    cy.contains("Don't have an account? Create one now!").click()
    cy.wait(1000)
})
function userID_Alpha() {
    var number1 = "";
    var possible = "123456789";
    for (var i = 0; i < 10; i++)
        number1 += possible.charAt(Math.floor(Math.random() * possible.length));
    return number1;
}
function Email() {
    var em = "";
    var possible = 'abcdefghijklmnopqz'
    for (var i = 0; i < 10; i++)
        em += possible.charAt(Math.floor(Math.random() * possible.length));
    return em;
}

const nationalNo = userID_Alpha()

const EmailR = Email() + '@test.com'

describe('sign in', () => {
    it('fill all the data', () => {
        const nationalNo = userID_Alpha()
        const EmailR = Email() + '@test.com'
        cy.get(':nth-child(2) > .form-field').type(nationalNo)
        const fixtures = 'test.png'
        cy.get('#nationalidfiless').attachFile(fixtures)
        cy.get(':nth-child(4) > .form-field').select('number:1')
        cy.get(':nth-child(6) > .form-control').type('amer')
        cy.get(':nth-child(7) > .form-control').type('amer')
        cy.get(':nth-child(8) > .form-control').type('amer')
        cy.get(':nth-child(9) > .form-control').type('amer')
        cy.get(':nth-child(10) > .form-control').type('عامر')
        cy.get(':nth-child(11) > .form-control').type('عامر')
        cy.get(':nth-child(12) > .form-control').type('عامر')
        cy.get(':nth-child(13) > .form-control').type('عامر')
        cy.get('.md-datepicker-input').type('01/01/2000')
        cy.get('.col-md-8 > .form-control').type('797871585')
        cy.get('.registration-user-form > :nth-child(3) > .form-control').type(EmailR)
        cy.get('.registration-user-form > :nth-child(4) > .form-control').type('P@ssw0rd', { sensitive: true })
        cy.get('#checkbox').click()
        cy.get('.learn-more > .button-text').click()
        cy.get('.verification_input > .col-md-12 > .form-control').click()
        cy.wait(20000)

        /*cy.get('.verification_input > .col-md-12 > :nth-child(1)').then(($temp) => {
            
            const txt = $temp.text()
            cy.get('.verification_input > .col-md-12 > .form-control').type(`${txt}`)
            //cy.get('.verification_input > .col-md-12 > :nth-child(1)')
            //   .invoke('removeAttr','label')
            cy.get('.verification_input > .col-md-12 > .form-control').type('{movetostart}')
            cy.get('.verification_input > .col-md-12 > .form-control').type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
                .type('{del}')
        })*/
        cy.get('.ng-scope > .button-text').click({ force: true })
       // cy.waitFor(
        //cy.get("#alertModal > .modal-dialog > .modal-content > .modal-header > .close").click({force:true}) 
      //  )
        cy.wait(30000)
        cy.get('#alertModal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
        //cy.get('#alertModal > .modal-dialog > .modal-content > .modal-header > .close').click()

        //cy.get('#alertModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        //cy.wait(1000)
        //cy.get('.dropdown > .btn').click()
        //cy.get('.list-inline > .dropdown > .dropdown-menu > :nth-child(1) > a').click({ force: true })
        //cy.wait(1000)
        cy.get(':nth-child(3) > [href="https://www.gig.com.jo/Page/361/E-Services?lang=en"]').invoke('mouseover')
        cy.get('#rptMenu_ctl02_rptSupMenu_ctl02_lnkSupMenu').invoke('mouseover')
        cy.get('#rptMenu_ctl02_rptSupMenu_ctl02_rptSupSupMenu_ctl02_lnkSupSupMenu').click({force:true})

    })
})