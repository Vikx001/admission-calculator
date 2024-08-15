# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Serve the app using a static file server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port on which the app runs
EXPOSE 5000
