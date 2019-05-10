describe('Main Navigation', function () {
    it('should take you to the login page', function () {
        // Load the page
        browser.url('./')

        // Get the title of the homepage, should be 'OWASP Juice Shop'
        console.log(browser.getTitle())

        // Click the 'About Us' navigation link
        $('button*=About Us').click()

        // Get the URL of the about page, should include 'about'
        console.log(browser.getUrl())
    })
})