/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import abtest from '../pageObjects/abtest.po'
let home = new homePage()
let ab = new abtest()

describe('A/B Test', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click on A/B Testing link
        home.ABTesting().click()
    })

    it('Heading present', () => {
        // Define heading
        let heading = ab.heading()

        // Verify heading exists
        heading.should('exist')
    })

    it('Paragraph present', () => {
        // Define paragraph
        let paragraph = ab.paragraph()

        // Verify paragraph exists
        paragraph.should('exist')
    })
})