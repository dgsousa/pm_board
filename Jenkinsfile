void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/dgsousa/pm_board"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

def githubScript(script, stageName) {
	try {
		sh script
		setBuildStatus(stageName, "SUCCESS")
	} catch (err) {
		setBuildStatus(stageName, "FAILURE")
	}
}


pipeline {
	agent { label 'docker-node'}
	stages {
		stage('Install Tools') {
			steps {
				githubScript("""
					yarn install --pure-lockfile
				""", "install tools")
			}
		}
		stage('Test') {
			parallel {
				stage('client:test') {
					steps {
						githubScript("""
							cd client
							yarn lint
							yarn test
						""", "client:test") 
					}
				}
			}
		}
		stage('Build') {
			parallel {
				stage('client:build') {
					steps {
						githubScript("""
							cd client
							yarn build
						""", "client:build") 
					}
				}
			}
		}
		stage('Deploy') {
			parallel {
				stage('client:deploy') {
					steps {
						githubScript("""
							cd client
							chmod 700 deploy.sh
							./deploy.sh
						""", "client:deploy")
					}
				}
				stage('server:deploy') {
					steps {
						githubScript("""
							cd server
							chmod 700 deploy.sh
							./deploy.sh
						""", "server:deploy")
					}
				}
			}
		}
	}
	post {
		success {
			setBuildStatus("Build succeeded", "SUCCESS");
			setBuildStatus("install tools", "SUCCESS");
			setBuildStatus("client:test", "SUCCESS");
			setBuildStatus("client:build", "SUCCESS");
			setBuildStatus("client:deploy", "SUCCESS");
			setBuildStatus("server:deploy", "SUCCESS");
		}
		cleanup {
			deleteDir()
		}
		failure {
			setBuildStatus("Build failed", "FAILURE");
		}
	}
}