FROM node:8.16.2-alpine

WORKDIR /var/service

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . /var/service

RUN yarn build

EXPOSE 80

CMD [ "node", "serve" ]