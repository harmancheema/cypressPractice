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
        // Define heading
        let heading = dragAndDropElements.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Move element A', () => {
        // Define elements
        let elementA = dragAndDropElements.elementA()

        // Verify element A exists
        elementA.should('exist')
    })

    it('Move element B', () => {
        // Define elements
        let elementB = dragAndDropElements.elementB()

        // Verify element A exists
        elementB.should('exist')
    })
})