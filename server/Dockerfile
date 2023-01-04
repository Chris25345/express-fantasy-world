FROM node:14-alpine as server
WORKDIR /server
COPY . .
RUN yarn install --ignore-scripts
EXPOSE 5000
CMD ["yarn", "dev"]
