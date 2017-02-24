## Run a project with a single command

This repository is part of the [blog post](https://blog.maqpie.com/2017/02/22/fully-automated-development-environment-with-docker-compose/), which have some tips about automation of any project start and testing using [docker-compose](https://docs.docker.com/compose/).  

Repository consist 4 independent services:

1. Landing - a landing site
2. Web - a simple frontend that serves client side assets for React application and do some server side rendering.
3. Api - a restful api.
4. Admin - an admin site

Note: all services are just fake and you can skip reading everything except: Dockerfile, Dockerfile.dev, package.json within every project. docker-compose.yml, docker-compose.local-tests.yml & .env file.

To start entire application run simple command in terminal: `./bin/start.sh`
To test application run `./bin/run-tests.sh`.


### Separate Dockerfile for development

Dockerfile.dev used to run every project on local environment. There are two reasons for using separate dockerfile for local environments:

1. To run application using Nodemon, which automatically restart application on code change. (same can be achieved by overriding `command` in docker-compose.yml)
2. Production Docker files has `npm run build && npm prune --production`. That needed to keep your Docker images smaller, by removing devDependencies after `build` step has been completed. In this step you would typically use Webpack, Gulp or any other bundlers / task runners.

If image size is not an issue - I would recommend to keep same Dockerfile for both development and production environments.

Feedback are welcome using issues!
