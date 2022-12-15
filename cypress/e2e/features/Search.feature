Feature: Computer Village Website Automation Test

    Background: Open Computer Village Website
        Given open computer village website
        When Click in My Account
        And Write Your Email
        And Write Your Password
        And Mark Checkbox
        And Click Login
        And Contain to Show


    Scenario: Search Anything
        When Click Search Bar
        And Click Search Icon