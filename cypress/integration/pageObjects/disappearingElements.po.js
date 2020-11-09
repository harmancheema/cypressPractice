class disappearingElements {
    heading() {
        return cy.get('h3')
    }

    paragraph() {
        return cy.get('p')
    }

    home() {
        return cy.get(':nth-child(1) > a')
    }

    about() {
        return cy.get(':nth-child(4) > :nth-child(2) > a')
    }

    contactUs() {
        return cy.get(':nth-child(3) > a')
    }

    portfolio() {
        return cy.get(':nth-child(4) > a')
    }

    gallery() {
        return cy.get(':nth-child(5) > a')
    }
}

export default disappearingElements