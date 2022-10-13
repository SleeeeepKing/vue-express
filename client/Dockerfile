# syntax=docker/dockerfile:1

FROM node:16.17.0

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]