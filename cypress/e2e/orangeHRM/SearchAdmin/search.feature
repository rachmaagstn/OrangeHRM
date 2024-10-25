Feature: Search Feature
    
    Scenario: Search in Admin page
        Given I visit the URL
        And I should see the homepage
        When I submit the Username
        And I submit the Password
        Then I click the button Login
        Then I verify login success
        Given I open the Admin page
        And I should see the Admin page
        Then I search Username
        And I search User Role
        Then I select User Role
        And I search User Status
        Then I select User Status
        Then I click button Search
        Then I verify search success