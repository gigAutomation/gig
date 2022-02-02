/// <reference types="cypress" />



before(() => {
    cy.visit('https://stg-intranetportal.gig.com.jo:455/')
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
    var possible = "abcdefghijklmnopqz";
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

        cy.get('.common-btn > .button-text').click({ force: true })
        cy.wait(6000)
        //cy.get("#alertModal > .modal-dialog > .modal-content > .modal-header > .close").click({force:true}) 
        cy.waitUntil(() =>
            cy
                .get('#alertModal > .modal-dialog > .modal-content > .modal-header > .close')
                .click()
            , {
                timeout: 10000,
                interval: 10000,
                errorMsg: 'the popup not appeared'
            });

        cy.wait(1000)
        cy.get('.dropdown > .btn').click()

        cy.get('.list-inline > .dropdown > .dropdown-menu > :nth-child(1) > a').click({ force: true })
        cy.wait(1000)
    })
    it("check the filled data", () => {
        cy.get('.col-md-12 > :nth-child(1) > .form-control').should('have.value', 'Jordanian')
        cy.get(':nth-child(4) > .form-field').should('have.value', 'Mr')
        cy.get(':nth-child(6) > .form-control').should('have.value', 'amer')
        cy.get(':nth-child(7) > .form-control').should('have.value', 'amer')
        cy.get(':nth-child(8) > .form-control').should('have.value', 'amer')
        cy.get(':nth-child(9) > .form-control').should('have.value', 'amer')
        cy.get(':nth-child(10) > .form-control').should('have.value', 'عامر')
        cy.get(':nth-child(11) > .form-control').should('have.value', 'عامر')
        cy.get(':nth-child(12) > .form-control').should('have.value', 'عامر')
        cy.get(':nth-child(13) > .form-control').should('have.value', 'عامر')
        cy.get('.md-datepicker-input').should('have.value', '01/01/2000')
        cy.get('.col-md-8 > .form-control').should('have.value', '797871585')



    })
    describe('VErify that the Jop title should have these validation', () => {
        it('Verify that the jop title should have labe name jop title', () => {
            cy.get(':nth-child(15) > .control-label').should('contain', 'Job Title ')
        })
        it('Verify that the jop title filed should have star beside label name with red color', () => {
            cy.get(':nth-child(15) > .control-label > span > .fa')
                .should('be.visible')
                .should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('verify that the jop title filed should have placeholder Job Title', () => {
            cy.get(':nth-child(15) > .form-control').should('have.attr', 'placeholder', 'Job Title')
        })
        it('Verify the the jop title field should have attr required', () => {
            cy.get(':nth-child(15) > .form-control').should('have.attr', 'required')
        })
        it('VErify that the jop title field should appear validate message if the user click on submit without fill the field', () => {
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(15) > .help-inline').should('be.visible')
        })
        it('VErify that if the user fill the jop title field should the not appear the validate message', () => {
            cy.get(':nth-child(15) > .form-control').type('IT')
            cy.get(':nth-child(15) > .help-inline').should('not.be.visible')
        })
    })
    describe('Verify that the passport number should have the validation', () => {
        it('Verify that the passport number should have label name passport number', () => {
            cy.get(':nth-child(16) > .control-label').should('contain', 'Passport Number')
        })
        it('Verify that the passport number filed have label Passport number should be exactly same as in your passport', () => {
            cy.get(':nth-child(16) > :nth-child(3)').should('contain', 'Passport number should be exactly same as in your passport')
        })
        it('Verify that the passport number should have the placeholder (passport number)', () => {
            cy.get(':nth-child(16) > .form-control').should('have.attr', 'placeholder', 'Passport Number')
        })
        it('Verify that the passport number should appear validation message if fill one Char and 5 number', () => {
            cy.get(':nth-child(16) > .form-control').type('G23437')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char and 7 number', () => {
            cy.get(':nth-child(16) > .form-control').type('G2343997')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill 7 number without Char', () => {
            cy.get(':nth-child(16) > .form-control').type('4587657')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 6 number', () => {
            cy.get(':nth-child(16) > .form-control').type('ا323437')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char and 5 number with space', () => {
            cy.get(':nth-child(16) > .form-control').type('G34 567')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G6573,3')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G6573,3')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G6573.3')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G6573,3')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G6573/3')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
        it('Verify that the passport number should appear validation message if fill one Char Arabic and 5 number with symbol', () => {
            cy.get(':nth-child(16) > .form-control').type('G879654')
            cy.get('.ins-detail-form > .col-md-12 > .btn-primary').click()
            cy.get(':nth-child(16) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(16) > .form-control').clear()
        })
    })
    describe('Verify that the Passport Attachment  should have these validation', () => {
        it('Verify the the attached field should have label name Passport Attachment', () => {
            cy.get(':nth-child(17) > .control-label').should('contain', 'Passport Attachment')
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload excel file', () => {
            const fixtures = 'c.xlsx'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload word file', () => {
            const fixtures = 'word test.docx'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload excel file', () => {
            const fixtures = 'largpdf.pdf'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload pic png file', () => {
            const fixtures = 'test.png'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload large pic(> 4 mb) file', () => {
            const fixtures = 'largepic.jpg'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload large pic 3.4 mb file', () => {
            const fixtures = 'test3.4.jpg'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload pdf file', () => {
            const fixtures = 'pdftest.pdf'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload large pdf file', () => {
            const fixtures = 'largpdf.pdf'
            cy.get('#attFile').attachFile(fixtures)
            cy.get(':nth-child(17) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })


    })
    describe('Verify that the Passport Issue Date should have these validation', () => {

        it('Verify that the Passport Issue Date should have label name with  ', () => {
            cy.get(':nth-child(18) > .control-label').should('contain', 'Passport Issue Date')
        })
        it('Verify that the Passport Issue Date have placeholder dd/mm/yyyy', () => {
            cy.get(':nth-child(18) > .form-control').should('have.attr', 'md-placeholder', 'dd/mm/yyyy')
        })
        it('Verify that when the user click on the Passport Issue Date field should appear datepicker', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-button').click()
            cy.get('.md-datepicker-calendar').should('be.visible')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()

        })
        it('Verify the Passport Issue Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('2874658723465')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(18) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Issue Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('as/45/qawed')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(18) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Issue Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('00/00/0000')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(18) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Issue Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('15/14/2021')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(18) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Issue Date should have validate message when enter invalid value', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('01/09/2029')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(18) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify that the Passport Issue Date should not accept Valid date', () => {
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('12/05/1999')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(18) > .help-inline').should('not.be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(18) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })

    })
    describe('Verify that the Passport Expiry Date should have these validation', () => {
        it('Verify that the Passport Expiry Date should have label name with  ', () => {
            cy.get(':nth-child(19) > .control-label').should('contain', 'Passport Expiry Date')
        })
        it('Verify that the Passport Expiry Date have placeholder dd/mm/yyyy', () => {
            cy.get(':nth-child(19) > .form-control').should('have.attr', 'md-placeholder', 'dd/mm/yyyy')
        })
        it('Verify that when the user click on the Passport Expiry Date field should appear datepicker', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-button').click()
            cy.get('.md-datepicker-calendar').should('be.visible')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()

        })
        it('Verify the Passport Expiry Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('2874658723465')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(19) > .help-inline').should('be.visible')
                .contains('Please enter passport issue date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Expiry Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('as/45/qawed')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(19) > .help-inline').should('be.visible')
                .contains('Please enter passport expiry date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Expiry Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('00/00/0000')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(19) > .help-inline').should('be.visible')
                .contains('Please enter passport expiry date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Expiry Date should have validate message when enter invalid value and invalid date', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('15/14/2021')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(19) > .help-inline').should('be.visible')
                .contains('Please enter passport expiry date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify the Passport Expiry Date should have validate message when enter invalid value', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('01/09/2029')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(19) > .help-inline').should('be.visible')
                .contains('Please enter passport expiry date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })
        it('Verify that the Passport Expiry Date should not accept Valid date', () => {
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').type('12/05/1999')
            cy.get('.ins-detail-form > .pad-0 > .btn-primary').click()
            cy.get(':nth-child(19) > .help-inline').should('not.be.visible')
                .contains('Please enter passport expiry date')
            cy.get(':nth-child(19) > .form-control > .md-datepicker-input-container > .md-datepicker-input').clear()
        })



    })

})