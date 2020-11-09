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
        // Define heading
        let heading = contextmenu.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Paragraph exists', () => {
        // Define paragraph
        let paragraph = contextmenu.paragraph()

        // Verify paragraph exists
        paragraph.should('exist')
    })

    it('Open Context Menu', () => {
        // Define area to click
        let hotspot = contextmenu.hotspot()

        // Click in the designated area
        hotspot.rightclick()

        // To-do -> Accept the alert (alert does not show)
    })
})