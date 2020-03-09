void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/dgsousa/pm_board"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
	agent { label 'docker-node'}
	stages {
		stage('Install Tools') {
			steps {
				sh """
					yarn install --pure-lockfile
				"""
			}
		}
		stage('Test') {
			parallel {
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
		}
		stage('Build') {
			parallel {
				stage('client:build') {
					steps {
						sh """
							cd client
							yarn build
						""" 
					}
				}
			}
		}
		stage('Deploy') {
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
	post {
		success {
			setBuildStatus("Build succeeded", "SUCCESS");
		}
		cleanup {
			deleteDir()
		}
		failure {
			setBuildStatus("Build failed", "FAILURE");
		}
	}
}