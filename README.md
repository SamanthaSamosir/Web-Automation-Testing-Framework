# Web Automation Testing Framework

An example of **web automation testing framework** using **Selenium/WebdriverIO** with **JavaScript** to validate banking web application **(https://globalsqa.com/angularJs-protractor/BankingProject/#/login)**. This project implements **Page Object Model (POM)**, **Allure Reporting**, and **CI/CD pipelines** using **GitHub** and **Jenkins**.

## Features
- **Bank Manager Login Automation**
  - Add Customer
- **Ngrok implementation**
- **Allure Report Integration**
- **Test Execution with WebdriverIO** 
- **CI/CD Setup with GitHub and Jenkins**
- **Page Object Model (POM) Implementation**

## Prerequisites
- Git
- Jenkins
- OpenSSL
- WebdriverIO
- Java (17.0.12 2)
- Node.js (v22.14.0)

## Installation
```sh
# Clone the repository
git clone https://github.com/SamanthaSamosir/Web-Automation-Testing-Framework.git
cd Web-Automation-Testing-Framework
```
# Install dependencies
```sh
npm install
```

## Running Tests
```sh
# Execute test cases
npx wdio run wdio.conf.js
```
or
```sh
npx wdio --spec test/specs/addCustomer.spec.js
```

# Generate and view Allure Report
```sh
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## CI/CD Integration
- **GitHub Apps**: [Add a GitHub App for credential in Jenkins](https://github.com/apps/jenkins-by-samanthasamosir).
- **Jenkins**: Configurable for scheduled or triggered test runs.
- **Webhook**: Trigger Jenkins jobs whenever code is pushed to GitHub.

## License
This project is licensed under the **GNU General Public License v3.0**.

---
🚀 **Created by [Samantha Samosir](https://github.com/SamanthaSamosir), empowering quality automation in web applications!**