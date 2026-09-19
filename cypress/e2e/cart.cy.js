import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'

describe('Cart', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.visit()
      loginPage.login(users.standard.username, users.standard.password)
    })
  })

  it('adds multiple items and shows them all in the cart', () => {
    inventoryPage.addItemToCartByName('Sauce Labs Backpack')
    inventoryPage.addItemToCartByName('Sauce Labs Bike Light')
    inventoryPage.getCartBadge().should('have.text', '2')
    inventoryPage.goToCart()
    cartPage.getCartItems().should('have.length', 2)
  })

  it('removes an item from the cart', () => {
    inventoryPage.addItemToCartByName('Sauce Labs Backpack')
    inventoryPage.goToCart()
    cartPage.removeItemByName('Sauce Labs Backpack')
    cartPage.getCartItems().should('have.length', 0)
  })

  it('continue shopping returns to the inventory page', () => {
    inventoryPage.addItemToCartByName('Sauce Labs Backpack')
    inventoryPage.goToCart()
    cartPage.continueShopping()
    cy.url().should('include', '/inventory.html')
  })
})