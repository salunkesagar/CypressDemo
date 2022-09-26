class HomePage
{
    getName()
    {
        return  cy.get("input[name='name']:nth-child(2)")
    }
    getGender()
    {
        return cy.get('select')
    }
    getEditor()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getRadioButton()
    {
        return cy.get('#inlineRadio3')
    }

    getShop()
    {
        return  cy.get(':nth-child(2) > .nav-link')
    }


}

export  default HomePage