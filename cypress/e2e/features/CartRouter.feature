Feature: Computer Village Website Automation Test

    Background: Open Computer Village Website
        Given open computer village website


    Scenario: Cart a Router
        When Click Offers
        And Click Special Router Offer
        And Click Router Model Number
        And Increase Qty
        And Router Add To Cart
        And Click Shopping to Cart