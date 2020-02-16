## == yarn 版本 ==

# Base image
FROM node:alpine
# AUTHOR
LABEL AUTHOR = "TOM" \
  EMAIL = "TOM@TEST.ME"
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install && yarn cache clean
EXPOSE 8321/tcp
# Bundle app source
COPY . /usr/src/app
CMD [ "yarn", "start" ]

