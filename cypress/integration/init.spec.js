describe('Dragons Sicredi', () => {
  it('Visits the app', () => {
    cy.visit('/');
  });
  it('Get page title', () => {
    cy.title().should('include', 'Dragons Sicredi - Lucas Alves Costa');
  });
});

describe('Login', () => {
  it( 'Fill input with invalid data and alert appears', () => {
    cy.get( '#email-input' ).type( 'wrong@mail.com' );
    cy.get( '#password-input' ).type( '32423' );
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#submit-login').contains('Login').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Email or password is incorrect')      
    }) 
    } );

    it( 'Fill input with correct data and navigate to /login', () => {
      cy.get( '#email-input' ).clear();
      cy.get( '#password-input' ).clear();
      cy.get( '#email-input' ).type( 'root@root.com' );
      cy.get( '#password-input' ).type( 'root' );
      cy.get( '#submit-login' ).contains('Login').click().then( () => {
        cy.url().should('eq', 'http://localhost:3001/');
      } )
    } )
})

describe( 'Create Dragon', () => {
  it( 'Modal with form opens', () => {
    cy.get( '#add-dragon' ).contains('+').click().then( () => {
      cy.get( '#add-dragon-modal' ).should( 'exist' )
    } )
  } );

  it( 'Create Dragon', () => {
    cy.get( '#name-dragon' ).type( 'Teste' );
    cy.get( '#type-dragon' ).type( 'teste' );
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#add-dragon-button').contains('Add').click()
  } );
})
