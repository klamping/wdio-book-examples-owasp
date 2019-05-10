const expect = require('chai').expect;

describe('Main Navigation', function () {
    it('should take you to the login page', function () {
        // Load the page
        browser.url('./');

        // Get the title of the homepage, should be 'OWASP Juice Shop'
        expect(browser.getTitle()).to.equal('OWASP Juice Shop', 'Title of the homepage should be correct');

        // Click the 'About Us' navigation link
        $('button*=About Us').click();

        // Get the URL of the about page, should include 'about'
        expect(browser.getUrl()).to.include('/about');
    });
});