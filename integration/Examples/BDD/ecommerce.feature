Feature: End to end Ecommerce validation
@Regression
Scenario: Ecommerce product delivery
Given Open Encommerce home page
When Add items to cart
And Validate total price
Then Select country & verify message

@Smoke
Scenario: Filling the form to shop
Given Open Encommerce home page
When Fill the form details
    |name| |gender|
    |Tom|  |Male|
Then Validate the form details
And Click on shop page

   