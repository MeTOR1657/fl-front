FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN npm install

# Copy source code and build
COPY . .
ARG VITE_CMU_OAUTH_CLIENT_ID
ARG VITE_CMU_OAUTH_REDIRECT_URI
ENV VITE_CMU_OAUTH_CLIENT_ID=$VITE_CMU_OAUTH_CLIENT_ID
ENV VITE_CMU_OAUTH_REDIRECT_URI=$VITE_CMU_OAUTH_REDIRECT_URI
RUN npm run build

# Nginx production stage
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 6000

CMD ["nginx", "-g", "daemon off;"]
