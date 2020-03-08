
pipeline {
	agent { label 'docker-node'}
	stages {
		stage('apps') {
			stage('Install Tools') {
				sh """
					yarn install --pure-lockfile
				"""
			}
			stage('Test') {
				stage('client:test') {
					steps {
						sh """
							cd client
							yarn lint
							yarn test
						""" 
					}
				}
			}
			stage('Build') {
				stage('client:build')
					steps {
						sh """
							cd client
							yarn build
						""" 
					}
				}
			}
			stage('Deploy') {
				when { branch 'master' }
				parallel {
					stage('client:deploy') {
						steps {
							sh """
								cd client
								chmod 700 deploy.sh
								./deploy.sh
							"""
						}
					}
					stage('server:deploy') {
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