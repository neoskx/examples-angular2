#!/usr/bin/env bash

## Stop Redis
eval $(docker-machine env example-angular2-docker)
docker stop $(docker ps -q -f "name=example-angular2")
docker rm $(docker ps -a -q -f "name=example-angular2")

## Stop Docker
docker-machine stop example-angular2-docker