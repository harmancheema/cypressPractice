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
        // Define heading
        let heading = elements.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Paragraph exists', () => {
        // Define Paragraph
        let paragraph = elements.paragraph()

        // Verify heading exists
        paragraph.should('exist')
    })

    it('Home tab', () => {
        // Define tab
        let home = elements.home()

        // Verify tab exists
        home.should('exist')

        // Click on Home
        home.click()

        // Verify user is back on previous page
        cy.url().should("include", "https://the-internet.herokuapp.com/")
    })

    it('About tab', () => {
        // Define tab
        let about = elements.about()

        // Verify tab exists
        about.should('exist')

        // Click on About
        about.click()

        // Verify user is on the right screen
        cy.url().should('include', 'about')
    })

    it('Contact Us tab', () => {
        // Define tab
        let contactUs = elements.contactUs()

        // Verify tab exists
        contactUs.should('exist')

        // Click on contact us
        contactUs.click()

        // Verify user is on the right screen
        cy.url().should('include', 'contact-us')
    })

    it('Portfolio tab', () => {
        // Define tab
        let portfolio = elements.portfolio()

        // Verify tab exists
        portfolio.should('exist')

        // Click on Portfolio
        portfolio.click()

        // Verify user is on the right screen
        cy.url().should('include', 'portfolio')
    })
})