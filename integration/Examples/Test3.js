describe('This is my third test suit',function()
{
    it('This is check box verification test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('[for="bmw"]').check().should('be.checked').and('have.value','Option1')
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       cy.get('[type="checkbox"]').check(['option2','option3'])
      
       //Static DropDown
       
       cy.get('select').select('Option2').should('have.value','option2')


       //Dynamic Dropdown

       cy.get('#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($el, index, $list) => {
       
        if($el.text() === "India")
        {
            cy.wrap($el).click()
        }
        
    })
    cy.get('#autocomplete').should('have.value','India')


    //Visible and Invisible Elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Radio Button
    cy.get("input[value='radio2']").check().should('be.checked')

    console.log('This is new line')
    console.log("This is new line 2")



    
    })
})