# build enviroment

FROM node:16.15.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN nmp install
COPY . ./
RUN nmp run test