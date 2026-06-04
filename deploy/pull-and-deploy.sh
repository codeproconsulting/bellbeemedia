#!/bin/bash

# Exit on error
set -e

echo "🔄 Pulling latest changes from git..."
git pull origin main

echo "⚙️ Installing any new dependencies..."
npm install

echo "🔍 Running typecheck to verify codebase integrity..."
npm run typecheck

echo "🔄 Restarting application service via PM2..."
pm2 restart bellbee-media

echo "🎉 Deployment updated successfully!"
