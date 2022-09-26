describe('This is API Mocking Reponse Test',function()
{
    it('This is demo test',function()
    {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>
        {
                req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=singh'

                req.continue((res)=>
                {
                    expect(res.statusCode).to.equal(200)
                })
                as('dummyURL')
                cy.get("button[class='btn btn-primary']").click()
                cy.wait('@dummyURL')
        })
    })
})