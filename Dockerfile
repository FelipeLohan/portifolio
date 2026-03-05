# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — Production
FROM node:20-alpine AS runner
WORKDIR /app

# Angular SSR bundles Express into server.mjs — only dist is needed
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 4000

CMD ["node", "dist/portifolio/server/server.mjs"]
