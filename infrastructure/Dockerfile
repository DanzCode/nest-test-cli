FROM node:16-bullseye
RUN mkdir /app
COPY ./dist /app/dist
COPY ./node_modules /app/node_modules
WORKDIR /app
CMD ["node", "dist/main.js"]