Feature: Admin Feature

    Scenario: Admin page with login
      Given I visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
      Given I open the Admin page
      And I should see the Admin page
      Then I click the button Add
      Then I should see the Add page
      When I select User Role
      Then I click User Role
      Then I input Employee Name
      When I select Status
      Then I click Status
      Then I type Username
      And I type Password
      Then I type Confirm Password
      Then I click button Save
      Then I verify add data success