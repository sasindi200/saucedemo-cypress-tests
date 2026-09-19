describe('SauceDemo Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('logs in successfully with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('shows an error for a locked out user', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })

  it('requires a username',() => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

    it('requires a password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })
})