describe('what should be on the page upon visit', () => {
  it('should visit the page', () => {
    cy.visit('localhost:3000')
  })

  it('should find the header', () => {
    cy.get('h1')
      .should('contain', 'Turing Cafe Reservations')
  })

  it('should find the form', () => {
    cy.get('form')
      .should('exist')
  })

  it('should find a button to submit in the form', () => {
    cy.get('form button')
      .should('exist')
  })

  it('should find reservations on the page', () => {
    cy.get('section')
      .children()
      .should('exist')
  })
});

describe('the form', () => {
  it('should update the value of the name input as things are typed', () => {
    cy.get('form')
      .children('input:first')
      .type('Chris')
      .should('have.value', 'Chris')
  })

  it('should operate the same for the other inputs', () => {
    cy.get('form')
      .children('input:nth-child(2)')
      .type('12/10')
      .should('have.value', '12/10')

    cy.get('form')
      .children('input:nth-child(3)')
      .type('7:30')
      .should('have.value', '7:30')

    cy.get('form')
      .children('input:nth-child(4)')
      .type('8')
      .should('have.value', '8')
  })
})

describe('adding a reservation', () => {
  it('should render a new card when a reservation is added', () => {
    cy.get('form button')
      .click()

    cy.get('section')
      .children()
      .should('exist')
  })

  it('the new card should display the correct information', () => {
    cy.get('section')
      .children('article:nth-child(10)')
      .get('h2')
      .should('contain', 'Chris')

    cy.get('section')
      .children('article:nth-child(10)')
      .get('h3')
      .should('contain', '12/10')

    cy.get('section')
      .children('article:nth-child(10)')
      .get('p')
      .should('contain', '7:30')


    cy.get('section')
      .children('article:nth-child(10)')
      .get('p:nth-of-type(2)')
      .should('contain', '8')
  })
})

describe('the form validation', () => {
  it('should create an error when the form inputs are not correct', () => {
    cy.get('form button')
      .click()

    cy.get('.form-wrapper h1')
      .should('exist')
      .should('contain', 'Please include a name')
  })
})
