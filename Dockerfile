# build stage
FROM node:20-alpine as web-build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN set -xe && npm ci

COPY . .
RUN set -xe && npm run build

# release
FROM nginx:1.25.0-alpine as production
ENV NODE_ENV production


COPY --from=web-build /app/dist /usr/share/nginx/html
COPY nginx/ /etc/nginx/templates

EXPOSE 80
