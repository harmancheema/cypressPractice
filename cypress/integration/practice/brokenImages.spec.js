/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import brokenImages from "../pageObjects/brokenImages.po"
let home = new homePage()
let brokenImage = new brokenImages()

describe('Broken Images', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.brokenImages().click()
    })
    
    it('Heading present', () => {
        // Verify heading exists
        brokenImage.heading().contains('Broken Images')
    })

    it('Images', () => {
        // Verify images exist
        brokenImage.image1().should('exist')
        brokenImage.image2().should('exist')
        brokenImage.image3().should('exist')
    })
})