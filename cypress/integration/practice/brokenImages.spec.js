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
        // Define heading
        let heading = brokenImage.heading()
        
        // Verify heading exists
        heading.should('exist')
    })

    it('Images', () => {
        // Define images
        let image1 = brokenImage.image1()
        let image2 = brokenImage.image2()
        let image3 = brokenImage.image3()

        // Verify images exist
        image1.should('exist')
        image2.should('exist')
        image3.should('exist')
    })
})