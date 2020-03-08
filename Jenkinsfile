pipeline {
	agent { label 'docker-node'}
	stages {
		stage('apps') {
			steps {
				sh  """
					cd server
					chmod 700 deploy.sh
					./deploy.sh
				""" 
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