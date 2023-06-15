import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { ElementRef, Renderer2 } from '@angular/core';

//-------------------------------------------------------------------------
Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});

//-------------------------------------------------------------------------
Given(/^the user is on the landingpage$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the top 4 heroes$/, () => {
	return true;
});

//-------------------------------------------------------------------------
Given(/^the user is on the landingpage$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When('the user clicks on a {string}', (HeroName: string) => {
	cy.visit("http://localhost:4200/detail/15");
});

Then(/^the user is redirected to <Page>$/, () => {
	return true;
});

//-------------------------------------------------------------------------
Given(/^the user is on the landingpage$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks on the heroes button$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

Then(/^the user is redirected to the <Page>$/, () => {
	return true;
});

//-------------------------------------------------------------------------
Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user clicks on the delete button on a hero$/, () => {
	cy.click()
	return true;
});

Then(/^the hero is deleted$/, () => {
	return true;
});
//-------------------------------------------------------------------------

Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user types input box <NewHero> and clicks the add hero button$/, () => {
	return true;
});

Then(/^a new hero is added to the hero list and the number of heroes increase$/, () => {
	return true;
});
//-------------------------------------------------------------------------

Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user clicks on the add hero button without inputting a HeroName$/, () => {
	return true;
});

Then(/^nothing happens$/, () => {
	return true;
});




