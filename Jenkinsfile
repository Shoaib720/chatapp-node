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
                sh(label: 'replace tokens' script: 'scripts/replace-token.sh')
            }
        }
        stage('Build application') {
            steps{
                npm('run build')
            }
        }
    }
}