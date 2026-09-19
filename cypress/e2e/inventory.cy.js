import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

describe('Inventory Page', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.visit()
      loginPage.login(users.standard.username, users.standard.password)
    })
  })

  it('displays 6 items on the inventory page', () => {
    inventoryPage.getItems().should('have.length', 6)
  })

  it('adds an item to the cart and updates the badge', () => {
    inventoryPage.addItemToCartByName('Sauce Labs Backpack')
    inventoryPage.getCartBadge().should('have.text', '1')
  })

  it('sorts items by price, low to high', () => {
    inventoryPage.sortBy('lohi')
    inventoryPage.getItemPrices().then(($prices) => {
      const prices = [...$prices].map((el) => parseFloat(el.innerText.replace('$', '')))
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sorted)
    })
  })

  it('sorts items by name, A to Z', () => {
    inventoryPage.sortBy('az')
    inventoryPage.getItemNames().then(($names) => {
      const names = [...$names].map((el) => el.innerText)
      const sorted = [...names].sort()
      expect(names).to.deep.equal(sorted)
    })
  })
})