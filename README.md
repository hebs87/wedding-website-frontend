# BuyDesign Portal

This is the frontend repo for the BuyDesign portal.

## First Installation

Complete the below steps to run the project locally:

1. Ensure you have created a Docker Hub account, downloaded Docker Desktop and signed into the dashboard with your Docker Hub account details
2. Checkout the `develop` branch
3. Add the `.env` and `.env.production` files in the project's root directory
4. Build and run the Docker (web) container:
    1. Run `docker-compose up --build -d` from the terminal and wait for the environment to fully install and start
        1. The container will run in the background
        2. To view the logs, please see the [**_Tracking Container Logs_**](#Tracking-Container-Logs) section
        3. This may take a while to install for the first installation
    2. Delete the empty local `node_modules` directory that was created during the installation
    3. Run `docker-compose exec web npm install` to install the packages
    4. Run `docker stop $(docker ps -a -q)` to stop the container
    5. Run `docker-compose up --build -d` to start the container again
    6. Head to `http://localhost:3000` to access the site
5. The Docker container can be stopped in one of two ways:
    1. Running the following commands in the terminal, one after the other
        1. `docker stop $(docker ps -a -q)`
        2. `docker rmi $(docker images -f "dangling=true" -q)`
    2. Completing the following steps in the Docker Desktop Dashboard
        1. Manually stop the container in the 'Containers' tab (the container's name will be the same as the project's name)
        2. Delete any containers named `<none>` in the 'Images' tab

## Subsequent Installation

After stopping a container following the first installation, complete the below steps to run the container again:

1. Run `docker-compose up --build -d` from the terminal and wait for the environment to fully install and start
    1. To view the logs, please see the [**_Tracking Container Logs_**](#Tracking-Container-Logs) section
2. Head to `http://localhost:3000` to access the site
3. The Docker containers can be stopped in one of two ways:
    1. Running the following commands in the terminal, one after the other
        1. `docker stop $(docker ps -a -q)`
        2. `docker rmi $(docker images -f "dangling=true" -q)`
    2. Completing the following steps in the Docker Desktop Dashboard
        1. Manually stop the container in the 'Containers' tab (the container's name will be the same as the project's name)
        2. Delete any containers named `<none>` in the 'Images' tab

## Tracking Container Logs

You can track the container's logs while it is running. To do so:

1. Run `docker-compose logs -f web` from the terminal
2. Hit `Control + C` in the terminal to stop tracking the logs (this won't stop the running container)

## Installing npm Packages

Complete the below steps to install a npm package while the container is running:

1. Run `docker-compose exec web npm install <package_name>` from the terminal
2. Delete the existing local `node_modules` directory
3. Run `docker-compose exec web npm install` from the terminal
4. Run `docker stop $(docker ps -a -q)` to stop the container
5. Run `docker rmi $(docker images -f "dangling=true" -q)` to remove any `<none>` containers
6. Run `docker-compose up --build -d` to start the container again

## Uninstalling npm Packages

Complete the below steps to uninstall a npm package while the container is running:

1. Run `docker-compose exec web npm uninstall <package_name>` from the terminal
2. Delete the existing local `node_modules` directory
3. Run `docker-compose exec web npm install` from the terminal
4. Run `docker stop $(docker ps -a -q)` to stop the container
5. Run `docker rmi $(docker images -f "dangling=true" -q)` to remove any `<none>` containers
6. Run `docker-compose up --build -d` to start the container again
