import { signup } from "../src/registration"
import data from "../fixtures/validData.json"
const {validEmail, validName} = data.userInfo
const {usa, uk, germany} = data.yourProfile.country
const {password} = data.yourProfile
const{emailValidationCode} = data
const [email, domain] = validEmail.split('@')
const Email = `${email}${Math.ceil(Math.random() * 1000)}@${domain}`
describe('PPOC Club', () => {
   
    it('Verify if the user is signed up with valid data.', () => {
        cy.visit('/apply?code=SGFAMILY')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        signup.name(validName)
        signup.email(Email)
        signup.setUpMyAccountBtn()
        signup.yourProfileData(usa, password)
        signup.emailVerification(emailValidationCode)

        // cy.get('select:nth-child(1)').select(germany)
        // cy.get('input[type="password"]').type('Admin@123')
        // cy.get('input[type="checkbox"]').check()
        
    })
})