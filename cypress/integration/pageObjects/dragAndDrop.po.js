class dragAndDrop {
    heading() {
        return cy.get('h3')
    }

    elementA() {
        return cy.get('#column-a')
    }

    elementB() {
        return cy.get('#column-b')
    }

    columnAHeader() {
        return cy.get('#column-a > header')
    }

    columnBHeader() {
        return cy.get('#column-b > header')
    }
}

export default dragAndDrop