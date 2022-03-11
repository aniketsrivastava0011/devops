<<<<<<< HEAD
# aws pipeline deploying eks pods
This repository contains sample codes to work with AWS Codepipeline, ECR, EKS, IAM and Codebuild
This is a node.js project, but add config as per your project requirement 

#Pre-Requisite for pipeline
-Create an AWS EKS cluster with required nodes/nodegroup.
-Initiate communication with your CLI 
-Edit aws-auth and add arn of service role created for AWS CodeBuild.
-Initiate a load balancer service on cluster so that output can be checked.
-Create a simple AWS CodePipeline and AWS CodeBuild project.
 
# eks folder
Files in eks folder can be used for further configuration in eks cluster.
1. aws-auth.yml - for configmap
2. create_iam_role.sh - to create service role for AWS CodeBuild.
3. deployment.yaml - for using newer docker image from registry.
4. service.yaml - to start a load balancing service inside cluster.
5. prereqs.sh - to get an idea what utilities system should have or can be use in pre-build stage as a fair parallel check.

#Dockerfile
Used get packages, npm install and exposing port. Whithout this build will not be possible.

#eks.yml
This is buildspec.yml for my case. Having the stages:

1. install - removing previous kubectl version available on build server/platform and installing required version of kubectl.
2. pre-build - configuring build server/platform for operation ready. Configuring .kube/config file (having all the cluster information) and docker registry connection.
3. build - the Dockerfile will fetch all the node dependencies, packages and app bundle into the new pulled image conditional environment.
4. post-build - image will be build and pushed to registry and new changes on service will be rolled out.
 


=======
# aws_codebuild_codedeploy_nodeJs_demo
This repository contains sample codes to work with AWS 

This Project build_script directory contains build related script, check buildspec.yml file I have integrated the same. 

Deployment related scripts are in deployment_scripts directory, check appspec.yml file. 


This is a node.js project same, but change config as per your project requirement 


In codebuild.yml file in post build phase, line:
      - aws deploy push --application-name "${CODE_DEPLOY_APPLICATION_NAME}" --s3-location "s3://${CODE_DEPLOY_S3_BUCKET}/codedeploydemo/app.zip" --ignore-hidden-files --region us-west-2

You can enavironment variable in code build : CODE_DEPLOY_APPLICATION_NAME, CODE_DEPLOY_S3_BUCKET and the value will reflect in the command. 

Check Previous Videos to make sense of this implementation:



Keep learning , Keep improving 


aws deploy push --application-name "${CODE_DEPLOY_APPLICATION_NAME}" --s3-location "s3://${CODE_DEPLOY_S3_BUCKET}/codedeploydemo/app.zip" --ignore-hidden-files --region us-west-2


Data that need to be set up in user data while launching instance in order to install code deploy agent in ec2 instance on boot

#!/bin/bash
sudo apt-get update -y 
sudo apt-get install ruby -y
sudo apt-get install wget -y

cd /home/ubuntu

wget https://aws-codedeploy-us-west-2.s3.us-west-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto


node-app-youtube-demo


aws deploy push --application-name NodeAppServerDeployment --s3-location "s3://node-app-youtube-demo/codedeploydemo/app.zip" --ignore-hidden-files 
>>>>>>> c1eb79d550bff45eeec3561e7ad3c96eb66cc059
