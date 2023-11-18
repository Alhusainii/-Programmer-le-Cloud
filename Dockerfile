# ---- Stage 1: Build ----
FROM alpine:3.15 as builder

# chemin de travail
WORKDIR /app

# copie des fichiers du dépôt
COPY . .

RUN apk add npm

# installation des dépendances avec npm
RUN npm install

# build avec npm
RUN npm run build

# ---- Stage 2: Production Image ----
FROM alpine:3.15 as runner

# chemin de travail
WORKDIR /app

# copie uniquement les fichiers nécessaires de l'étape précédente
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

# downgrade des privilèges
USER node

# exécution
CMD ["node", "dist/index.js"]