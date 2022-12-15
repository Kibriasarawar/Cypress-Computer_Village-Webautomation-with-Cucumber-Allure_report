Feature: Computer Village Website Automation Test

    Background: Open Computer Village Website
        Given open computer village website
        When Click in My Account
        And Write Your Email
        And Write Your Password
        And Mark Checkbox
        And Click Login
        And Contain to Show


    Scenario: Upload picture and edit profile
        When click manage profile
        And write your phone number
        And enter pass
        And confirm pass
        And Click Adress
        And Select Country
        And Search Country
        And type city
        And type postal code
        And click update profile