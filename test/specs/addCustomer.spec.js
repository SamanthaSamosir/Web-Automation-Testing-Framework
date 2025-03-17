const allureReporter = require('@wdio/allure-reporter').default;
const HomePage = require('../pageobjects/HomePage');
const AddCustomerPage = require('../pageobjects/AddCustomerPage');

describe('Add Customer Test', () => {
    it('should add a new customer successfully', async () => {
        allureReporter.addFeature('Banking Project');
        allureReporter.addStory('Bank Manager Login');
        //Test step
        allureReporter.addStep('Navigating to the login page');
        //Open browser
        await HomePage.open();
        //Login as Bank Manager
        await HomePage.loginAsManager();
        //Open Add customer tab
        await AddCustomerPage.addCustomer("johnDoe");
        //verify added customer
        await AddCustomerPage.verifyNewCustomer("John");
    });
});
