import data from '../fixtures/correctData.json'

describe('Zootopia webpage testcases', () => {

  //it('registration',() =>{

    //cy.registration()  -- 
  //})


  beforeEach(() => {
    //login and add one product

    cy.login() 
    cy.get('[data-id="2862"]').click()
     
  });



 // test case #1:Add product to a cart

  it('Add product to a cart',() =>{
    cy.get('.seepro').first().click()
    cy.get('[data-id="1537"]').should('be.visible').click() //add product to a cart
    cy.get('.cart-items-count').last().click()
    cy.get('.cart-img').should('be.visible')   //make sure cart is not empty 
   

  })



   // test case #2: Remove products from the cart
  it('Remove products from the cart',() =>{
    cy.get('.seepro').first().click()
    cy.get('[data-id="1537"]').should('be.visible').click() //add product to a cart
    cy.get('.cart-items-count').last().click()  //go to a cart
    cy.get('.cart-img').should('be.visible')   //make sure cart is not empty 
    cy.get('[data-name="Ellipse 42"]').first().click()
    cy.get('[data-name="Ellipse 42"]').last().click()
    cy.contains('კალათა ცარიელია').should('be.visible')


    

  })
  
 // test case #3: Verify personal information is saved after registration

  it('Personal information',() =>{
    cy.get('.iprof').last().click()  //visit profile page
    cy.get('[data="mariam kharazishvili"]').should('have.value', data.full_name)
    cy.get('[data="551212112"]').should('have.value', data.phone_num)
    cy.get('[data="14211071182"]').should('have.value', data.ID)
    cy.get('[data="kharazishvilimariam2004@gmail.com"]').should('have.value', data.email)


   })

  // test case #4 : Verify products still in the cart after page refresh 

   it('cart after page-refresh',() =>{
    cy.get('.cart-items-count').last().click()
    cy.contains('კალათა ცარიელია').should('not.be.visible') //check that cart is not empty
    cy.reload()                    //refresh
    cy.contains('კალათა ცარიელია').should('not.be.visible') // make sure cart still contains added product after page has been refreshed 


   })

   //test case #5 : Verify that cart persists after logout and login

   it('cart after logout-login',() =>{
    cy.log('check the cart')
    cy.get('.cart-items-count').last().click()  
    cy.contains('კალათა ცარიელია').should('not.be.visible')  //verify that cart is not empty
    cy.log('logout')
    cy.logout()
    cy.log('login again')
    cy.login()
    cy.get('.cart-items-count').last().click()                 //check if cart still has previously added product(s) 
    cy.contains('კალათა ცარიელია').should('not.be.visible')  
    

   })




})

