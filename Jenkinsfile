pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the repo
                git branch: 'master',
                    url: 'https://github.com/SamanthaSamosir/Web-Automation-Testing-Framework.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run your WDIO tests
                bat 'npx wdio run wdio.conf.js'
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure([
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}
