/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
import fileUpload from "../pageObjects/fileUpload.po"

let home = new homePage()
let fileUploader = new fileUpload()

describe('File Upload', () => {
    beforeEach(() => {
        // Open home page
        home.visit()

        // Click link
        home.fileUpload().click()
    })

    it('Heading exists', () => {
        // Verify heading exists
        fileUploader.heading().contains('File Uploader')
    })

    it('File Upload', () => {
        // Upload File
        const imageFile = 'IndigoLogo.png'
        fileUploader.chooseFileLocation().attachFile(imageFile)

        // Click Upload Button
        fileUploader.uploadButton().click()

        // Verify file is uploaded
        fileUploader.fileUploaded().contains('IndigoLogo.png')
    })
})