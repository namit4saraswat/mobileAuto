Feature: Login into app

Background:
  Given Validate app is launched

@login
Scenario: Login into the app  
  When I Login into account
  Then I see success message