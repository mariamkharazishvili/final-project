


import data from '../fixtures/correctData.json'

//registration command:

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
    cy.contains('account is created').should('be.visible')  //make sure accaunt is created and succes message appears


 })

//login :
 Cypress.Commands.add('login', () => { 
    cy.visit('testzootopia.loremipsum.ge/ka')
    cy.get('.rprof').last().click()
    cy.get('[name="login_email"]').type(data.email)
    cy.get('[name="login_password"]').type(data.password)
    cy.get('.form-button').first().click()
    cy.contains('პროფილი').should('be.visible') //verify that user is logged in
    cy.get('.islide-figure').should('be.visible') //verify that user is on the home page



 })
  
 //command for loggin out

 Cypress.Commands.add('logout', () => { 
    cy.get('.iprof').last().click()
    cy.get('#signout').last().click({ force: true })
    cy.contains('შესვლა')
//verify that user is logged out
    


 })

 //command for adding product to the cart:



 Cypress.Commands.add('addproduct', () => { 

   cy.get('.seepro').first().click()
   cy.get('[data-id="1537"]').should('be.visible').click() //add product to a cart
   cy.get('.cart-items-count').last().click()
   cy.get('.cart-img').should('be.visible')   //make sure cart is not empty 
   

})

