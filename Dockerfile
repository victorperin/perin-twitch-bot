FROM node:14-alpine as buildStage

WORKDIR /build

COPY package.json /build/
RUN npm install

COPY src /build/src
COPY tsconfig.json /build
RUN npm run build

##########################################

FROM node:14-alpine as runStage

WORKDIR /bot
COPY --from=buildStage /build/package.json /bot/
COPY --from=buildStage /build/dist /bot
RUN npm i --only=prod
RUN npm prune --production

CMD [ "node", "index.js" ]
