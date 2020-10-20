class contextMenu {
    heading() {
        return cy.get('h3')
    }

    paragraph() {
        return cy.get('p')
    }

    hotspot() {
        return cy.get('#hot-spot')
    }
}

export default contextMenu