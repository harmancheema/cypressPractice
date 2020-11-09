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
        // Verify heading exists
        addRemove.heading().contains('Add/Remove Elements')
    })

    it('Add Element', () => {
        // Verify add button exists
        addRemove.addElement().should('exist')

        // Press add button
        addRemove.addElement().click()

        // Verify delete button exists
        addRemove.deleteElement().should('exist')
    })

    it('Delete Element', () => {
        // Press add button
        addRemove.addElement().click()

        // Press delete button
        addRemove.deleteElement().click()

        // Verify delete button does not exist
        addRemove.deleteElement().should('not.exist')
    })
})