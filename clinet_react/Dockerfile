FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]
