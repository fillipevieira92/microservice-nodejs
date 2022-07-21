# develop stage
FROM node:18-alpine3.15 as develop-stage

COPY package*.json /data/
WORKDIR /data/
RUN npm install -g nodemon && npm install
ENV PATH /data/node_modules/.bin:$PATH

COPY ./ /data/file_service
WORKDIR /data/file_service

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /file_service/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]