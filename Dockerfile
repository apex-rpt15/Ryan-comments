FROM node:latest

ENV db_host database

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install nodemon -g

EXPOSE 3002

CMD [ "npm", "run", "seed-start"]