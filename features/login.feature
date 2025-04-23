Feature: User Authentication
    Scenario: Successful Login
      Given the user is on the login page
      When the user enters a valid email address "test@example.com"
      And the user enters a valid password "password123"
      And the user clicks the "Login" button
      Then the user should be logged in