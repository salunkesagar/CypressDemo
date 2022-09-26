
import HomePage from '../../support/pageObject/HomePage'
import ProductPage from '../../support/pageObject/ProductPage'
describe('This is frameworktest one',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
                this.data = data
        })
    })
    it('This frameworkdemo ',function()
    {

        const homePage = new HomePage()
        const productPage = new ProductPage()
        var sum =0
        cy.visit(Cypress.env('url'))
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getEditor().should('have.value',this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        homePage.getRadioButton().should('be.disabled')
       
        
      // homePage.getShop().click()
      productPage.getShop().click()

        this.data.productName.forEach(function(element)
        {
            cy.SelectProduct(element)
        });

        productPage.getCheckout().click()
        productPage.getPrice().each(($el, index, $list) =>
        {
            const res = $el.text()
            var amount = res.split(" ")
            amount = amount[1].trim() 
            cy.log(amount)

            sum = Number(sum) + Number(amount)
           // cy.log(sum)const res = $el.text()
            var amount = res.split(" ")
            amount = amount[1].trim() 
        }).then(function()
        {
            cy.log(sum)
        })
        productPage.getTotalAmount().then(function(element)
        {
            const res = element.text()
            var total = res.split(" ")
            total = total[1].trim() 
            expect(Number(total)).to.equal(sum)
        })
        
        //
       productPage.getButton().click()
       productPage.getEditor().type('India')
       productPage.selectCountry().click()
       productPage.selectCheckBox().click()
       productPage.selectPurchase().click()
       productPage.getAlert().then(function(element)
       {
           const actualText = element.text()
           expect(actualText.includes('Success')).to.be.true
       })
        
    })
})