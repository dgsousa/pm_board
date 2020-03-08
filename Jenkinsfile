pipeline {
	agent { label 'docker-node'}
	stages {
		stage('apps') {
			parallel {
				stage('client') {
					stages {
						stage('Install') {
							steps {
								sh """
									rm -rf node_modules
									cd client
									yarn install --pure-lockfile
								"""
							}
						}
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
		cleanup {
			deleteDir()
		}
		failure {
			echo 'pipeline failed!'
		}
	}
}