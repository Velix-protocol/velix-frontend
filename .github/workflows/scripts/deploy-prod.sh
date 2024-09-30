#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.

echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the application
echo "Building the application..."
NODE_ENV=production pnpm run build

# Moving the built app to linux web location
echo "Moving the build to the www"
rm -rf /var/www/velix-frontend/*
mv dist/* /var/www/velix-frontend/

echo "Deployment completed successfully!"
