const testData = require('../../data/testData');
const selectors = require('../selectors');


class AddCustomerPage {
    get addCustomerTab() { return $(selectors.managerPage.addCustomerTab); }
    get customersTab() { return $(selectors.managerPage.customersTab); }
    get firstNameInput() { return $(selectors.managerPage.firstNameInput); }
    get lastNameInput() { return $(selectors.managerPage.lastNameInput); }
    get postCodeInput() { return $(selectors.managerPage.postCodeInput); }
    get addCustomerSubmitBtn() { return $(selectors.managerPage.addCustomerSubmitBtn); }
    get searchCustomerBar(){return $(selectors.managerPage.searchCustomerBar);}
    get searchCustomerKey(){return $(selectors.managerPage.searchCustomerKey);}

    /**
     * Verify if the last added customer appears in the table
     * @param {string} expectedCustomerName - The name of the customer to verify
     */

    async addCustomer(customerKey) {
        const customer = testData.customers[customerKey]
        if (!customer){
            throw new Error("Customer data for key '${customerKey}' not found");
        }
        await this.addCustomerTab.click();
        await this.firstNameInput.waitForDisplayed({ timeout: 30000 });
        await browser.saveScreenshot(`./screenshots/CustomerPage_addCustomer.png`);

        await this.firstNameInput.setValue(customer.firstName);
        await this.lastNameInput.setValue(customer.lastName);
        await this.postCodeInput.setValue(customer.postCode);
        await browser.saveScreenshot(`./screenshots/CustomerPage_fillDetails.png`);

        await this.addCustomerSubmitBtn.click();
        await browser.saveScreenshot(`./screenshots/CustomerPage_customerAdded.png`);
        //Click OK on any popup
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
        
        //await browser.acceptAlert();
    }

    async verifyNewCustomer(expectedCustomerName){
        await this.customersTab.click();
        await this.searchCustomerBar.waitForDisplayed({ timeout: 30000 });
        
        const lastCustomerText = await this.searchCustomerKey.getText();
        await this.searchCustomerKey.scrollIntoView();
        expect(lastCustomerText).toEqual(expectedCustomerName);
        await browser.saveScreenshot(`./screenshots/VerifyCustomerAdded.png`);
    }
}

module.exports = new AddCustomerPage();
