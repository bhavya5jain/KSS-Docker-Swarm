FROM node:14-slim

WORKDIR /app

COPY package*.json ./

RUN apt-get update &&\
    apt-get install curl -y &&\
    npm install

COPY . .

EXPOSE 3000

# Define the command to run your app
CMD [ "node", "index.js" ]

