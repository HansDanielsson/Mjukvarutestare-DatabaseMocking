const dbConnect = require('./dbConnect')

describe('Tester mot Databas', () => {
  beforeEach(() => {
    cy.visit('/') // Öppnar hemsidan
  })

  afterEach(() => {
    dbConnect.execute('DELETE FROM user WHERE email = "Test44@example.cypress.io";')
  })

  it('Skapa en ny Post i Databas', () => {
    cy.get('#name').type('Test44')
    cy.get('#email').type('Test44@example.cypress.io')

    cy.get('form').submit() // Submit a form

    cy.get('h1').should('contain.text', 'Databas')

    // Kontrollera att Test-user är i databas
    // Hämta data från Databas
    const user = dbConnect.execute('SELECT * FROM users WHERE name = "Test44";')
    expect(user).to.have.lengthOf(1)
    /*
    dbConnect.execute('SELECT * FROM users WHERE email = "Test44@example.cypress.io";')
      .then((result) => {
        expect(result).to.have.lengthOf(1)
      })
    */
  })
})
