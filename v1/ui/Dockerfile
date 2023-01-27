# FROM node:17.3-alpine

# WORKDIR /ui
# COPY package.json .
# RUN npm install

# COPY . .

# CMD ["npm", "start"]

###########
# BUILDER #
###########

# pull official base image
FROM node:18-alpine as builder

# set work directory
WORKDIR /ui

# install dependencies and avoid `node-gyp rebuild` errors
COPY package.json .
RUN npm install

# copy our react project
COPY . .

# perform npm build
ARG API_SERVER
ENV REACT_APP_API_SERVER=${API_SERVER}
RUN REACT_APP_API_SERVER=${API_SERVER} \ 
  npm run build

#########
# FINAL #
#########

# pull official base image
FROM node:18-alpine

# set work directory
WORKDIR /ui

# install serve - deployment static server suggested by official create-react-app
RUN npm install -g serve

# copy our build files from our builder stage
COPY --from=builder /ui/build/ ./build