# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — Production (nginx + Node SSR)
FROM nginx:alpine AS runner
WORKDIR /app

# Node.js is needed to run the SSR server alongside nginx
RUN apk add --no-cache nodejs

# Copy built Angular app
COPY --from=builder /app/dist ./dist

# nginx config and startup script
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENV NODE_ENV=production
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
