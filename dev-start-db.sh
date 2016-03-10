#!/usr/bin/env bash
#!/usr/bin/env bash

docker-machine create --driver virtualbox example-angular2-docker
docker-machine start example-angular2-docker
eval $(docker-machine env example-angular2-docker)

docker pull mongo

DOCKER_IP=$(docker-machine ip example-angular2-docker)

echo *** $DOCKER_IP

## Cleanup containers
docker stop $(docker ps -q -f "name=example-angular2")
docker rm $(docker ps -a -q -f "name=example-angular2")

## Start Redis
docker run --name example-angular2 -p 27017:27017 -d mongo

export MONGODB="mongodb://${DOCKER_IP}:27017/examples-angular2"

echo $MONGODB

