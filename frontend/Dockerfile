# 1. Baue-Phase mit Node
FROM node:20-alpine AS builder

# Arbeitsverzeichnis im Container
WORKDIR /app

# Nur package.json und lockfile kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restlichen Quellcode kopieren
COPY . .

# Vite Build ausführen
RUN npm run build

# 2. Nginx-Phase (nur das gebaute HTML + JS wird hier genutzt)
FROM nginx:stable-alpine

# Static build vom vorherigen Schritt kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Custom nginx.conf möglich
EXPOSE 80

# Standard nginx Start
CMD ["nginx", "-g", "daemon off;"]
