Feature: LandingPage Functionality

  This Feature tests login scenarios

  Background:
    Given the user is on the landing page

  Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
    Then the user shall see the employee dashboard

Scenario: As a TOH user, I want to navigate to the dashboard in order to see the top 4 Heroes displayed
    Given the user is on the landing page
    Then the user shall see the top 4 heroes

  Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
    Given the user is on the landing page
    When the user clicks on bombasto
    Then the user is redirected to heroes page

  Scenario: As a TOH user, I want to navigate to the heroes page in order to see 8 heroes
    Given the user is on the landing page
    When the user clicks on the heroes button
    Then the user is redirected to the <Page>

  Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
    Given the user is on the heroes page
    When the user clicks on the delete button on a hero
    Then the hero is deleted

  Scenario: As a TOH user, I want to add a hero in order to see the hero list increase
    Given the user is on the heroes page
    When the user types input box <NewHero> and clicks the add hero button
    Then a new hero is added to the hero list and the number of heroes increase

  Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
    Given the user is on the heroes page
    When the user clicks on the add hero button without inputting a HeroName
    Then nothing happens

# Feature: LandingPage Functionality 1

#   This Feature tests login scenarios

#   Background:
#     Given the user is on the landing page

#   Scenario: As a TOH user, I want to navigate to the landing page in order to see the dashboard
#     Then the user shall see the employee dashboard


# Feature: Dashboard Top 4 Heroes Functionality 1

  # This feature tests if the top 4 heroes are displayed on the dashboard

  # Background:
  #   Given the user is on the landing page

  # Scenario: As a TOH user, I want to navigate to the dashboard in order to see the top 4 Heroes displayed
  #   Then the user shall see the top 4 heroes

# Feature: Dashboard Top 4 Heroes Functionality 2

#   This feature tests if the top 4 heroes are displayed on the dashboard

#   Background:
#     Given the user is on the landing page

#   Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
#     When the user clicks on a <HeroName>
#     Then the user is redirected to <Page>
#     Examples:
#       | HeroName  | Page                                |
#       | "Magneta" | "http://localhost:4200/detail/15"  |

# Feature: Dashboard Top 4 Heroes Functionality 3

#   This feature tests if the top 4 heroes are displayed on the dashboard

#   Background:
#     Given the user is on the landing page

#   Scenario: As a TOH user, I want to navigate to the heroes page in order to see 8 heroes
#     When the user clicks on the heroes button
#     Then the user is redirected to the <Page>
#     Examples:
#       | Page                                |
#       | "http://localhost:4200/heroes"      |

# Feature: Dashboard Top 4 Heroes Functionality 4

#   This feature tests if the top 4 heroes are displayed on the dashboard

#   Background:
#     Given the user is on the heroes page

#   Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
#     When the user clicks on the delete button on a hero
#     Then the hero is deleted

# Feature: Dashboard Top 4 Heroes Functionality 5

#   This feature tests if the top 4 heroes are displayed on the dashboard

#   Background:
#     Given the user is on the heroes page

#   Scenario: As a TOH user, I want to add a hero in order to see the hero list increase
#     When the user types input box <NewHero> and clicks the add hero button
#     Then a new hero is added to the hero list and the number of heroes increase
#     Examples:
#       | NewHero |
#       | "CBA"   |

# Feature: Dashboard Top 4 Heroes Functionality 6

#   This feature tests if the top 4 heroes are displayed on the dashboard

#   Background:
#     Given the user is on the heroes page

#   Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
#     When the user clicks on the add hero button without inputting a HeroName
#     Then nothing happens
