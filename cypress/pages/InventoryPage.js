class InventoryPage {
  getItems() {
    return cy.get('.inventory_item')
  }
  addItemToCartByName(itemName) {
    cy.contains('.inventory_item', itemName).find('button').click()
  }
  getCartBadge() {
    return cy.get('.shopping_cart_badge')
  }
  goToCart() {
    cy.get('.shopping_cart_link').click()
  }
  sortBy(optionValue) {
    // 'lohi', 'hilo', 'az', 'za'
    cy.get('[data-test="product-sort-container"]').select(optionValue)
  }
  getItemPrices() {
    return cy.get('.inventory_item_price')
  }
  getItemNames() {
    return cy.get('.inventory_item_name')
  }
}

export default new InventoryPage()