FROM node:8.16.2-alpine as build-stage

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./ .

RUN yarn build


FROM nginx:1.17.8-alpine

EXPOSE 80

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
