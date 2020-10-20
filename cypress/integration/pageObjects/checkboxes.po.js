class checkboxes  {
    heading() {
        return cy.get('h3')
    }

    checkbox1() {
        return cy.get('#checkboxes > :nth-child(1)')
    }

    checkbox2() {
        return cy.get('[checked=""]')
    }
}

export default checkboxes