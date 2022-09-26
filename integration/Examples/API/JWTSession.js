///<reference types ='cypress'/>
//const cypress = require('cypress')
const neatCSV = require('neat-csv')
//import neatCSV from 'neat-csv';
describe('This is TestCase to inject JWT session Token',function()
{
    it('This is demo test case',function()
    {
        cy.LoginAPI().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad: function (window) {

                    window.localStorage.setItem('token',Cypress.env('token'))
                    
                }
                    
                
            })
        })

        cy.get('.card-body button:last-of-type ').eq(1).click()
        cy.get("[routerlink='/dashboard/cart']").click()
        cy.contains('Checkout').click()
       
        cy.get("[placeholder*='Country']").type('ind')
        cy.wait(2000)
        cy.get('.ta-results button').each(($el,index,$list) =>
        {
            const actualText = $el.text()

            if(actualText.trim() == "India")
            {
                cy.wrap($el).click()
            }

        })
        cy.get('.action__submit').click();
        cy.wait(2000)
        cy.get('.btn-primary').click()

        cy.readFile(Cypress.config('fileServerFolder')+ "cypress\downloads\order-invoice_salunkesagarg.csv").then(async (text) =>
        {
            const csv = await neatCSV(text)
            console.log(csv)
        })
    })
})