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
    }
}