# Stage 1: Build the Angular app
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project into the container
COPY . .

# Build the Angular app in production mode
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
#FROM nginx:alpine

# Copy custom Nginx configuration
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the previous stage
#COPY --from=build /app/dist/ajeek-crm/ /usr/share/nginx/html

# Expose port 80
#EXPOSE 80

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]
CMD ["echo" ]
