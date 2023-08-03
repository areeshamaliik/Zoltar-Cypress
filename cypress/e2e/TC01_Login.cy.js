/// <reference types="cypress"/>

describe("Login",()=>{
    it("sign in",()=>{
        cy.visit("https://zoltar-staging.thecapital.co.za/login/")
        cy.get('input[type="text"]').type("syedzubair95590@gmail.com")
        cy.get('input[type="password"]').type("ABCD123!")
        cy.get('input[type="submit"]').contains("Login").click()
})
})

