describe('This is my first Test Suit', function()
{
    it('This is my first Test Case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('ProductsLocator')
        cy.get('@ProductsLocator').find('.product').should('have.length',4)
        cy.get('@ProductsLocator').find('.product').eq(1).contains("ADD TO CART").click()
        //cy.get(':nth-child(2) > .product-action').click()
        cy.get(':nth-child(4) > .product-action > button').click()
        cy.log('Hello')
        console.log('world')
        cy.get('@ProductsLocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes("Cashews"))
            {
               cy.wrap($el).find('button').click()
            }
        })
//To grab the text of web element
        cy.get('.brand').then(function(logtext)
        {
            cy.log(logtext.text())
        })


        // To compare value of Web Element

        cy.get('.brand').should('have.text','GREENKART')

        console.log('This is for GIT demo')
        
        
    })
})