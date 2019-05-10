describe('Main Navigation', function () {
    it('should take you to the login page', function () {
        // Load the page
        browser.url('./')

        // Get the title of the homepage, should be 'OWASP Juice Shop'
        if (browser.getTitle() !== 'OWASP Juice Shop') {
            throw new Error('Title of the homepage should be "OWASP Juice Shop"')
        }

        // Click the 'About Us' navigation link
        $('button*=About Us').click()

        // Get the URL of the about page, should include 'about'
        if (browser.getUrl() !== 'http://juice-shop.herokuapp.com/#/about') {
            throw new Error('URL of about should be correct')
        }
    })
})