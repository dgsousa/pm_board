pipeline {
	agent { label 'docker-node'}
	stages {
		stage('install tools') {
			steps {
				sh """
					yarn install --pure-lockfile
				"""
			}
		}
		stage('apps') {
			parallel {
				stage('client') {
					stages {
						stage('Test') {
							steps {
								sh """
									cd client
									yarn test
								""" 
							}
						}
						stage('Build') { 
							steps {
								sh """
									cd client
									yarn build
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
				stage('server') {
					stages {
						stage('Deploy') { 
							steps {
								sh """
									cd server
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