pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'chmod 700 build.sh'
                sh './build.sh' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'chmod 700 deploy.sh'
                sh './deploy.sh' 
            }
        }
    }
}