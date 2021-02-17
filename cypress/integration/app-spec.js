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
      .should('have.length', 9)
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
