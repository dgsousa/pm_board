pipeline {
	agent { label 'docker-node'}
	stages {
		stage('apps') {	
				stages {
					stage('Deploy') { 
						steps {
							sh 'cd server'
							sh 'chmod 700 deploy.sh'
							sh './deploy.sh' 
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