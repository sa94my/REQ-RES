describe('Register user valid data', () => {
   beforeEach(() => {
       cy.request({
		   method: 'POST',
		   url: 'register',
		   failOnStatusCode: false,
		   body: 
		   {
			"email": "eve.holt@reqres.in",
			"password": "pistol"
			},
	   }).as('register');
   });

   it('Validate the type header specifies json', () => {
       cy.get('@register')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code is 200', () => {
       cy.get('@register')
           .its('status')
           .should('equal', 200);
   });
   
    it('Validate response contains token', () => {
       cy.get('@register')
           .its('body')
		   .its('token')
		   .should('exist');
   });
   
    
   
});