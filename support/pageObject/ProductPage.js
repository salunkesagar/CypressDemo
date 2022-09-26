class ProductPage
{
    getShop()
    {
        return  cy.get(':nth-child(2) > .nav-link')
    }

    getCheckout()
    {
        return cy.get('a.nav-link.btn.btn-primary')
    }

    getValue()
    {
        return cy.get('h3 > strong')
    }
    getButton()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }

    getEditor()
    {
        return cy.get('#country')
    }

    selectCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    selectCheckBox()
    {
        return cy.get('.checkbox')
    }

    selectPurchase()
    {
        return cy.get('.ng-untouched > .btn')
    }
    getAlert()
    {
        return cy.get('.alert')
    }

    getPrice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalAmount()
    {
        return cy.get('h3 > strong')
    }
}

export default ProductPage