class addRemoveElement {
    heading() {
        return cy.get('h3')
    }

    addElement() {
        return cy.get('button')
    }

    deleteElement() {
        return cy.get('.added-manually')
    }
}

export default addRemoveElement