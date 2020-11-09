class fileUpload {
    heading() {
        return cy.get('h3')
    }

    chooseFileLocation() {
        return cy.get('#file-upload')
    }

    uploadButton() {
        return cy.get('#file-submit')
    }

    fileUploaded() {
        return cy.get('#uploaded-files')
    }
}

export default fileUpload