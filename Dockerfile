FROM node:12.6 as builder

WORKDIR /tmp

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm prune --production


FROM alpine

ARG PORT=8000
RUN apk add --update nodejs

WORKDIR /app

COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /tmp/dist/ ./
COPY package.json .

RUN ls -al

EXPOSE ${PORT}

ENTRYPOINT [ "node","src/server.js" ]



