pipeline {
	agent { label 'docker-node'}
	stages {
		stage('apps') {
			parallel {
				stage('server') {
					stages {
						stage('Deploy') { 
							steps {
								sh """
									cd server'
									chmod 700 deploy.sh
									./deploy.sh
								""" 
							}
						}
					}
				}
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
		cleanup {
			script {
				sh """
					docker system prune -f -a
				"""
			}
		}
	}
}