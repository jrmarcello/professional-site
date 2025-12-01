# ============================================
# Stage 1: Build
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação Astro
RUN npm run build

# ============================================
# Stage 2: Production (Nginx Alpine)
# ============================================
FROM nginx:alpine AS production

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar arquivos estáticos do build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]
