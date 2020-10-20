class homePage{
    visit() {
        cy.visit('/')
    }

    ABTesting() {
        return cy.get(':nth-child(1) > a')
    }

    addRemoveElements() {
        return cy.get('ul > :nth-child(2) > a')
    }

    basicAuth() {
        return cy.get(':nth-child(3) > a')
    }

    brokenImages() {
        return cy.get(':nth-child(4) > a')
    }

    challengingDOM() {
        return cy.get(':nth-child(5) > a')
    }

    checkboxes() {
        return cy.get(':nth-child(6) > a')
    }

    contextMenu() {
        return cy.get(':nth-child(7) > a')
    }

    digestAuth() {
        return cy.get(':nth-child(8) > a')
    }

    disappearingElements() {
        return cy.get(':nth-child(9) > a')
    }

    dragAndDrop() {
        return cy.get(':nth-child(10) > a')
    }

    dropdown() {
        return cy.get(':nth-child(11) > a')
    }

    dynamicContent() {
        return cy.get(':nth-child(12) > a')
    }

    dynamicControls() {
        return cy.get(':nth-child(13) > a')
    }

    dynamicLoading() {
        return cy.get(':nth-child(14) > a')
    }

    entryAd() {
        return cy.get(':nth-child(15) > a')
    }

    exitIntent() {
        return cy.get(':nth-child(16) > a')
    }

    fileDownload() {
        return cy.get(':nth-child(17) > a')
    }

    fileUpload() {
        return cy.get(':nth-child(18) > a')
    }

    floatingMenu() {
        return cy.get(':nth-child(19) > a')
    }

    forgotPassword() {
        return cy.get(':nth-child(20) > a')
    }

    formAuthentication() {
        return cy.get(':nth-child(21) > a')
    }

    frames() {
        return cy.get(':nth-child(22) > a')
    }

    geolocation() {
        return cy.get(':nth-child(23) > a')
    }

    horizontalSlider() {
        return cy.get(':nth-child(24) > a')
    }

    hovers() {
        return cy.get(':nth-child(25) > a')
    }

    infiniteScroll() {
        return cy.get(':nth-child(26) > a')
    }

    inputs() {
        return cy.get(':nth-child(27) > a')
    }

    jqueryUIMenu() {
        return cy.get(':nth-child(28) > a')
    }

    javaScriptAlerts() {
        return cy.get(':nth-child(29) > a')
    }

    javaScriptOnloadEventError() {
        return cy.get(':nth-child(30) > a')
    }

    keyPresses() {
        return cy.get(':nth-child(31) > a')
    }

    largeAndDeepDOM() {
        return cy.get(':nth-child(32) > a')
    }

    multipleWindows() {
        return cy.get(':nth-child(33) > a')
    }

    nestedFrames() {
        return cy.get(':nth-child(34) > a')
    }

    notificationMessages() {
        return cy.get(':nth-child(35) > a')
    }

    redirectLink() {
        return cy.get(':nth-child(36) > a')
    }

    secureFileDownload() {
        return cy.get(':nth-child(37) > a')
    }

    shadowDOM() {
        return cy.get(':nth-child(38) > a')
    }

    shiftingContent() {
        return cy.get(':nth-child(39) > a')
    }

    slowResources() {
        return cy.get(':nth-child(40) > a')
    }

    sortableDataTables() {
        return cy.get(':nth-child(41) > a')
    }

    statusCodes() {
        return cy.get(':nth-child(42) > a')
    }

    typos() {
        return cy.get(':nth-child(43) > a')
    }

    wysiwygEditor() {
        return cy.get(':nth-child(44) > a')
    }

}

export default homePage