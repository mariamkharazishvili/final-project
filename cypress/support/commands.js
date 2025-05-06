// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import data from '../fixtures/correctData.json'

Cypress.Commands.add('registration', () => { 
    cy.visit('testzootopia.loremipsum.ge/ka')
    cy.get('[data-name="Group 15444"]').last().click()
    cy.contains('გაიარეთ რეგისტრაცია ').should('be.visible').click()
    cy.get('[name="first_name"]').first().type(data.full_name)              //from line 33 to 38:fill in all the required fields
    cy.get('[name="reg_email"]').type(data.email)
    cy.get('[name="personal_id"]').type(data.ID)
    cy.get('[name="phone"]').type(data.phone_num)
    cy.get('[name="reg_password"]').type(data.password)
    cy.get('[name="reg_password_confirmation"]').type(data.password)
    cy.get('[data-name="Group 15376"]').first().click()             //click register button
    cy.get('.regsub').click()  //account is created


 })


 Cypress.Commands.add('login', () => { 
    cy.visit('testzootopia.loremipsum.ge/ka')
    cy.get('.rprof').last().click()
    cy.get('[name="login_email"]').type(data.email)
    cy.get('[name="login_password"]').type(data.password)
    cy.get('.form-button').first().click()
    cy.contains('პროფილი').should('be.visible') //verify that user is logged in
    cy.get('.islide-figure').should('be.visible') //verify that user is on the home page



 })

 Cypress.Commands.add('logout', () => { 
    cy.get('.iprof').last().click()
    cy.get('#signout').last().click({ force: true })



 })