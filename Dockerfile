FROM node:8.16.2-alpine

WORKDIR /var/service

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "node", "serve" ]