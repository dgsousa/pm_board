pipeline {
	agent any
	stages {
		stage('apps') {
			parallel {
				stage('client') {
					stages {
						stage('Build') { 
							steps {
								sh """
									cd client
									chmod 700 build.sh
									./build.sh
								""" 
							}
						}
						stage('Deploy') { 
							steps {
								sh """
									cd client
									chmod 700 deploy.sh
									./deploy.sh
								"""
							}
						}
					}
				}
			}
		}
	}
	post {
		success {
			echo 'pipeline succeeded!'
		}
		failure {
			echo 'pipeline failed!'
		}
	}
}