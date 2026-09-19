# SauceDemo Cypress Test Suite

An end-to-end and API test automation project built with **Cypress** and **JavaScript**, targeting [SauceDemo](https://www.saucedemo.com), a mock e-commerce site. This project was built to demonstrate practical QA automation skills: UI testing, API testing, the Page Object Model design pattern, fixture-driven test data, and CI/CD integration via GitHub Actions.

![Cypress](https://img.shields.io/badge/Cypress-16.1.0-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![CI](https://github.com/sasindi200/saucedemo-cypress-tests/actions/workflows/tests.yml/badge.svg)

---

## What This Project Tests

The suite covers the full user journey through SauceDemo, plus a separate set of API tests against a public test API:

| Test File | Covers | Test Count |
|---|---|---|
| `login.cy.js` | Valid login, locked-out user, missing username, missing password | 4 |
| `inventory.cy.js` | Item count display, adding to cart, sorting by price and name | 4 |
| `cart.cy.js` | Adding multiple items, removing items, continue shopping | 3 |
| `checkout.cy.js` | Successful order, missing first name, missing postal code | 3 |
| `api.cy.js` | Creating a booking, retrieving bookings (restful-booker API) | 2 |

**16 total test cases**, covering both happy-path and negative/edge-case scenarios.

---

## Tech Stack

- **Cypress** — end-to-end and API test automation
- **JavaScript (ES6)** — test and page object code
- **Page Object Model** — selectors and page actions abstracted into reusable classes
- **Fixtures** — test data (user credentials) kept separate from test logic
- **GitHub Actions** — tests run automatically on every push and pull request

---

## Project Structure

```
cypress/
  e2e/
    login.cy.js
    inventory.cy.js
    cart.cy.js
    checkout.cy.js
    api.cy.js
  pages/
    LoginPage.js
    InventoryPage.js
    CartPage.js
    CheckoutPage.js
  fixtures/
    users.json
.github/
  workflows/
    tests.yml
cypress.config.js
```

Selectors and page interactions live in `cypress/pages/`, one class per page. Test files import these page objects rather than calling raw selectors directly, so a UI change only ever needs to be fixed in one place.

---

## Running the Tests Locally

**Prerequisites:** [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repo
git clone https://github.com/sasindi200/saucedemo-cypress-tests.git
cd saucedemo-cypress-tests

# 2. Install dependencies
npm install

# 3. Run interactively (opens the Cypress UI, watch tests run in a real browser)
npx cypress open

# OR run headlessly (prints results straight to the terminal — this is what CI uses)
npx cypress run
```

---

## Continuous Integration

Every push and pull request automatically triggers the full test suite via GitHub Actions (`.github/workflows/tests.yml`). Results are visible under the **Actions** tab of this repository.

---

## Test Results

*(16/16 tests passing — screenshot taken from a local `npx cypress run`)*

---

## Why These Design Choices

- **Page Object Model** — keeps selectors in one place per page, so tests read like plain English and UI changes don't require touching every test file that uses that page.
- **Fixtures** — login credentials and test data are stored in `cypress/fixtures/users.json` rather than hardcoded, so data changes don't require editing test logic.
- **Mix of happy-path and negative tests** — every flow includes at least one "this should fail correctly" case (locked-out user, missing required field), not just the successful path.
- **API tests alongside UI tests** — shows testing isn't limited to what's visible in the browser; backend behavior is verified directly.

---

## Author

Sasindi Linasha Korala

Built as a hands-on QA automation portfolio project.
