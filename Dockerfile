FROM node:12

RUN mkdir /app

WORKDIR /app

COPY ./ ./

RUN yarn install

COPY ./ ./