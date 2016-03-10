#!/usr/bin/env bash


DOCKER_IP=$(docker-machine ip example-angular2-docker)

echo *** $DOCKER_IP

export MONGODB="mongodb://${DOCKER_IP}:27017/examples-angular2"
export PUBLICCACHE=0

## npm install
npm install

## start server
npm run dev

