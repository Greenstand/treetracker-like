FROM node:18-alpine AS builder
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent --frozen-lockfile
COPY . .
RUN npx prisma generate --schema=apps/like/prisma/schema.prisma
RUN yarn build
RUN yarn install --production --ignore-scripts --prefer-offline

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=builder app/dist/apps/like ./dist
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma/  ./node_modules/.prisma/
COPY --from=builder /app/apps/like/prisma/schema.prisma ./prisma/schema.prisma
EXPOSE 3000
CMD ["node", "dist/main.js"]
