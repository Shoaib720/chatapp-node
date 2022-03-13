FROM node:16-alpine as build

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /var/www/html/chatapp

COPY --from=build build .

EXPOSE 80