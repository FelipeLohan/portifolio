# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — Production (Node SSR)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

COPY --from=builder /app/dist ./dist

EXPOSE 80

CMD ["node", "dist/portifolio/server/server.mjs"]
