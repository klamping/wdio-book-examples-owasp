const assert = require('assert');

describe('Main Navigation', function () {
    it('should take you to the login page', function () {
        // Load the page
        browser.url('./');

        // Get the title of the homepage, should be 'OWASP Juice Shop'
        assert.strictEqual(browser.getTitle(), 'OWASP Juice Shop', 'Title of the homepage should be correct');

        // Click the 'About Us' navigation link
        $('button*=About Us').click();

        // Get the URL of the about page, should include 'about'
        assert.strictEqual(browser.getUrl(), 'http://juice-shop.herokuapp.com/#/about');
    });
});