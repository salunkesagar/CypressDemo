///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('This is frame Test Case',function()
{
    it('This is demo Test Case',function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentor"]').eq(0).click()
        //cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

    })
})