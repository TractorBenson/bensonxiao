# ============================================================
# Multi-stage Dockerfile template for static frontends (SPA)
# Build with Node → serve via NGINX
#
# Usage:
#   docker build -t ghcr.io/<org>/<repo>:<tag> \
#     --build-arg VITE_BASE=/ \
#     .
#
# Make sure you also have a proper .dockerignore (node_modules, dist, etc.)
# ============================================================

########## 1) Build stage #####################################################
FROM node:20-alpine AS build
WORKDIR /app

# Copy only manifest files first to enable layer caching for deps
# [CHANGE ME] If you use pnpm/yarn, change these patterns accordingly.
COPY package*.json ./
# [OPTIONAL] For pnpm: COPY pnpm-lock.yaml ./
# [OPTIONAL] For yarn: COPY yarn.lock ./

# Faster installs + cache your npm store between builds
# Requires BuildKit (docker buildx). If not using BuildKit, remove the --mount.
# [CHANGE ME] Switch npm ci → pnpm i --frozen-lockfile or yarn --frozen-lockfile as needed.
RUN --mount=type=cache,target=/root/.npm npm ci

# Now copy the rest of your source
# [CHANGE ME] Ensure your project actually outputs to /dist (or update below).
COPY . .

# [OPTIONAL] Build-time args for tools like Vite/Next/Gatsby/etc.
# Example: --build-arg VITE_BASE=/app/
# Access via process.env.* or import.meta.env in your toolchain.
ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

# [CHANGE ME] Replace with your actual build command
# e.g., npm run build, pnpm build, yarn build
RUN npm run build


########## 2) Runtime stage (static file server) ##############################
FROM nginx:1.27-alpine

# [CHANGE ME] Provide an NGINX config that:
#   - Serves your SPA files from /usr/share/nginx/html
#   - Returns index.html for unknown routes (history fallback)
#   - Exposes a simple /healthz endpoint (or adjust HEALTHCHECK below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the previous stage
# [CHANGE ME] If your build output dir isn't /dist, update this path.
COPY --from=build /app/dist /usr/share/nginx/html

# [OPTIONAL] Run as non-root (hardened)
# Note: NGINX official image uses user 101:101 in some variants; verify paths/ports.
# USER 101:101

EXPOSE 80
