/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import dragAndDrop from "../pageObjects/dragAndDrop.po"
let home = new homePage()
let dragAndDropElements = new dragAndDrop()

describe('Drag And Drop Elements', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.dragAndDrop().click()
    })

    it('Heading exists', () => {
        // Verify heading exists
        dragAndDropElements.heading().contains('Drag and Drop')
    })

    it('Move element A', () => {
        // Verify element A exists
        dragAndDropElements.elementA().should('exist')
    })

    it('Move element B', () => {
        // Verify element A exists
        dragAndDropElements.elementB().should('exist')
    })
})