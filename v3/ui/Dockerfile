# Stage 1: Build an image that can build the React application
FROM node:18-alpine as builder

WORKDIR /ui
COPY package*.json ./
RUN npm install

COPY . .

ARG configuration=production
ARG API_SERVER='http://api.todo-app.com'
ENV REACT_APP_API_SERVER=${API_SERVER}

RUN REACT_APP_API_SERVER=${API_SERVER} \
    npm run build --configuration $configuration

# Stage 2, create a container with nginx
FROM nginx

COPY --from=builder /ui/build/ /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf