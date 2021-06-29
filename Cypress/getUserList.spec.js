describe('Reqres Getting users list', () => {
   beforeEach(() => {
       cy.request('users').as('usersList');
   });

   it('Validate the type header specifies json', () => {
       cy.get('@usersList')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code is 200', () => {
       cy.get('@usersList')
           .its('status')
           .should('equal', 200);
   });
   
   it('Validate users are displayed', () => {
       cy.get('@usersList')
           .its('body')
		   .its('data')
		   .should('not.be.empty');
   });
   
    it('Validate number of users per page is 6', () => {
       cy.get('@usersList')
           .its('body')
           .should('include', { per_page: 6 });
   });
   
    
   
});