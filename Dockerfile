FROM node:18-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npx prisma generate --schema=apps/like/prisma/schema.prisma
RUN npx nx build like --configuration=production
RUN npm prune --production

FROM node:18-alpine as prod
WORKDIR /app
COPY --from=builder app/dist/apps/like ./dist
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma/  ./node_modules/.prisma/
COPY --from=builder /app/apps/like/prisma/schema.prisma ./prisma/schema.prisma
EXPOSE 3000
CMD ["node", "dist/main.js"]
