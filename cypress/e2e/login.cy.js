import loginPage from '../pages/LoginPage'

describe('SauceDemo Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('logs in successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.standard.username, users.standard.password)
      cy.url().should('include', '/inventory.html')
    })
  })

  it('shows an error for a locked out user', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.lockedOut.username, users.lockedOut.password)
      loginPage.getErrorMessage().should('contain', 'locked out')
    })
  })

  it('requires a username', () => {
    loginPage.enterPassword('secret_sauce')
    loginPage.submit()
    loginPage.getErrorMessage().should('contain', 'Username is required')
  })

  it('requires a password', () => {
    loginPage.enterUsername('standard_user')
    loginPage.submit()
    loginPage.getErrorMessage().should('contain', 'Password is required')
  })
})