describe('Restful Booker API', () => {
  it('creates a new booking', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: { checkin: '2026-01-01', checkout: '2026-01-05' }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.booking).to.have.property('firstname', 'Jim')
    })
  })

  it('retrieves a list of bookings', () => {
    cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
      .its('body')
      .should('be.an', 'array')
  })
})