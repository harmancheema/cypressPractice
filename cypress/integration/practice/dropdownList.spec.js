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
        // Verify heading exists
        dropdownMenu.heading().contains('Dropdown List')
    })

    it('Select Option 1', () => {
        // Click dropdown menu
        dropdownMenu.dropdownMenu().select('Option 1')

        // Verify Option 1 selected
        dropdownMenu.dropdownMenu().should('have.value', '1')
    })

    it('Select Option 2', () => {
        // Click dropdown menu
        dropdownMenu.dropdownMenu().select('Option 2')

        // Verify Option 2 selected
        dropdownMenu.dropdownMenu().should('have.value', '2')
    })
})