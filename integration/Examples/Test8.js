
describe('This is child window demo',function()
{
    it('This is demo test',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(e1)
        {
            const url = e1.prop('href')
            cy.log(url)
            cy.visit(url)
        } )
    })
})