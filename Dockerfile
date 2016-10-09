FROM node:6.7.0
MAINTAINER SCG <08martinm@gmail.com>

# Replace sh with bash so we can use source
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install project dependencies
# -p allows mkdir to recursively make all folders in path
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
Run cd /usr/src/app/

# Install Node and project deps.
RUN npm install -g nodemon \
  && npm install -g webpack \
  && npm install -g mocha \
  && npm install

# Bundle app source
COPY . /usr/src/app

# Expose port 80 (http)
EXPOSE 80