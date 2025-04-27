#!/bin/bash
echo "Starting the Portfolio Website application..."

# Clean any existing Next.js cache and build files
echo "Cleaning previous build artifacts..."
rm -rf .next
rm -f next.pid

# Set environment variables
export NODE_ENV=development
export PORT=3000

# Start the Next.js development server
echo "Starting Next.js on port 3000 (default port)..."
exec npx next dev -p 3000 -H 0.0.0.0