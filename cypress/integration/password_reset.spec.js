///<reference types = "cypress"/>


describe("Password reset request", () => {
    const serverId = "rtnpjm6a"
    const serverDomain = "rtnpjm6a.mailosaur.net"
    const emailAddress = "anything@"+serverDomain
    let verifyEmail

    it('It should  be possible to request a reset', () => {
        cy.visit("https://example.mailosaur.com/signup")
        cy.get('#firstName').type("John")
        cy.get('#lastName').type("Smith")
        cy.get("#email").type(emailAddress)
        cy.contains(/Sign up/).click()

        cy.mailosaurGetMessage(serverId, {
            sentTo : emailAddress
        }).then(email => {
            // expect(email.subject).to.equal("Welcome to ACME Product!")
            verifyEmail = email.html.links[0].href
        })
    })

    it("Should allow the setting of new password", () => {
        let validPassword = "Abc@123*"
        cy.visit(passwordResetLink)
        // cy.get("#password").type(validPassword)
        // cy.get("#confirmPassword").type(validPassword)
        // cy.get('form').submit()
    })
})