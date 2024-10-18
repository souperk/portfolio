FROM node:20-alpine AS npm-build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN set -xe && npm ci

COPY . .
RUN set -xe && npm run build

FROM nginx:1.25.0-alpine AS release
ENV NODE_ENV production

COPY --from=npm-build /app/dist /usr/share/nginx/html
COPY nginx/ /etc/nginx/templates

EXPOSE 80
