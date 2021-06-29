describe('Register user valid data', () => {
   beforeEach(() => {
       cy.request({
		   method: 'POST',
		   url: 'register',
		   failOnStatusCode: false,
		   body: 
		   {
			"email": "eve.holt@reqres.in"
			},
	   }).as('register');
   });

   it('Validate the type header specifies json', () => {
       cy.get('@register')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code is 400', () => {
       cy.get('@register')
           .its('status')
           .should('equal', 400);
   });
   
    it('Validate response shows an error', () => {
       cy.get('@register')
           .its('body')
		   .should('property','error');
   });
   
    
   
});