describe('Reqres Getting user data', () => {
   beforeEach(() => {
       cy.request({
		   url: 'users/23',
		   failOnStatusCode: false
	   }).as('userId');
   });

   it('Validate the type header specifies json', () => {
       cy.get('@userId')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code is 404', () => {
       cy.get('@userId')
           .its('status')
           .should('equal', 404);
   });
   
   
   it('Validate response body is empty', () => {
       cy.get('@userId')
           .its('body')
		   .should('be.empty');
   });
    
   
});