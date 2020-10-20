/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import addRemoveElements from "../pageObjects/addRemoveElement.po"
let home = new homePage()
let addRemove = new addRemoveElements()

describe('Add/Remove Elements', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Open Add/Remove Elements page
        home.addRemoveElements().click()
      })

    it('Heading present', () => {
        // Define heading
        let heading = addRemove.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Add Element', () => {
        // Define add button
        let addButton = addRemove.addElement()

        // Verify add button exists
        addButton.should('exist')

        // Press add button
        addButton.click()

        // Define delete button
        let deleteButton = addRemove.deleteElement()

        // Verify delete button exists
        deleteButton.should('exist')
    })

    it('Delete Element', () => {
        // Define add button
        let addButton = addRemove.addElement()

        // Press add button
        addButton.click()

        // Define delete button
        let deleteButton = addRemove.deleteElement()

        // Press delete button
        deleteButton.click()

        // Verify delete button does not exist
        deleteButton.should('not.exist')
    })
})