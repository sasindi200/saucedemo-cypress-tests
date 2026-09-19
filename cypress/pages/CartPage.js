class CartPage {
  getCartItems() {
    return cy.get('.cart_item')
  }
  removeItemByName(itemName) {
    cy.contains('.cart_item', itemName).find('button').click()
  }
  checkout() {
    cy.get('[data-test="checkout"]').click()
  }
  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click()
  }
}

export default new CartPage()