pipeline{
    agent any
    stages{

        stage("Compile"){
            steps{
                script{
                    sh "node tests.js"
                }
            }
        }

        stage("Unit Tests"){
            steps{
                script{
                    sh "npm run test"
                }
            }
        }

    }
}