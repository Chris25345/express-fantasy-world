FROM node:14-alpine as client
WORKDIR /client
COPY . .
RUN yarn install --ignore-scripts
EXPOSE 3000
CMD ["yarn", "start"]
