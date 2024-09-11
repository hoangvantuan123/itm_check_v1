# Use the official Node.js version from https://hub.docker.com/
FROM node:20-alpine as build

# Set the working directory inside the container to /app
WORKDIR /app


COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5002 to allow external access
EXPOSE 5173

# Specify the command to run the application when the container starts
CMD [ "yarn", "run", "dev"]