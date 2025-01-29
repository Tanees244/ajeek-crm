# Step 1: Use Node.js image to build the Angular app
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build Angular application
RUN npm run build

# Step 2: Use Nginx to serve the built application
FROM nginx:alpine

# Copy custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Remove existing Nginx content and copy Angular build output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ajeek-crm /usr/share/nginx/html

# Rename index.csr.html to index.html (if needed)
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html || true

# Expose port 80
EXPOSE 80
