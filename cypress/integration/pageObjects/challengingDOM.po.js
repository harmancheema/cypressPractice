class challengingDOM {
    heading() {
        return cy.get('h3')
    }

    paragraph() {
        return cy.get('p')
    }

    table() {
        return cy.get(':nth-child(4) > .large-12 > :nth-child(2)')
    }
}

export default challengingDOM