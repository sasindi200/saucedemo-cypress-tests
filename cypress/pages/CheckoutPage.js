class CheckoutPage {
  fillInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
  }
  continueToOverview() {
    cy.get('[data-test="continue"]').click()
  }
  finishOrder() {
    cy.get('[data-test="finish"]').click()
  }
  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }
  getSummaryTotal() {
    return cy.get('.summary_total_label')
  }
  getConfirmationHeader() {
    return cy.get('.complete-header')
  }
}

export default new CheckoutPage()