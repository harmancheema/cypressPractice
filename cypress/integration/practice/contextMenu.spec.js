/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import contextMenu from "../pageObjects/contextMenu.po"
let home = new homePage()
let contextmenu = new contextMenu()

describe('Context Menu', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.contextMenu().click()
    })

    it('Heading exists', () => {
        // Verify heading exists
        contextmenu.heading().contains('Context Menu')
    })

    it('Paragraph exists', () => {
        // Verify paragraph exists
        contextmenu.paragraph().should('exist')
    })

    it('Open Context Menu', () => {
        // Click in the designated area
        contextmenu.hotspot().rightclick()

        // To-do -> Accept the alert (alert does not show)
    })
})