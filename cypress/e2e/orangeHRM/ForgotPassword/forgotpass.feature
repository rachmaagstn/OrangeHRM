Feature: Forgot Feature

    Scenario: Forgot Password
      Given I visit the URL
      And I should see the homepage
      Then I click the button Forgot Password
      Then I verify forgot password
      And I submit the Username
      Then I click the button Reset Password
      Then I verify Reset Password link sent successfully