FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app

RUN apk add --no-cache \
    alpine-sdk \
    python3 && \
    npm install -g node-gyp && \
    corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN  pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app

ARG GRAPHQL_API_URL
ENV GRAPHQL_API_URL=$GRAPHQL_API_URL
ARG GRAPHQL_ADMIN_SECRET
ENV GRAPHQL_ADMIN_SECRET=$GRAPHQL_ADMIN_SECRET

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm codegen
RUN pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
