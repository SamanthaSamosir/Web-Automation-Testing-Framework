"""pipeline {
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
"""
pipeline {
    agent any

    environment {
        ALLURE_RESULTS = 'allure-results'
        ALLURE_REPORT = 'allure-report'
    }

    stages {
        stage('Checkout') {
            steps {
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
                bat 'mkdir screenshots || echo "Screenshots folder exists"'
                bat 'npx wdio run wdio.conf.js'
            }
        }
        
        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate ${ALLURE_RESULTS} --clean -o ${ALLURE_REPORT}'
            }
        }
        
        stage('Publish Allure Report') {
            steps {
                allure([
                    results: [[path: 'allure-results']]
                ])
            }
        }
        
        stage('Archive Screenshots') {
            steps {
                archiveArtifacts artifacts: 'screenshots/*.png', fingerprint: true
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: '**/allure-report/**', fingerprint: true
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed.'
        }
        failure {
            echo 'Pipeline failed. Check logs and reports for details.'
        }
    }
}
