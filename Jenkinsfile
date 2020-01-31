pipeline {
	agent { label 'docker-node'}
	stages {
		stage('docker login') {
			steps{
				sh """
					docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
				"""
			}
		}
		stage('apps') {
			parallel {
				stage('server') {
					steps {
						sh """
							cd server
							export DOCKER_TAG=$GIT_COMMIT
							yarn run docker:build
							yarn run docker:push
							yarn run docker:tag-dev
							yarn run docker:push-dev
						"""
					}
				}
				stage('client') {
					steps {
						sh """
							cd client
							export DOCKER_TAG=$GIT_COMMIT
							yarn run docker:build
							yarn run docker:push
							yarn run docker:tag-dev
							yarn run docker:push-dev
						"""
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
					docker system prune -f -all --volumes
				"""
			}
		}
	}
}