/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import dropdownList from "../pageObjects/dropdownList.po"
let home = new homePage()
let dropdownMenu = new dropdownList()

describe('Dropdown Menu', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.dropdown().click()
    })

    it('Heading exists', () => {
        // Define heading
        let heading = dropdownMenu.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Select Option 1', () => {
        // Define dropdown menu
        let dropdown = dropdownMenu.dropdownMenu()

        // Click dropdown menu
        dropdown.select('Option 1')

        // Verify Option 1 selected
        dropdown.should('have.value', '1')
    })

    it('Select Option 2', () => {
        // Define dropdown menu
        let dropdown = dropdownMenu.dropdownMenu()

        // Click dropdown menu
        dropdown.select('Option 2')

        // Verify Option 2 selected
        dropdown.should('have.value', '2')
    })
})