FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN mkdir -p ./public ./data \
    && cd ./client \
    && npm install --omit=dev \
    && npm run build \
    && cd .. \
    && mv ./client/build/* ./public \
    && rm -rf ./client

FROM node:lts-alpine

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 5005

ENV NODE_ENV=production
ENV PASSWORD=flame_password

CMD ["sh", "-c", "chown -R node /app/data && node server.js"]