pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        sh 'npx cypress run --record --key 4d33cb2e-8b03-4ee2-8815-2e55b6463f7a --parallel'
                    }
                }
                /*stage('Run tests in parallel B') {
                    steps {
                        sh 'npx cypress run --record --key 4d33cb2e-8b03-4ee2-8815-2e55b6463f7a --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        sh 'npx cypress run --record --key 4d33cb2e-8b03-4ee2-8815-2e55b6463f7a --parallel'
                    }
                }*/
            }
        }
    }
}
