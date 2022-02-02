/// <reference types="cypress" />
before(() => {
    cy.visit('https://eservices.gig.com.jo')
    cy.contains('Login / Register').click()
    cy.contains("Don't have an account? Create one now!").click()
    cy.wait(1000)
})
describe('Check Validation on Registration page EN', () => {
    describe('Verify that the Nationality should have these validation', () => {
        it('Verify that the nationality field should be have label with name Nationality', () => {
            cy.get('.ng-invalid.ng-valid-max > :nth-child(1) > :nth-child(1) > .control-label').should('contain', 'Nationality')
        })
        it('Verify that the nationality field should exist Star beside the labe with red color', () => {
            cy.get('.ng-invalid.ng-valid-max > :nth-child(1) > :nth-child(1) > .control-label > span > .fa').should('be.visible')
                .and('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the nationality field should by default be Jordanian', () => {
            cy.get(':nth-child(1) > .form-field').should('have.value', 'number:1')
        })
        it('Verify that the nationality field should be mandatory with have attr required', () => {
            cy.get(':nth-child(1) > .form-field').should('have.attr', 'required')
        })
        it('Verify that the nationality field should be mandatory, appear validate  message if not selected', () => {
            cy.get(':nth-child(1) > .form-field').select('--Please select--')
            cy.contains('Send Verification Code').click()
            cy.scrollTo('top')
            cy.get(':nth-child(1) > :nth-child(1) > .help-inline').should('be.visible')
            cy.reload()
        })
        it('Verify that the nationality field should have validate message(Please select nationality) if the not select any correct value', () => {
            cy.get(':nth-child(1) > .form-field').select('--Please select--')
            cy.contains('Send Verification Code').click()
            cy.scrollTo('top')
            cy.get(':nth-child(1) > :nth-child(1) > .help-inline').should('contain', ('Please select nationality'))
            cy.reload()
        })
        it('Verify that if the user select Jordanian the national id should appear', () => {
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('be.visible')
        })
        it('Verify that if the user select Not Jordanian the national id should appear', () => {
            cy.get(':nth-child(1) > .form-field').select('Poland')
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('be.visible')
            cy.reload()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/EN be mandatory (First Name En)', () => {
        it('Verify that if nationality jordanian should appear national id field', () => {
            cy.get(':nth-child(1) > .form-field').select('Jordanian')
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('be.visible')
                .and('contain', 'National ID ')
        })
        it('Verify that The First name in EN should has star beside name of field', () => {
            cy.get(':nth-child(6) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the first name in EN should have label name (first name in English)', () => {
            cy.get(':nth-child(1) > :nth-child(6) > .control-label').should('contain', 'First Name in English')
        })
        it('Verify that the first name in EN should have placeholder (First Name)', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'placeholder', 'First Name')
        })
        it('Verify that the first name in EN should be mandatory', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the first name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@('@')./!$#,+-]*$/")
        })
        it('VErify that the first name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(6) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the first name in En should  be (Please enter valid name in English)', () => {
            cy.get(':nth-child(6) > .help-inline').should('contain', 'Please enter valid first name in English')
        })
        it('Verify that the first name EN should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(6) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(6) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(6) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(6) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(6) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(6) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(6) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(6) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/EN be mandatory (Father Name EN)', () => {
        it('Verify that The Father name in EN should has star beside name of field', () => {
            cy.get(':nth-child(7) > .control-label > .ng-scope > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Father name in EN should have label name (Father name in English)', () => {
            cy.get(':nth-child(1) > :nth-child(7) > .control-label').should('contain', 'Father Name in English')
        })
        it('Verify that the Father name in EN should have placeholder (Father Name)', () => {
            cy.get(':nth-child(7) > .form-control').should('have.attr', 'placeholder', 'Father Name')
        })
        it('Verify that the Father name in EN should be mandatory', () => {
            cy.get(':nth-child(7) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the Father name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(7) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Father name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(7) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Father name in En should  be (Please enter valid name in English)', () => {
            cy.get(':nth-child(7) > .help-inline').should('contain', 'Please enter valid father name in English')
        })
        it('Verify that the Father name EN should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(7) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(7) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(7) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(7) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(7) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(7) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(7) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(7) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/EN be mandatory (Grandfather Name In En)', () => {
        it('Verify that The Middle name in EN should has star beside name of field', () => {
            cy.get(':nth-child(8) > .control-label > .ng-scope > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Middle name in EN should have label name (Grandfather Name In English)', () => {
            cy.get(':nth-child(8) > .control-label').should('contain', 'Grandfather Name in English')
        })
        it('Verify that the Middle name in EN should have placeholder (Grandfather Name)', () => {
            cy.get(':nth-child(8) > .form-control').should('have.attr', 'placeholder', 'Grandfather Name')
        })
        it('Verify that the Middle name in EN should be mandatory', () => {
            cy.get(':nth-child(8) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the Middle name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(8) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Middle name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(8) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .form-control').should('be.visible')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Middle name in En should  be (Please enter valid grandfather name)', () => {
            cy.get(':nth-child(8) > .help-inline').should('contain', 'Please enter valid grandfather name')
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(8) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(8) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(8) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(8) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(8) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(8) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(8) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(8) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/EN be mandatory (Last Name In En)', () => {
        it('Verify that The Last Name in EN should has star beside name of field', () => {
            cy.get(':nth-child(9) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Last Name in EN should have label name (Last Name In English)', () => {
            cy.get(':nth-child(9) > .control-label').should('contain', 'Last Name in English')
        })
        it('Verify that the Last Name in EN should have placeholder (Last Name)', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'placeholder', 'Last Name')
        })
        it('Verify that the Last Name in EN should be mandatory', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the Last Name in En should have this attr "ng-pattern="/^[a-zA-Z _@./!$#,+-]*$/', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Last Name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(9) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Last Name in En should  be (Please enter valid name in English)', () => {
            cy.get(':nth-child(9) > .help-inline').should('contain', 'Please enter valid last name')
        })
        it('Verify that the Last Name In En should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(9) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(9) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(9) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(9) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(9) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(9) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(9) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(9) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/Ar be mandatory (First Name Ar)', () => {
        it('Verify that The First name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(10) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the first name in Ar should have label name (first name in Arabic)', () => {
            cy.get(':nth-child(1) > :nth-child(10) > .control-label').should('contain', 'First Name in Arabic')
        })
        it('Verify that the first name in Ar should have placeholder (First Name)', () => {
            cy.get(':nth-child(10) > .form-control').should('have.attr', 'placeholder', 'الاسم الاول ')
        })
        it('Verify that the first name in Ar should be mandatory', () => {
            cy.get(':nth-child(10) > .form-control').should('have.attr', 'required')
        })
        it('VErify that the first name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(10) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the first name in Ar should  be (Please enter valid first name in arabic)', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('contain', 'Please enter valid first name in Arabic')

        })
        it('Verify that the first name Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(10) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(10) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(10) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(10) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(10) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(10) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(10) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(10) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/Ar be mandatory (father Name Ar)', () => {
        it('Verify that The father name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(11) > .control-label > .ng-scope > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the father name in Ar should have label name (Father Name In Arabic)', () => {
            cy.get(':nth-child(11) > .control-label').should('contain', 'Father Name in Arabic')
        })
        it('Verify that the father name in Ar should have placeholder (father Name)', () => {
            cy.get(':nth-child(11) > .form-control').should('have.attr', 'placeholder', 'أسم الاب')
        })
        it('Verify that the father name in Ar should be mandatory', () => {
            cy.get(':nth-child(11) > .form-control').should('have.attr', 'required')
        })
        it('VErify that the father name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(11) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the father name in Ar should  be (Please enter valid name in Arabic)', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('contain', 'Please enter valid father name in Arabic')

        })
        it('Verify that the father name Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(11) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(11) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(11) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(11) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(11) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(11) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(11) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the father name Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(11) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })

    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/Ar be mandatory (Grandfather Name In Ar)', () => {
        it('Verify that The Grandfather name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(12) > .control-label > .ng-scope > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Grandfather name in Ar should have label name (Grandfather Name In Arabic)', () => {
            cy.get(':nth-child(12) > .control-label').should('contain', 'Grandfather Name in Arabic')
        })
        it('Verify that the Grandfather name in Ar should have placeholder (Grandfather Name)', () => {
            cy.get(':nth-child(12) > .form-control').should('have.attr', 'placeholder', 'اسم الجد ')
        })
        it('Verify that the Grandfather name in Ar should be mandatory', () => {
            cy.get(':nth-child(12) > .form-control').should('have.attr', 'required')
        })
        it('VErify that the Grandfather name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(12) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .form-control').should('be.visible')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Grandfather name in Ar should  be (Please enter valid grandfather name in arabic)', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('contain', 'Please enter valid grandfather name in Arabic')
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(12) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(12) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(12) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(12) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(12) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(12) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(12) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(12) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Jordanian should the 4 part name AR/Ar be mandatory (Last Name In Ar)', () => {
        it('Verify that The Last Name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(13) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Last Name in Ar should have label name (Last Name In Arabic)', () => {
            cy.get(':nth-child(13) > .control-label').should('contain', 'Last Name in Arabic')
        })
        it('Verify that the Last Name in Ar should have placeholder (Last Name)', () => {
            cy.get(':nth-child(13) > .form-control').should('have.attr', 'placeholder', 'اسم العائلة ')
        })
        it('Verify that the Last Name in Ar should be mandatory', () => {
            cy.get(':nth-child(13) > .form-control').should('have.attr', 'required')
        })
        it('VErify that the Last Name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(13) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Last Name in Ar should  be (Please enter valid name in Arabic)', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('contain','Please enter valid last name in Arabic')

        })
        it('Verify that the Last Name In Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(13) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(13) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(13) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(13) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(13) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(13) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(13) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(13) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })

    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name EN be mandatory (First Name En)', () => {
        it('Verify that if nationality not jordanian should the field of the national id modify resident id', () => {
            cy.reload()
            cy.get(':nth-child(1) > .form-field').select('Philippines')
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('be.visible')
                .and('contain', 'Resident ID')
        })
        it('Verify that The First name in EN should has star beside name of field', () => {
            cy.get(':nth-child(6) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the first name in EN should have label name (first name in English)', () => {
            cy.get(':nth-child(1) > :nth-child(6) > .control-label').should('contain', 'First Name in English')
        })
        it('Verify that the first name in EN should have placeholder (First Name)', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'placeholder', 'First Name')
        })
        it('Verify that the first name in EN should be mandatory', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the first name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(6) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@('@')./!$#,+-]*$/")
        })
        it('VErify that the first name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(6) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the first name in En should  be (Please enter valid name in English)', () => {
            cy.get(':nth-child(6) > .help-inline').should('contain', 'Please enter valid first name in English')
        })
        it('Verify that the first name EN should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(6) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(6) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(6) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(6) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(6) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(6) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(6) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
        it('Verify that the first name EN should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(6) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(6) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(6) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name EN be mandatory (Father Name EN)', () => {
        it('Verify that The Father name in EN should has star beside name of field', () => {
            cy.get(':nth-child(7) > .control-label > .ng-scope > .fa').should('not.exist', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Father name in EN should have label name (Grandfather Name in English)', () => {
            cy.get(':nth-child(1) > :nth-child(7) > .control-label').should('contain', 'Father Name in English')
        })
        it('Verify that the Father name in EN should have placeholder (Father Name)', () => {
            cy.get(':nth-child(7) > .form-control').should('have.attr', 'placeholder', 'Father Name')
        })
        it('Verify that the Father name in EN should be mandatory', () => {
            cy.get(':nth-child(7) > .form-control').should('not.have.attr', 'required')
        })
        it('Verify that the Father name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(7) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Father name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(7) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(7) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(7) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(7) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(7) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(7) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(7) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(7) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
        it('Verify that the Father name EN should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(7) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(7) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(7) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name EN be mandatory (Grandfather Name In En)', () => {
        it('Verify that The Grandfather name in EN should has star beside name of field', () => {
            cy.get(':nth-child(8) > .control-label > .ng-scope > .fa').should('not.exist', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Grandfather name in EN should have label name (Grandfather Name In English)', () => {
            cy.get(':nth-child(8) > .control-label').should('contain', 'Grandfather Name in English')
        })
        it('Verify that the Grandfather name in EN should have placeholder (Grandfather Name)', () => {
            cy.get(':nth-child(8) > .form-control').should('have.attr', 'placeholder', 'Grandfather Name')
        })
        it('Verify that the Grandfather name in EN should be mandatory', () => {
            cy.get(':nth-child(8) > .form-control').should('not.have.attr', 'required')
        })
        it('Verify that the Grandfather name in En should have this attr "ng-pattern="/^[a-zA-Z _@("@")./!$#,+-]*$/"', () => {
            cy.get(':nth-child(8) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Grandfather name in En should not appear validate message if the customer not fill value then click next', () => {
            cy.get(':nth-child(8) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(8) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(8) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(8) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(8) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(8) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(8) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(8) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In En should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(8) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(8) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(8) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name EN be mandatory (Last Name In En)', () => {
        it('Verify that The Last Name in EN should has star beside name of field', () => {
            cy.get(':nth-child(9) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Last Name in EN should have label name (Last Name In English)', () => {
            cy.get(':nth-child(9) > .control-label').should('contain', 'Last Name in English')
        })
        it('Verify that the Last Name in EN should have placeholder (Last Name)', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'placeholder', 'Last Name')
        })
        it('Verify that the Last Name in EN should be mandatory', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'required')
        })
        it('Verify that the Last Name in En should have this attr "ng-pattern="/^[a-zA-Z _@./!$#,+-]*$/', () => {
            cy.get(':nth-child(9) > .form-control').should('have.attr', 'ng-pattern', "/^[a-zA-Z _@./!$#,+-]*$/")
        })
        it('VErify that the Last Name in En display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(9) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Last Name in En should  be (Please enter valid name in English)', () => {
            cy.get(':nth-child(9) > .help-inline').should('contain', 'Please enter valid last name')
        })
        it('Verify that the Last Name In En should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(9) > .form-control').type('شستهبلاىتنشسب')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(9) > .form-control').type('Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(9) > .form-control').type('Al-Amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(9) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(9) > .form-control').type('Al = amer')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(9) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(9) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
        it('Verify that the Last Name In En should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(9) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(9) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(9) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name Ar be mandatory (First Name Ar)', () => {
        it('Verify that The First name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(10) > .control-label > span > .fa').should('not.exist', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the first name in Ar should have label name (first name in Arabic)', () => {
            cy.get(':nth-child(1) > :nth-child(10) > .control-label').should('contain', 'First Name in Arabic')
        })
        it('Verify that the first name in Ar should have placeholder (First Name)', () => {
            cy.get(':nth-child(10) > .form-control').should('have.attr', 'placeholder', 'الاسم الاول ')
        })
        it('Verify that the first name in Ar should be mandatory', () => {
            cy.get(':nth-child(10) > .form-control').should('not.have.attr', 'required')
        })
        it('VErify that the first name in Ar should appear validate message if the user not fill value then click next', () => {
            cy.get(':nth-child(10) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the first name in Ar should  be (Please enter valid first name in arabic)', () => {
            cy.get(':nth-child(10) > .help-inline').should('contain', 'Please enter valid first name in Arabic')
        })
        it('Verify that the first name Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(10) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(10) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(10) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(10) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(10) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(10) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(10) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
        it('Verify that the first name Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(10) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(10) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(10) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name Ar be mandatory (Father Name Ar)', () => {
        it('Verify that The Father name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(11) > .control-label > .ng-scope > .fa').should('not.exist')
        })
        it('Verify that the Father name in Ar should have label name (Father name in Arabic)', () => {
            cy.get(':nth-child(1) > :nth-child(11) > .control-label').should('contain', 'Father Name in Arabic')
        })
        it('Verify that the Father name in Ar should have placeholder (Father Name)', () => {
            cy.get(':nth-child(11) > .form-control').should('have.attr', 'placeholder', 'أسم الاب')
        })
        it('Verify that the Father name in Ar should be mandatory', () => {
            cy.get(':nth-child(11) > .form-control').should('not.have.attr', 'required')
        })
        it('VErify that the Father name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(11) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(11) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(11) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(11) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(11) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(11) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(11) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(11) > .form-control')
                .type('a')
                .clear()
                .type('   ')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })
        it('Verify that the Father name Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(11) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(11) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(11) > .form-control').clear()
        })

    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name Ar be mandatory (Grandfather Name In Ar)', () => {
        it('Verify that The Middle name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(12) > .control-label > .ng-scope > .fa').should('not.exist')
        })
        it('Verify that the Middle name in Ar should have label name (Grandfather Name In Arabic)', () => {
            cy.get(':nth-child(12) > .control-label').should('contain', 'Grandfather Name in Arabic')
        })
        it('Verify that the Middle name in Ar should have placeholder (Grandfather Name)', () => {
            cy.get(':nth-child(12) > .form-control').should('have.attr', 'placeholder', 'اسم الجد ')
        })
        it('Verify that the Middle name in Ar should be mandatory', () => {
            cy.get(':nth-child(12) > .form-control').should('not.have.attr', 'required')
        })
        it('VErify that the Middle name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(12) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(12) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(12) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(12) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(12) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(12) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(12) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(12) > .form-control')
                .type('a')
                .clear()
                .type('    ')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
        it('Verify that the Grandfather Name In Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(12) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(12) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(12) > .form-control').clear()
        })
    })
    describe('Verify that if nationality is Not Jordanian should the 2 part name Ar be mandatory (Last Name In Ar)', () => {
        it('Verify that The Last Name in Ar should has star beside name of field', () => {
            cy.get(':nth-child(13) > .control-label > span > .fa').should('not.exist')
        })
        it('Verify that the Last Name in Ar should have label name (Last Name In Arabic)', () => {
            cy.get(':nth-child(13) > .control-label').should('contain', 'Last Name in Arabic')
        })
        it('Verify that the Last Name in Ar should have placeholder (Last Name)', () => {
            cy.get(':nth-child(13) > .form-control').should('have.attr', 'placeholder', 'اسم العائلة ')
        })
        it('Verify that the Last Name in Ar should be mandatory', () => {
            cy.get(':nth-child(13) > .form-control').should('not.have.attr', 'required')
        })
        it('VErify that the Last Name in Ar display message validation in the customer not fill the field and click next', () => {
            cy.get(':nth-child(13) > .form-control').clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the validate message that appear if not fill the Last Name in Ar should  be (Please enter valid name in Arabic)', () => {
            cy.get(':nth-child(13) > .help-inline').should('contain', 'Please enter valid last name in Arabic')
        })
        it('Verify that the Last Name In Ar should have validate message if the user fill Arabic char', () => {
            cy.get(':nth-child(13) > .form-control').type('knajsknd')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not appear validate message if the user fill correct value ', () => {
            cy.get(':nth-child(13) > .form-control').type('عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not appear validate message if the user fill symbol (-) ', () => {
            cy.get(':nth-child(13) > .form-control').type('ال-عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should have validate message if the user fill symbol (\) ', () => {
            cy.get(':nth-child(13) > .form-control').type('/^')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should have validate message if the user fill symbol (=) ', () => {
            cy.get(':nth-child(13) > .form-control').type('ال = عامر')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill symbol (.) ', () => {
            cy.get(':nth-child(13) > .form-control').type('.')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill only space ', () => {
            cy.get(':nth-child(13) > .form-control')
                .type('a')
                .clear()
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('not.be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
        })
        it('Verify that the Last Name In Ar should not have validate message if the user fill number ', () => {
            cy.get(':nth-child(13) > .form-control').type('1')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(13) > .help-inline').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(13) > .form-control').clear()
            cy.reload()
            cy.wait(1000)
        })

    })
    describe('Verify that the national id field should have these Validation', () => {
        it('Verify that the national id should have label name National ID', () => {
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('contain', 'National ID ')
        })
        it('Verify that the national id field should have star in the read color beside label name', () => {
            cy.get(':nth-child(1) > :nth-child(2) > .control-label > span > .fa').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the nation id field should be mandatory', () => {
            cy.get(':nth-child(2) > .form-field').should('have.attr', 'required')
        })
        it('Verify that the national id field should have place holder National/Resident ID', () => {
            cy.get(':nth-child(2) > .form-field').should('have.attr', 'placeholder', 'National/Resident ID')
        })
        it('Verify that the national field should appear validation message if the user not fill the field then click next', () => {
            cy.get(':nth-child(2) > .form-field').type(' ')
            cy.get('.learn-more > .button-text').click()
            cy.scrollTo('top')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('contain', 'Please enter valid National / Resident ID')
        })
        it('Verify that the national id field should appear validate message if the user fill char', () => {
            cy.get(':nth-child(2) > .form-field').type('123453456f')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (-)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345-456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (.)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345.456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (@)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345@456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (/)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345/456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol ())', () => {
            cy.get(':nth-child(2) > .form-field').type('12345)456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (space)', () => {
            cy.get(':nth-child(2) > .form-field').type('12344 456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (>)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345>456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill symbol (<)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345<456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id filed should appear message validation if the user fill number less than 10 number', () => {
            cy.get(':nth-child(2) > .form-field').type('874574567')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id should not appear validate message if the user fill correct number', () => {
            cy.get(':nth-child(2) > .form-field').type('9876789645')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id field should appear message if the user fill exist number', () => {
            cy.get(':nth-child(2) > .form-field').type('9921000955')
            cy.get(':nth-child(6) > .form-control').click()
            cy.get('#alertModal').should('be.visible')
            cy.get('#alertModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the national id should appear popup have name You are already a existing customer please try logging in if fill exist number', () => {
            cy.get(':nth-child(2) > .form-field').type('5866447532')
            cy.get(':nth-child(6) > .form-control').click()
            cy.get('#alertModal').should('be.visible')
            cy.get('#alertModal').should('contain', 'You are already a existing customer please try logging in')
            cy.get('#alertModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            cy.get(':nth-child(2) > .form-field').clear()
        })

    })
    describe('Verify that the Resident ID field should have these Validation', () => {
        it('select not Jordanain', () => {
            cy.get(':nth-child(1) > .form-field').select('Poland')
        })
        it('Verify that the Resident ID should have label name Resident ID', () => {
            cy.get(':nth-child(1) > :nth-child(2) > .control-label').should('contain', 'Resident ID')
        })
        it('Verify that the Resident ID field should have star in the read color beside label name', () => {
            cy.get(':nth-child(1) > :nth-child(2) > .control-label > span > .fa').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Resident ID field should be mandatory', () => {
            cy.get(':nth-child(2) > .form-field').should('have.attr', 'required')
        })
        it('Verify that the Resident ID field should have place holder National/Resident ID', () => {
            cy.get(':nth-child(2) > .form-field').should('have.attr', 'placeholder', 'National/Resident ID')
        })
        it('Verify that the Resident ID field should appear validation message if the user not fill the field then click next', () => {
            cy.get(':nth-child(2) > .form-field').type(' ')
            cy.get('.learn-more > .button-text').click()
            cy.scrollTo('top')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('contain', 'Please enter valid National / Resident ID')
        })
        it('Verify that the Resident ID field should appear validate message if the user fill char', () => {
            cy.get(':nth-child(2) > .form-field').type('123453456f')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (-)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345-456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (.)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345.456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (@)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345@456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (/)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345/456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol ())', () => {
            cy.get(':nth-child(2) > .form-field').type('12345)456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (space)', () => {
            cy.get(':nth-child(2) > .form-field').type('12344 456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (>)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345>456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill symbol (<)', () => {
            cy.get(':nth-child(2) > .form-field').type('12345<456')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID filed should appear message validation if the user fill number less than 10 number', () => {
            cy.get(':nth-child(2) > .form-field').type('874574567')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID should not appear validate message if the user fill correct number', () => {
            cy.get(':nth-child(2) > .form-field').type('9876789645')
            cy.get(':nth-child(1) > :nth-child(2) > .help-inline').should('not.be.visible')
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID field should appear message if the user fill exist number', () => {
            cy.get(':nth-child(2) > .form-field').type('9921000955')
            cy.get(':nth-child(6) > .form-control').click()
            cy.get('#alertModal').should('be.visible')
            cy.get('#alertModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            cy.get(':nth-child(2) > .form-field').clear()
        })
        it('Verify that the Resident ID should appear popup have name You are already a existing customer please try logging in if fill exist number', () => {
            cy.get(':nth-child(2) > .form-field').type('5866447532')
            cy.get(':nth-child(6) > .form-control').click()
            cy.get('#alertModal').should('be.visible')
            cy.get('#alertModal').should('contain', 'You are already a existing customer please try logging in')
            cy.get('#alertModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            cy.get(':nth-child(2) > .form-field').clear()
            cy.reload()
        })

    })
    describe('Verify that the National ID/ Resident ID Attachment  should have these validation', () => {
        it('Verify the the attached field should have label name National ID/ Resident ID Attachment', () => {
            cy.get('.ng-invalid.ng-valid-max > :nth-child(1) > :nth-child(3) > .control-label').should('contain', 'National ID/ Resident ID Attachment')
        })
        it('Verify that the Attachment field should have star in the read color beside label name', () => {
            cy.get('.ng-invalid.ng-valid-max > :nth-child(1) > :nth-child(3) > .control-label > span > .fa').should('be.visible')
            cy.get('.ng-invalid.ng-valid-max > :nth-child(1) > :nth-child(3) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Attachment field should be mandatory', () => {
            cy.get('#nationalidfiless').should('have.attr', 'required')
        })
        it('Verify that the attachment field should appear validation message if the user not fill the field then click next', () => {
            cy.get('.learn-more > .button-text').click()
            cy.scrollTo('top')
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('contain', 'Please upload document In the format of PDF, PNG, JPG (4MB max) ')
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload excel file', () => {
            const fixtures = 'c.xlsx'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload word file', () => {
            const fixtures = 'word test.docx'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload excel file', () => {
            const fixtures = 'largpdf.pdf'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload pic png file', () => {
            const fixtures = 'test.png'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload large pic(> 4 mb) file', () => {
            const fixtures = 'largepic.jpg'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload large pic 3.4 mb file', () => {
            const fixtures = 'test3.4.jpg'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should not appear the validate message if the user tried to upload pdf file', () => {
            const fixtures = 'pdftest.pdf'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })
        it('Verify that the attached field should appear the validate message if the user tried to upload pdf file less than 4Mg', () => {
            const fixtures = 'largpdf.pdf'
            cy.get('#nationalidfiless').attachFile(fixtures)
            cy.get(':nth-child(1) > :nth-child(3) > .help-inline').should('not.be.visible')
            cy.get('.bootstrap-filestyle > .form-control').clear({ force: true })
        })


    })
    describe('Verify that the Gender and Title field should have these validation', () => {
        it('Verify that the gender field have label name Gender', () => {
            cy.get(':nth-child(1) > :nth-child(4) > .control-label').should('contain', ('Gender'))
        })
        it('Verify that the gender field should have star with red color beside the label name', () => {
            cy.get(':nth-child(1) > :nth-child(4) > .control-label > span > .fa-asterisk').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(4) > .control-label > span > .fa-asterisk').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the gender field should have attr required', () => {
            cy.get(':nth-child(4) > .form-field').should('have.attr', 'required')
        })
        it('Verify that the user cant continue without select the gender', () => {
            cy.get(':nth-child(4) > .form-field').select('--Please select--')
            cy.get('.learn-more > .button-text').click()
            cy.scrollTo('top')
            cy.get(':nth-child(4) > .form-field').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(4) > .help-inline').contains('Please enter gender')
            cy.reload()
        })
        it('Verify that the gender field should contain (Mail,Female) ', () => {
            cy.get(':nth-child(4) > .form-field').find('option').then(options => {
                const actual = [...options].map(o => o.value)
                expect(actual).to.deep.eq(['', 'number:1', 'number:2'])
            })
        })
        it('Verify that the user select Mail should appear in the Title filed (Mr,Dr) ', () => {
            cy.get(':nth-child(4) > .form-field').select('number:1')
            cy.get(':nth-child(5) > .form-field').find('option').then(options => {
                const actual = [...options].map(o => o.value)
                expect(actual).to.deep.eq(['', 'number:1', 'number:3'])
            })
        })
        it('Verify that the user select Female should appear in the Title filed (Miss,Mrs,Dr) ', () => {
            cy.get(':nth-child(4) > .form-field').select('number:2')
            cy.get(':nth-child(5) > .form-field').find('option').then(options => {
                const actual = [...options].map(o => o.value)
                expect(actual).to.deep.eq(['', 'number:2', 'number:4', 'number:5'])
            })
        })

        it('Verify that the Title field have label name Title', () => {
            cy.get(':nth-child(5) > .control-label').should('contain', ('Title'))
        })
        it('Verify that the Title field should have star with red color beside the label name', () => {
            cy.get(':nth-child(5) > .control-label > span > .fa').should('be.visible')
            cy.get(':nth-child(5) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Title field should have attr required', () => {
            cy.get(':nth-child(5) > .form-field').should('have.attr', 'required')
        })
        it('Verify that the user cant continue without select the Title', () => {
            cy.reload()
            cy.get('.learn-more > .button-text').click()
            cy.scrollTo('top')
            cy.get(':nth-child(5) > .form-field').should('be.visible')
            cy.get(':nth-child(5) > .help-inline').contains('Please select title')
            cy.reload()
        })

    })
    describe('Verify that the Date Of Birth should have these validation', () => {

        it('Verify that the Date Of Birth date should have label name with  ', () => {
            cy.get(':nth-child(14) > .control-label').should('contain', 'Date Of Birth')
        })
        it('Verify that should appear star beside the Date Of Birth date field and should be in red color', () => {
            cy.get(':nth-child(14) > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Date Of Birth date field should be mandatory and have attr required', () => {
            cy.get('#dobDate').should('have.attr', 'required', 'required')
        })
        it('Verify that should be label User age must be at least ', () => {
            cy.get(':nth-child(14) > :nth-child(3)').should('be.visible')
            cy.get(':nth-child(14) > :nth-child(3)').should('contain', 'User age must be at least ')
        })
        it('Verify that the Date Of Birth date have placeholder dd/mm/yyyy', () => {
            cy.get('#dobDate').should('have.attr', 'md-placeholder', 'dd/mm/yyyy')
        })
        it('Verify that when the user click on the Date Of Birth date field should appear datepicker', () => {
            cy.get('.md-datepicker-input').click()
            cy.get('.md-datepicker-button').should('be.visible')
            cy.get(':nth-child(13) > .form-control').click()
        })
        it('Verify the Date Of Birth date should have validate message when enter invalid value and invalid date', () => {
            cy.get('.md-datepicker-input').type('2874658723465')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify the Date Of Birth date should have validate message when enter invalid value and invalid date', () => {
            cy.get('.md-datepicker-input').type('as/45/qawed')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify the Date Of Birth date should have validate message when enter invalid value and invalid date', () => {
            cy.get('.md-datepicker-input').type('00/00/0000')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify the Date Of Birth date should have validate message when enter invalid value and invalid date', () => {
            cy.get('.md-datepicker-input').type('15/14/2021')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify the Date Of Birth date should have validate message when enter invalid value', () => {
            cy.get('.md-datepicker-input').type('01/09/2029')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify that the Date Of Birth date should not accept date less than 18 years', () => {
            cy.get('.md-datepicker-input').type('01/09/2022')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })
        it('Verify that the Date Of Birth date should not accept Valid date', () => {
            cy.get('.md-datepicker-input').type('12/05/1999')
            cy.get('.learn-more > .button-text').click()
            cy.get(':nth-child(14) > .help-inline').should('not.be.visible')
                .contains('Please select valid date of birth')
            cy.get('.md-datepicker-input').clear()
        })



    })
    describe('Verify that the Country Code and mobile number  should have these validation', () => {
        it('Verify that the Country Code should have labe name Country Code', () => {
            cy.get('.col-md-4 > .control-label').should('be.visible')
            cy.get('.col-md-4 > .control-label').should('contain', 'Country Code')
        })
        it('Verify that the Country Code field should have star beside the label name', () => {
            cy.get('.col-md-4 > .control-label > span > .fa').should('be.visible')
            cy.get('.col-md-4 > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the Country Code field should by default select jordan country', () => {
            cy.get('#select_option_6').should('have.attr', 'selected', 'selected')
            cy.contains('+962').should('be.visible')
        })
        it('Verify that the flag should appear beside the country code', () => {
            cy.get('#select_value_label_0 > :nth-child(1) > .md-text > img').should('have.attr', 'src', 'https://uatdataservices.gig.com.jo:84/image/flags/jo.png')
        })
        it('Verify that the user cant continue without select country code', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get('.col-md-4 > .help-inline').should('not.be.visible')
        })
        it('Verify that the user cant continue without select country code', () => {

            cy.get('.learn-more > .button-text').click()
            cy.get('.col-md-4 > .help-inline').should('not.be.visible')
        })
        it('Verify that the user cant continue without select country code', () => {
            cy.get(':nth-child(1) > .form-field').select('Philippines')
            cy.get('.col-md-4 > .help-inline').should('be.visible')
            cy.reload()
        })
        it('Verify that the country code field should have validate message if the user click next without fill the code', () => {
            cy.get(':nth-child(1) > .form-field').select('Philippines')
            cy.get('.learn-more > .button-text').click()
            cy.get('.col-md-4 > .help-inline').should('be.visible')
            cy.get('.col-md-4 > .help-inline').should('contain', 'Please select phone code')
            cy.reload()
        })
        it('Verify that the mobile number should have labe name Mobile Number', () => {
            cy.get('.col-md-8 > .control-label').should('be.visible')
            cy.get('.col-md-8 > .control-label').should('contain', 'Mobile Number ')
        })
        it('Verify that the Country Code field should have star beside the label name', () => {
            cy.get('.col-md-8 > .control-label > span > .fa').should('be.visible')
            cy.get('.col-md-8 > .control-label > span > .fa').should('have.attr', 'style', 'font-size:8px;color:red')
        })
        it('Verify that the mobile number field should have placeholder 7XXXXXXXX', () => {
            cy.get('.col-md-8 > .form-control').should('have.attr', 'placeholder', '7XXXXXXXX')
        })
        it('Verify that the mobile number field should have attr ng-pattern (/^[7][0-9]{8}$/)', () => {
            cy.get('.col-md-8 > .form-control').should('have.attr', 'ng-pattern', '/^[7][0-9]{8}$/')
        })
        it('Verify that the mobile number field should have attr required', () => {
            cy.get('.col-md-8 > .form-control').should('have.attr', 'required')
        })
        it('Verify that the user cant continue without fill the mobile number', () => {
            cy.get('.learn-more > .button-text').click()
            cy.get('.col-md-8 > .help-inline').should('be.visible')
        })
        it('Verify that the validate message of mobile number should be Please enter valid mobile number', () => {
            cy.get('.col-md-8 > .help-inline').should('contain', 'Please enter valid mobile number')
        })
        it('Verify that the mobile number field should have placeholder xxxxxxxxx if nationality is non jordanian', () => {
            cy.get(':nth-child(1) > .form-field').select('Philippines')
            cy.get('.learn-more > .button-text').click()
            cy.get('.col-md-8 > .form-control').should('have.attr', 'placeholder', 'XXXXXXXXX')
            cy.reload()
        })
        describe('Verify that if the nationality is Jordanian', () => {

            it('Verify that if the user fill char with number should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('amer2345')
                cy.contains('amer2345').should('not.exist')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787585/) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('797871585/')
                cy.contains('797871585/').should('not.exist')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787585-) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787585-')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787-155) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('797871-585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787155-) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79771-585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (797871.55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787.585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79781(55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787(585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (797871+55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787+585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill space with number (797871 55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787 585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill space witout number (       ) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('         ')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with 8 should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('897875865')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with 9  should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('997875865')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with 0 should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('077875865')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with +962797871585 should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('+962797871585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill less than 9 number should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('79787158')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill correct mobile number should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('797871585')
                cy.get('.col-md-8 > .help-inline').should('not.be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
        })
        describe('Verify that if the nationality is non Jordanian', () => {
            it('change the nationality to non jordanian', () => {
                cy.get(':nth-child(1) > .form-field').select('Philippines')
                cy.get('#select_2').click()
                cy.get('#select_option_7').contains('+357')
                    .click()
                cy.get('.col-md-8 > .form-control').click({ force: true })

            })
            it('Verify that if the user fill char with number should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("amer2345")
                cy.contains('amer2345').should('not.exist')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787585/) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("797871585/")
                cy.contains('797871585/').should('not.exist')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (-97978758) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type('{shift}_79787585')
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787-155) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("797871_585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79787155_) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("79771-585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (797871.55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("79787.585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (79781(55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("79787(585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill symbol (797871+55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("79787+585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill space with number (797871 55) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("79787 585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill space without number (       ) should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("         ")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with 8 should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("897875865")
                cy.get('.col-md-8 > .help-inline').should('not.be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with 12  should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("997875456865")
                cy.get('.col-md-8 > .help-inline').should('not.be.visible')
                cy.get('.col-md-8 > .form-control').clear()

            })
            it('Verify that if the user fill the first number with 0 should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("077875865")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill the first number with +962797871585 should appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("+962797871585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill less than 9 number should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("797158")
                cy.get('.col-md-8 > .help-inline').should('not.be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill correct more than 10 and less 15 number should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("54876548795487")
                cy.get('.col-md-8 > .help-inline').should('not.be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })
            it('Verify that if the user fill more than 14 number should not appear validate message', () => {
                cy.get('.col-md-8 > .form-control').type("797871746456589585")
                cy.get('.col-md-8 > .help-inline').should('be.visible')
                cy.get('.col-md-8 > .form-control').clear()
            })


        })
    })
})
