///<reference types ="Cypress"/>
import HomePage from '../../../../support/pageObject/HomePage'
import ProductPage from '../../../../support/pageObject/ProductPage'
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()
const productPage = new ProductPage()
let name 
var sum =0

Given('Open Encommerce home page',()=>
{
    cy.visit(Cypress.env('url'))
})
When('Add items to cart', function()
{
    productPage.getShop().click()

        this.data.productName.forEach(function(element)
        {
            cy.SelectProduct(element)
        });

        productPage.getCheckout().click()
})

And('Validate total price',()=>
{
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
})


Then('Select country & verify message', ()=>
{
    productPage.getButton().click()
    productPage.getEditor().type('India')
    //productPage.selectCountry().click()
    productPage.selectCheckBox().click()
    productPage.selectPurchase().click()
    productPage.getAlert().then(function(element)
    {
        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})


When('Fill the form details', function(dataTable)
{
        name = dataTable.rawTable[1][0]
         homePage.getName().type(dataTable.rawTable[1][0])
         homePage.getGender().select(dataTable.rawTable[1][1])

})

Then('Validate the form details',function()
{
         homePage.getEditor().should('have.value',name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
         homePage.getRadioButton().should('be.disabled')
         Cypress.config('defaultCommandTimeout',8000)
})

And('Click on shop page',function()
{
          productPage.getShop().click()
})

