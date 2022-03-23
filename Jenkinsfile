pipeline {
    agent {
        docker {
            image 'node:14-alpine'
        }
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Create .env and replace tokens') {
            steps {
                sh(label: 'copy to .env') 'cp .env.example .env'
                sh(label: 'replace tokens') script: |
                    #!/bin/bash
                    sed -i 's+#{BACKEND_HOST}#+$(BACKEND_HOST)+g' .env
                    sed -i 's+#{BACKEND_PORT}#+$(BACKEND_PORT)+g' .env
            }
        }
        stage('Build application') {
            steps{
                npm('run build')
            }
        }
    }
}