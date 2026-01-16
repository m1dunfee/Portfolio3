# server/Dockerfile

# -------------------------
# dev stage
# -------------------------
FROM node:18-alpine AS dev

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5000
CMD ["npm", "run", "dev"]

# -------------------------
# prod stage
# -------------------------
FROM node:18-alpine AS prod

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
