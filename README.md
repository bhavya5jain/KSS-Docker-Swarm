# Docker Swarm KSS(Knowledge Sharing Session) 
This is a short demo on [Docker Swarm](https://docs.docker.com/engine/swarm/). We will deploy two applications, blue-app & green-app, using docker cli in a local docker swarm cluster.

Note: I am deploying in a local linux machine. However, same instructions should work in Mac as well.

## Requirements
- Docker version 23.0.4

## Steps to deploy 

### 1. Create & tag docker images
#### 1. Create docker images for blue and green applications separately
```sh 
cd blue/
docker build -t blue-app .
cd ../green/
docker build -t green-app .
cd ../
```

#### 2. Tag the docker images
```sh 
docker tag blue-app:latest blue-app:0.1.0
docker tag green-app:latest green-app:0.1.0
```

### 2. Setup docker swarm cluster
```sh 
docker swarm init
```

### 3. Deploy blue and green app
```sh 
docker stack deploy -c docker-compose.yml demo-app
```

## Verify that the deployment was successful
- Check if the services were deployed successfully in the docker swarm cluster
```sh 
docker service ls
```
Note: It takes about a minute to deploy successfully and health check to pass

- Try to run access the applications
```sh
# Blue application
curl localhost:8000
# Green application
curl localhost:8001
```
