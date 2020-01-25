FROM node:8.16.2-alpine

WORKDIR /var/service

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . /var/service

RUN yarn build

EXPOSE 8000

CMD [ "node", "serve" ]