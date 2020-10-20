/// <reference types="Cypress" />

import homePage from "../pageObjects/homePage.po"
let home = new homePage()

describe("Home page", () => {
  beforeEach(() => {
    // Open home page
    home.visit()
  })

  it("Home page loads", () => {
    // Verify url is correct
    cy.url().should("include", "https://the-internet.herokuapp.com/")
  })

  it("A/B Testing", () => {
    // Click on A/B Testing
    home.ABTesting().click()

    // Verify url is correct
    cy.url().should("include", "/abtest")
  })

  it("Add/Remove Elements", () => {
    // Click link
    home.addRemoveElements().click()
    
    // Verify url is correct
    cy.url().should("include", "/add_remove_elements")
  })

  xit("Basic Auth", () => {
    // Click link
    home.basicAuth().click()
    // To do - handle alert
    
    // Verify url is correct
    cy.url().should("include", "basic_auth")
  })

  it("Broken Images", () => {
    // Click link
    home.brokenImages().click()
    
    // Verify url is correct
    cy.url().should("include", "broken_images")
  })

  it("Challenging DOM", () => {
    // Click link
    home.challengingDOM().click()
    
    // Verify url is correct
    cy.url().should("include", "challenging_dom")
  })

  it("Checkboxes", () => {
    // Click link
    home.checkboxes().click()
    
    // Verify url is correct
    cy.url().should("include", "checkboxes")
  })

  it("Context Menu", () => {
    // Click link
    home.contextMenu().click()
    
    // Verify url is correct
    cy.url().should("include", "context_menu")
  })

  it("Digest Authentication", () => {})

  it("Disappearing Elements", () => {
    // Click link
    home.disappearingElements().click()
    
    // Verify url is correct
    cy.url().should("include", "disappearing_elements")
  })

  it("Drag and Drop", () => {
    // Click link
    home.dragAndDrop().click()
    
    // Verify url is correct
    cy.url().should("include", "drag_and_drop")
  })

  it("Dropdown", () => {
    // Click link
    home.dropdown().click()
    
    // Verify url is correct
    cy.url().should("include", "dropdown")
  })

  it("Dynamic Content", () => {
    // Click link
    home.dynamicContent().click()
    
    // Verify url is correct
    cy.url().should("include", "dynamic_content")
  })

  it("Dynamic Controls", () => {
    // Click link
    home.dynamicControls().click()
    
    // Verify url is correct
    cy.url().should("include", "dynamic_controls")
  })

  it("Dynamic Loading", () => {
    // Click link
    home.dynamicLoading().click()
    
    // Verify url is correct
    cy.url().should("include", "dynamic_loading")
  })

  it("Entry Ad", () => {
    // Click link
    home.entryAd().click()
    
    // Verify url is correct
    cy.url().should("include", "entry_ad")
  })

  it("Exit Intent", () => {
    // Click link
    home.exitIntent().click()
    
    // Verify url is correct
    cy.url().should("include", "exit_intent")
  })

  it("File Download", () => {
    // Click link
    home.fileDownload().click()
    
    // Verify url is correct
    cy.url().should("include", "download")
  })

  it("File Upload", () => {
    // Click link
    home.fileUpload().click()
    
    // Verify url is correct
    cy.url().should("include", "upload")
  })

  it("Floating Menu", () => {
    // Click link
    home.floatingMenu().click()
    
    // Verify url is correct
    cy.url().should("include", "floating_menu")
  })

  it("Forgot Password", () => {
    // Click link
    home.forgotPassword().click()
    
    // Verify url is correct
    cy.url().should("include", "forgot_password")
  })

  it("Form Authentication", () => {
    // Click link
    home.formAuthentication().click()
    
    // Verify url is correct
    cy.url().should("include", "login")
  })

  it("Frames", () => {
    // Click link
    home.frames().click()
    
    // Verify url is correct
    cy.url().should("include", "frames")
  })

  it("Geolocation", () => {
    // Click link
    home.geolocation().click()
    
    // Verify url is correct
    cy.url().should("include", "geolocation")
  })

  it("Horizontal Slider", () => {
    // Click link
    home.horizontalSlider().click()
    
    // Verify url is correct
    cy.url().should("include", "horizontal_slider")
  })

  it("Hovers", () => {
    home.hovers().click()
    
    // Verify url is correct
    cy.url().should("include", "hovers")
  })

  it("Infinite Scroll", () => {
    // Click link
    home.infiniteScroll().click()
    
    // Verify url is correct
    cy.url().should("include", "infinite_scroll")
  })

  it("Inputs", () => {
    // Click link
    home.inputs().click()
    
    // Verify url is correct
    cy.url().should("include", "inputs")
  })

  it("JQuery UI Menus", () => {
    // Click link
    home.jqueryUIMenu().click()
    
    // Verify url is correct
    cy.url().should("include", "jqueryui")
  })

  it("JavaScript Alerts", () => {
    // Click link
    home.javaScriptAlerts().click()
    
    // Verify url is correct
    cy.url().should("include", "javascript_alerts")
  })

  it("JavaScript onload event error", () => {})

  it("Key Presses", () => {
    // Click link
    home.keyPresses().click()
    
    // Verify url is correct
    cy.url().should("include", "key_presses")
  })

  it("Large & Deep DOM", () => {
    // Click link
    home.largeAndDeepDOM().click()
    
    // Verify url is correct
    cy.url().should("include", "large")
  })

  it("Multiple Windows", () => {
    // Click link
    home.multipleWindows().click()
    
    // Verify url is correct
    cy.url().should("include", "windows")
  })

  it("Nested Frames", () => {
    // Click link
    home.nestedFrames().click()
    
    // Verify url is correct
    cy.url().should("include", "nested_frames")
  })

  it("Notification Messages", () => {
    // Click link
    home.notificationMessages().click()
    
    // Verify url is correct
    cy.url().should("include", "notification_message")
  })

  it("Redirect Link", () => {
    // Click link
    home.redirectLink().click()
    
    // Verify url is correct
    cy.url().should("include", "redirector")
  })

  it("Secure File Download", () => {})

  it("Shadow DOM", () => {
    // Click link
    home.shadowDOM().click()
    
    // Verify url is correct
    cy.url().should("include", "shadowdom")
  })

  it("Shifting Content", () => {
    // Click link
    home.shiftingContent().click()
    
    // Verify url is correct
    cy.url().should("include", "shifting_content")
  })

  it("Slow Resources", () => {
    // Click link
    home.slowResources().click()
    
    // Verify url is correct
    cy.url().should("include", "slow")
  })

  it("Sortable Data Tables", () => {
    // Click link
    home.sortableDataTables().click()
    
    // Verify url is correct
    cy.url().should("include", "tables")
  })

  it("Status Codes", () => {
    // Click link
    home.statusCodes().click()
    
    // Verify url is correct
    cy.url().should("include", "status_codes")
  })

  it("Typos", () => {
    // Click link
    home.typos().click()
    
    // Verify url is correct
    cy.url().should("include", "typos")
  })

  it("WYSIWYG Editor", () => {
    // Click link
    home.wysiwygEditor().click()
    
    // Verify url is correct
    cy.url().should("include", "tinymce")
  })
})
