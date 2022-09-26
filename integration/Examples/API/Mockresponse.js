describe('This is API Mocking Reponse Test',function()
{
    it('This is demo test',function()
    {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode:200,
            body:[
                {"book_name":"Learn Api testing with Javascript",
                "isbn":"RS592",
                "aisle":"2472575"}]
        }).as('bookRetrieval')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookRetrieval').should(({request,response})=>
        {
            cy.get('tr').should('have.length',response.body.length+1)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
})