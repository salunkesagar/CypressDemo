describe('To handle Child Window',function()
{
    it('This is demo test',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshetty')
        cy.go('back')
    })
})