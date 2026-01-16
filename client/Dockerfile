# DEV stage
FROM node:18-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# BUILD stage (prod)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# RUNNER stage (prod)
FROM nginx:alpine AS runner
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
