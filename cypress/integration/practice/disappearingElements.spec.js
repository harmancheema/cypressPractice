/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import disappearingElements from "../pageObjects/disappearingElements.po"
let home = new homePage()
let elements = new disappearingElements()

describe('Disappearing Elements', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.disappearingElements().click()
    })

    it('Heading exists', () => {
        // Verify heading exists
        elements.heading().contains('Disappearing Elements')
    })

    it('Paragraph exists', () => {
        // Verify heading exists
        elements.paragraph().should('exist')
    })

    it('Home tab', () => {
        // Verify tab exists
        elements.home().should('exist')

        // Click on Home
        elements.home().click()

        // Verify user is back on previous page
        cy.url().should("include", "https://the-internet.herokuapp.com/")
    })

    it('About tab', () => {
        // Verify tab exists
        elements.about().should('exist')

        // Click on About
        elements.about().click()

        // Verify user is on the right screen
        cy.url().should('include', 'about')
    })

    it('Contact Us tab', () => {
        // Verify tab exists
        elements.contactUs().should('exist')

        // Click on contact us
        elements.contactUs().click()

        // Verify user is on the right screen
        cy.url().should('include', 'contact-us')
    })

    it('Portfolio tab', () => {
        // Verify tab exists
        elements.portfolio().should('exist')

        // Click on Portfolio
        elements.portfolio().click()

        // Verify user is on the right screen
        cy.url().should('include', 'portfolio')
    })
})