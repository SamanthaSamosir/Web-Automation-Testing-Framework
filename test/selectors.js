// selectors.js

module.exports = {
    homePage: {
        customerLoginBtn: 'button[ng-click="customer()"]',
        bankManagerLoginBtn: 'button[ng-click="manager()"]',
        homeBtn: 'button[ng-click="home()"]'
    },
    managerPage: {
        addCustomerTab: 'button[ng-click="addCust()"]',
        firstNameInput: 'input[ng-model="fName"]',
        lastNameInput: 'input[ng-model="lName"]',
        postCodeInput: 'input[ng-model="postCd"]',
        addCustomerSubmitBtn: 'button[type="submit"]',
        customersTab: 'button[ng-click="showCust()"]',
        searchCustomerBar: 'input[ng-model="searchCustomer"]',
        searchCustomerKey: '//tr[6]/td[1]'
    },
    deleteCustomerPage: {
        customersTab: 'button[ng-click="showCust()"]',
        searchInput: 'input[ng-model="searchCustomer"]',
        deleteCustomerBtn: 'button[ng-click="deleteCust(cust)"]'
    }
};
