import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { ElementRef, Renderer2 } from '@angular/core';

//-------------------------------------------------------------------------
Given(/^the user is on the landing page$/, () => {
  cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
  return true;
});

//-------------------------------------------------------------------------
Given(/^the user is on the landing page$/, () => {
  cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the top 4 heroes$/, () => {
  cy.visit("http://localhost:4200/dashboard");
});

//-------------------------------------------------------------------------
Given(/^the user is on the landing page$/, () => {
  cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks on bombasto$/, () => {
  cy.get('div.heroes-menu').children().first().click();
});

Then(/^the user is redirected to heroes page$/, () => {
  cy.visit("http://localhost:4200/detail/13");
});

//-------------------------------------------------------------------------
Given(/^the user is on the landing page$/, () => {
  cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks on the heroes button$/, () => {
  cy.get('nav').children().eq(1).click();
});

Then(/^the user is redirected to the <Page>$/, () => {
  cy.visit("http://localhost:4200/heroes");
});

//-------------------------------------------------------------------------
Given(/^the user is on the heroes page$/, () => {
  cy.visit("http://localhost:4200/heroes");
});

When(/^the user clicks on the delete button on a hero$/, () => {
  cy.get('li').children().eq(0).click();
});

Then(/^the hero is deleted$/, () => {
  let textName = '';

  cy.get('li') // Find the li elements
    .children() // Get all the direct children of the li elements
    .eq(1) // Select the first child element
    .invoke('text') // Get the value or text content of the element
    .then((value) => {
      // Use the value in your assertions or further test steps
      textName = value;
      if (textName === "Dr. Nice") {
        return false;
      }else{
        return true;
      }
    });

});



// Given(/^the user is on the landing page$/, () => {
// 	cy.visit("http://localhost:4200/dashboard");
// });

// Then(/^the user shall see the top 4 heroes$/, () => {
// 	return true;
// });

// //-------------------------------------------------------------------------
// Given(/^the user is on the landingpage$/, () => {
// 	cy.visit("http://localhost:4200/dashboard");
// });

// Then(/^the user shall see the top 4 heroes$/, () => {
// 	return true;
// });

// //-------------------------------------------------------------------------
// Given(/^the user is on the landingpage$/, () => {
// 	cy.visit("http://localhost:4200/dashboard");
// });

// When('the user clicks on a {string}', (HeroName: string) => {

// });


// Then(/^the user is redirected to <Page>$/, () => {
// 	return true;
// });

// //-------------------------------------------------------------------------
// Given(/^the user is on the landingpage$/, () => {
// 	cy.visit("http://localhost:4200/dashboard");
// });

// When(/^the user clicks on the heroes button$/, () => {
// 	return true;
// });

// Then(/^the user is redirected to the <Page>$/, () => {
// 	return true;
// });

// //-------------------------------------------------------------------------
// Given(/^the user is on the heroes page$/, () => {
// 	cy.visit("http://localhost:4200/heroes");
// });

// When(/^the user clicks on the delete button on a hero$/, () => {
// 	return true;
// });

// Then(/^the hero is deleted$/, () => {
// 	return true;
// });
// //-------------------------------------------------------------------------

// Given(/^the user is on the heroes page$/, () => {
// 	cy.visit("http://localhost:4200/heroes");
// });

// When(/^the user types input box <NewHero> and clicks the add hero button$/, () => {
// 	return true;
// });

// Then(/^a new hero is added to the hero list and the number of heroes increase$/, () => {
// 	return true;
// });
// //-------------------------------------------------------------------------

// Given(/^the user is on the heroes page$/, () => {
// 	cy.visit("http://localhost:4200/heroes");
// });

// When(/^the user clicks on the add hero button without inputting a HeroName$/, () => {
// 	return true;
// });

// Then(/^nothing happens$/, () => {
// 	return true;
// });




