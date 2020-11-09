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
        // Verify heading exists
        ab.heading().contains('A/B')
    })

    it('Paragraph present', () => {
        // Verify paragraph exists
        ab.paragraph().should('exist')
    })
})