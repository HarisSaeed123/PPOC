import selector from "../fixtures/locators.json"

const { nameField, emailId, setUpMyAccount, validationMessage, invalidEmailIdText, countryDropDown, passwordField, confirmPrivacyTerms, emailVerification} = selector

export class registration {

    name(username) {
        cy.xpath(nameField).type(username)
    }

    email(Email) {
        cy.xpath(emailId).type(Email)
        
    }

    setUpMyAccountBtn(){
        cy.xpath(setUpMyAccount).click()
    }


    namevalidationMessage(validation) {
        cy.xpath(validationMessage).then($errorMsg => {
            let errorMsg = $errorMsg.text()
            if (errorMsg.includes("The name field is required.")) {
                cy.get($errorMsg).should('contain', validation)
            } else {
                cy.contains(validation)
            }
        })
    }

    emailvalidationMessage(validation) {
        cy.xpath(validationMessage).then($errorMsg => {
            let errorMsg = $errorMsg.text()
            if (errorMsg.includes("The email field is required.")) {
                cy.get($errorMsg).should('contain', validation)
            } else if (errorMsg.includes("The email must be a valid email address.")) {
                cy.get($errorMsg).should('contain', validation)
            } else {

            }
        })
    }

    yourProfileData(Country, Password) {
        cy.xpath(countryDropDown).select(Country).should("be.visible", Country)
        cy.xpath(passwordField).type(Password)
        cy.xpath(confirmPrivacyTerms).click()
        cy.contains(/save/i).click()
    }

    emailVerification(code){
        cy.xpath(emailVerification).type(code)
    }
}
export const signup = new registration()