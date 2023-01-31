# Stage 1: Build an image that can build the Angular application
FROM node:18-alpine as builder
# Specify the working directory inside the container
WORKDIR /ui
# Copy the package*.json file inside the container so it can tell npm what packages to install
COPY package*.json ./
# Run the installation of all the packages required in package*.json
RUN npm install
# Copy the source code of the application into the /app folder of the container
COPY . .
# Specify that we want a production build (smaller)
ARG configuration=production

ARG API_SERVER='http://api.todo-app.com'
ENV REACT_APP_API_SERVER=${API_SERVER}

# Run the actual build and put the output in the folder /app/dist/out in the container
RUN REACT_APP_API_SERVER=${API_SERVER} \
    npm run build --configuration $configuration

# Stage 2, create a container with nginx
# that serves the files created in the previous build
FROM nginx
# We copy the files that were created in the previous build to the folder where nginx expects them
COPY --from=builder /ui/build/ /usr/share/nginx/html
# We copy the nginx configuration frile form the host to the nginx installation
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf