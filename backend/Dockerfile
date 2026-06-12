# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package.json e lockfile primeiro (melhor cache)
COPY package*.json ./
RUN npm ci 

# Copia os códigos
COPY . .


# Etapa final
FROM node:20-alpine

WORKDIR /app

# Expõe a porta
EXPOSE 3000

# Copia os arquivos necessários da etapa de build
COPY --from=builder /app .

CMD ["node", "server.js"]