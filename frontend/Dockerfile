# Use official Node image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host"]