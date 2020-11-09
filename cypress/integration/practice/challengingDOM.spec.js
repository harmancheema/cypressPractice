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
        // Verify heading exists
        challengingDom.heading().contains('Challenging DOM')
    })

    it('Paragraph exists', () => {
        // Verify paragraph exists
        challengingDom.paragraph().should('exist')
    })

    it('Table exists', () => {
        // Verify table exists
        challengingDom.table().should('exist')
    })
})