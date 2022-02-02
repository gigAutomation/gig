/// <reference types="cypress" />

describe('Login page Design', () => {

    describe('Login page design EN', () => {
        it('open URL: gig', () => {
            cy.visit('https://stgcorporatesportal.gig.com.jo/')
        })
        it('Name', () => {
            cy.get('.col-lg-7 > h4').should('be.visible')
            cy.get('.col-lg-7 > h4').should('include.text', 'Manage Your Account')
        })
        it('gig-Logo', () => {
            cy.get('.banner-logo').should('be.visible')
            cy.get('.banner-logo').should('have.attr', 'src', '/Content/img/gig_logo.png')
        })
        it('Email box', () => {
            cy.get('#Email')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Email')
                .and('have.attr', 'data-val-email', 'The Email field is not a valid e-mail address.')
        })
        it('Password box', () => {
            cy.get('#Password')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Password')
                .and('have.attr', 'type', 'password')
                .click()
            cy.get('.my-toggle').should('be.visible')
        })
        it('remember me', () => {
            cy.get('#RememberMe').should('exist')
                .and('have.attr', 'type', 'checkbox')
        })
        it('Forgot Password', () => {
            cy.get('a > strong').should('exist')
        })
        it('Captcha Image', () => {
            cy.get('#CaptchaImage').should('be.visible')
                .and('have.attr', 'src')

        })
        it('Captcha refresh', () => {
            cy.get('#aa12bc70845048ad801cd6d78a070762').should('not.exist')
        })
        it('Login button', () => {
            cy.get('.btn_1').should('exist')
                .and('have.attr', 'type', 'button')
                .and('have.attr', 'value', 'Login')
        })
        it('Language AE/EN', () => {
            cy.get('.display-flex-center').should('exist')
                .and('have.attr', 'title', 'Language')
        })
    })
    describe('Login page Design AR', () => {

        it('open URL: gig', () => {
            cy.visit('https://stgcorporatesportal.gig.com.jo/')
            cy.get('.display-flex-center').click()
        })
        it('Name', () => {
            cy.get('.col-lg-5 > h4').should('contain', 'ادارة حسابك')
            cy.get('.col-lg-5 > h4').should('exist')
        })
        it('gig-Logo', () => {
            cy.get('.banner-logo').should('be.visible')
            cy.get('.banner-logo').should('have.attr', 'src', '/Content/img/gig_logo.png')
        })
        it('Email box', () => {
            cy.get('#Email')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'البريد الالكتروني')
                .and('have.attr', 'data-val-email', 'The Email field is not a valid e-mail address.')
        })
        it('Password box', () => {
            cy.get('#Password')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'كلمة المرور')
                .and('have.attr', 'type', 'password')
                .click()
            cy.get('.my-toggle').should('be.visible')
        })
        it('remember me', () => {
            cy.get('#RememberMe').should('exist')
                .and('have.attr', 'type', 'checkbox')
            cy.contains('تذكرني').should('exist')
        })
        it('Forgot Password', () => {
            cy.get('a > strong').should('exist')
            cy.contains('نسيت رمز المرور؟').should('exist')
        })
        it('Captcha Image', () => {
            cy.get('#CaptchaImage').should('be.visible')
                .and('have.attr', 'src')
            cy.contains('ادخل النص').should('exist')
        })
        it('Captcha refresh', () => {
            cy.get('#aa12bc70845048ad801cd6d78a070762').should('not.exist')
            cy.contains('تغيير').should('exist')
        })
        it('Login button', () => {
            cy.get('.btn_1').should('exist')
                .and('have.attr', 'type', 'button')
                .and('have.attr', 'value', 'تسجيل الدخول')
        })
        it('Language AE/EN', () => {
            cy.get('.display-flex-center').should('exist')
                .and('have.attr', 'title', 'اللغة')
        })
    })
})

describe('Check Login Page Validation', () => {
    describe('Checking Email Validation', () => {
        it('open URL', () => {
            cy.visit('https://stgcorporatesportal.gig.com.jo/')
        })
        describe('Email (EN)', () => {
            it('Verify that the email field is required and the type is text', () => {
                cy.get('#Email').should('have.attr', 'data-val-required', 'The Email field is required.')
                    .and('have.attr', 'required', 'required')
                    .and('have.attr', 'type', 'text')
            })
            it('Verify that the validate message will not be visible in first try', () => {
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
            })
            it('Verify that the validate message will be visible if fill incorrect data', () => {
                cy.get('.btn_1').click()
                cy.get(':nth-child(2) > .arrow > .error').should('be.visible')
            })
            it('Verify that the validate message should be contain', () => {
                cy.contains('Invalid email address').should('be.visible')
            })
            it('Verify that when the user fill incorrect data should the validate message appear', () => {
                cy.get('#Email').type('test@test')
                cy.get('.btn_1').click()
                cy.contains('Invalid email address').should('exist')
            })
            it('Verify that if the user fill correct data should the validate message not appear', () => {
                cy.get('#Email').clear()
                cy.get('#Email').type('test@test.com')
                cy.get('.btn_1').click()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
            })
            it('Verify that when the user reload the page should all the validate message not appear', () => {
                cy.reload()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
        })
        describe('Email (AR)', () => {
            it('Verify that the email field should be required and type is text', () => {
                cy.get('.display-flex-center').click()
                cy.get('#Email').should('have.attr', 'data-val-required', 'The Email field is required.')
                    .and('have.attr', 'required', 'required')
                    .and('have.attr', 'type', 'text')
            })
            it('Verify that the validate message should not appear in the first try', () => {
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
            })
            it('Verify that the validate message should be appear if fill incorrect data', () => {
                cy.get('.btn_1').click()
                cy.get(':nth-child(2) > .arrow > .error').should('be.visible')
            })
            it('Verify that the validate message should contain', () => {
                cy.contains('البريد الالكتروني غير صحيح').should('be.visible')
            })
            it('Verify that the validate message should appear if the user fill incorrect data', () => {
                cy.get('#Email').type('test@test')
                cy.get('.btn_1').click()
                cy.contains('البريد الالكتروني غير صحيح').should('be.visible')
            })
            it('Verify that when the customer fill correct data should the validate message not appear', () => {
                cy.get('#Email').clear()
                cy.get('#Email').type('test@test.com')
                cy.get('.btn_1').click()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
            })
            it('Verify that if the user reload the page should all the validate message not appear', () => {
                cy.reload()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
        })
    })
    describe('Checking Password Validation', () => {
        describe('Password (EN)', () => {
            it('Change Language to EN', () => {
                cy.get('.display-flex-center').click()
            })
            it('Verify that the email field is required and the type is password', () => {
                cy.get('#Password').should('class', 'hideShowPassword-hidden')
                    .and('have.attr', 'required', 'required')
                    .and('have.attr', 'type', 'password')
            })
            it('Verify that the validate message will not be visible in first try', () => {
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
            it('Verify that the validate message will be visible if fill incorrect data', () => {
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('be.visible')
            })
            it('Verify that the validate message should be contain', () => {
                cy.contains('This field is required.').should('be.visible')
            })
            it('Verify that when the user fill incorrect data should the validate message appear', () => {
                cy.get('#Password').type('test')
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('exist')
                cy.contains('Please enter at least 6 characters.').should('be.visible')
            })
            it('Verify that if the user fill correct data should the validate message not appear', () => {
                cy.get('#Password').clear()
                cy.get('#Password').type('123654')
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
            it('Verify that when the user reload the page should all the validate message not appear', () => {
                cy.reload()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
        })
        describe('Password (AR)', () => {
            it('change Language to AR', () => {
                cy.get('.display-flex-center').click()
            })
            it('Verify that the email field should be required and type is password', () => {
                cy.get('#Password').should('class', 'hideShowPassword-hidden')
                    .and('have.attr', 'required', 'required')
                    .and('have.attr', 'type', 'password')
            })
            it('Verify that the validate message will not be visible in first try', () => {
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
            it('Verify that the validate message will be visible if fill incorrect data', () => {
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('be.visible')
            })
            it('Verify that the validate message should be contain: كلمة المرور مطلوبة', () => {
                cy.contains('كلمة المرور مطلوبة').should('be.visible')
            })
            it('Verify that when the user fill incorrect data should the validate message appear: الرجاء إدخال 6 أحرف على الأقل', () => {
                cy.get('#Password').type('test')
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('exist')
                cy.contains('الرجاء إدخال 6 أحرف على الأقل').should('be.visible')
            })
            it('Verify that if the user fill correct data should the validate message not appear', () => {
                cy.get('#Password').clear()
                cy.get('#Password').type('123456')
                cy.get('.btn_1').click()
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
            it('Verify that when the user reload the page should all the validate message not appear', () => {
                cy.reload()
                cy.get(':nth-child(2) > .arrow > .error').should('not.exist')
                cy.get('.hideShowPassword-wrapper > .arrow > .error').should('not.exist')
            })
        })
    })
    describe('Checking Captcha EN', () => {
        describe('Captcha (EN)', () => {

        })
        describe('Captcha (AR)', () => {

        })
    })
})
