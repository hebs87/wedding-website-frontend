# pull official base image
FROM node:18

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent

# copy source code
COPY . .

# Allow command cycling in Docker container terminal
RUN ln -sf /bin/bash /bin/sh
