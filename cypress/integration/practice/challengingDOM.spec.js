/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import challengingDOM from "../pageObjects/challengingDOM.po"
let home = new homePage()
let challengingDom = new challengingDOM()

describe('Challenging DOM', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.challengingDOM().click()
    })

    it('Heading exists', () => {
        // Define heading
        let heading = challengingDom.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Paragraph exists', () => {
        // Define paragraph
        let paragraph = challengingDom.paragraph()

        // Verify paragraph exists
        paragraph.should('exist')
    })

    it('Table exists', () => {
        // Define table 
        let table = challengingDom.table()

        // Verify table exists
        table.should('exist')
    })
})