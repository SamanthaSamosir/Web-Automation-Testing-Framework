const selectors = require('../selectors');
const AddCustomerPage = require('./AddCustomerPage');

class LoginPage {
    get bankManagerLoginBtn() { return $(selectors.homePage.bankManagerLoginBtn); }

    async open() {
        // Use baseUrl from wdio.conf.js
        await browser.url('/angularJs-protractor/BankingProject/#/login');
        await browser.pause(10000)
        await browser.saveScreenshot(`./screenshots/LoginPage_open.png`);
    }

    async loginAsManager() {
        await this.bankManagerLoginBtn.waitForDisplayed({ timeout: 10000 });
        await this.bankManagerLoginBtn.click();
        await AddCustomerPage.addCustomerTab.waitForDisplayed({ timeout: 10000 });
        await browser.saveScreenshot(`./screenshots/LoginPage_managerLogin.png`);
    }
}

module.exports = new LoginPage();
