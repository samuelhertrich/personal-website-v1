# 1. Basis-Image für den Build verwenden
FROM --platform=linux/amd64 node:18 AS build

LABEL org.opencontainers.image.source https://github.com/samuelhertrich/personal-website-v1

# 2. Arbeitsverzeichnis erstellen
WORKDIR /app

# 3. Paketinformationen kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# 4. Quellcode kopieren und Build erstellen
COPY . .
RUN npm run build

# 5. Server-Basis-Image verwenden
FROM --platform=linux/amd64 nginx:alpine

# 6. Erstellte Dateien in das Nginx-Verzeichnis kopieren
COPY --from=build /app/dist /usr/share/nginx/html

# 7. Expose Port 80
EXPOSE 80

# 8. Nginx starten
CMD ["nginx", "-g", "daemon off;"]