describe('This is mouse hover test case',function()
{
    it('This is demo test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})  //to handle invisible elements
        cy.url().should('include','top')
    })
})