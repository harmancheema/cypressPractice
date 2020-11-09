class dropdownList {
    heading() {
        return cy.get('h3')
    }

    dropdownMenu() {
        return cy.get('#dropdown')
    }
}

export default dropdownList