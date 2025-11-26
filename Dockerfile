# Build stage
FROM node:20-alpine AS build
WORKDIR /workspace
COPY clients/angular-auth ./clients/angular-auth
WORKDIR /workspace/games
COPY games/package.json ./package.json
COPY games/yarn.lock ./yarn.lock
RUN corepack enable \
 && if [ -f yarn.lock ]; then yarn install --immutable; else yarn install; fi \
 && ln -s /workspace/games/node_modules /workspace/node_modules
COPY games/ .
RUN yarn build

# Runtime stage
FROM nginx:1.27-alpine
COPY --from=build /workspace/games/dist/games/browser /usr/share/nginx/html
COPY games/nginx.conf /etc/nginx/conf.d/default.conf
COPY games/env.default.js /usr/share/nginx/html/env.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
