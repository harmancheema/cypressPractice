/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import checkboxes from "../pageObjects/checkboxes.po"
let home = new homePage()
let checkbox = new checkboxes()

describe('Checkboxes', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.checkboxes().click()
    })

    it('Heading exists', () => {
        // Define heading
        let heading = checkbox.heading()

        // Verify heading existss
        heading.should('exist')
    })

    it('Select/unselect checkbox 1', () => {
        // Define checkbox 1
        let checkbox1 = checkbox.checkbox1()

        // Verify unselect/select checkbox1
        checkbox1
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('Unselect/select checkbox 2', () => {
        // Define checkbox 2
        let checkbox2 = checkbox.checkbox2()

        // Verify selected/unselected checkbox2
        checkbox2
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
    })
})