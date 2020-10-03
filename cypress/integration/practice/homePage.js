describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Home page loads', () => {
        cy.url().should('include', 'https://the-internet.herokuapp.com/')
    })
})