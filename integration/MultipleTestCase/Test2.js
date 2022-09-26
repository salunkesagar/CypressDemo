

describe('My second Test Suit',function()
{

    it('This is second test',function() 
    {
        cy.visit('https://rahulshettyacademy.com/')
        cy.get('.search-keyword').type('ca')
            cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {
                 const vegText = $el.find('h4.product-name').text()
                   if(vegText.includes('Carrot'))
                      {
                          cy.wrap($el).find('button').click()
       
                       }
                 })
                 cy.get('.cart-icon > img').click()
                 cy.contains('PROCEED TO CHECKOUT').click();
                 //cy.get(':nth-child(14)').click()
                 //cy.get('button:visible').click()
                 cy.contains('Place Order').click()
    })
})

