pipeline {
    agent {
        docker {
            image 'node:14-alpine'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Create .env and replace tokens') {
            steps {
                script {
                    sh(label: 'copy to .env') "cp .env.example .env"
                    sh(label: 'replace tokens') '''
                    #!/bin/bash
                    sed -i 's+#{BACKEND_HOST}#+$(BACKEND_HOST)+g' .env
                    sed -i 's+#{BACKEND_PORT}#+$(BACKEND_PORT)+g' .env
                '''
                }
            }
        }
        stage('Build application') {
            steps{
                sh 'npm run build'
            }
        }
    }
}