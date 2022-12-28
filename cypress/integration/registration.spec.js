
import { signup } from "../src/registration"
import data from "../fixtures/validData.json"
import invalidData from "../fixtures/invalidData.json"
import validationMsg from "../fixtures/validation.json"
const { validName, validEmail } = data.userInfo
const { invalidName, invalidEmail } = invalidData
const {nameFieldValidation, emailFieldValidation, invalidNameValidationMsg, invalidEmailValidationMsg} = validationMsg.signUp
const[email, domain] = validEmail.split('@')
const Email = `${email}${Math.ceil(Math.random()*1000)}@${domain}`
describe('PPOC club', () => {
    // beforeEach('', () => {
    //     cy.visit('/apply?code=SGFAMILY')
    //     Cypress.on('uncaught:exception', (err, runnable) => {
    //         // returning false here prevents Cypress from
    //         // failing the test
    //         return false
    //     })
    // })
    

    it('Verify that the user gets the validation message if the user tries to to sign up without providing Name and valid  Email.', () => {
      
        signup.name('{enter}')
        signup.email('{enter}')
        signup.setUpMyAccountBtn()
        signup.namevalidationMessage(nameFieldValidation)
        signup.emailvalidationMessage(emailFieldValidation)

    })

    it('Verify that the user gets validation message if the user provides Name but fails to provide valid Email.', () => {
        signup.name(validName)
        signup.setUpMyAccountBtn()
        signup.emailvalidationMessage(emailFieldValidation)

    })


    it('Verify that the user gets validation message if he provides valid email but fails to provide Name.', () => {
        signup.email(Email)
        signup.setUpMyAccountBtn()
        signup.namevalidationMessage(nameFieldValidation)
    })

    it('Verify that user gets validation message when he provides invalid name and invalid email.', () => {
        signup.name(invalidName)
        signup.email(invalidEmail)
        signup.setUpMyAccountBtn()
        signup.emailvalidationMessage(invalidEmailValidationMsg)
        signup.namevalidationMessage(invalidNameValidationMsg)
    })

    it('Verify that user gets validation message when he provides valid name and  invalid email.', () => {
        signup.name(validName)
        signup.email(invalidEmail)
        signup.setUpMyAccountBtn()
        signup.emailvalidationMessage(invalidEmailValidationMsg)
    })

    it('Verify that user gets validation message when he provides invalid name and vaild email.', () => {
        signup.name(invalidName)
        signup.email(validEmail)
        signup.setUpMyAccountBtn()
        signup.namevalidationMessage(invalidNameValidationMsg)
    })
})